import Link from "next/link";
import { siteOrigin } from "@/lib/seo";
export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  const trail = [{ label: "Home", href: "/" }, ...items];
  const structuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: trail.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.label, ...(item.href ? { item: new URL(item.href, siteOrigin).href } : {}) })) };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /><nav aria-label="Breadcrumb" className="breadcrumbs"><ol><li><Link href="/">Home</Link></li>{items.map((item,index) => <li key={`${item.label}-${index}`}>{item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</li>)}</ol></nav></>;
}
