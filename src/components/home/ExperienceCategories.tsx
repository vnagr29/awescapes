import Link from "next/link";
import { categories } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
export function ExperienceCategories() {
  return <section className="container section"><SectionHeading eyebrow="Follow your curiosity" title="What does your kind of escape look like?" /><div className="category-grid">{categories.map(category => <Link className="category" key={category.name} href={`/experiences#${category.mark}`}><span className="number">{category.mark}</span><h3>{category.name} <span aria-hidden="true">↗</span></h3><p className="muted">{category.description}</p></Link>)}</div></section>;
}
