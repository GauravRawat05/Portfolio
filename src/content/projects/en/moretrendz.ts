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
    "MoreTrendz is a full-stack e-commerce platform featuring a JWT-authenticated admin dashboard for full product and order CRUD operations.<br/><br/>Key Highlights:<br/>• Integrated Razorpay payment gateway & Google Analytics/Search Console APIs.<br/>• Automated email notification service & security middleware (rate limiting, Helmet, input sanitization).<br/>• 68 production commits delivered.",
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
        alt: "Admin Order & Inventory Dashboard",
        caption: "Admin Order & Inventory Dashboard",
      },
    },
  ],
} as const satisfies ProjectContent;
