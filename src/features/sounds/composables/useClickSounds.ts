import { onMounted, onBeforeUnmount } from "vue";
import { playSound } from "../utils/sounds";
import { soundsEnabled, howlerUnlocked } from "./useHowler";
import { Howler } from "howler";
import type { SoundKey } from "../types";

let audioContextResumed = false;

function ensureAudioReady(): void {
  if (!audioContextResumed) {
    // Resume the AudioContext (required by browser autoplay policy)
    if (Howler.ctx && Howler.ctx.state === "suspended") {
      Howler.ctx.resume();
    }
    audioContextResumed = true;
  }
  if (!howlerUnlocked.value) {
    howlerUnlocked.value = true;
    soundsEnabled.value = true;
    Howler.volume(1);
  }
}

export function useClickSound(): void {
  const handleClick = (e: MouseEvent) => {
    ensureAudioReady();

    if (!soundsEnabled.value) return;

    const target = e.target as HTMLElement | null;
    if (!target) return;

    // If element has data-sound, use that sound
    const elWithSound = target.closest<HTMLElement>("[data-sound]");
    if (elWithSound && elWithSound.dataset.sound) {
      playSound(elWithSound.dataset.sound as SoundKey);
      return;
    }

    // For any other clickable element, play click sound
    if (
      target.closest(
        "button, a, [role='button'], .children-unclickable, .header-home-link, .preview-card, .experience-card, .edu-card, .cert-card, .exp-tag, .exp-repo-btn"
      )
    ) {
      playSound("click");
    }
  };

  const handleKeydown = (e: KeyboardEvent) => {
    ensureAudioReady();

    if (!soundsEnabled.value) return;

    // Ignore modifier & function keys
    if (
      [
        "Alt", "Control", "Shift", "Meta", "CapsLock", "Escape", "Tab",
        "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12",
      ].includes(e.key)
    ) {
      return;
    }

    // Don't interfere with M-key sound toggle
    if (e.code === "KeyM") return;

    // Only play keyboard sound when typing in a text input (e.g. CLI terminal)
    const activeEl = document.activeElement as HTMLElement | null;
    if (
      activeEl &&
      (activeEl.tagName === "INPUT" || activeEl.tagName === "TEXTAREA" || activeEl.isContentEditable)
    ) {
      playSound("keyboard");
    }
  };

  onMounted(() => {
    // Use capture phase so we fire before anything else
    window.addEventListener("click", handleClick, { capture: true });
    window.addEventListener("keydown", handleKeydown, { capture: true });
  });

  onBeforeUnmount(() => {
    window.removeEventListener("click", handleClick, { capture: true });
    window.removeEventListener("keydown", handleKeydown, { capture: true });
  });
}
