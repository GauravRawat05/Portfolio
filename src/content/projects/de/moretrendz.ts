import streakon2 from "../../../assets/images/projects/streakon/streakon-2.webp";
import streakon3 from "../../../assets/images/projects/streakon/streakon-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "MoreTrendz",
  theme: "dark",
  tags: ["node", "express", "mongodb", "jwt"],
  videoBorder: false,
  live: "https://github.com/GauravRawat05/moretrendz-website",
  description:
    "MoreTrendz ist eine Full-Stack-E-Commerce-Plattform mit JWT-authentifiziertem Admin-Dashboard für Bestell- und Produkt-CRUD.<br/><br/>Highlights:<br/>• Razorpay Payment Gateway & Google Analytics API Integration.<br/>• Sicherheits-Middleware (Rate Limiting, Helmet) und automatische E-Mails.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: streakon2,
        alt: "MoreTrendz E-Commerce Storefront",
        caption: "MoreTrendz E-Commerce Storefront",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon3,
        alt: "Admin Dashboard",
        caption: "Admin Dashboard",
      },
    },
  ],
} as const satisfies ProjectContent;
