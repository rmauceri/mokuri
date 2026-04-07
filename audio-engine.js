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

  // Japanese pentatonic (D minor pentatonic: D, F, G, A, C)
  const SCALE_LOW  = [146.83, 174.61, 196.00, 220.00, 261.63]; // D3-C4
  const SCALE_MID  = [293.66, 349.23, 392.00, 440.00, 523.25]; // D4-C5
  const SCALE_HIGH = [587.33, 698.46, 783.99, 880.00, 1046.50]; // D5-C6
  const BELL_FREQ  = 146.83; // D3 — deep temple bell fundamental

  // Ambient scheduling state
  let chimeTimeout = null;
  let bellTimeout = null;
  let waterTimeout = null;
  let windBreathTimeout = null;
  let ambientReverb = null;
  let ambientDryGain = null;
  let ambientWetGain = null;
  let windNoise = null;
  let windFilter = null;
  let windGain = null;

  // Atmosphere state (affects chime register, spacing, wind character)
  let atmo = {
    sky: 'none', foreground: 'none',
    notePool: SCALE_MID,
    chimeMin: 3, chimeMax: 8,     // seconds between chimes
    chimeVol: 0.09,
    windBase: 400, windQ: 0.8, windVol: 0.03,
    waterActive: false,
  };

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

  // --- Ambient Soundscape (generative chimes + wind + bell + water) ---

  function playChime() {
    if (!ctx || !ambientRunning) return;
    const freq = atmo.notePool[Math.floor(Math.random() * atmo.notePool.length)];
    const osc = ctx.createOscillator();
    osc.type = Math.random() < 0.6 ? 'sine' : 'triangle';
    osc.frequency.value = freq;
    // Slight detune for organic feel
    osc.detune.value = (Math.random() - 0.5) * 8;

    const g = ctx.createGain();
    const now = ctx.currentTime;
    const decay = 2.0 + Math.random() * 2.5; // 2-4.5 second ring
    const vol = atmo.chimeVol * (0.7 + Math.random() * 0.6);

    g.gain.setValueAtTime(0, now);
    g.gain.linearRampToValueAtTime(vol, now + 0.005); // near-instant attack
    g.gain.exponentialRampToValueAtTime(0.001, now + decay);

    osc.connect(g);
    g.connect(ambientDryGain);
    g.connect(ambientWetGain);

    osc.start(now);
    osc.stop(now + decay + 0.1);
  }

  function scheduleChime() {
    if (!ambientRunning) return;
    const interval = atmo.chimeMin + Math.random() * (atmo.chimeMax - atmo.chimeMin);
    chimeTimeout = setTimeout(() => {
      playChime();
      // 20% chance of a 2-3 note cluster (wind chime catching a breeze)
      if (Math.random() < 0.2) {
        setTimeout(() => playChime(), 250 + Math.random() * 400);
        if (Math.random() < 0.5) {
          setTimeout(() => playChime(), 700 + Math.random() * 600);
        }
      }
      scheduleChime();
    }, interval * 1000);
  }

  function playBell() {
    if (!ctx || !ambientRunning) return;
    const now = ctx.currentTime;

    // Fundamental
    const osc1 = ctx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.value = BELL_FREQ;
    const g1 = ctx.createGain();
    g1.gain.setValueAtTime(0, now);
    g1.gain.linearRampToValueAtTime(0.06, now + 0.02);
    g1.gain.exponentialRampToValueAtTime(0.001, now + 5.0);
    osc1.connect(g1);
    g1.connect(ambientDryGain);
    g1.connect(ambientWetGain);
    osc1.start(now);
    osc1.stop(now + 5.5);

    // Inharmonic partial (bell-like shimmer)
    const osc2 = ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.value = BELL_FREQ * 2.76; // non-integer partial
    const g2 = ctx.createGain();
    g2.gain.setValueAtTime(0, now);
    g2.gain.linearRampToValueAtTime(0.025, now + 0.01);
    g2.gain.exponentialRampToValueAtTime(0.001, now + 3.0);
    osc2.connect(g2);
    g2.connect(ambientDryGain);
    g2.connect(ambientWetGain);
    osc2.start(now);
    osc2.stop(now + 3.5);
  }

  function scheduleBell() {
    if (!ambientRunning) return;
    const interval = 35 + Math.random() * 30; // every 35-65 seconds
    bellTimeout = setTimeout(() => {
      playBell();
      scheduleBell();
    }, interval * 1000);
  }

  function playWaterDrop() {
    if (!ctx || !ambientRunning) return;
    const now = ctx.currentTime;
    const freq = 1200 + Math.random() * 800; // 1200-2000 Hz
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = freq;
    osc.frequency.exponentialRampToValueAtTime(freq * 0.6, now + 0.08);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, now);
    g.gain.linearRampToValueAtTime(0.04 + Math.random() * 0.02, now + 0.003);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
    osc.connect(g);
    g.connect(ambientDryGain);
    g.connect(ambientWetGain);
    osc.start(now);
    osc.stop(now + 0.15);
  }

  function scheduleWater() {
    if (!ambientRunning || !atmo.waterActive) return;
    const interval = 5 + Math.random() * 12; // 5-17 seconds
    waterTimeout = setTimeout(() => {
      playWaterDrop();
      scheduleWater();
    }, interval * 1000);
  }

  function scheduleWindBreath() {
    if (!ambientRunning || !windGain) return;
    const duration = 12 + Math.random() * 12; // 12-24 second breath cycle
    const peak = atmo.windVol * (0.6 + Math.random() * 0.8);
    const now = ctx.currentTime;

    windGain.gain.setValueAtTime(windGain.gain.value, now);
    windGain.gain.linearRampToValueAtTime(peak, now + duration * 0.35);
    windGain.gain.setValueAtTime(peak, now + duration * 0.55);
    windGain.gain.linearRampToValueAtTime(0.003, now + duration);

    windBreathTimeout = setTimeout(scheduleWindBreath, duration * 1000);
  }

  function startAmbient() {
    if (!ensureContext() || ambientRunning) return;
    ambientRunning = true;

    // Reverb (longer tail for chime ringing)
    const iLen = ctx.sampleRate * 2.8;
    const iBuf = ctx.createBuffer(2, iLen, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = iBuf.getChannelData(ch);
      for (let i = 0; i < iLen; i++) {
        d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / iLen, 2.0);
      }
    }
    ambientReverb = ctx.createConvolver();
    ambientReverb.buffer = iBuf;

    ambientDryGain = ctx.createGain();
    ambientDryGain.gain.value = 0.55;
    ambientDryGain.connect(ambientGain);

    ambientWetGain = ctx.createGain();
    ambientWetGain.gain.value = 0.45;
    ambientWetGain.connect(ambientReverb);
    ambientReverb.connect(ambientGain);

    ambientNodes.push(ambientReverb, ambientDryGain, ambientWetGain);

    // Wind texture (filtered noise with breathing dynamics)
    const noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 4, ctx.sampleRate);
    const nd = noiseBuf.getChannelData(0);
    for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;

    windNoise = ctx.createBufferSource();
    windNoise.buffer = noiseBuf;
    windNoise.loop = true;

    windFilter = ctx.createBiquadFilter();
    windFilter.type = 'bandpass';
    windFilter.frequency.value = atmo.windBase;
    windFilter.Q.value = atmo.windQ;

    windGain = ctx.createGain();
    windGain.gain.value = 0.003; // start near-silent

    windNoise.connect(windFilter);
    windFilter.connect(windGain);
    windGain.connect(ambientDryGain);
    windGain.connect(ambientWetGain);

    windNoise.start();
    ambientNodes.push(windNoise, windFilter, windGain);

    // Fade in
    const now = ctx.currentTime;
    ambientGain.gain.setValueAtTime(0, now);
    ambientGain.gain.linearRampToValueAtTime(prefs.ambientVol, now + 2.5);

    // Start first chime after a brief pause
    chimeTimeout = setTimeout(() => {
      playChime();
      scheduleChime();
    }, 1500);

    // Bell starts later
    bellTimeout = setTimeout(() => {
      scheduleBell();
    }, 15000 + Math.random() * 15000);

    // Wind breathing
    scheduleWindBreath();

    // Water drops if atmosphere calls for it
    if (atmo.waterActive) scheduleWater();
  }

  function stopAmbient() {
    if (!ctx || !ambientRunning) return;
    ambientRunning = false;

    // Clear all schedulers
    clearTimeout(chimeTimeout);
    clearTimeout(bellTimeout);
    clearTimeout(waterTimeout);
    clearTimeout(windBreathTimeout);
    chimeTimeout = bellTimeout = waterTimeout = windBreathTimeout = null;

    // Fade out
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
      windNoise = windFilter = windGain = null;
      ambientReverb = ambientDryGain = ambientWetGain = null;
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
    atmo.sky = sky || 'none';
    atmo.foreground = ground || 'none';

    // Determine chime register and spacing based on sky
    switch (atmo.sky) {
      case 'dawn':
      case 'dusk':
        // Warm: mix mid + some high, moderate pace
        atmo.notePool = [...SCALE_MID, ...SCALE_HIGH.slice(0, 3)];
        atmo.chimeMin = 3; atmo.chimeMax = 7;
        atmo.chimeVol = 0.10;
        atmo.windBase = 500; atmo.windQ = 0.6; atmo.windVol = 0.035;
        break;
      case 'day':
        // Bright and open: higher register, relaxed pace
        atmo.notePool = [...SCALE_MID.slice(2), ...SCALE_HIGH];
        atmo.chimeMin = 3; atmo.chimeMax = 8;
        atmo.chimeVol = 0.09;
        atmo.windBase = 450; atmo.windQ = 0.7; atmo.windVol = 0.025;
        break;
      case 'night':
        // Deep, sparse, contemplative
        atmo.notePool = [...SCALE_LOW, ...SCALE_MID.slice(0, 3)];
        atmo.chimeMin = 5; atmo.chimeMax = 12;
        atmo.chimeVol = 0.07;
        atmo.windBase = 250; atmo.windQ = 1.0; atmo.windVol = 0.02;
        break;
      case 'overcast':
        // Muted, mid-range, moderate
        atmo.notePool = SCALE_MID;
        atmo.chimeMin = 4; atmo.chimeMax = 10;
        atmo.chimeVol = 0.07;
        atmo.windBase = 350; atmo.windQ = 1.2; atmo.windVol = 0.04;
        break;
      default: // 'none' or unknown
        atmo.notePool = SCALE_MID;
        atmo.chimeMin = 3; atmo.chimeMax = 8;
        atmo.chimeVol = 0.09;
        atmo.windBase = 400; atmo.windQ = 0.8; atmo.windVol = 0.03;
    }

    // Ground influence
    const wasWater = atmo.waterActive;
    atmo.waterActive = (atmo.foreground === 'water');

    if (atmo.foreground === 'snow') {
      // Crystalline: shift to higher notes, sparser
      atmo.notePool = [...SCALE_HIGH];
      atmo.chimeMin += 2; atmo.chimeMax += 3;
      atmo.chimeVol = 0.06;
      atmo.windBase += 200; atmo.windQ = 0.5; atmo.windVol = 0.015;
    } else if (atmo.foreground === 'water') {
      atmo.windBase += 80; atmo.windVol += 0.01;
    }

    // Apply wind changes if ambient is running
    if (ctx && ambientRunning && windFilter) {
      const now = ctx.currentTime;
      windFilter.frequency.setValueAtTime(windFilter.frequency.value, now);
      windFilter.frequency.linearRampToValueAtTime(atmo.windBase, now + 3.0);
      windFilter.Q.setValueAtTime(windFilter.Q.value, now);
      windFilter.Q.linearRampToValueAtTime(atmo.windQ, now + 3.0);
    }

    // Start/stop water drops
    if (atmo.waterActive && !wasWater && ambientRunning) {
      scheduleWater();
    } else if (!atmo.waterActive && wasWater) {
      clearTimeout(waterTimeout);
      waterTimeout = null;
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
      // Paper peel — noise sweep rising as paper separates
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

  function playPaperLay() {
    playOneShot((c, dest) => {
      const now = c.currentTime;
      // Soft thud — paper touching wood
      const osc = c.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = 65 + Math.random() * 10;
      const g = c.createGain();
      g.gain.setValueAtTime(0.2, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      osc.connect(g).connect(dest);
      osc.start(now);
      osc.stop(now + 0.25);
      // Paper settle rustle
      const buf = c.createBuffer(1, c.sampleRate * 0.3, c.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      const src = c.createBufferSource();
      src.buffer = buf;
      const filt = c.createBiquadFilter();
      filt.type = 'highpass';
      filt.frequency.value = 2500;
      const ng = c.createGain();
      ng.gain.setValueAtTime(0, now);
      ng.gain.linearRampToValueAtTime(0.08, now + 0.05);
      ng.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      src.connect(filt).connect(ng).connect(dest);
      src.start(now);
      src.stop(now + 0.3);
    });
  }

  function playBarenPass() {
    playOneShot((c, dest) => {
      const now = c.currentTime;
      const dur = 1.5;
      // Sustained friction noise — baren rubbing across paper
      const buf = c.createBuffer(1, c.sampleRate * dur, c.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      const src = c.createBufferSource();
      src.buffer = buf;
      const bp = c.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.setValueAtTime(600, now);
      bp.frequency.linearRampToValueAtTime(900, now + dur * 0.5);
      bp.frequency.linearRampToValueAtTime(500, now + dur);
      bp.Q.value = 0.7;
      const g = c.createGain();
      g.gain.setValueAtTime(0, now);
      g.gain.linearRampToValueAtTime(0.12, now + 0.05);
      // Rhythmic pulsing matching baren circular motion
      const pulseLen = (dur - 0.15) / 4;
      for (let i = 0; i < 4; i++) {
        const t = 0.05 + i * pulseLen;
        g.gain.linearRampToValueAtTime(0.15, now + t);
        g.gain.linearRampToValueAtTime(0.06, now + t + pulseLen * 0.5);
      }
      g.gain.linearRampToValueAtTime(0.001, now + dur - 0.05);
      src.connect(bp).connect(g).connect(dest);
      src.start(now);
      src.stop(now + dur);
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

  function playModalOpen() {
    playOneShot((c, dest) => {
      const now = c.currentTime;
      // Two-note ascending chime — warm triangle tones
      [392, 523].forEach((freq, i) => {
        const osc = c.createOscillator();
        osc.type = 'triangle';
        osc.frequency.value = freq;
        const g = c.createGain();
        const t = now + i * 0.07;
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(0.08, t + 0.02);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
        osc.connect(g).connect(dest);
        osc.start(t);
        osc.stop(t + 0.15);
      });
    });
  }

  function playModalClose() {
    playOneShot((c, dest) => {
      const now = c.currentTime;
      // Single descending tone — brief, soft
      const osc = c.createOscillator();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523, now);
      osc.frequency.exponentialRampToValueAtTime(330, now + 0.1);
      const g = c.createGain();
      g.gain.setValueAtTime(0.06, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.connect(g).connect(dest);
      osc.start(now);
      osc.stop(now + 0.12);
    });
  }

  function playSave() {
    playOneShot((c, dest) => {
      // Soft ascending chime
      const osc = c.createOscillator();
      osc.type = 'sine';
      const now = c.currentTime;
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(780, now + 0.12);
      const g = c.createGain();
      g.gain.setValueAtTime(0.2, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.connect(g).connect(dest);
      osc.start(now);
      osc.stop(now + 0.28);
    });
  }

  function playFavorite() {
    playOneShot((c, dest) => {
      // Two-note sparkle
      [660, 880].forEach((freq, i) => {
        const osc = c.createOscillator();
        osc.type = 'sine';
        const now = c.currentTime + i * 0.08;
        osc.frequency.value = freq;
        const g = c.createGain();
        g.gain.setValueAtTime(0.18, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.connect(g).connect(dest);
        osc.start(now);
        osc.stop(now + 0.22);
      });
    });
  }

  function playSwipe() {
    playOneShot((c, dest) => {
      // Soft filtered noise whoosh
      const len = 0.15;
      const now = c.currentTime;
      const buf = c.createBuffer(1, c.sampleRate * len, c.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1);
      const src = c.createBufferSource();
      src.buffer = buf;
      const filt = c.createBiquadFilter();
      filt.type = 'bandpass';
      filt.frequency.setValueAtTime(2000, now);
      filt.frequency.exponentialRampToValueAtTime(800, now + len);
      filt.Q.value = 1.5;
      const g = c.createGain();
      g.gain.setValueAtTime(0.12, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + len);
      src.connect(filt).connect(g).connect(dest);
      src.start(now);
      src.stop(now + len);
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
  // iOS standalone PWA requires touchstart/pointerdown (click alone may not qualify)
  function initOnGesture() {
    ensureContext();
    if (prefs.ambientOn && !ambientRunning) startAmbient();
    document.removeEventListener('click', initOnGesture);
    document.removeEventListener('keydown', initOnGesture);
    document.removeEventListener('touchstart', initOnGesture);
    document.removeEventListener('pointerdown', initOnGesture);
  }
  document.addEventListener('click', initOnGesture);
  document.addEventListener('keydown', initOnGesture);
  document.addEventListener('touchstart', initOnGesture);
  document.addEventListener('pointerdown', initOnGesture);

  // Resume AudioContext when returning from background (iOS PWA suspends it)
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && ctx && ctx.state === 'suspended') {
      ctx.resume();
    }
  });

  // Persistent touch listener for iOS PWA — context may need gesture to resume
  document.addEventListener('touchstart', function() {
    if (ctx && ctx.state === 'suspended') ctx.resume();
  }, { passive: true });

  function playFreHint() {
    // Two-note pentatonic chime from the ambient scale — D4 + A4 (perfect fifth)
    playOneShot((c, dest) => {
      const now = c.currentTime;
      [293.66, 440.00].forEach((freq, i) => {
        const osc = c.createOscillator();
        osc.type = i === 0 ? 'sine' : 'triangle';
        osc.frequency.value = freq;
        osc.detune.value = (Math.random() - 0.5) * 6;
        const g = c.createGain();
        const t = now + i * 0.15;
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(0.14, t + 0.005);
        g.gain.exponentialRampToValueAtTime(0.001, t + 1.8);
        osc.connect(g).connect(dest);
        osc.start(t);
        osc.stop(t + 2.0);
      });
    });
  }

  function playFreCelebration() {
    // Ascending pentatonic motif: D4 → G4 → A4 → D5, with bell shimmer on final note
    playOneShot((c, dest) => {
      const now = c.currentTime;
      [293.66, 392.00, 440.00, 587.33].forEach((freq, i) => {
        const osc = c.createOscillator();
        osc.type = Math.random() < 0.6 ? 'sine' : 'triangle';
        osc.frequency.value = freq;
        osc.detune.value = (Math.random() - 0.5) * 6;
        const g = c.createGain();
        const t = now + i * 0.22;
        const decay = i === 3 ? 3.0 : 1.6;
        const vol = i === 3 ? 0.12 : 0.10;
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(vol, t + 0.005);
        g.gain.exponentialRampToValueAtTime(0.001, t + decay);
        osc.connect(g).connect(dest);
        osc.start(t);
        osc.stop(t + decay + 0.1);
      });
      // Bell shimmer on final note
      const shimmer = c.createOscillator();
      shimmer.type = 'sine';
      shimmer.frequency.value = 587.33 * 2.76;
      const sg = c.createGain();
      const st = now + 3 * 0.22;
      sg.gain.setValueAtTime(0, st);
      sg.gain.linearRampToValueAtTime(0.03, st + 0.01);
      sg.gain.exponentialRampToValueAtTime(0.001, st + 2.0);
      shimmer.connect(sg).connect(dest);
      shimmer.start(st);
      shimmer.stop(st + 2.2);
    });
  }

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
    playPaperLay,
    playBarenPass,
    playColorChange,
    playCarveLevel,
    playUndoRedo,
    playPanelToggle,
    playFocusEnter,
    playFocusExit,
    playModalOpen,
    playModalClose,
    playSave,
    playFavorite,
    playSwipe,
    playFreHint,
    playFreCelebration,
  };
})();
