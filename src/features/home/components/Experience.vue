<script setup lang="ts">
import { ref } from "vue";
import NotchSection from "../../../components/NotchSection.vue";
import Banner from "../../../components/Banner.vue";
import ButtonRound from "../../../components/ButtonRound.vue";
import ArrowRight from "../../../components/icons/ArrowRight.vue";

const isAthenuraExpanded = ref(false);

const experiences = [
  {
    id: "athenura",
    role: "Full Stack Developer Intern",
    company: "Athenura India • Noida Sec 62",
    period: "Feb 2026 – Present",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs"],
    highlights: [
      "Contribute backend development across live production projects.",
      "Lead Management System (LMS): Delivered core backend logic (REST APIs, JWT auth, MongoDB schemas) — 112 commits, deployed to Vercel.",
      "Task Management System: Led a 2-person team building a 4-tier RBAC system (Admin, Manager, Lead, Member) with CSV bulk user import — 60 commits.",
    ],
    projects: [
      {
        name: "Lead Management System (LMS)",
        commits: "112 Commits",
        github: "https://github.com/GauravRawat05",
        desc: "Backend developer delivering core REST APIs, JWT authentication, and MongoDB schema architecture.",
      },
      {
        name: "Task Management System (4-Tier RBAC)",
        commits: "60 Commits",
        github: "https://github.com/GauravRawat05",
        desc: "Led a 2-person team engineering 4-tier Role-Based Access Control (Admin, Manager, Lead, Member) with bulk CSV user import.",
      },
    ],
  },
  {
    id: "code-catalyst",
    role: "Technical Team Member",
    company: "Code Catalyst • Faridabad",
    period: "Aug 2025 – Feb 2026",
    tech: ["MERN Stack", "Peer Mentorship", "Code Review"],
    highlights: [
      "Led technical workshops on MERN stack development for peer students.",
      "Conducted code reviews across peer projects to support code quality improvements.",
    ],
  },
];

const toggleAthenura = () => {
  isAthenuraExpanded.value = !isAthenuraExpanded.value;
};
</script>

<template>
  <div class="experience">
    <NotchSection class="experience-notch-start" />
    <NotchSection class="experience-notch-end" />
    
    <div class="grid">
      <div class="experience-title">
        <Banner class="experience-title-banner" copy="Work History" size="sm" animated />
        <h2 class="experience-title-copy">Experience</h2>
      </div>
    </div>

    <div class="grid">
      <div class="experience-cards">
        <div v-for="exp in experiences" :key="exp.company" class="experience-card">
          <div class="exp-header">
            <div>
              <h3 class="exp-role">{{ exp.role }}</h3>
              <p class="exp-company">{{ exp.company }}</p>
            </div>
            
            <div class="exp-header-right">
              <span class="exp-period">{{ exp.period }}</span>
              <ButtonRound
                v-if="exp.projects"
                variant="accent"
                @click="toggleAthenura"
                :class="{ 'arrow-rotated': isAthenuraExpanded }"
                title="Toggle Full Project Details & Repos"
                data-cursor="circle-white"
                data-sound="click"
              >
                <ArrowRight class="exp-arrow-icon" />
              </ButtonRound>
            </div>
          </div>

          <ul class="exp-highlights">
            <li v-for="(h, i) in exp.highlights" :key="i">{{ h }}</li>
          </ul>

          <!-- Expandable Full Project Details for Athenura -->
          <div v-if="exp.projects && isAthenuraExpanded" class="exp-expanded-details">
            <h4 class="exp-details-title">Key Production Systems & GitHub Repositories:</h4>
            <div class="exp-projects-grid">
              <div v-for="p in exp.projects" :key="p.name" class="exp-project-box">
                <div class="exp-p-header">
                  <span class="exp-p-name">{{ p.name }}</span>
                  <span class="exp-p-commits">{{ p.commits }}</span>
                </div>
                <p class="exp-p-desc">{{ p.desc }}</p>
                <a :href="p.github" target="_blank" rel="noopener" class="exp-repo-btn">
                  <span>View Repository</span>
                  <ArrowRight class="mini-arrow" />
                </a>
              </div>
            </div>
          </div>

          <div class="exp-tech-tags">
            <span v-for="t in exp.tech" :key="t" class="exp-tag">{{ t }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.experience {
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
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
    width: 100%;

    @include mixins.mq("lg") {
      grid-column: 3 / 11;
    }
  }

  &-card {
    background-color: #ffffff;
    border-radius: var(--radius-lg);
    padding: var(--space-lg);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    border: 2px solid var(--color-beige-600);
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
  }
}

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 10px;
}

.exp-header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.exp-arrow-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.arrow-rotated .exp-arrow-icon {
  transform: rotate(90deg);
}

.exp-role {
  font-size: 1.3rem;
  font-weight: 800;
}

.exp-company {
  color: #1e3a8a; /* Dark Navy Blue */
  font-weight: 700;
  margin-top: 2px;
}

.exp-period {
  font-family: "ProFontWindows", monospace;
  font-size: 0.85rem;
  background: var(--color-beige-400);
  padding: 4px 12px;
  border-radius: 20px;
}

.exp-highlights {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.exp-highlights li {
  position: relative;
  padding-left: 20px;
  color: #444;
  font-size: 0.95rem;
}

.exp-highlights li::before {
  content: "✦";
  position: absolute;
  left: 0;
  color: var(--color-orange-400, #f97316);
}

.exp-expanded-details {
  background: var(--color-beige-400);
  border: 1px solid var(--color-beige-600);
  border-radius: var(--radius-md);
  padding: 16px;
  margin-top: 8px;
}

.exp-details-title {
  font-size: 0.95rem;
  font-weight: 800;
  margin-bottom: 12px;
  color: #1e293b;
}

.exp-projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 12px;
}

.exp-project-box {
  background: #ffffff;
  border: 1px solid var(--color-beige-600);
  border-radius: var(--radius-md);
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.exp-p-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.exp-p-name {
  font-weight: 800;
  font-size: 0.9rem;
  color: #0f172a;
}

.exp-p-commits {
  font-family: "ProFontWindows", monospace;
  font-size: 0.75rem;
  background: #f97316;
  color: #fff;
  padding: 2px 8px;
  border-radius: 10px;
}

.exp-p-desc {
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 10px;
}

.exp-repo-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #1e3a8a;
  font-weight: 700;
  font-size: 0.85rem;
  text-decoration: none;
}

.mini-arrow {
  width: 14px;
  height: 14px;
}

.exp-tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 6px;
}

.exp-tag {
  background: var(--color-beige-400);
  border: 1px solid var(--color-beige-600);
  padding: 4px 12px;
  border-radius: 14px;
  font-size: 0.8rem;
  font-family: "ProFontWindows", monospace;
}
</style>
