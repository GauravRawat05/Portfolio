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
  let lastClickTime = 0;

  const handleClick = (e: MouseEvent) => {
    ensureAudioReady();

    // Prevent duplicate click sound within 150ms
    const now = Date.now();
    if (now - lastClickTime < 150) return;
    lastClickTime = now;

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
        "button, a, [role='button'], .btn, .children-unclickable, .header-home-link, .preview-card, .experience-card, .edu-card, .cert-card, .exp-tag, .exp-repo-btn"
      )
    ) {
      playSound("click");
    }
  };

  const handleTouchOrPointer = () => {
    ensureAudioReady();
  };

  onMounted(() => {
    // Use capture phase so we fire before anything else
    window.addEventListener("click", handleClick, { capture: true });
    window.addEventListener("keydown", handleTouchOrPointer, { capture: true });
    window.addEventListener("touchstart", handleTouchOrPointer, { capture: true, passive: true });
    window.addEventListener("pointerdown", handleTouchOrPointer, { capture: true, passive: true });
  });

  onBeforeUnmount(() => {
    window.removeEventListener("click", handleClick, { capture: true });
    window.removeEventListener("keydown", handleTouchOrPointer, { capture: true });
    window.removeEventListener("touchstart", handleTouchOrPointer, { capture: true });
    window.removeEventListener("pointerdown", handleTouchOrPointer, { capture: true });
  });
}
