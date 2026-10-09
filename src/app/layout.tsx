import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { indexable, siteOrigin } from "@/lib/seo";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin), title: { default: "AweEscapes | Nepal, at your own pace", template: "%s | AweEscapes" },
  description: "Discover thoughtful Nepal journey concepts, places, and planning ideas with AweEscapes.",
  robots: { index: indexable, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">{children}</main><Footer /></body></html>;
}
