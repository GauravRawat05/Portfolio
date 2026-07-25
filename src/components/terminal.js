import { resumeData } from '../content/resumeData.js';
import { playTerminalBeep } from '../audio/soundEffects.js';

export function initTerminal(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="terminal-window glass-panel">
      <div class="terminal-header">
        <div class="terminal-dots">
          <span class="dot dot-red"></span>
          <span class="dot dot-yellow"></span>
          <span class="dot dot-green"></span>
        </div>
        <div class="terminal-title">gaurav@devmind-shell:~$</div>
        <div class="terminal-badge">INTERACTIVE CLI</div>
      </div>
      <div class="terminal-body" id="terminal-output">
        <p class="term-line term-welcome">Welcome to <span class="highlight">Gaurav Rawat's Interactive Shell</span> (v2.5).</p>
        <p class="term-line term-sub">Type <span class="cmd-keyword">'help'</span> to view available commands.</p>
        <div id="terminal-history"></div>
        <div class="terminal-input-line">
          <span class="prompt">gaurav@portfolio:~$</span>
          <input type="text" id="terminal-input" placeholder="Type a command (e.g. help, skills, projects)..." autocomplete="off" spellcheck="false" />
        </div>
      </div>
    </div>
  `;

  const inputEl = document.getElementById('terminal-input');
  const historyEl = document.getElementById('terminal-history');

  const commands = {
    help: `
Available Commands:
  <span class="cmd-keyword">bio</span>            - Summary & about Gaurav
  <span class="cmd-keyword">experience</span>     - Show work history (Athenura India, Code Catalyst)
  <span class="cmd-keyword">projects</span>       - List featured full-stack & AI projects
  <span class="cmd-keyword">skills</span>         - Display technical skills & tools matrix
  <span class="cmd-keyword">education</span>      - Display degree & MCA details (IIT Patna / IIIT Ranchi)
  <span class="cmd-keyword">certifications</span> - Display IBM AI certification badge
  <span class="cmd-keyword">contact</span>        - Show email, phone & social handles
  <span class="cmd-keyword">resume</span>         - Direct link to download resume
  <span class="cmd-keyword">clear</span>          - Clear terminal output screen
  <span class="cmd-keyword">sudo hire</span>      - Special command for recruiters
    `,

    bio: `
<span class="highlight">GAURAV SINGH RAWAT</span>
Full Stack Developer Intern & Learning AI Agents and ML
Location: Faridabad, Haryana

Summary: Full Stack Developer Intern at Athenura contributing backend development across live production projects (MongoDB, Node.js, JWT). Building independent multi-agent AI systems (LangGraph, FastAPI) and e-commerce platforms (Razorpay). Currently pursuing MCA in a joint program via IIT Patna & IIIT Ranchi.
    `,

    experience: `
<span class="highlight">1. Full Stack Developer Intern — Athenura India (Feb 2026 – Present)</span>
   - Lead Management System: REST APIs, JWT auth, MongoDB schemas (112 commits, deployed to Vercel).
   - Task Management System: 4-tier RBAC (Admin, Manager, Lead, Member) + CSV bulk user import (60 commits).

<span class="highlight">2. Technical Team Member — Code Catalyst (Aug 2025 – Feb 2026)</span>
   - Conducted MERN stack workshops and code reviews for peer developers.
    `,

    projects: `
<span class="highlight">1. DevMind — Multi-Agent Code Intelligence Platform</span>
   Stack: Next.js, FastAPI, LangGraph, Celery, Redis, ChromaDB, Docker
   Link: https://github.com/GauravRawat05/DevMind

<span class="highlight">2. MoreTrendz — E-Commerce Platform</span>
   Stack: Node.js, Express, MongoDB, JWT, Razorpay, Google APIs
   Link: https://github.com/GauravRawat05/moretrendz-website

<span class="highlight">3. Branded Survey Builder — Edge App</span>
   Stack: Hono, Cloudflare Workers, Cloudflare D1, React, TanStack Router
   Link: https://github.com/GauravRawat05/sde-intern-task
    `,

    skills: `
<span class="highlight">Frontend:</span> React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5/CSS3
<span class="highlight">Backend:</span> Node.js, Express.js, FastAPI, Hono (Cloudflare Workers), REST APIs, JWT Auth, RBAC
<span class="highlight">Databases:</span> MongoDB, PostgreSQL, Cloudflare D1, ChromaDB (Vector DB)
<span class="highlight">AI & ML:</span> LangGraph, Groq/Llama-3, RAG Pipelines, Sentence-Transformers
<span class="highlight">Tools:</span> Git, GitHub, Docker, Vercel, Cloudflare Workers, Postman, CI/CD
    `,

    education: `
<span class="highlight">Master of Computer Applications (MCA)</span> — Joint Program via IIT Patna & IIIT Ranchi (Current)
<span class="highlight">Bachelor of Computer Applications (BCA)</span> — Maharshi Dayanand University (2023–2026)
<span class="highlight">Class 12th (Commerce with Maths)</span> — Jaypee Public School (74%)
    `,

    certifications: `
<span class="highlight">IBM Certified:</span> AI-Enabled Applications for Customer Service (IBM via Credly | Mar 2026)
    `,

    contact: `
<span class="highlight">Email:</span> itsgauravrawat2005@gmail.com
<span class="highlight">Phone:</span> +91 9319810682
<span class="highlight">LinkedIn:</span> linkedin.com/in/gauravsinghrawat1310
<span class="highlight">GitHub:</span> github.com/GauravRawat05
<span class="highlight">Portfolio:</span> gsr-portfolio.vercel.app
    `,

    resume: `
<span class="highlight">Resume Download Link:</span>
<a href="/Gaurav_Singh_Rawat_Resume.txt" download class="term-link">Click here to download Gaurav's Resume TXT</a>
    `,

    'sudo hire': `
<span class="highlight-green">ACCESS GRANTED!</span> 🎉
Gaurav Singh Rawat is ready for Full-Stack, Backend, & AI Developer roles.
Direct Contact: +91 9319810682 | Email: itsgauravrawat2005@gmail.com
    `
  };

  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = inputEl.value.trim().toLowerCase();
      playTerminalBeep();
      if (!val) return;

      const cmdLine = document.createElement('div');
      cmdLine.className = 'term-history-item';
      cmdLine.innerHTML = `<span class="prompt">gaurav@portfolio:~$</span> ${inputEl.value}`;

      const resLine = document.createElement('div');
      resLine.className = 'term-response';

      if (val === 'clear') {
        historyEl.innerHTML = '';
        inputEl.value = '';
        return;
      }

      if (commands[val]) {
        resLine.innerHTML = commands[val];
      } else {
        resLine.innerHTML = `<span class="term-error">Command not found: '${val}'. Type <span class="cmd-keyword">'help'</span> for a list of commands.</span>`;
      }

      historyEl.appendChild(cmdLine);
      historyEl.appendChild(resLine);
      inputEl.value = '';

      container.querySelector('.terminal-body').scrollTop = container.querySelector('.terminal-body').scrollHeight;
    }
  });
}
