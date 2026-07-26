let audioCtx = null;
let soundEnabled = false;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function isAudioMuted() {
  return !soundEnabled;
}

export function toggleAudio() {
  soundEnabled = !soundEnabled;
  if (soundEnabled) {
    getAudioContext();
  }
  return soundEnabled;
}

export function playClickSound() {
  return;
}

export function playHoverSound() {
  return;
}

export function playTerminalBeep() {
  return;
}

export function playSwooshSound() {
  return;
}
