import { onMounted, onUnmounted, ref, watch } from "vue";
import gsap from "gsap";
import { lerp } from "../../../utils/math";
import { Howler } from "howler";
import { isFeatureEnabled } from "../../../utils/features";
import { tick as contactTick } from "../core/contact";
import { stopSnoreRepetition } from "../core/contact";
import { tick as roomTick } from "../core/room";
import { sounds } from "../definitions/sounds";
import { getSoundsHowl } from "../utils/sounds";

import type { SoundKey } from "../types";

export const howlerUnlocked = ref(false);
export const soundsEnabled = ref(true);

// Start with volume 1 so sounds work on first interaction
Howler.volume(1);

export const useHowler = () => {
  const enabledVolume = ref<number>(1);

  const handleUnlocked = () => {
    howlerUnlocked.value = true;
    soundsEnabled.value = true;
    localStorage.setItem("portfolio-soundsEnabled", "true");
  };

  const tick = () => {
    if (!howlerUnlocked.value) {
      if (Howler.ctx && Howler.ctx.state === "running") {
        handleUnlocked();
      }
      return;
    }

    contactTick();
    roomTick();

    const currentVolume = Howler.volume();
    if (currentVolume > 0.99 && enabledVolume.value === 1) {
      return;
    }
    const speed = enabledVolume.value === 1 ? 0.01 : 0.05;
    Howler.volume(lerp(currentVolume, enabledVolume.value, speed));
  };

  const handleVisibilityChange = () => {
    Howler.mute(document.visibilityState === "hidden");
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.code === "KeyM") {
      soundsEnabled.value = !soundsEnabled.value;
    }
  };

  watch(soundsEnabled, (newVal) => {
    if (!isFeatureEnabled("sounds")) return;
    enabledVolume.value = newVal ? 1 : 0;
    localStorage.setItem("portfolio-soundsEnabled", newVal.toString());
  });

  const loadAllSounds = () => {
    for (const sound of Object.keys(sounds) as SoundKey[]) {
      const howl = getSoundsHowl(sound);
      if (howl) {
        howl.load();
      }
    }
  };

  onMounted(() => {
    if (!isFeatureEnabled("sounds")) return;

    // Keep volume at 1, sounds are ON by default
    Howler.volume(1);
    enabledVolume.value = 1;

    gsap.ticker.add(tick);
    window.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("keydown", handleKeyPress);

    loadAllSounds();
  });

  onUnmounted(() => {
    if (!isFeatureEnabled("sounds")) return;
    gsap.ticker.remove(tick);
    window.removeEventListener("visibilitychange", handleVisibilityChange);
    window.removeEventListener("keydown", handleKeyPress);
    stopSnoreRepetition();
  });
};
