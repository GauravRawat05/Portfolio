import streakon0 from "../../../assets/images/projects/streakon/streakon-0.webp";
import streakon1 from "../../../assets/images/projects/streakon/streakon-1.webp";

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
        src: streakon0,
        alt: "DevMind Architektur",
        caption: "DevMind Architektur",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon1,
        alt: "LangGraph Stream",
        caption: "LangGraph Stream",
      },
    },
  ],
} as const satisfies ProjectContent;
