import { onMounted, onBeforeUnmount } from "vue";
import { soundsEnabled, howlerUnlocked } from "./useHowler";
import { Howler } from "howler";

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
  const handleClick = () => {
    ensureAudioReady();
  };

  const handleKeydown = () => {
    ensureAudioReady();
  };

  onMounted(() => {
    // Use capture phase so we fire before anything else
    window.addEventListener("click", handleClick, { capture: true });
    window.addEventListener("keydown", handleKeydown, { capture: true });
    window.addEventListener("touchstart", handleClick, { capture: true, passive: true });
    window.addEventListener("pointerdown", handleClick, { capture: true, passive: true });
  });

  onBeforeUnmount(() => {
    window.removeEventListener("click", handleClick, { capture: true });
    window.removeEventListener("keydown", handleKeydown, { capture: true });
    window.removeEventListener("touchstart", handleClick, { capture: true });
    window.removeEventListener("pointerdown", handleClick, { capture: true });
  });
}
