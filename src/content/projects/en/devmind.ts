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
    "DevMind is a multi-agent code intelligence platform that analyzes GitHub repositories using LangGraph state graphs and Groq/Llama-3.<br/><br/>Key Features:<br/>• 4-Agent Pipeline: Doc Agent (AST analysis), Review Agent (security & code quality), Q&A Agent (RAG vector retrieval), Analytics Agent (complexity metrics).<br/>• Async job architecture with Celery + Redis pub/sub and real-time WebSockets.<br/>• RAG codebase Q&A using ChromaDB vector indexing with sentence-transformer embeddings.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: streakon0,
        alt: "DevMind Multi-Agent Architecture",
        caption: "DevMind Multi-Agent Architecture",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon1,
        alt: "LangGraph Pipeline Stream",
        caption: "LangGraph Pipeline Stream",
      },
    },
  ],
} as const satisfies ProjectContent;
