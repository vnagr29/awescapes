import Link from "next/link";
import type { Editorial } from "@/types/content";
import { PageIntro } from "@/components/ui/PageIntro";
import { InquiryCTA } from "@/components/home/InquiryCTA";
export function EditorialIndex({ kind, title, description, items }: { kind: string; title: string; description: string; items: Editorial[] }) {
  return <><PageIntro eyebrow={kind} title={title} description={description} /><div className="container"><nav className="actions mb-12" aria-label={`${kind} contents`}>{items.map(item => <a className="pill" href={`#${item.slug}`} key={item.slug}>{item.title}</a>)}</nav><p className="sample-note">Original AweEscapes sample content for review.</p>{items.map(item => <article id={item.slug} className="article-preview" key={item.slug}><p className="eyebrow">{item.category}</p><h2>{item.title}</h2><p className="lede">{item.description}</p>{item.paragraphs.map(paragraph => <p className="muted" key={paragraph}>{paragraph}</p>)}<Link href="/experiences" className="text-link">Explore related journey ideas ↗</Link></article>)}</div><InquiryCTA /></>;
}
