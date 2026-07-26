import devmind0 from "../../../assets/images/projects/devmind/devmind-0.png";
import devmind1 from "../../../assets/images/projects/devmind/devmind-1.png";

import type { ProjectContent } from "../../types";

export default {
  title: "DevMind",
  theme: "dark",
  tags: ["next", "fastapi", "langgraph", "redis", "docker"],
  videoBorder: false,
  live: "https://github.com/GauravRawat05/DevMind",
  description:
    "DevMind ist eine Multi-Agenten-KI-Plattform zur Code-Analyse von GitHub-Repositories mit LangGraph und Groq/Llama-3.<br/><br/>Hauptmerkmale:<br/>• 4-Agenten-Pipeline: Doc Agent, Review Agent, Q&A Agent (RAG), Analytics Agent.<br/>• Async Job-Architektur mit Celery + Redis und Echtzeit-WebSockets.<br/>• ChromaDB Vektor-Indexierung.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: devmind0,
        alt: "DevMind Architektur",
        caption: "DevMind 4-Agenten Pipeline Architektur & AST Analyse-Knotengrafik",
      },
    },
    {
      type: "text",
      props: {
        title: "Multi-Agenten Intelligenz-Pipeline",
        text: "DevMind gliedert komplexe Codebase-Analysen in vier koordinierte autonome Agenten. Jeder Agent ist auf eine bestimmte Analyse-Ebene spezialisiert – von AST-Struktur-Parsing und Sicherheitsauditierung bis zur ChromaDB-Vektorindexierung.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: devmind1,
        alt: "DevMind Dashboard",
        caption: "DevMind Code Security Audit, RAG Vektorsuche & WebSocket Dashboard",
      },
    },
    {
      type: "list",
      props: {
        title: "Technologie-Stack & Infrastruktur",
        items: [
          "<strong>LangGraph & FastAPI:</strong> Zustandsbehaftete Multi-Agenten-Graph-Orchestrierung für sequentielles Code-Reasoning.",
          "<strong>ChromaDB & Sentence-Transformers:</strong> Lokaler Vektorspeicher für schnelle Kontextabfrage bei Codebase-Q&A.",
          "<strong>Celery + Redis:</strong> Verteiltes asynchrones Job-Queue-Management.",
          "<strong>Next.js 14 & Tailwind CSS:</strong> Hochleistungs-Dashboard mit Live-Streaming.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
