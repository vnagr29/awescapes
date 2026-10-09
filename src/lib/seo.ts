import type { Metadata } from "next";
export const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const indexable = process.env.NEXT_PUBLIC_INDEXABLE === "true";
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return { title, description, alternates: { canonical: path }, openGraph: { title: `${title} | AweEscapes`, description, url: path, type: "website", siteName: "AweEscapes" } };
}
