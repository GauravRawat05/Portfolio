export const resumeData = {
  personal: {
    name: "GAURAV SINGH RAWAT",
    role: "Full Stack Developer Intern & Learning AI Agents and ML",
    location: "Faridabad, Haryana",
    phone: "+91 9319810682",
    email: "itsgauravrawat2005@gmail.com",
    linkedin: "https://linkedin.com/in/gauravsinghrawat1310",
    github: "https://github.com/GauravRawat05",
    portfolioUrl: "https://gsr-portfolio.vercel.app",
    summary: "Full Stack Developer Intern at Athenura, contributing backend development across live production projects (MongoDB, Node.js, JWT). Building independent projects spanning multi-agent AI systems (LangGraph, FastAPI) and full-stack e-commerce (Node.js, Razorpay). IBM AI Certified and currently pursuing MCA in a joint program via IIT Patna & IIIT Ranchi."
  },
  stats: [
    { label: "Production Projects", value: "3+" },
    { label: "Backend Commits", value: "170+" },
    { label: "Tech Stack Tools", value: "15+" },
    { label: "AI Agent Frameworks", value: "LangGraph" }
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Joint Program via IIT Patna & IIIT Ranchi",
      period: "Current / Ongoing",
      badge: "IIT Patna & IIIT Ranchi"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Maharshi Dayanand University, Faridabad",
      period: "2023 – 2026",
      grade: "63%",
      badge: "63%"
    },
    {
      degree: "Class 12th — Commerce with Maths",
      institution: "Jaypee Public School, Faridabad",
      period: "2023",
      grade: "74%",
      badge: "74%"
    }
  ],
  certifications: [
    {
      title: "IBM AI-Enabled Applications for Customer Service",
      issuer: "IBM via Credly",
      date: "Mar 2026",
      icon: "cpu"
    }
  ],
  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "Athenura India",
      website: "https://www.athenura.in/",
      linkedin: "https://www.linkedin.com/company/athenura",
      period: "Feb 2026 – Present",
      location: "Noida Sec 62 / Faridabad",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
      highlights: [
        "Contribute backend development across live production projects.",
        "Lead Management System: Joined mid-build as backend developer, delivering core backend logic (REST APIs, JWT auth, MongoDB schemas) — 112 commits, deployed to Vercel.",
        "Task Management System: Led a 2-person team building a 4-tier RBAC system (Admin, Manager, Lead, Member) with CSV bulk user import — 60 commits."
      ]
    },
    {
      role: "Technical Team Member",
      company: "Code Catalyst",
      period: "Aug 2025 – Feb 2026",
      location: "Faridabad",
      tech: ["MERN Stack", "Mentorship", "Code Review"],
      highlights: [
        "Led technical workshops on MERN stack development for peer students.",
        "Conducted code reviews across peer projects to support code quality improvements."
      ]
    }
  ],
  projects: [
    {
      id: "devmind",
      title: "DevMind — Multi-Agent Code Intelligence Platform",
      category: "AI & Multi-Agent",
      github: "https://github.com/GauravRawat05/DevMind",
      stack: ["Next.js", "FastAPI", "LangGraph", "Celery", "Redis", "ChromaDB", "PostgreSQL", "MongoDB", "Docker"],
      description: "Built a 4-agent pipeline (Doc, Review, Q&A, Analytics) that analyzes GitHub repositories in parallel using LangGraph state graphs and Groq/Llama-3.",
      highlights: [
        "Designed an async job architecture with Celery + Redis pub/sub and real-time WebSocket progress streaming to the frontend.",
        "Implemented RAG-based codebase Q&A using ChromaDB vector indexing with sentence-transformer embeddings.",
        "Parallelized codebase indexing and multi-agent coordination with state preservation."
      ],
      agents: [
        { name: "Doc Agent", role: "Extracts AST & generates comprehensive technical architecture documentation." },
        { name: "Review Agent", role: "Scans code paths for security risks, anti-patterns & performance bottlenecks." },
        { name: "Q&A Agent", role: "RAG vector retrieval over repository embeddings powered by ChromaDB." },
        { name: "Analytics Agent", role: "Computes complexity metrics, commit health, and maintainability scores." }
      ]
    },
    {
      id: "moretrendz",
      title: "MoreTrendz — E-Commerce Platform",
      category: "Full-Stack Web",
      github: "https://github.com/GauravRawat05/moretrendz-website",
      stack: ["Node.js", "Express.js", "MongoDB", "JWT", "Razorpay", "Google APIs"],
      description: "Built a full-stack e-commerce platform (68 commits) with a JWT-authenticated admin dashboard for full order and product CRUD.",
      highlights: [
        "Integrated Razorpay payment gateway and Google Analytics/Search Console APIs for conversion tracking.",
        "Implemented security middleware (rate limiting, input sanitization, Helmet) and automated email notifications."
      ]
    },
    {
      id: "survey-builder",
      title: "Branded Survey Builder",
      category: "Cloudflare Edge App",
      github: "https://github.com/GauravRawat05/sde-intern-task",
      stack: ["Hono", "Cloudflare Workers", "Cloudflare D1", "React", "TanStack Router", "TypeScript"],
      description: "Built a full-stack survey builder with drag-and-drop question ordering (3+ question types), per-survey branding, and public anonymous response collection.",
      highlights: [
        "Designed a normalized Cloudflare D1 schema (users, surveys, questions, responses, answers) evolved through iterative migrations.",
        "Deployed on Cloudflare Workers for sub-millisecond edge API routing."
      ]
    }
  ],
  skills: {
    Frontend: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3"],
    Backend: ["Node.js", "Express.js", "FastAPI", "Hono (Cloudflare Workers)", "REST APIs", "JWT Auth", "RBAC"],
    Database: ["MongoDB", "PostgreSQL", "Cloudflare D1", "ChromaDB (Vector DB)"],
    AI_Agentic: ["LangGraph", "LLM Integration (Groq/Llama-3)", "RAG Pipelines", "Sentence-Transformers"],
    Tools: ["Git", "GitHub", "Docker", "Vercel", "Cloudflare Workers", "Postman", "CI/CD"]
  }
};
