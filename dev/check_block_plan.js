// Run with Node.js: node dev\check_block_plan.js
(function () {
  'use strict';
  if (typeof require === 'function') require('..\\block-plan-engine.js');

  const engine = globalThis.MokuriBlockPlan;
  const identity = [1, 0, 0, 1, 0, 0];
  const shape = 'M2 3 L14 3 L2 10 Z';
  let checks = 0;

  function near(actual, expected, label) {
    if (Math.abs(actual - expected) > 0.00005) {
      throw new Error(`${label}: expected ${expected}, got ${actual}`);
    }
    checks++;
  }

  function multiply(a, b) {
    return [
      a[0] * b[0] + a[2] * b[1],
      a[1] * b[0] + a[3] * b[1],
      a[0] * b[2] + a[2] * b[3],
      a[1] * b[2] + a[3] * b[3],
      a[0] * b[4] + a[2] * b[5] + a[4],
      a[1] * b[4] + a[3] * b[5] + a[5],
    ];
  }

  function transform(value) {
    let result = identity;
    for (const match of value.matchAll(/(translate|scale|rotate)\(([^)]*)\)/g)) {
      const values = match[2].trim().split(/[\s,]+/).map(Number);
      let next;
      if (match[1] === 'translate') {
        next = [1, 0, 0, 1, values[0], values[1] || 0];
      } else if (match[1] === 'scale') {
        next = [values[0], 0, 0, values[1] === undefined ? values[0] : values[1], 0, 0];
      } else {
        const angle = values[0] * Math.PI / 180;
        next = [Math.cos(angle), Math.sin(angle), -Math.sin(angle), Math.cos(angle), 0, 0];
      }
      result = multiply(result, next);
    }
    return result;
  }

  function visiblePaths(svg) {
    const stack = [{ matrix: identity, hidden: false }];
    const paths = [];
    for (const tag of svg.matchAll(/<(\/?)([\w:-]+)\b([^>]*?)(\/?)>/g)) {
      if (tag[1]) {
        stack.pop();
        continue;
      }
      const parent = stack[stack.length - 1];
      const attribute = name => {
        const match = tag[3].match(new RegExp(`\\b${name}="([^"]*)"`));
        return match ? match[1] : '';
      };
      const state = {
        matrix: multiply(parent.matrix, transform(attribute('transform'))),
        hidden: parent.hidden || tag[2] === 'defs',
      };
      if (tag[2] === 'path' && !state.hidden) {
        paths.push({ d: attribute('d'), matrix: state.matrix });
      }
      if (!tag[4]) stack.push(state);
    }
    return paths;
  }

  function point(path, x, y) {
    const m = path.matrix;
    return { x: m[0] * x + m[2] * y + m[4], y: m[1] * x + m[3] * y + m[5] };
  }

  for (const orientation of ['portrait', 'landscape']) {
    for (const rotation of [0, 90, -90]) {
      const plan = engine.createPlan({
        composition: {
          paperW: 100, paperH: 80,
          elements: [{
            id: 1, defId: 'asymmetric', x: 25, y: 20,
            scaleX: 1.2, scaleY: 0.8, rotation: 17, carveLevel: 0,
          }],
        },
        definitions: [{
          id: 'asymmetric', name: 'Asymmetric', viewBox: '0 0 20 20',
          colorZones: [{ id: 'body', defaultPaletteSlot: 0 }],
          carveLevels: [{ paths: [{ d: shape, type: 'fill', zone: 'body' }] }],
        }],
        layout: {
          sourceWidth: 100, sourceHeight: 80, placementMode: 'margin',
          paperPreset: '8x10', marginPreset: 'standard',
          blockOrientation: orientation, paperOrientation: orientation,
          compositionRotation: rotation,
        },
      });
      // An off-center layout catches accidental mirroring around the page center.
      plan.layout.paper.x += 0.1;
      plan.layout.image.x += 0.1;
      const block = plan.blocks[0];
      const image = plan.layout.image;
      const width = plan.layout.block.width;
      const radians = 17 * Math.PI / 180;
      const sourceX = 25 - 9.6 * Math.cos(radians) + 5.6 * Math.sin(radians);
      const sourceY = 20 - 9.6 * Math.sin(radians) - 5.6 * Math.cos(radians);
      const rotated = rotation === 90
        ? { x: 80 - sourceY, y: sourceX }
        : rotation === -90 ? { x: sourceY, y: 100 - sourceX }
          : { x: sourceX, y: sourceY };
      const sourceWidth = rotation ? 80 : 100;
      const sourceHeight = rotation ? 100 : 80;
      const scale = Math.min(image.width / sourceWidth, image.height / sourceHeight);
      const expectedX = image.x + (image.width - sourceWidth * scale) / 2 + rotated.x * scale;
      const expectedY = image.y + (image.height - sourceHeight * scale) / 2 + rotated.y * scale;

      for (const view of ['keep', 'carve-away', 'proof', 'paper-mask']) {
        for (const crop of [undefined, 'master']) {
          const output = method => visiblePaths(engine.buildMasterSvg(plan, block.id, {
            method, view, crop, annotations: false,
          }));
          const carbonPaths = output('carbon');
          const hanshitaPaths = output('hanshita');
          const carbon = point(carbonPaths.find(path => path.d === shape), 2, 3);
          const hanshita = point(hanshitaPaths.find(path => path.d === shape), 2, 3);
          near(carbon.x, expectedX, `${view}: direct transfer matches composition`);
          near(carbon.y, expectedY, `${view}: direct transfer preserves vertical position`);
          near(width - hanshita.x, carbon.x, `${view}: face-down hanshita matches carbon`);
          near(hanshita.y, carbon.y, `${view}: hanshita preserves vertical position`);
          const kento = carbonPaths.filter(path => path.d !== shape);
          const hanshitaKento = hanshitaPaths.filter(path => path.d !== shape);
          near(hanshitaKento.length, kento.length, `${view}: kento count`);
          kento.forEach((path, index) => {
            const direct = point(path, 1, 2);
            const transferred = point(hanshitaKento[index], 1, 2);
            near(width - transferred.x, direct.x, `${view}: transferred kento x`);
            near(transferred.y, direct.y, `${view}: transferred kento y`);
          });
        }
      }
      for (const method of ['carbon', 'hanshita']) {
        const svg = engine.buildMasterSvg(plan, block.id, { method, view: 'physical-proof' });
        const proof = point(visiblePaths(svg).find(path => path.d === shape), 2, 3);
        near(proof.x, image.x * 2 + image.width - expectedX, 'Physical Proof matches final print');
        near(proof.y, expectedY, 'Physical Proof preserves vertical position');
      }
      block.role = 'paper';
      for (const method of ['carbon', 'hanshita']) {
        const paths = visiblePaths(engine.buildMasterSvg(plan, block.id, { method, view: 'keep' }));
        const mask = point(paths.find(path => path.d === shape), 2, 3);
        near(method === 'hanshita' ? width - mask.x : mask.x, expectedX, 'Paper-role transfer');
        const proof = engine.buildMasterSvg(plan, block.id, { method, view: 'physical-proof' });
        near(visiblePaths(proof).length, 0, 'Physical Proof excludes paper roles');
      }
    }
  }
  console.log(`Block Plan orientation: ${checks} checks passed`);
})();
