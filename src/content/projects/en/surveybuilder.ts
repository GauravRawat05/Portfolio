import streakon0 from "../../../assets/images/projects/streakon/streakon-0.webp";
import streakon1 from "../../../assets/images/projects/streakon/streakon-1.webp";

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
        src: streakon0,
        alt: "Branded Survey Editor",
        caption: "Branded Survey Editor",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon1,
        alt: "Public Survey Response Interface",
        caption: "Public Survey Response Interface",
      },
    },
  ],
} as const satisfies ProjectContent;
