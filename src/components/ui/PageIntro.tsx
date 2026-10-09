import { Breadcrumbs } from "./Breadcrumbs";
export function PageIntro({ eyebrow, title, description, breadcrumbs }: { eyebrow: string; title: string; description: string; breadcrumbs?: { label: string; href?: string }[] }) {
  return <div className="container page-intro"><Breadcrumbs items={breadcrumbs || [{ label: eyebrow }]} /><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lede muted">{description}</p></div>;
}
