// ============================================================
//  MOKURI — Audio Engine
//  Procedural ambient soundscape & activity sounds via Web Audio API
// ============================================================

const MokuriAudio = (() => {
  let ctx = null;
  let masterGain, ambientGain, activityGain;
  let ambientRunning = false;
  let ambientNodes = [];

  // Preferences (restored from localStorage)
  let prefs = {
    ambientOn: false,
    ambientVol: 0.15,
    activityOn: true,
    activityVol: 0.25,
  };

  // Pentatonic scale intervals (Japanese-inspired: D minor pentatonic)
  const DRONE_NOTES = [73.42, 110.0, 146.83]; // D2, A2, D3

  // --- Init (called on first user gesture) ---
  function ensureContext() {
    if (ctx) {
      if (ctx.state === 'suspended') ctx.resume();
      return true;
    }
    try {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      masterGain = ctx.createGain();
      masterGain.gain.value = 1.0;
      masterGain.connect(ctx.destination);

      ambientGain = ctx.createGain();
      ambientGain.gain.value = 0;
      ambientGain.connect(masterGain);

      activityGain = ctx.createGain();
      activityGain.gain.value = prefs.activityVol;
      activityGain.connect(masterGain);

      return true;
    } catch (e) {
      return false;
    }
  }

  // --- Algorithmic reverb (generated impulse response) ---
  function createReverb() {
    if (!ctx) return null;
    const len = ctx.sampleRate * 1.8;
    const buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = buf.getChannelData(ch);
      for (let i = 0; i < len; i++) {
        d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.5);
      }
    }
    const conv = ctx.createConvolver();
    conv.buffer = buf;
    return conv;
  }

  // --- Ambient Soundscape ---
  function startAmbient() {
    if (!ensureContext() || ambientRunning) return;
    ambientRunning = true;

    const reverb = createReverb();
    const reverbGain = ctx.createGain();
    reverbGain.gain.value = 0.3;
    if (reverb) {
      reverbGain.connect(reverb);
      reverb.connect(ambientGain);
    }

    // Dry path gain
    const dryGain = ctx.createGain();
    dryGain.gain.value = 0.7;
    dryGain.connect(ambientGain);

    // Drone oscillators with slow LFO modulation
    DRONE_NOTES.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;

      // Slow LFO on frequency (organic drift)
      const lfo = ctx.createOscillator();
      lfo.type = 'sine';
      lfo.frequency.value = 0.03 + i * 0.012; // ~0.03-0.05 Hz
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 1.5 + i * 0.5; // ±1.5-2.5 Hz drift
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);

      // Amplitude breathing (very slow)
      const ampLfo = ctx.createOscillator();
      ampLfo.type = 'sine';
      ampLfo.frequency.value = 0.05 + i * 0.02;
      const ampGain = ctx.createGain();
      ampGain.gain.value = 0.15; // breath depth
      const oscGain = ctx.createGain();
      oscGain.gain.value = i === 0 ? 0.35 : i === 1 ? 0.25 : 0.18;
      ampLfo.connect(ampGain);
      ampGain.connect(oscGain.gain);

      osc.connect(oscGain);
      oscGain.connect(dryGain);
      if (reverb) oscGain.connect(reverbGain);

      osc.start();
      lfo.start();
      ampLfo.start();
      ambientNodes.push(osc, lfo, ampLfo, lfoGain, ampGain, oscGain);
    });

    // Noise texture layer
    const noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 4, ctx.sampleRate);
    const nd = noiseBuf.getChannelData(0);
    for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;

    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuf;
    noise.loop = true;

    const noiseFilt = ctx.createBiquadFilter();
    noiseFilt.type = 'bandpass';
    noiseFilt.frequency.value = 400;
    noiseFilt.Q.value = 0.8;

    // Slow filter sweep
    const filtLfo = ctx.createOscillator();
    filtLfo.type = 'sine';
    filtLfo.frequency.value = 0.02;
    const filtLfoGain = ctx.createGain();
    filtLfoGain.gain.value = 200;
    filtLfo.connect(filtLfoGain);
    filtLfoGain.connect(noiseFilt.frequency);

    const noiseGain = ctx.createGain();
    noiseGain.gain.value = 0.04;

    noise.connect(noiseFilt);
    noiseFilt.connect(noiseGain);
    noiseGain.connect(dryGain);
    if (reverb) noiseGain.connect(reverbGain);

    noise.start();
    filtLfo.start();
    ambientNodes.push(noise, noiseFilt, filtLfo, filtLfoGain, noiseGain, dryGain, reverbGain);
    if (reverb) ambientNodes.push(reverb);

    // Store refs for atmosphere modulation
    ambientNodes._droneGains = [];
    ambientNodes._noiseFilt = noiseFilt;
    ambientNodes._noiseGain = noiseGain;

    // Fade in
    const now = ctx.currentTime;
    ambientGain.gain.setValueAtTime(0, now);
    ambientGain.gain.linearRampToValueAtTime(prefs.ambientVol, now + 2.0);
  }

  function stopAmbient() {
    if (!ctx || !ambientRunning) return;
    const now = ctx.currentTime;
    ambientGain.gain.setValueAtTime(ambientGain.gain.value, now);
    ambientGain.gain.linearRampToValueAtTime(0, now + 2.0);

    // Cleanup after fade
    setTimeout(() => {
      ambientNodes.forEach(n => {
        try { n.stop && n.stop(); } catch (e) {}
        try { n.disconnect(); } catch (e) {}
      });
      ambientNodes = [];
      ambientRunning = false;
    }, 2500);
  }

  function setAmbientVolume(vol) {
    prefs.ambientVol = vol;
    if (ctx && ambientRunning) {
      const now = ctx.currentTime;
      ambientGain.gain.setValueAtTime(ambientGain.gain.value, now);
      ambientGain.gain.linearRampToValueAtTime(vol, now + 0.3);
    }
    savePrefs();
  }

  function setActivityVolume(vol) {
    prefs.activityVol = vol;
    if (ctx && activityGain) {
      activityGain.gain.value = vol;
    }
    savePrefs();
  }

  // --- Atmosphere Influence ---
  function setAmbienceForAtmosphere(sky, ground) {
    if (!ctx || !ambientRunning) return;
    const now = ctx.currentTime;
    const filt = ambientNodes._noiseFilt;
    const noiseG = ambientNodes._noiseGain;
    if (!filt) return;

    // Base values
    let filtFreq = 400, filtQ = 0.8, noiseVol = 0.04;

    // Sky influence
    if (sky === 'dawn' || sky === 'dusk') {
      filtFreq = 500; filtQ = 0.6; // warmer, wider
    } else if (sky === 'night') {
      filtFreq = 250; filtQ = 1.0; // cooler, deeper
    } else if (sky === 'overcast') {
      filtFreq = 350; filtQ = 1.2; // muted, narrow
    } else if (sky === 'day') {
      filtFreq = 450; filtQ = 0.7; // bright, open
    }

    // Ground influence
    if (ground === 'water') {
      noiseVol = 0.07; filtFreq += 100; // hint of flow
    } else if (ground === 'snow') {
      noiseVol = 0.05; filtFreq += 200; filtQ = 0.5; // shimmer
    }

    // Crossfade parameters over 4 seconds
    filt.frequency.setValueAtTime(filt.frequency.value, now);
    filt.frequency.linearRampToValueAtTime(filtFreq, now + 4.0);
    filt.Q.setValueAtTime(filt.Q.value, now);
    filt.Q.linearRampToValueAtTime(filtQ, now + 4.0);
    if (noiseG) {
      noiseG.gain.setValueAtTime(noiseG.gain.value, now);
      noiseG.gain.linearRampToValueAtTime(noiseVol, now + 4.0);
    }
  }

  // --- Activity Sounds ---
  // Helper: create a short envelope
  function playOneShot(setup) {
    if (!prefs.activityOn || !ensureContext()) return;
    setup(ctx, activityGain);
  }

  function playCarveStart() {
    playOneShot((c, dest) => {
      // Filtered noise burst (wood scrape)
      const buf = c.createBuffer(1, c.sampleRate * 0.15, c.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      const src = c.createBufferSource();
      src.buffer = buf;
      const filt = c.createBiquadFilter();
      filt.type = 'bandpass';
      filt.frequency.value = 1200 + Math.random() * 400;
      filt.Q.value = 2;
      const g = c.createGain();
      const now = c.currentTime;
      g.gain.setValueAtTime(0.5, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      src.connect(filt).connect(g).connect(dest);
      src.start(now);
      src.stop(now + 0.15);

      // Resonant click (wood tap)
      const osc = c.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = 180 + Math.random() * 40;
      const og = c.createGain();
      og.gain.setValueAtTime(0.3, now);
      og.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.connect(og).connect(dest);
      osc.start(now);
      osc.stop(now + 0.1);
    });
  }

  function playCarveEnd() {
    playOneShot((c, dest) => {
      const osc = c.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = 140 + Math.random() * 30;
      const g = c.createGain();
      const now = c.currentTime;
      g.gain.setValueAtTime(0.15, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      osc.connect(g).connect(dest);
      osc.start(now);
      osc.stop(now + 0.12);
    });
  }

  function playElementPlace() {
    playOneShot((c, dest) => {
      // Gentle thud
      const osc = c.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = 80 + Math.random() * 20;
      const g = c.createGain();
      const now = c.currentTime;
      g.gain.setValueAtTime(0.35, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc.connect(g).connect(dest);
      osc.start(now);
      osc.stop(now + 0.2);

      // Paper settle (noise)
      const buf = c.createBuffer(1, c.sampleRate * 0.2, c.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      const src = c.createBufferSource();
      src.buffer = buf;
      const filt = c.createBiquadFilter();
      filt.type = 'highpass';
      filt.frequency.value = 2000;
      const ng = c.createGain();
      ng.gain.setValueAtTime(0, now);
      ng.gain.linearRampToValueAtTime(0.12, now + 0.03);
      ng.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      src.connect(filt).connect(ng).connect(dest);
      src.start(now);
      src.stop(now + 0.2);
    });
  }

  function playElementDelete() {
    playOneShot((c, dest) => {
      const osc = c.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = 120;
      const now = c.currentTime;
      osc.frequency.exponentialRampToValueAtTime(60, now + 0.15);
      const g = c.createGain();
      g.gain.setValueAtTime(0.25, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc.connect(g).connect(dest);
      osc.start(now);
      osc.stop(now + 0.18);
    });
  }

  function playPrintPull() {
    playOneShot((c, dest) => {
      // Slow noise sweep (press & peel)
      const buf = c.createBuffer(1, c.sampleRate * 0.6, c.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      const src = c.createBufferSource();
      src.buffer = buf;
      const filt = c.createBiquadFilter();
      filt.type = 'bandpass';
      filt.frequency.value = 300;
      filt.Q.value = 1;
      const now = c.currentTime;
      filt.frequency.linearRampToValueAtTime(2000, now + 0.5);
      const g = c.createGain();
      g.gain.setValueAtTime(0, now);
      g.gain.linearRampToValueAtTime(0.3, now + 0.1);
      g.gain.setValueAtTime(0.3, now + 0.3);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.55);
      src.connect(filt).connect(g).connect(dest);
      src.start(now);
      src.stop(now + 0.6);
    });
  }

  function playColorChange() {
    playOneShot((c, dest) => {
      // Soft high sine pip
      const osc = c.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = 800 + Math.random() * 200;
      const g = c.createGain();
      const now = c.currentTime;
      g.gain.setValueAtTime(0.15, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.connect(g).connect(dest);
      osc.start(now);
      osc.stop(now + 0.1);
    });
  }

  function playCarveLevel() {
    playOneShot((c, dest) => {
      // Two-tone wood knock
      const now = c.currentTime;
      [0, 0.06].forEach((t, i) => {
        const osc = c.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = i === 0 ? 200 : 260;
        const g = c.createGain();
        g.gain.setValueAtTime(0.25, now + t);
        g.gain.exponentialRampToValueAtTime(0.001, now + t + 0.06);
        osc.connect(g).connect(dest);
        osc.start(now + t);
        osc.stop(now + t + 0.08);
      });
    });
  }

  function playUndoRedo() {
    playOneShot((c, dest) => {
      const osc = c.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = 440 + Math.random() * 60;
      const g = c.createGain();
      const now = c.currentTime;
      g.gain.setValueAtTime(0.1, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      osc.connect(g).connect(dest);
      osc.start(now);
      osc.stop(now + 0.08);
    });
  }

  function playPanelToggle() {
    playOneShot((c, dest) => {
      // Soft breath (tiny filtered noise fade)
      const buf = c.createBuffer(1, c.sampleRate * 0.2, c.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      const src = c.createBufferSource();
      src.buffer = buf;
      const filt = c.createBiquadFilter();
      filt.type = 'bandpass';
      filt.frequency.value = 600;
      filt.Q.value = 0.5;
      const g = c.createGain();
      const now = c.currentTime;
      g.gain.setValueAtTime(0, now);
      g.gain.linearRampToValueAtTime(0.1, now + 0.05);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      src.connect(filt).connect(g).connect(dest);
      src.start(now);
      src.stop(now + 0.2);
    });
  }

  function playFocusEnter() {
    playOneShot((c, dest) => {
      const osc = c.createOscillator();
      osc.type = 'sine';
      const now = c.currentTime;
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(440, now + 0.25);
      const g = c.createGain();
      g.gain.setValueAtTime(0.12, now);
      g.gain.setValueAtTime(0.12, now + 0.15);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.connect(g).connect(dest);
      osc.start(now);
      osc.stop(now + 0.35);
    });
  }

  function playFocusExit() {
    playOneShot((c, dest) => {
      const osc = c.createOscillator();
      osc.type = 'sine';
      const now = c.currentTime;
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.25);
      const g = c.createGain();
      g.gain.setValueAtTime(0.12, now);
      g.gain.setValueAtTime(0.12, now + 0.15);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.connect(g).connect(dest);
      osc.start(now);
      osc.stop(now + 0.35);
    });
  }

  // --- Preferences ---
  function loadPrefs() {
    try {
      const raw = localStorage.getItem('mokuri-audio');
      if (raw) Object.assign(prefs, JSON.parse(raw));
    } catch (e) {}
  }

  function savePrefs() {
    try {
      localStorage.setItem('mokuri-audio', JSON.stringify(prefs));
    } catch (e) {}
  }

  function setAmbientOn(on) {
    prefs.ambientOn = on;
    if (on) startAmbient();
    else stopAmbient();
    savePrefs();
  }

  function setActivityOn(on) {
    prefs.activityOn = on;
    savePrefs();
  }

  // Init prefs on load
  loadPrefs();

  // Ensure AudioContext is initialized on first user gesture
  function initOnGesture() {
    ensureContext();
    if (prefs.ambientOn && !ambientRunning) startAmbient();
    document.removeEventListener('click', initOnGesture);
    document.removeEventListener('keydown', initOnGesture);
  }
  document.addEventListener('click', initOnGesture);
  document.addEventListener('keydown', initOnGesture);

  // Public API
  return {
    get prefs() { return prefs; },
    setAmbientOn,
    setAmbientVolume,
    setActivityOn,
    setActivityVolume,
    setAmbienceForAtmosphere,
    playCarveStart,
    playCarveEnd,
    playElementPlace,
    playElementDelete,
    playPrintPull,
    playColorChange,
    playCarveLevel,
    playUndoRedo,
    playPanelToggle,
    playFocusEnter,
    playFocusExit,
  };
})();
