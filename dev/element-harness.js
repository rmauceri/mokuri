(function () {
  const SLOT_COLORS = ['#3f3429', '#b4535a', '#5a7f92', '#6c7d4f', '#e7dcc6'];
  const VALID_LAYERS = new Set(['background', 'midground', 'foreground']);
  const DEFAULT_VIEWBOX = [0, 0, 160, 160];

  const STATE = {
    elements: [],
    selectedId: null,
    selectedLevel: 0,
    sourceLabel: 'None',
    validations: new Map(),
  };

  const builtinConfigs = [
    { id: 'all', label: 'All built-ins', getElements: getAllBuiltInElements },
    { id: 'base', label: 'Base library', getElements: function () { return safeArray(function () { return MOKURI_ELEMENTS; }); } },
    { id: 'extended', label: 'Extended', getElements: function () { return safeArray(function () { return MOKURI_CORE_ELEMENTS; }); } },
    { id: 'fauna', label: 'Fauna', getElements: function () { return safeArray(function () { return MOKURI_FAUNA_ELEMENTS; }); } },
    { id: 'scene', label: 'Scene', getElements: function () { return safeArray(function () { return MOKURI_SCENE_ELEMENTS; }); } },
    { id: 'forms', label: 'Forms', getElements: function () { return safeArray(function () { return MOKURI_FORMS_ELEMENTS; }); } },
    { id: 'hanko', label: 'Hanko', getElements: function () { return safeArray(function () { return MOKURI_HANKO_ELEMENTS; }); } },
    { id: 'figures', label: 'Figures', getElements: function () { return safeArray(function () { return MOKURI_FIGURES_ELEMENTS; }); } },
    { id: 'kacho-e', label: 'Kacho-e', getElements: function () { return safeArray(function () { return MOKURI_KACHOE_ELEMENTS; }); } },
  ];

  const els = {
    builtinButtons: document.getElementById('builtin-buttons'),
    status: document.getElementById('status'),
    codeInput: document.getElementById('code-input'),
    loadPaste: document.getElementById('load-paste'),
    clearInput: document.getElementById('clear-input'),
    codeFile: document.getElementById('code-file'),
    summaryText: document.getElementById('summary-text'),
    summaryStrip: document.getElementById('summary-strip'),
    gallery: document.getElementById('gallery'),
    inspector: document.getElementById('inspector'),
  };

  function init() {
    renderBuiltInButtons();
    attachEvents();
    loadBuiltInPack('all');
  }

  function attachEvents() {
    els.loadPaste.addEventListener('click', function () {
      loadPastedCode();
    });

    els.clearInput.addEventListener('click', function () {
      els.codeInput.value = '';
      els.codeFile.value = '';
      setStatus('Input cleared.', 'info');
    });

    els.codeFile.addEventListener('change', function (event) {
      const file = event.target.files && event.target.files[0];
      if (!file) {
        return;
      }

      const reader = new FileReader();
      reader.onload = function () {
        const text = String(reader.result || '');
        els.codeInput.value = text;
        parseAndLoad(text, 'Uploaded file: ' + file.name);
      };
      reader.onerror = function () {
        setStatus('Could not read the selected file.', 'error');
      };
      reader.readAsText(file);
    });

    els.gallery.addEventListener('click', function (event) {
      const levelButton = event.target.closest('[data-level-index]');
      const card = event.target.closest('[data-element-id]');
      if (!card) {
        return;
      }

      STATE.selectedId = card.getAttribute('data-element-id');
      if (levelButton) {
        STATE.selectedLevel = Number(levelButton.getAttribute('data-level-index')) || 0;
      }
      render();
    });

    els.inspector.addEventListener('click', function (event) {
      const levelButton = event.target.closest('[data-inspector-level]');
      if (!levelButton) {
        return;
      }

      STATE.selectedLevel = Number(levelButton.getAttribute('data-inspector-level')) || 0;
      renderInspector();
      renderGallery();
    });
  }

  function renderBuiltInButtons() {
    els.builtinButtons.innerHTML = builtinConfigs.map(function (config) {
      return '<button type="button" data-pack-id="' + escapeHtml(config.id) + '">' + escapeHtml(config.label) + '</button>';
    }).join('');

    els.builtinButtons.addEventListener('click', function (event) {
      const button = event.target.closest('[data-pack-id]');
      if (!button) {
        return;
      }

      loadBuiltInPack(button.getAttribute('data-pack-id'));
    });
  }

  function loadBuiltInPack(packId) {
    let config = null;
    for (let i = 0; i < builtinConfigs.length; i += 1) {
      if (builtinConfigs[i].id === packId) {
        config = builtinConfigs[i];
        break;
      }
    }

    if (!config) {
      setStatus('Unknown built-in pack: ' + packId, 'error');
      return;
    }

    const elements = normalizeElements(config.getElements());
    if (!elements.length) {
      setStatus('Built-in pack "' + config.label + '" is empty.', 'warn');
      return;
    }

    setActivePackButton(packId);
    applyLoadedElements(elements, 'Built-in pack: ' + config.label);
    setStatus('Loaded ' + elements.length + ' element' + pluralize(elements.length) + ' from ' + config.label + '.', 'success');
  }

  function loadPastedCode() {
    const raw = els.codeInput.value.trim();
    if (!raw) {
      setStatus('Paste generated JavaScript first, then load it.', 'warn');
      return;
    }

    parseAndLoad(raw, 'Pasted code');
  }

  function parseAndLoad(raw, label) {
    try {
      const parsed = parseElementCode(raw);
      const elements = normalizeElements(parsed);
      if (!elements.length) {
        throw new Error('No element objects were found in the pasted code.');
      }

      setActivePackButton(null);
      applyLoadedElements(elements, label);
      setStatus('Loaded ' + elements.length + ' element' + pluralize(elements.length) + ' from ' + label + '.', 'success');
    } catch (error) {
      setStatus(error.message || 'Could not parse the pasted code.', 'error');
    }
  }

  function applyLoadedElements(elements, sourceLabel) {
    STATE.elements = elements;
    STATE.sourceLabel = sourceLabel;
    STATE.selectedId = elements[0] ? elements[0].id : null;
    STATE.selectedLevel = 0;
    STATE.validations = buildValidationMap(elements);
    render();
  }

  function render() {
    renderSummary();
    renderGallery();
    renderInspector();
  }

  function renderSummary() {
    const counts = summarizeElements(STATE.elements);
    const issueCounts = summarizeIssues(STATE.validations);

    els.summaryText.textContent = STATE.elements.length
      ? STATE.sourceLabel + ' — ' + STATE.elements.length + ' element' + pluralize(STATE.elements.length)
      : 'No elements loaded yet.';

    els.summaryStrip.innerHTML = STATE.elements.length ? [
      summaryCard('Source', counts.sourceLabel, counts.categorySummary),
      summaryCard('Elements', String(counts.total), counts.idSummary),
      summaryCard('Errors', String(issueCounts.errors), issueCounts.errors ? 'Needs schema cleanup' : 'No hard validation errors'),
      summaryCard('Warnings', String(issueCounts.warnings), issueCounts.warnings ? 'Worth reviewing' : 'No warnings'),
    ].join('') : '';
  }

  function renderGallery() {
    if (!STATE.elements.length) {
      els.gallery.innerHTML = '<div class="gallery-empty">Load a pack or paste generated code to populate the gallery.</div>';
      return;
    }

    els.gallery.innerHTML = STATE.elements.map(function (element) {
      const validation = STATE.validations.get(element.id);
      const isSelected = element.id === STATE.selectedId;
      const levelTiles = (Array.isArray(element.carveLevels) ? element.carveLevels : []).map(function (level, index) {
        const preview = renderPreviewSvg(element, index);
        return [
          '<div class="level-tile">',
          '<button type="button" data-level-index="' + index + '">',
          '<div class="level-name">' + escapeHtml(level && level.name ? level.name : 'level ' + (index + 1)) + '</div>',
          '<div class="preview-frame"><div class="preview-paper">' + preview + '</div></div>',
          '</button>',
          '</div>',
        ].join('');
      }).join('');

      return [
        '<article class="element-card' + (isSelected ? ' selected' : '') + '" data-element-id="' + escapeHtml(element.id || 'unknown') + '">',
        '<header>',
        '<h3>' + escapeHtml(element.name || element.id || 'Unnamed Element') + '</h3>',
        '<div class="meta">' + escapeHtml(element.id || 'missing-id') + ' • ' + escapeHtml(element.category || 'uncategorized') + ' • ' + escapeHtml(element.suggestedLayer || 'no-layer') + '</div>',
        '</header>',
        '<div class="level-grid">' + levelTiles + '</div>',
        '<div class="card-footer">',
        '<div class="zone-list">' + renderZonePills(element.colorZones) + '</div>',
        '<div class="issue-line ' + issueClass(validation) + '">' + escapeHtml(issueSummary(validation)) + '</div>',
        '</div>',
        '</article>',
      ].join('');
    }).join('');
  }

  function renderInspector() {
    const element = getSelectedElement();
    if (!element) {
      els.inspector.innerHTML = '<div class="inspector-empty">Select an element to inspect its carve levels, zones, and validation notes.</div>';
      return;
    }

    const validation = STATE.validations.get(element.id);
    const viewBox = parseViewBox(element.viewBox);
    const activeLevelIndex = clampLevelIndex(element, STATE.selectedLevel);
    const activeLevel = element.carveLevels && element.carveLevels[activeLevelIndex];
    const levelButtons = (Array.isArray(element.carveLevels) ? element.carveLevels : []).map(function (level, index) {
      const isActive = index === activeLevelIndex;
      return '<button type="button" class="' + (isActive ? 'active-chip' : '') + '" data-inspector-level="' + index + '">' + escapeHtml(level.name || 'level ' + (index + 1)) + '</button>';
    }).join('');

    const composedPaths = getComposedLevelPaths(element, activeLevelIndex);
    const pathCount = composedPaths.length;

    els.inspector.innerHTML = [
      '<div class="detail-grid">',
      '<div class="inspector-title">',
      '<h2>' + escapeHtml(element.name || element.id || 'Unnamed Element') + '</h2>',
      '<div class="meta">' + escapeHtml(element.id || 'missing-id') + ' • ' + escapeHtml(element.category || 'uncategorized') + '</div>',
      '</div>',
      '<div class="button-row">' + levelButtons + '</div>',
      '<div class="preview-frame large"><div class="preview-paper">' + renderPreviewSvg(element, activeLevelIndex) + '</div></div>',
      '<div class="fact-list">',
      factRow('Level', activeLevel ? activeLevel.name : 'n/a'),
      factRow('Effective paths', String(pathCount)),
      factRow('ViewBox', viewBox.join(' ')),
      factRow('Layer', element.suggestedLayer || 'missing'),
      factRow('Zones', Array.isArray(element.colorZones) ? element.colorZones.map(function (zone) { return zone.id; }).join(', ') : 'missing'),
      '</div>',
      '<div class="issue-block"><h3>Zone swatches</h3><div class="zone-list">' + renderZonePills(element.colorZones) + '</div></div>',
      renderIssueBlock('Errors', validation.errors, 'errors'),
      renderIssueBlock('Warnings', validation.warnings, 'warnings'),
      '</div>',
    ].join('');
  }

  function renderIssueBlock(title, issues, kind) {
    if (!issues.length) {
      return '<div class="issue-block"><h3>' + escapeHtml(title) + '</h3><div class="helper-note">None.</div></div>';
    }

    return [
      '<div class="issue-block ' + kind + '">',
      '<h3>' + escapeHtml(title) + '</h3>',
      '<ul>',
      issues.map(function (issue) {
        return '<li>' + escapeHtml(issue) + '</li>';
      }).join(''),
      '</ul>',
      '</div>',
    ].join('');
  }

  function renderZonePills(colorZones) {
    if (!Array.isArray(colorZones) || !colorZones.length) {
      return '<span class="zone-pill">No zones</span>';
    }

    return colorZones.map(function (zone) {
      const color = slotColor(zone && zone.defaultPaletteSlot);
      return '<span class="zone-pill"><span class="swatch" style="background:' + color + ';"></span>' + escapeHtml(zone && zone.id ? zone.id : 'unnamed') + '</span>';
    }).join('');
  }

  function renderPreviewSvg(element, levelIndex) {
    const viewBox = parseViewBox(element.viewBox);
    const zonesById = {};
    const zones = Array.isArray(element.colorZones) ? element.colorZones : [];
    const paths = getComposedLevelPaths(element, levelIndex);

    for (let i = 0; i < zones.length; i += 1) {
      zonesById[zones[i].id] = zones[i];
    }

    const pathMarkup = paths.map(function (path) {
      if (!path || typeof path.d !== 'string' || !path.d.trim()) {
        return '';
      }

      const zone = zonesById[path.zone] || { defaultPaletteSlot: 0 };
      const color = slotColor(zone.defaultPaletteSlot);
      const d = escapeAttribute(path.d);

      if (path.type === 'stroke') {
        const strokeWidth = Number(path.strokeWidth);
        return '<path d="' + d + '" fill="none" stroke="' + color + '" stroke-width="' + (Number.isFinite(strokeWidth) ? strokeWidth : 1) + '" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path>';
      }

      return '<path d="' + d + '" fill="' + color + '" stroke="none"></path>';
    }).join('');

    return '<svg viewBox="' + viewBox.join(' ') + '" aria-hidden="true">' + pathMarkup + '</svg>';
  }

  function getComposedLevelPaths(element, levelIndex) {
    const levels = Array.isArray(element && element.carveLevels) ? element.carveLevels : [];
    if (!levels.length) {
      return [];
    }

    const clampedIndex = clampLevelIndex(element, levelIndex);
    const seen = new Set();
    const composed = [];

    for (let currentIndex = 0; currentIndex <= clampedIndex; currentIndex += 1) {
      const level = levels[currentIndex];
      const levelPaths = Array.isArray(level && level.paths) ? level.paths : [];

      for (let pathIndex = 0; pathIndex < levelPaths.length; pathIndex += 1) {
        const path = levelPaths[pathIndex];
        if (!path || typeof path.d !== 'string' || !path.d.trim()) {
          continue;
        }

        const key = [
          path.type || '',
          path.zone || '',
          Number.isFinite(Number(path.strokeWidth)) ? Number(path.strokeWidth) : '',
          path.d.trim(),
        ].join('::');

        if (seen.has(key)) {
          continue;
        }

        seen.add(key);
        composed.push(path);
      }
    }

    return composed;
  }

  function parseElementCode(rawCode) {
    let code = String(rawCode || '').trim();
    const fencedMatch = code.match(/```(?:javascript|js)?\s*([\s\S]*?)```/i);
    if (fencedMatch) {
      code = fencedMatch[1].trim();
    }

    const exportName = detectAssignedName(code);
    if (exportName) {
      return Function('"use strict";\n' + code + '\nreturn ' + exportName + ';')();
    }

    if (code[0] === '[' || code[0] === '{') {
      return Function('"use strict";\nreturn (\n' + code + '\n);')();
    }

    throw new Error('Could not find a Mokuri element object or pack assignment. Paste a JS code block or a single object literal.');
  }

  function detectAssignedName(code) {
    const matches = code.match(/\b(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*[\[{]/g);
    if (!matches || !matches.length) {
      return '';
    }

    for (let i = matches.length - 1; i >= 0; i -= 1) {
      const nameMatch = matches[i].match(/\b(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=/);
      if (nameMatch && /^MOKURI_/.test(nameMatch[1])) {
        return nameMatch[1];
      }
    }

    const fallback = matches[matches.length - 1].match(/\b(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=/);
    return fallback ? fallback[1] : '';
  }

  function normalizeElements(parsed) {
    if (Array.isArray(parsed)) {
      return parsed.filter(isObjectLike);
    }

    if (isObjectLike(parsed)) {
      return [parsed];
    }

    return [];
  }

  function buildValidationMap(elements) {
    const map = new Map();
    const idCounts = {};

    for (let i = 0; i < elements.length; i += 1) {
      const id = elements[i] && typeof elements[i].id === 'string' ? elements[i].id : '__missing__' + i;
      idCounts[id] = (idCounts[id] || 0) + 1;
    }

    for (let i = 0; i < elements.length; i += 1) {
      const element = elements[i];
      const validation = validateElement(element);
      if (element && typeof element.id === 'string' && idCounts[element.id] > 1) {
        validation.warnings.push('Duplicate element id "' + element.id + '" appears ' + idCounts[element.id] + ' times in this load.');
      }
      map.set(element.id, validation);
    }

    return map;
  }

  function validateElement(element) {
    const errors = [];
    const warnings = [];

    if (!isObjectLike(element)) {
      return { errors: ['Element entry is not an object.'], warnings: [] };
    }

    if (typeof element.id !== 'string' || !element.id.trim()) {
      errors.push('Missing or invalid id.');
    }

    if (typeof element.name !== 'string' || !element.name.trim()) {
      warnings.push('Missing or empty name.');
    }

    if (typeof element.category !== 'string' || !element.category.trim()) {
      errors.push('Missing or invalid category.');
    }

    if (!VALID_LAYERS.has(element.suggestedLayer)) {
      warnings.push('suggestedLayer should be background, midground, or foreground.');
    }

    const parsedViewBox = parseViewBox(element.viewBox);
    if (parsedViewBox[0] !== 0 || parsedViewBox[1] !== 0) {
      errors.push('viewBox should start at 0 0.');
    }

    if (!Array.isArray(element.colorZones) || !element.colorZones.length) {
      errors.push('colorZones must be a non-empty array.');
    }

    if (!Array.isArray(element.carveLevels) || !element.carveLevels.length) {
      errors.push('carveLevels must be a non-empty array.');
    }

    const zoneIds = new Set();
    if (Array.isArray(element.colorZones)) {
      for (let i = 0; i < element.colorZones.length; i += 1) {
        const zone = element.colorZones[i];
        if (!zone || typeof zone.id !== 'string' || !zone.id.trim()) {
          errors.push('colorZones[' + i + '] is missing a valid id.');
          continue;
        }
        zoneIds.add(zone.id);
      }
    }

    if (Array.isArray(element.carveLevels)) {
      for (let levelIndex = 0; levelIndex < element.carveLevels.length; levelIndex += 1) {
        const level = element.carveLevels[levelIndex];
        if (!level || typeof level.name !== 'string' || !level.name.trim()) {
          errors.push('carveLevels[' + levelIndex + '] is missing a valid name.');
        }

        if (!Array.isArray(level && level.paths) || !level.paths.length) {
          warnings.push('carve level ' + (level && level.name ? '"' + level.name + '"' : '#' + (levelIndex + 1)) + ' has no paths.');
          continue;
        }

        for (let pathIndex = 0; pathIndex < level.paths.length; pathIndex += 1) {
          const path = level.paths[pathIndex];
          if (!path || typeof path.d !== 'string' || !path.d.trim()) {
            errors.push('Path ' + (pathIndex + 1) + ' in carve level ' + (level.name || '#' + (levelIndex + 1)) + ' is missing valid path data.');
          }

          if (path.type !== 'fill' && path.type !== 'stroke') {
            errors.push('Path ' + (pathIndex + 1) + ' in carve level ' + (level.name || '#' + (levelIndex + 1)) + ' has invalid type "' + String(path.type) + '".');
          }

          if (!zoneIds.has(path.zone)) {
            errors.push('Path ' + (pathIndex + 1) + ' in carve level ' + (level.name || '#' + (levelIndex + 1)) + ' references unknown zone "' + String(path.zone) + '".');
          }

          if (path.type === 'stroke' && !Number.isFinite(Number(path.strokeWidth))) {
            warnings.push('Stroke path ' + (pathIndex + 1) + ' in carve level ' + (level.name || '#' + (levelIndex + 1)) + ' is missing a numeric strokeWidth.');
          }
        }
      }
    }

    return { errors: errors, warnings: warnings };
  }

  function summarizeElements(elements) {
    const categories = {};
    const ids = [];

    for (let i = 0; i < elements.length; i += 1) {
      const element = elements[i];
      const category = element && element.category ? element.category : 'unknown';
      categories[category] = (categories[category] || 0) + 1;
      if (element && element.id) {
        ids.push(element.id);
      }
    }

    const categoryParts = Object.keys(categories).sort().map(function (name) {
      return name + ' (' + categories[name] + ')';
    });

    return {
      total: elements.length,
      sourceLabel: STATE.sourceLabel,
      categorySummary: categoryParts.join(', ') || 'No categories',
      idSummary: ids.slice(0, 4).join(', ') + (ids.length > 4 ? ' +' + (ids.length - 4) + ' more' : ''),
    };
  }

  function summarizeIssues(validations) {
    let errors = 0;
    let warnings = 0;

    validations.forEach(function (validation) {
      errors += validation.errors.length;
      warnings += validation.warnings.length;
    });

    return { errors: errors, warnings: warnings };
  }

  function getSelectedElement() {
    if (!STATE.elements.length) {
      return null;
    }

    for (let i = 0; i < STATE.elements.length; i += 1) {
      if (STATE.elements[i].id === STATE.selectedId) {
        return STATE.elements[i];
      }
    }

    return STATE.elements[0];
  }

  function clampLevelIndex(element, desiredIndex) {
    const max = Array.isArray(element.carveLevels) ? element.carveLevels.length - 1 : 0;
    if (max <= 0) {
      return 0;
    }
    return Math.max(0, Math.min(max, desiredIndex));
  }

  function getAllBuiltInElements() {
    return []
      .concat(safeArray(function () { return MOKURI_ELEMENTS; }))
      .concat(safeArray(function () { return MOKURI_CORE_ELEMENTS; }))
      .concat(safeArray(function () { return MOKURI_FAUNA_ELEMENTS; }))
      .concat(safeArray(function () { return MOKURI_SCENE_ELEMENTS; }))
      .concat(safeArray(function () { return MOKURI_HANKO_ELEMENTS; }))
      .concat(safeArray(function () { return MOKURI_FORMS_ELEMENTS; }))
      .concat(safeArray(function () { return MOKURI_FIGURES_ELEMENTS; }))
      .concat(safeArray(function () { return MOKURI_KACHOE_ELEMENTS; }));
  }

  function safeArray(getter) {
    try {
      const value = getter();
      return Array.isArray(value) ? value : [];
    } catch (error) {
      return [];
    }
  }

  function parseViewBox(viewBox) {
    if (typeof viewBox !== 'string') {
      return DEFAULT_VIEWBOX.slice();
    }

    const parts = viewBox.trim().split(/\s+/).map(Number);
    if (parts.length !== 4 || !parts.every(Number.isFinite)) {
      return DEFAULT_VIEWBOX.slice();
    }

    return parts;
  }

  function slotColor(slot) {
    const index = Number(slot);
    return SLOT_COLORS[Number.isFinite(index) && SLOT_COLORS[index] ? index : 0];
  }

  function setStatus(message, kind) {
    els.status.className = 'status ' + kind;
    els.status.textContent = message;
  }

  function setActivePackButton(packId) {
    const buttons = els.builtinButtons.querySelectorAll('button[data-pack-id]');
    for (let i = 0; i < buttons.length; i += 1) {
      buttons[i].classList.toggle('active-chip', buttons[i].getAttribute('data-pack-id') === packId);
    }
  }

  function summaryCard(kicker, value, detail) {
    return [
      '<div class="summary-card">',
      '<div class="kicker">' + escapeHtml(kicker) + '</div>',
      '<div class="value">' + escapeHtml(value) + '</div>',
      '<div class="detail">' + escapeHtml(detail || '') + '</div>',
      '</div>',
    ].join('');
  }

  function factRow(label, value) {
    return '<div class="fact"><div class="label">' + escapeHtml(label) + '</div><div>' + escapeHtml(value) + '</div></div>';
  }

  function issueSummary(validation) {
    const errorCount = validation ? validation.errors.length : 0;
    const warningCount = validation ? validation.warnings.length : 0;
    if (!errorCount && !warningCount) {
      return 'No validation issues found.';
    }

    const parts = [];
    if (errorCount) {
      parts.push(errorCount + ' error' + pluralize(errorCount));
    }
    if (warningCount) {
      parts.push(warningCount + ' warning' + pluralize(warningCount));
    }
    return parts.join(', ') + '.';
  }

  function issueClass(validation) {
    if (!validation) {
      return '';
    }
    if (validation.errors.length) {
      return 'bad';
    }
    if (validation.warnings.length) {
      return 'warn';
    }
    return 'good';
  }

  function pluralize(count) {
    return count === 1 ? '' : 's';
  }

  function isObjectLike(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function escapeAttribute(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/"/g, '&quot;');
  }

  init();
}());
