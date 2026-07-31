<script setup lang="ts">
import NotchSection from "../../../components/NotchSection.vue";
import Banner from "../../../components/Banner.vue";
import ButtonRound from "../../../components/ButtonRound.vue";
import ArrowRight from "../../../components/icons/ArrowRight.vue";

const eduList = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Joint Program via IIT Patna & IIIT Ranchi",
    period: "Current / Ongoing",
    badge: "IIT Patna & IIIT Ranchi",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Maharshi Dayanand University, Faridabad",
    period: "2023 – 2026",
    badge: "63%",
  },
  {
    degree: "Class 12th — Commerce with Maths",
    institution: "Jaypee Public School, Faridabad",
    period: "2023",
    badge: "74%",
  },
];

const certUrl = "https://www.credly.com/go/Sm0R9QnZ";
</script>

<template>
  <div class="education">
    <NotchSection class="education-notch-start" />
    <NotchSection class="education-notch-end" />

    <div class="grid">
      <div class="education-title">
        <Banner class="education-title-banner" copy="Academic & Badges" size="sm" animated />
        <h2 class="education-title-copy">Education & Credentials</h2>
      </div>
    </div>

    <div class="grid">
      <div class="education-cards">
        <div v-for="item in eduList" :key="item.degree" class="edu-card">
          <div class="edu-badge">{{ item.badge }}</div>
          <h3 class="edu-degree">{{ item.degree }}</h3>
          <p class="edu-inst">{{ item.institution }}</p>
          <span class="edu-period">{{ item.period }}</span>
        </div>

        <!-- Certification Card with External Certificate Link Arrow -->
        <div class="cert-card">
          <div class="cert-left">
            <div class="cert-icon">🏆</div>
            <div>
              <span class="cert-tag">IBM CERTIFIED</span>
              <h3 class="cert-title">IBM AI-Enabled Applications for Customer Service</h3>
              <p class="cert-issuer">Issued by IBM via Credly • Mar 2026</p>
            </div>
          </div>

          <a :href="certUrl" target="_blank" rel="noopener" class="cert-arrow-link" title="Verify Certificate on Credly">
            <ButtonRound variant="accent" data-cursor="circle-white" data-sound="click" data-hoversound="hover">
              <ArrowRight class="cert-arrow-icon" />
            </ButtonRound>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.education {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  gap: var(--space-xl);
  padding: 96px var(--space-outer);
  background-color: var(--color-beige-400);

  @include mixins.mq("md") {
    padding: 120px var(--space-outer);
    gap: var(--space-xxl);
  }

  &-title {
    position: relative;
    padding-top: var(--space-md);
    grid-column: 1 / 13;

    @include mixins.mq("lg") {
      grid-column: 3 / 8;
    }

    &-copy {
      font-weight: 900;
      letter-spacing: 0.02em;
      font-size: var(--font-size-title-md);

      @include mixins.mq("sm") {
        font-size: var(--font-size-title-lg);
      }
    }

    &-banner {
      position: absolute;
      top: 0;
      left: -8px;
      transform: translate(0, -20%) rotate(-4deg);
    }
  }

  &-notch {
    &-start {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(-100%);
      color: var(--color-beige-400);
      --icon-color: var(--color-beige-400);
    }

    &-end {
      position: absolute;
      bottom: 0;
      left: 0;
      color: var(--color-beige-600);
      --icon-color: var(--color-beige-600);
    }
  }

  &-cards {
    grid-column: 1 / 13;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-lg);
    width: 100%;

    @include mixins.mq("lg") {
      grid-column: 3 / 11;
    }
  }
}

.edu-card {
  background-color: #ffffff;
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 2px solid var(--color-beige-600);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.edu-badge {
  font-family: "ProFontWindows", monospace;
  font-size: 0.75rem;
  background: var(--color-orange-400, #f97316);
  color: #fff;
  padding: 4px 10px;
  border-radius: 12px;
  width: fit-content;
  margin-bottom: 12px;
  font-weight: bold;
}

.edu-degree {
  font-size: 1.15rem;
  font-weight: 800;
  margin-bottom: 6px;
}

.edu-inst {
  color: #555;
  font-size: 0.9rem;
  margin-bottom: 14px;
}

.edu-period {
  font-family: "ProFontWindows", monospace;
  font-size: 0.8rem;
  color: #888;
}

.cert-card {
  grid-column: 1 / -1;
  background: linear-gradient(135deg, #1e293b, #0f172a);
  color: #fff;
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.cert-left {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.cert-icon {
  font-size: 2.5rem;
}

.cert-tag {
  font-family: "ProFontWindows", monospace;
  color: #38bdf8;
  font-size: 0.75rem;
  letter-spacing: 1px;
}

.cert-title {
  font-size: 1.3rem;
  font-weight: 800;
  margin: 4px 0;
}

.cert-issuer {
  color: #94a3b8;
  font-size: 0.85rem;
}

.cert-arrow-link {
  text-decoration: none;
}

.cert-arrow-icon {
  width: 24px;
  height: 24px;
}
</style>
