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
    "Branded Survey Builder ist eine Edge-Anwendung auf Hono und Cloudflare Workers.<br/><br/>Highlights:<br/>• Drag-and-Drop Frage-Editor & benutzerdefiniertes Branding.<br/>• Cloudflare D1 SQL Schema für maximale Geschwindigkeit.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: streakon0,
        alt: "Survey Editor",
        caption: "Survey Editor",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon1,
        alt: "Public Survey Interface",
        caption: "Public Survey Interface",
      },
    },
  ],
} as const satisfies ProjectContent;
