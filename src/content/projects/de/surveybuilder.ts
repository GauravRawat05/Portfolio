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
    "Branded Survey Builder ist eine Full-Stack Edge-Anwendung auf Basis von Hono und Cloudflare Workers.<br/><br/>Hauptmerkmale:<br/>• Drag-and-Drop Frageneditor, individuelles Branding und anonyme Antwort-Erfassung.<br/>• Normalisiertes Cloudflare D1 SQL Schema.<br/>• Edge API-Routing für minimale Latenz.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: surveybuilder0,
        alt: "Branded Survey Editor",
        caption: "Branded Survey Builder Drag-and-Drop Frageneditor",
      },
    },
    {
      type: "text",
      props: {
        title: "Edge-First Umfragen-Plattform",
        text: "Entwickelt mit Cloudflare Workers und Hono bietet SurveyBuilder blitzschnelle Ladezeiten weltweit für Ersteller und Teilnehmer gleichermaßen.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: surveybuilder1,
        alt: "Cloudflare D1 Analytics Dashboard",
        caption: "Cloudflare Workers D1 Datenbank Umfragen-Analyse & Edge-Metriken",
      },
    },
    {
      type: "list",
      props: {
        title: "Cloudflare Serverless Stack",
        items: [
          "<strong>Hono & Cloudflare Workers:</strong> Leichtgewichtiges Web-Framework auf dem V8-Isolaten-Netzwerk.",
          "<strong>Cloudflare D1 SQL Datenbank:</strong> Serverlose SQLite-Datenbank.",
          "<strong>TanStack Router & React:</strong> Typsicheres Routing & interaktive UI.",
          "<strong>Branding-Engine:</strong> Anpassbare Themes mit Live-Vorschau.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
