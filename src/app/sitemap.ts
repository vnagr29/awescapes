import type { MetadataRoute } from "next";
import { destinations, experiences } from "@/data/content";
import { indexable, siteOrigin } from "@/lib/seo";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!indexable) return [];
  const pages = ["", "/experiences", "/destinations", "/destinations/nepal", "/stories", "/guides", "/about", "/responsible-travel", "/reviews", "/plan-your-trip", "/contact", "/faqs", ...experiences.map(item => `/experiences/${item.slug}`), ...destinations.map(item => `/destinations/nepal/${item.slug}`)];
  return pages.map(path => ({ url: `${siteOrigin}${path}` }));
}
