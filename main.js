import { initHeroScene } from './src/three/heroScene.js';
import { toggleAudio, playHoverSound, playClickSound } from './src/audio/soundEffects.js';
import { initTerminal } from './src/components/terminal.js';
import { initAiSimulator } from './src/components/aiSimulator.js';
import { initModals } from './src/components/modals.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize 3D Hero Scene
  try {
    initHeroScene('webgl-container');
  } catch (err) {
    console.error('WebGL initialization error:', err);
  }

  // 2. Hide Preloader Overlay after load
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.classList.add('hidden');
    }
  }, 800);

  // 3. Audio Toggle Controller
  const audioBtn = document.getElementById('audio-toggle');
  const audioText = document.getElementById('audio-status-text');

  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      const isEnabled = toggleAudio();
      audioText.textContent = isEnabled ? 'AUDIO: ON' : 'AUDIO: OFF';
    });
  }

  // 4. Initialize Interactive Components
  initTerminal('terminal-container');
  initAiSimulator('ai-simulator-container');
  initModals();

  // 5. Sound hover triggers on interactive elements
  const interactiveEls = document.querySelectorAll('.btn, .project-card, .skill-card, .timeline-card, .nav-links a');
  interactiveEls.forEach(el => {
    el.addEventListener('mouseenter', () => {
      playHoverSound();
    });
    el.addEventListener('click', () => {
      playClickSound();
    });
  });
});
