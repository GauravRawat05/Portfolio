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
    "DevMind is a multi-agent code intelligence platform that analyzes GitHub repositories using LangGraph state graphs and Groq/Llama-3.<br/><br/>Key Features:<br/>• 4-Agent Pipeline: Doc Agent (AST analysis), Review Agent (security & code quality), Q&A Agent (RAG vector retrieval), Analytics Agent (complexity metrics).<br/>• Async job architecture with Celery + Redis pub/sub and real-time WebSockets.<br/>• RAG codebase Q&A using ChromaDB vector indexing with sentence-transformer embeddings.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: devmind0,
        alt: "DevMind Multi-Agent Architecture",
        caption: "DevMind 4-Agent Pipeline Architecture & AST Analysis Node Graph",
      },
    },
    {
      type: "text",
      props: {
        title: "Multi-Agent Intelligence Pipeline",
        text: "DevMind breaks down complex codebase analysis into four coordinated autonomous agents. Each agent specializes in a specific analysis layer—ranging from AST structural parsing and security vulnerability detection to ChromaDB vector indexing and real-time WebSocket progress streaming.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: devmind1,
        alt: "DevMind Analytics & Vector RAG Dashboard",
        caption: "DevMind Code Security Audit, RAG Vector Search & WebSocket Dashboard",
      },
    },
    {
      type: "list",
      props: {
        title: "Technical Stack & Infrastructure",
        items: [
          "<strong>LangGraph & FastAPI:</strong> Stateful multi-agent graph orchestrations for sequential code reasoning.",
          "<strong>ChromaDB & Sentence-Transformers:</strong> Local vector store indexing for fast context retrieval during codebase Q&A.",
          "<strong>Celery + Redis:</strong> Distributed asynchronous job queue management for heavy processing.",
          "<strong>Next.js 14 & Tailwind CSS:</strong> High-performance dark-mode UI with live streaming execution status.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
