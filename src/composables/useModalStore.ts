import { ref } from "vue";

const isGetInTouchOpen = ref(false);
const isStartProjectOpen = ref(false);

export function useModalStore() {
  const openGetInTouch = () => {
    isGetInTouchOpen.value = true;
    isStartProjectOpen.value = false;
  };

  const closeGetInTouch = () => {
    isGetInTouchOpen.value = false;
  };

  const openStartProject = () => {
    isStartProjectOpen.value = true;
    isGetInTouchOpen.value = false;
  };

  const closeStartProject = () => {
    isStartProjectOpen.value = false;
  };

  return {
    isGetInTouchOpen,
    isStartProjectOpen,
    openGetInTouch,
    closeGetInTouch,
    openStartProject,
    closeStartProject,
  };
}
