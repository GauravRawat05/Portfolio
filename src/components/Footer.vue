<script setup lang="ts">
import Social from "./Social.vue";
import Link from "./Link.vue";
import Clickable from "./Clickable.vue";
import NotchSection from "./NotchSection.vue";
import { t } from "../i18n/utils/translate";
import ButtonRound from "./ButtonRound.vue";
import { lenis } from "../composables/useScroll";
import ArrowRightLong from "./icons/ArrowRightLong.vue";

interface Props {
  withSocial?: boolean;
}

const handleBackToTop = () => {
  if (!lenis.value) return;
  lenis.value.scrollTo(0);
};

const { withSocial = true } = defineProps<Props>();
const showAttribution = import.meta.env.VITE_SHOW_ATTRIBUTION !== "false";
</script>

<template>
  <footer class="footer">
    <NotchSection class="footer-notch" />
    <div class="footer-content">
      <div
        class="footer-back-to-top"
        tabindex="0"
        @click="handleBackToTop"
        @keydown.enter="handleBackToTop"
        data-cursor="circle-white"
        data-sound="click"
      >
        <ButtonRound renderAs="div" variant="border" class="children-unclickable" data-hoversound="hover">
          <ArrowRightLong class="footer-back-to-top-icon" />
        </ButtonRound>
      </div>

      <div class="footer-top">
        <Social v-if="withSocial" />
      </div>

      <div class="footer-credits">
        <div v-if="showAttribution" class="footer-credits-built">
          <p>
            {{ t("original-concept-by") }}
          </p>
          <Clickable renderAs="div">
            <Link
              href="https://david-hckh.com"
              class="footer-link children-unclickable"
              external
              data-cursor="circle-white"
              data-hoversound="hover"
              >David Heckhoff</Link
            >
          </Clickable>
        </div>
        <p>© {{ new Date().getFullYear() }} Gaurav Singh Rawat</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background: var(--color-background-300, var(--color-beige-400));
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-lg);
    width: 100%;
    max-width: calc(var(--breakpoint-xxxl));
    padding: calc(var(--space-outer) + var(--space-md)) var(--space-outer) var(--space-xl) var(--space-outer);
    position: relative;
  }

  &-back-to-top {
    cursor: pointer;
    margin-bottom: var(--space-sm);

    &-icon {
      transform: rotate(-90deg);
    }
  }

  &-top {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: var(--space-xl);
  }

  &-link {
    font-weight: 700;
  }

  &-credits {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xs);
    width: 100%;
    font-size: var(--font-size-sm);
    text-align: center;
    margin-top: var(--space-sm);

    &-built {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: var(--space-xxs);
    }
  }

  &-notch {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    color: var(--color-background-300, var(--color-beige-400));
    --icon-color: var(--color-background-300, var(--color-beige-400));
  }
}
</style>
