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
    "MoreTrendz is a full-stack e-commerce platform featuring a JWT-authenticated admin dashboard for full product and order CRUD operations.<br/><br/>Key Highlights:<br/>• Integrated Razorpay payment gateway & Google Analytics/Search Console APIs.<br/>• Automated email notification service & security middleware (rate limiting, Helmet, input sanitization).<br/>• 68 production commits delivered.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: moretrendz0,
        alt: "MoreTrendz E-Commerce Storefront",
        caption: "MoreTrendz E-Commerce Storefront & Razorpay Payment Integration",
      },
    },
    {
      type: "text",
      props: {
        title: "Full-Stack Storefront & Admin Portal",
        text: "MoreTrendz provides a seamless shopping experience for users and powerful management capabilities for store administrators. Built with a scalable Node.js/Express backend and MongoDB schemas for inventory, order tracking, and user session management.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: moretrendz1,
        alt: "Admin Order & Inventory Dashboard",
        caption: "MoreTrendz Executive Admin Order & Inventory Management Dashboard",
      },
    },
    {
      type: "list",
      props: {
        title: "Key Architecture & Security Features",
        items: [
          "<strong>Razorpay Payment Integration:</strong> Secure checkout workflow handling transaction verification & webhooks.",
          "<strong>JWT & RBAC Security:</strong> Role-based access control protecting admin endpoints and customer order history.",
          "<strong>Google Analytics & Search Console:</strong> API integrations tracking visitor analytics & indexing metrics.",
          "<strong>Automated Email Service:</strong> Triggered order confirmation and status updates.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
