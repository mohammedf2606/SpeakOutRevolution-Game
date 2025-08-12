// Sound effects and audio utilities for the game

export class AudioManager {
  constructor() {
    this.audioContext = null;
    this.sounds = {};
    this.isMuted = false;
    this.volume = 0.5;
    
    // Initialize audio context on user interaction
    this.initAudioContext();
  }

  initAudioContext() {
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (error) {
      console.log('Web Audio API not supported');
    }
  }

  // Create simple sound effects using Web Audio API
  createTone(frequency, duration, type = 'sine') {
    if (!this.audioContext || this.isMuted) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
    oscillator.type = type;

    gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(this.volume * 0.3, this.audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + duration);
  }

  // Sound effects for different game events
  playCorrectAnswer() {
    // Success sound - ascending notes
    this.createTone(523.25, 0.2); // C5
    setTimeout(() => this.createTone(659.25, 0.2), 100); // E5
    setTimeout(() => this.createTone(783.99, 0.3), 200); // G5
  }

  playWrongAnswer() {
    // Error sound - descending harsh notes
    this.createTone(349.23, 0.3, 'sawtooth'); // F4
    setTimeout(() => this.createTone(293.66, 0.3, 'sawtooth'), 150); // D4
    setTimeout(() => this.createTone(220.00, 0.5, 'sawtooth'), 300); // A3
  }

  playButtonClick() {
    // Simple click sound
    this.createTone(800, 0.1, 'square');
  }

  playLifelineUsed() {
    // Special effect for lifeline
    this.createTone(440, 0.1); // A4
    setTimeout(() => this.createTone(554.37, 0.1), 50); // C#5
    setTimeout(() => this.createTone(659.25, 0.2), 100); // E5
  }

  playGameOver() {
    // Sad descending sequence
    const notes = [523.25, 493.88, 440.00, 392.00, 349.23];
    notes.forEach((note, index) => {
      setTimeout(() => this.createTone(note, 0.4, 'triangle'), index * 200);
    });
  }

  playVictory() {
    // Victory fanfare
    const victoryNotes = [523.25, 659.25, 783.99, 1046.50];
    victoryNotes.forEach((note, index) => {
      setTimeout(() => this.createTone(note, 0.3), index * 150);
    });
    setTimeout(() => this.createTone(1046.50, 1, 'triangle'), 600);
  }

  playTimerWarning() {
    // Urgent beeping
    this.createTone(1000, 0.1, 'square');
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  setVolume(volume) {
    this.volume = Math.max(0, Math.min(1, volume));
  }

  // Resume audio context after user interaction (required by many browsers)
  resumeAudioContext() {
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
  }
}

// Create a singleton instance
export const audioManager = new AudioManager();

// Auto-resume audio context on first user interaction
document.addEventListener('click', () => {
  audioManager.resumeAudioContext();
}, { once: true });

document.addEventListener('keydown', () => {
  audioManager.resumeAudioContext();
}, { once: true });
