// Run with Node.js: node dev\check_block_plan_touch.js
(function () {
  'use strict';
  const source = typeof require === 'function'
    ? require('fs').readFileSync(require('path').join(__dirname, '..', 'index.html'), 'utf8')
    : globalThis.MOKURI_TEST_INDEX;
  const functions = source.slice(
    source.indexOf('function zoomBlockPlanPreviewBy('),
    source.indexOf('function renderBlockPlanWorkspace(')
  );
  const listenerStart = source.indexOf("previewStage.addEventListener('pointerdown'");
  const listeners = source.slice(listenerStart, source.indexOf('  new ResizeObserver(', listenerStart));
  let checks = 0;
  function near(actual, expected, label) {
    if (!Number.isFinite(actual) || Math.abs(actual - expected) > 0.000001) {
      throw new Error(`${label}: expected ${expected}, got ${actual}`);
    }
    checks++;
  }
  function assert(value, label) {
    if (!value) throw new Error(label);
    checks++;
  }

  function fixture() {
    let controller;
    let renderedZoom = 2;
    let scrollLeft = 120;
    let scrollTop = 180;
    const captures = new Set();
    const handlers = new Map();
    let panning = false;
    const stage = {
      clientWidth: 500, clientHeight: 400,
      get scrollLeft() { return scrollLeft; },
      set scrollLeft(value) {
        scrollLeft = Math.max(0, Math.min(value, Math.max(0, 400 * renderedZoom + 36 - 500)));
      },
      get scrollTop() { return scrollTop; },
      set scrollTop(value) {
        scrollTop = Math.max(0, Math.min(value, Math.max(0, 500 * renderedZoom + 36 - 400)));
      },
      classList: { toggle(name, active) { panning = active; } },
      setPointerCapture(id) { captures.add(id); },
      hasPointerCapture(id) { return captures.has(id); },
      releasePointerCapture(id) {
        captures.delete(id);
        emit('lostpointercapture', id);
      },
      addEventListener(type, handler, options) { handlers.set(type, { handler, options }); },
      getBoundingClientRect() { return { left: 10, top: 20, width: 500, height: 400 }; },
    };
    const master = {
      getBoundingClientRect() {
        const width = 400 * renderedZoom;
        return {
          left: 28 + Math.max(0, (464 - width) / 2) - scrollLeft,
          top: 38 - scrollTop,
          width, height: 500 * renderedZoom,
        };
      },
    };
    const $ = id => id === 'bp-preview-stage' ? stage : master;
    controller = new Function('$', 'updateBlockPlanPreviewZoom', `
      let _blockPlanPreviewZoom = 2;
      let _blockPlanPreviewPan = null;
      let _blockPlanPreviewPinch = null;
      const _blockPlanPreviewPointers = new Map();
      ${functions}
      const previewStage = $('bp-preview-stage');
      ${listeners}
      return {
        zoom: () => _blockPlanPreviewZoom,
        count: () => _blockPlanPreviewPointers.size,
        reset: resetBlockPlanPreviewGesture,
        fit: fitBlockPlanPreview,
        zoomBy: zoomBlockPlanPreviewBy,
      };
    `)($, () => { renderedZoom = controller.zoom(); });

    function emit(type, pointerId, x = 0, y = 0, extra = {}) {
      const event = Object.assign({
        type, pointerId, clientX: x, clientY: y, button: 0,
        pointerType: 'touch', target: stage, prevented: false,
        preventDefault() { this.prevented = true; },
      }, extra);
      handlers.get(type).handler(event);
      return event;
    }
    function anchor(x, y) {
      const rect = master.getBoundingClientRect();
      return { x: (x - rect.left) / rect.width, y: (y - rect.top) / rect.height };
    }
    return { controller, stage, captures, handlers, emit, anchor, panning: () => panning };
  }

  const f = fixture();
  assert(f.emit('pointerdown', 1, 150, 160).prevented, 'Touch starts custom pan');
  assert(f.captures.has(1) && f.panning(), 'First pointer captured');
  f.emit('pointermove', 1, 140, 145);
  near(f.stage.scrollLeft, 130, 'One-finger horizontal pan');
  near(f.stage.scrollTop, 195, 'One-finger vertical pan');
  f.emit('pointerdown', 2, 240, 145);
  const anchor = f.anchor(190, 145);
  f.emit('pointermove', 1, 90, 145);
  near(f.controller.zoom(), 3, 'Pinch expands from initial distance');
  near(f.anchor(165, 145).x, anchor.x, 'Horizontal pinch anchor');
  near(f.anchor(165, 145).y, anchor.y, 'Vertical pinch anchor');
  f.emit('pointermove', 2, 290, 145);
  near(f.controller.zoom(), 4, 'Absolute pinch scale avoids compounding');
  f.emit('pointermove', 1, 100, 160);
  f.emit('pointermove', 2, 300, 160);
  near(f.controller.zoom(), 4, 'Two-finger translation preserves zoom');
  near(f.anchor(200, 160).x, anchor.x, 'Two-finger horizontal pan');
  near(f.anchor(200, 160).y, anchor.y, 'Two-finger vertical pan');

  f.emit('pointerup', 2, 300, 160);
  const left = f.stage.scrollLeft;
  const top = f.stage.scrollTop;
  f.emit('pointermove', 1, 100, 160);
  near(f.stage.scrollLeft, left, 'No horizontal jump after lifting second finger');
  near(f.stage.scrollTop, top, 'No vertical jump after lifting second finger');
  f.emit('pointermove', 1, 90, 145);
  near(f.stage.scrollLeft, left + 10, 'Remaining finger resumes horizontal pan');
  near(f.stage.scrollTop, top + 15, 'Remaining finger resumes vertical pan');
  f.emit('lostpointercapture', 1, 0, 0, { target: {} });
  near(f.controller.count(), 1, 'Descendant capture changes do not cancel stage gesture');
  f.emit('lostpointercapture', 1);
  near(f.controller.count(), 0, 'Stage capture loss clears pointer');
  assert(!f.panning(), 'Capture loss clears grabbing state');

  const g = fixture();
  g.emit('pointerdown', 1, 150, 160);
  g.emit('pointerdown', 2, 250, 160);
  g.emit('pointerdown', 3, 350, 260);
  g.emit('pointermove', 3, 370, 280);
  near(g.controller.zoom(), 2, 'Third finger does not change active pinch');
  near(g.stage.scrollLeft, 120, 'Third finger does not pan active pair');
  g.emit('pointercancel', 1);
  near(g.controller.count(), 2, 'Cancellation preserves other pointers');
  g.emit('lostpointercapture', 1);
  near(g.controller.count(), 2, 'Duplicate capture loss is harmless');
  g.emit('pointermove', 2, 250, 160);
  near(g.controller.zoom(), 2, 'Replacement pinch pair rebases without a jump');
  g.controller.reset();
  near(g.controller.count(), 0, 'Reset clears all pointers');
  near(g.captures.size, 0, 'Reset releases all captures');
  assert(!g.panning(), 'Reset clears grabbing state');
  g.emit('pointermove', 2, 100, 100);
  near(g.controller.zoom(), 2, 'Stale moves ignored after reset');

  const h = fixture();
  h.emit('pointerdown', 1, 150, 160);
  h.emit('pointerdown', 2, 250, 160);
  h.emit('pointermove', 2, 1150, 160);
  near(h.controller.zoom(), 5, 'Maximum pinch zoom');
  h.emit('pointermove', 2, 151, 160);
  near(h.controller.zoom(), 0.2, 'Minimum pinch zoom');
  h.controller.fit();
  near(h.controller.zoom(), 1, 'Fit restores 100 percent');
  near(h.controller.count(), 0, 'Fit clears active gestures');
  near(h.stage.scrollLeft, 0, 'Fit resets horizontal scroll');
  near(h.stage.scrollTop, 0, 'Fit resets vertical scroll');
  h.emit('pointerdown', 3, 200, 200);
  h.emit('pointerdown', 4, 200, 200);
  h.emit('pointermove', 4, 201, 200);
  assert(Number.isFinite(h.controller.zoom()), 'Coincident contacts stay finite');

  const mouse = fixture();
  mouse.emit('pointerdown', 1, 150, 160, { button: 2, pointerType: 'mouse' });
  near(mouse.controller.count(), 0, 'Right mouse button ignored');
  mouse.emit('pointerdown', 1, 150, 160, { button: 1, pointerType: 'mouse' });
  mouse.emit('pointermove', 1, 140, 145, { pointerType: 'mouse' });
  near(mouse.stage.scrollLeft, 130, 'Middle mouse pan preserved');
  mouse.emit('pointerup', 1);
  const before = mouse.anchor(200, 180);
  mouse.controller.zoomBy(0.2, 200, 180);
  near(mouse.controller.zoom(), 2.4, 'Existing wheel/button zoom preserved');
  near(mouse.anchor(200, 180).x, before.x, 'Existing horizontal zoom anchor preserved');
  near(mouse.anchor(200, 180).y, before.y, 'Existing vertical zoom anchor preserved');
  for (const type of ['touchstart', 'touchmove']) {
    assert(mouse.handlers.get(type).options.passive === false, `${type} can suppress native scrolling`);
    assert(mouse.emit(type, 0).prevented, `${type} suppresses native scrolling`);
  }
  console.log(`Block Plan touch: ${checks} checks passed`);

  const touchChecks = checks;
  const fitFunction = source.slice(
    source.indexOf('function calculateBlockPlanPreviewFitWidth('),
    source.indexOf('function blockPlanPreviewSize(')
  );
  const updateFunction = source.slice(
    source.indexOf('function updateBlockPlanPreviewZoom('),
    source.indexOf('function zoomBlockPlanPreviewBy(')
  );
  function cssRule(selector) {
    const start = source.indexOf(`${selector} {`);
    return source.slice(start, source.indexOf('}', start));
  }
  const stageScrollbars = !/overflow:\s*hidden/.test(cssRule('.bp-preview-stage'));
  const pagesClipped = /overflow:\s*hidden/.test(cssRule('.bp-print-preview'));
  const paddings = Array.from(source.matchAll(/\.bp-preview-stage\s*\{[^}]*\bpadding:\s*(\d+)px/g))
    .map(match => Number(match[1]));

  // Model CSS overflow around the production sizing functions, without a browser.
  for (const padding of paddings) {
    let size;
    let mode;
    let horizontal = false;
    let vertical = false;
    let scrollLeft = 0;
    let scrollTop = 0;
    const master = { style: {} };
    const guide = { style: {} };
    const pages = { style: {} };
    const label = {};
    const stage = {
      get clientWidth() { return 600 - (vertical ? 15 : 0); },
      get clientHeight() { return 500 - (horizontal ? 15 : 0); },
      set scrollLeft(value) {
        scrollLeft = Math.max(0, Math.min(value, extent().width - this.clientWidth));
      },
      set scrollTop(value) {
        scrollTop = Math.max(0, Math.min(value, extent().height - this.clientHeight));
      },
    };
    const content = {
      style: {},
      querySelector(selector) {
        return selector === '.bp-guide-preview-page'
          ? (mode === 'guide' ? guide : null)
          : (mode === 'pages' ? pages : null);
      },
    };
    function extent() {
      let width = Math.max(parseFloat(content.style.width), stage.clientWidth - padding * 2);
      let height = Math.max(parseFloat(content.style.height), stage.clientHeight - padding * 2);
      if (mode === 'pages' && !pagesClipped) {
        width = Math.max(width, size.width * 96);
        height = Math.max(height, size.height * 96);
      }
      return { width: width + padding * 2, height: height + padding * 2 };
    }
    const elements = {
      'bp-preview-stage': stage, 'bp-master': master,
      'bp-preview-content': content, 'bp-preview-zoom-value': label,
    };
    const draw = new Function('$', 'getComputedStyle', 'blockPlanPreviewSize', `
      const _blockPlan = {};
      let _blockPlanPreviewFitWidth;
      let _blockPlanPreviewZoom;
      ${fitFunction}
      ${updateFunction}
      return zoom => {
        _blockPlanPreviewZoom = zoom;
        updateBlockPlanPreviewZoom();
      };
    `)(id => elements[id], () => ({
      paddingLeft: `${padding}px`, paddingRight: `${padding}px`,
      paddingTop: `${padding}px`, paddingBottom: `${padding}px`,
    }), () => size);
    function layout(zoom) {
      draw(zoom);
      horizontal = vertical = false;
      for (let i = 0; i < 6; i++) {
        const bounds = extent();
        const nextHorizontal = stageScrollbars && bounds.width > stage.clientWidth + 0.001;
        const nextVertical = stageScrollbars && bounds.height > stage.clientHeight + 0.001;
        if (nextHorizontal === horizontal && nextVertical === vertical) break;
        horizontal = nextHorizontal;
        vertical = nextVertical;
      }
    }
    for (const preview of [
      { mode: 'proof', width: 10, height: 8 },
      { mode: 'pages', width: 8.5, height: 11 },
      { mode: 'pages', width: 11, height: 8.5 },
      { mode: 'pages', width: 8.5, height: 22.18 },
      { mode: 'guide', width: 11, height: 8.5 },
    ]) {
      size = preview;
      mode = preview.mode;
      const fitWidth = Math.min(600 - padding * 2, (500 - padding * 2) * size.width / size.height);
      layout(1);
      near(parseFloat(master.style.width), fitWidth, `${padding}px padding: preview fits viewport`);
      for (const zoom of [1.01, 1.2, 0.4]) {
        for (let i = 0; i < 4; i++) {
          layout(zoom);
          near(parseFloat(master.style.width), fitWidth * zoom, 'Resize callbacks do not oscillate zoom');
        }
        assert(!horizontal && !vertical, 'Direct manipulation does not show scrollbars');
      }
      stage.scrollLeft = stage.scrollTop = 10000;
      near(scrollLeft, 0, 'Zoomed-out page has no phantom horizontal panning space');
      near(scrollTop, 0, 'Zoomed-out page has no phantom vertical panning space');
      layout(2);
      stage.scrollLeft = stage.scrollTop = 10000;
      assert(scrollLeft > 0 || scrollTop > 0, 'Hidden scrollbars preserve programmatic panning');
      if (mode !== 'proof') {
        const page = mode === 'guide' ? guide : pages;
        near(
          Number(page.style.transform.match(/scale\(([^)]+)\)/)[1]),
          fitWidth * 2 / (size.width * 96),
          'Page scaling follows preview size'
        );
      }
    }
  }
  console.log(`Block Plan layout: ${checks - touchChecks} checks passed`);
})();
