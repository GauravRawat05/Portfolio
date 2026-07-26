import moretrendz0 from "../../../assets/images/projects/moretrendz/moretrendz-0.png";
import moretrendz1 from "../../../assets/images/projects/moretrendz/moretrendz-1.png";

import type { ProjectContent } from "../../types";

export default {
  title: "MoreTrendz",
  theme: "dark",
  tags: ["node", "express", "mongodb", "jwt"],
  videoBorder: false,
  live: "https://github.com/GauravRawat05/moretrendz-website",
  description:
    "MoreTrendz ist eine Full-Stack-E-Commerce-Plattform mit einem JWT-authentifizierten Admin-Dashboard für vollständige Produkt- und Bestellungs-CRUD-Operationen.<br/><br/>Hauptmerkmale:<br/>• Integrierte Razorpay Payment-Gateway & Google Analytics APIs.<br/>• Automatisiertes E-Mail-Benachrichtigungssystem & Sicherheits-Middleware.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: moretrendz0,
        alt: "MoreTrendz Storefront",
        caption: "MoreTrendz Storefront & Razorpay Payment-Integration",
      },
    },
    {
      type: "text",
      props: {
        title: "Full-Stack Storefront & Admin Portal",
        text: "MoreTrendz bietet ein nahtloses Einkaufserlebnis für Nutzer sowie umfangreiche Verwaltungsmöglichkeiten für Shop-Administratoren mit skalierbarem Node.js/Express Backend und MongoDB.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: moretrendz1,
        alt: "Admin Dashboard",
        caption: "MoreTrendz Admin Bestell- & Inventar-Management Dashboard",
      },
    },
    {
      type: "list",
      props: {
        title: "Architektur & Sicherheitsmerkmale",
        items: [
          "<strong>Razorpay Payment-Integration:</strong> Sichere Checkout-Verarbeitung & Webhooks.",
          "<strong>JWT & RBAC Sicherheit:</strong> Rollenbasierte Zugriffskontrolle für Admin-Endpunkte.",
          "<strong>Google Analytics:</strong> API-Integrationen zur Verfolgung von Nutzeranalysen.",
          "<strong>Automatisierter E-Mail-Dienst:</strong> Bestellbestätigungen und Statusaktualisierungen.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
