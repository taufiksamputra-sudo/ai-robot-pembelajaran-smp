import { MusicMood } from '../types';

class SoundStudio {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private currentMood: MusicMood = 'none';
  private masterGain: GainNode | null = null;
  private musicGain: GainNode | null = null;
  private streamDest: MediaStreamAudioDestinationNode | null = null;
  private intervalId: number | null = null;
  private step: number = 0;
  private volume: number = 0.6;
  private currentUtterance: SpeechSynthesisUtterance | null = null;

  constructor() {
    // Lazy initialize on first user gesture
  }

  private initCtx() {
    if (!this.ctx) {
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioCtxClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);

      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.setValueAtTime(1, this.ctx.currentTime);
      this.musicGain.connect(this.masterGain);

      // Create stream destination for video recording
      this.streamDest = this.ctx.createMediaStreamDestination();
      this.masterGain.connect(this.ctx.destination);
      this.masterGain.connect(this.streamDest);
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public getAudioStream(): MediaStream | null {
    this.initCtx();
    return this.streamDest ? this.streamDest.stream : null;
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  public playMusic(mood: MusicMood) {
    if (mood === 'none') {
      this.stopMusic();
      return;
    }

    this.initCtx();
    if (!this.ctx || !this.musicGain) return;

    if (this.isPlaying && this.currentMood === mood) {
      return;
    }

    this.stopMusic();
    this.isPlaying = true;
    this.currentMood = mood;
    this.step = 0;

    let tempo = 120; // BPM
    if (mood === 'chill-saas') tempo = 92;
    if (mood === 'energetic-trap') tempo = 138;
    if (mood === 'cinematic-rise') tempo = 80;

    const stepInterval = (60 / tempo / 4) * 1000; // 16th note in ms

    this.intervalId = window.setInterval(() => {
      this.tickStep();
    }, stepInterval);
  }

  private tickStep() {
    if (!this.ctx || !this.isPlaying || !this.musicGain) return;
    const t = this.ctx.currentTime;
    const s = this.step % 16;
    this.step++;

    switch (this.currentMood) {
      case 'upbeat-tech':
        this.playUpbeatTechStep(t, s);
        break;
      case 'chill-saas':
        this.playChillSaasStep(t, s);
        break;
      case 'energetic-trap':
        this.playTrapStep(t, s);
        break;
      case 'cinematic-rise':
        this.playCinematicStep(t, s);
        break;
    }
  }

  private playKick(t: number, punch: number = 1) {
    if (!this.ctx || !this.musicGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';

    osc.frequency.setValueAtTime(140, t);
    osc.frequency.exponentialRampToValueAtTime(38, t + 0.12);

    gain.gain.setValueAtTime(0.85 * punch, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);

    osc.connect(gain);
    gain.connect(this.musicGain);

    osc.start(t);
    osc.stop(t + 0.25);
  }

  private playHiHat(t: number, open: boolean = false) {
    if (!this.ctx || !this.musicGain) return;
    // High-pass filtered noise/high frequency square
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(8000, t);

    filter.type = 'highpass';
    filter.frequency.setValueAtTime(7000, t);

    const dur = open ? 0.15 : 0.04;
    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + dur);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.musicGain);

    osc.start(t);
    osc.stop(t + dur);
  }

  private playSnare(t: number) {
    if (!this.ctx || !this.musicGain) return;
    // Tone + noise punch
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, t);
    osc.frequency.exponentialRampToValueAtTime(80, t + 0.1);

    oscGain.gain.setValueAtTime(0.4, t);
    oscGain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
    osc.connect(oscGain);
    oscGain.connect(this.musicGain);
    osc.start(t);
    osc.stop(t + 0.15);

    // High snap
    const snap = this.ctx.createOscillator();
    const snapGain = this.ctx.createGain();
    snap.type = 'square';
    snap.frequency.setValueAtTime(1200, t);
    snapGain.gain.setValueAtTime(0.18, t);
    snapGain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
    snap.connect(snapGain);
    snapGain.connect(this.musicGain);
    snap.start(t);
    snap.stop(t + 0.08);
  }

  private playSynthNote(freq: number, t: number, dur: number = 0.15, type: OscillatorType = 'sawtooth', filterFreq: number = 1800) {
    if (!this.ctx || !this.musicGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(filterFreq, t);
    filter.frequency.exponentialRampToValueAtTime(400, t + dur);

    gain.gain.setValueAtTime(0.22, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + dur);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.musicGain);

    osc.start(t);
    osc.stop(t + dur);
  }

  private playUpbeatTechStep(t: number, s: number) {
    // 4 on the floor kick
    if (s === 0 || s === 4 || s === 8 || s === 12) {
      this.playKick(t, 0.9);
    }
    // Snare on 4 and 12
    if (s === 4 || s === 12) {
      this.playSnare(t);
    }
    // Hats on off-beats
    if (s % 2 === 1) {
      this.playHiHat(t, s === 6 || s === 14);
    }

    // Modern progressive synth arpeggio (C minor / Eb / F / G)
    const scale = [261.63, 311.13, 349.23, 392.00, 523.25, 622.25];
    const notes = [scale[0], scale[2], scale[4], scale[1], scale[3], scale[5], scale[2], scale[4]];
    const note = notes[s % notes.length];
    if (s % 2 === 0) {
      this.playSynthNote(note, t, 0.14, 'sawtooth', 2400);
    }
    // Sub bass
    if (s === 0 || s === 8) {
      this.playSynthNote(65.41, t, 0.35, 'sine', 300);
    }
  }

  private playChillSaasStep(t: number, s: number) {
    if (s === 0 || s === 10) {
      this.playKick(t, 0.6);
    }
    if (s === 8) {
      this.playSnare(t);
    }
    if (s % 4 === 2) {
      this.playHiHat(t, false);
    }

    // Warm chords (F maj7 to G7)
    if (s === 0) {
      this.playSynthNote(174.61, t, 0.6, 'sine', 900); // F3
      this.playSynthNote(220.00, t, 0.6, 'sine', 900); // A3
      this.playSynthNote(261.63, t, 0.6, 'sine', 900); // C4
    } else if (s === 8) {
      this.playSynthNote(196.00, t, 0.6, 'sine', 900); // G3
      this.playSynthNote(246.94, t, 0.6, 'sine', 900); // B3
      this.playSynthNote(293.66, t, 0.6, 'sine', 900); // D4
    }
  }

  private playTrapStep(t: number, s: number) {
    if (s === 0 || s === 7 || s === 10) {
      this.playKick(t, 1.1); // Big punch
      this.playSynthNote(55.0, t, 0.35, 'sine', 200); // 808 sub
    }
    if (s === 8) {
      this.playSnare(t);
    }
    // Rapid trap hats
    this.playHiHat(t, s === 15);
    if (s === 12 || s === 13 || s === 14) {
      this.playHiHat(t + 0.03, false); // Triplet roll
    }

    // Dark brass chord
    if (s === 0 || s === 8) {
      this.playSynthNote(110.0, t, 0.4, 'sawtooth', 1200);
      this.playSynthNote(164.81, t, 0.4, 'sawtooth', 1200);
    }
  }

  private playCinematicStep(t: number, s: number) {
    if (s === 0) {
      this.playKick(t, 0.7);
      // Low drone
      this.playSynthNote(73.42, t, 1.2, 'sine', 400);
      this.playSynthNote(110.0, t, 1.0, 'triangle', 800);
    }
    if (s % 4 === 0) {
      // Bell chime
      const bells = [587.33, 659.25, 783.99, 880.00];
      const freq = bells[(s / 4) % bells.length];
      this.playSynthNote(freq, t, 0.5, 'sine', 3000);
    }
  }

  public stopMusic() {
    if (this.intervalId !== null) {
      window.clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.isPlaying = false;
  }

  // Voiceover / Text-to-Speech
  public speak(
    text: string,
    lang: string = 'id-ID',
    rate: number = 1.0,
    onEnd?: () => void
  ) {
    if (!('speechSynthesis' in window)) return;

    this.stopSpeaking();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = rate;
    utterance.pitch = 1.05;

    // Try finding best voice for Indonesian or English
    const voices = window.speechSynthesis.getVoices();
    const matchedVoice = voices.find(v => v.lang.startsWith(lang.slice(0, 2)) && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Premium'))) 
      || voices.find(v => v.lang.startsWith(lang.slice(0, 2)));

    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    if (onEnd) {
      utterance.onend = () => onEnd();
      utterance.onerror = () => onEnd();
    }

    this.currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  }

  public stopSpeaking() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      this.currentUtterance = null;
    }
  }

  public stopAll() {
    this.stopMusic();
    this.stopSpeaking();
  }
}

export const soundStudio = new SoundStudio();
