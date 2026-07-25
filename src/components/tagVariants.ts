export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "fastapi"
  | "langgraph"
  | "docker"
  | "express"
  | "mongodb"
  | "jwt"
  | "typescript"
  | "cloudflare";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  fastapi: "FastAPI",
  langgraph: "LangGraph",
  docker: "Docker",
  express: "Express.js",
  mongodb: "MongoDB",
  jwt: "JWT Auth",
  typescript: "TypeScript",
  cloudflare: "Cloudflare D1",
} as const satisfies Record<TagVariant, string>;
