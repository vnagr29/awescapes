import type { MetadataRoute } from "next";
import { indexable, siteOrigin } from "@/lib/seo";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent:"*", allow:"/" }, ...(indexable ? { sitemap: `${siteOrigin}/sitemap.xml` } : {}) }; }
