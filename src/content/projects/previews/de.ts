import thumbnailDevMind from "../../../assets/thumbnails/devmind.png";
import thumbnailMoreTrendz from "../../../assets/thumbnails/moretrendz.png";
import thumbnailSurveyBuilder from "../../../assets/thumbnails/surveybuilder.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "DevMind",
    slug: "devmind",
    thumbnail: thumbnailDevMind,
    description: "Multi-Agenten-KI-Plattform",
  },
  {
    title: "MoreTrendz",
    slug: "moretrendz",
    thumbnail: thumbnailMoreTrendz,
    description: "Full-Stack-E-Commerce-Plattform",
  },
  {
    title: "SurveyBuilder",
    slug: "surveybuilder",
    thumbnail: thumbnailSurveyBuilder,
    description: "Cloudflare Edge Umfrage-Engine",
  },
] as const satisfies ProjectPreview[];
