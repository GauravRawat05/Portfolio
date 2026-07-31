<script setup lang="ts">
import { ref } from "vue";
import NotchSection from "../../../components/NotchSection.vue";
import Banner from "../../../components/Banner.vue";

const inputVal = ref("");
const history = ref<{ prompt: string; response: string }[]>([]);
const inputRef = ref<HTMLInputElement | null>(null);

const commands: Record<string, string> = {
  help: `
Available Commands:
  bio            - Summary & about Gaurav
  experience     - Show work history (Athenura India, Code Catalyst)
  projects       - List featured full-stack & AI projects
  skills         - Display technical skills & tools matrix
  education      - Display degree & MCA details (IIT Patna / IIIT Ranchi)
  certifications - Display IBM AI certification badge
  contact        - Show email, phone & social handles
  resume         - Direct link to download resume
  clear          - Clear terminal output screen
  sudo hire      - Special command for recruiters
  `,

  bio: `GAURAV SINGH RAWAT
Full Stack Developer Intern & Learning AI Agents and ML
Location: Faridabad, Haryana

Summary: Full Stack Developer Intern at Athenura contributing backend development across live production projects (MongoDB, Node.js, JWT). Pursuing MCA in a joint program via IIT Patna & IIIT Ranchi.`,

  experience: `1. Full Stack Developer Intern — Athenura India (Feb 2026 – Present)
   - Website: https://www.athenura.in/ | LinkedIn: https://www.linkedin.com/company/athenura
   - Lead Management System: REST APIs, JWT auth, MongoDB schemas (112 commits, deployed to Vercel).
   - Task Management System: 4-tier RBAC + CSV bulk user import (60 commits).

2. Technical Team Member — Code Catalyst (Aug 2025 – Feb 2026)
   - Conducted MERN stack workshops and code reviews for peer developers.`,

  projects: `1. DevMind — Multi-Agent Code Intelligence Platform
   Stack: Next.js, FastAPI, LangGraph, Celery, Redis, ChromaDB
   Link: https://github.com/GauravRawat05/DevMind

2. MoreTrendz — E-Commerce Platform
   Stack: Node.js, Express, MongoDB, JWT, Razorpay
   Link: https://github.com/GauravRawat05/moretrendz-website

3. Branded Survey Builder — Edge App
   Stack: Hono, Cloudflare Workers, Cloudflare D1, React
   Link: https://github.com/GauravRawat05/sde-intern-task`,

  skills: `Frontend: React.js, Next.js, TypeScript, Tailwind CSS
Backend: Node.js, Express.js, FastAPI, Hono (Cloudflare Workers), REST APIs, JWT Auth, RBAC
Databases: MongoDB, PostgreSQL, Cloudflare D1, ChromaDB (Vector DB)
AI & ML: LangGraph, Groq/Llama-3, RAG Pipelines, Sentence-Transformers
Tools: Git, GitHub, Docker, Vercel, Cloudflare Workers, Postman`,

  education: `Master of Computer Applications (MCA) — Joint Program via IIT Patna & IIIT Ranchi (Current)
Bachelor of Computer Applications (BCA) (63%) — Maharshi Dayanand University (2023–2026)
Class 12th (Commerce with Maths) — Jaypee Public School (74%)`,

  certifications: `IBM Certified: AI-Enabled Applications for Customer Service (IBM via Credly | Mar 2026)`,

  contact: `Email: itsgauravrawat2005@gmail.com
Phone: +91 9319810682
LinkedIn: linkedin.com/in/gauravsinghrawat1310
GitHub: github.com/GauravRawat05`,

  resume: `Resume Download Link:
Download Gaurav's Resume PDF: /Gaurav_Singh_Rawat_Resume.pdf`,

  "sudo hire": `ACCESS GRANTED! 🎉
Gaurav Singh Rawat is ready for Full-Stack, Backend, & AI Developer roles.
Direct Contact: +91 9319810682 | Email: itsgauravrawat2005@gmail.com`,
};

const handleEnter = () => {
  const val = inputVal.value.trim().toLowerCase();
  if (!val) return;

  if (val === "clear") {
    history.value = [];
    inputVal.value = "";
    return;
  }

  const res = commands[val] || `Command not found: '${val}'. Type 'help' for available commands.`;
  history.value.push({ prompt: inputVal.value, response: res });
  inputVal.value = "";
};

const focusInput = () => {
  if (inputRef.value) {
    inputRef.value.focus();
  }
};
</script>

<template>
  <div class="terminal-section">
    <NotchSection class="terminal-notch-start" />
    <NotchSection class="terminal-notch-end" />

    <div class="grid">
      <div class="terminal-title">
        <Banner class="terminal-title-banner" copy="Interactive CLI" size="sm" animated />
        <h2 class="terminal-title-copy">Developer Terminal</h2>
      </div>
    </div>

    <div class="grid">
      <div class="terminal-window" @click="focusInput" data-lenis-prevent>
        <div class="terminal-header">
          <div class="terminal-dots">
            <span class="dot dot-red"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-green"></span>
          </div>
          <div class="terminal-title-text">gaurav@devmind-shell:~$</div>
        </div>

        <div class="terminal-body" data-lenis-prevent @wheel.stop>
          <p class="term-intro">Welcome to <strong>Gaurav Rawat's Interactive Shell</strong> (v2.5).</p>
          <p class="term-sub">Type <code>'help'</code> to view available commands.</p>

          <div v-for="(item, idx) in history" :key="idx" class="term-history-group">
            <div class="term-line">
              <span class="prompt">gaurav@portfolio:~$</span> {{ item.prompt }}
            </div>
            <pre class="term-response">{{ item.response }}</pre>
          </div>

          <div class="term-input-row">
            <span class="prompt">gaurav@portfolio:~$</span>
            <input
              ref="inputRef"
              v-model="inputVal"
              @keydown.enter="handleEnter"
              type="text"
              placeholder="Type a command (e.g. help, skills, projects)..."
              spellcheck="false"
              autocomplete="off"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.terminal-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  gap: var(--space-xl);
  padding: 96px var(--space-outer) 48px var(--space-outer);
  background-color: var(--color-beige-400);

  @include mixins.mq("md") {
    padding: 120px var(--space-outer) 48px var(--space-outer);
    gap: var(--space-xxl);
  }

  .terminal-title {
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

  .terminal-notch {
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
}

.terminal-window {
  grid-column: 1 / 13;
  width: 100%;
  background: #0f172a;
  color: #f8fafc;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  cursor: text;

  @include mixins.mq("lg") {
    grid-column: 3 / 11;
  }
}

.terminal-header {
  background: #1e293b;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.terminal-dots {
  display: flex;
  gap: 8px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.dot-red { background: #ef4444; }
.dot-yellow { background: #f59e0b; }
.dot-green { background: #10b981; }

.terminal-title-text {
  font-family: "ProFontWindows", monospace;
  font-size: 0.8rem;
  color: #94a3b8;
}

.terminal-body {
  padding: 24px;
  font-family: "ProFontWindows", monospace;
  font-size: 0.9rem;
  min-height: 300px;
  max-height: 450px;
  overflow-y: auto;
  scrollbar-width: none; /* Hide scrollbar Firefox */
  overscroll-behavior: contain; /* Prevent parent page scrolling */
}

.terminal-body::-webkit-scrollbar {
  display: none; /* Hide scrollbar Chrome/Safari */
}

.term-intro {
  color: #38bdf8;
  margin-bottom: 4px;
}

.term-sub {
  color: #94a3b8;
  margin-bottom: 20px;
}

.prompt {
  color: #a855f7;
  font-weight: bold;
}

.term-history-group {
  margin-bottom: 16px;
}

.term-line {
  margin-bottom: 4px;
}

.term-response {
  color: #e2e8f0;
  white-space: pre-wrap;
  background: rgba(255, 255, 255, 0.04);
  padding: 10px 14px;
  border-radius: 8px;
  font-family: inherit;
}

.term-input-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.term-input-row input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #38bdf8;
  font-family: inherit;
  font-size: 0.9rem;
}
</style>
