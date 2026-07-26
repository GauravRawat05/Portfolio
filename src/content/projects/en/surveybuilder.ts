import surveybuilder0 from "../../../assets/images/projects/surveybuilder/surveybuilder-0.png";
import surveybuilder1 from "../../../assets/images/projects/surveybuilder/surveybuilder-1.png";

import type { ProjectContent } from "../../types";

export default {
  title: "SurveyBuilder",
  theme: "dark",
  tags: ["react", "typescript", "cloudflare"],
  videoBorder: false,
  live: "https://github.com/GauravRawat05/sde-intern-task",
  description:
    "Branded Survey Builder is a full-stack edge application built on Hono and Cloudflare Workers.<br/><br/>Key Highlights:<br/>• Drag-and-drop question ordering, per-survey custom branding, and public anonymous response collection.<br/>• Normalized Cloudflare D1 SQL schema (users, surveys, questions, responses, answers).<br/>• Edge API routing for sub-millisecond global response speeds.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: surveybuilder0,
        alt: "Branded Survey Editor",
        caption: "Branded Survey Builder Drag-and-Drop Question Editor Interface",
      },
    },
    {
      type: "text",
      props: {
        title: "Edge-First Survey Engine",
        text: "Built on Cloudflare Workers and Hono, SurveyBuilder deploys instantly to global edge locations, ensuring sub-millisecond page loads for both survey creators and anonymous survey respondents across the world.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: surveybuilder1,
        alt: "Cloudflare D1 Survey Analytics Dashboard",
        caption: "Cloudflare Workers D1 Database Survey Response Analytics & Edge Metrics",
      },
    },
    {
      type: "list",
      props: {
        title: "Cloudflare Serverless Stack",
        items: [
          "<strong>Hono & Cloudflare Workers:</strong> Lightweight web framework executing on Cloudflare's global V8 isolate network.",
          "<strong>Cloudflare D1 SQL Database:</strong> Serverless relational SQLite database storing users, surveys, questions, and responses.",
          "<strong>TanStack Router & React:</strong> Type-safe client-side routing and interactive drag-and-drop UI.",
          "<strong>Custom Branding Engine:</strong> Per-survey theme customization with dynamic live preview.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
