import Link from "next/link";
export function SectionHeading({ eyebrow, title, description, link }: { eyebrow: string; title: string; description?: string; link?: { href: string; label: string } }) {
  return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{description && <p className="muted lede">{description}</p>}</div>{link && <Link className="text-link" href={link.href}>{link.label} <span aria-hidden="true">↗</span></Link>}</div>;
}
