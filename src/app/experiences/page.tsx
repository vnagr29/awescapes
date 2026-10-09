import { categories, experiences } from "@/data/content";
import { PageIntro } from "@/components/ui/PageIntro";
import { ExperienceCard } from "@/components/discovery/ExperienceCard";
import { InquiryCTA } from "@/components/home/InquiryCTA";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Nepal experiences", "Explore original Nepal journey concepts for walking, culture, nature, and slow travel.", "/experiences");
export default function ExperiencesPage() {
  return <><PageIntro eyebrow="Experiences" title="Find the feeling you came for." description="Follow a trail, explore a neighborhood, or leave a day wide open. Start with the way you want to travel." /><div className="container"><p className="sample-note">All journeys are sample concepts. Duration, routes, operating arrangements, and prices are details to be confirmed.</p><nav className="actions" aria-label="Experience categories">{categories.map(item => <a className="pill" href={`#${item.mark}`} key={item.mark}>{item.name}</a>)}</nav></div>{categories.map(category => <section key={category.name} id={category.mark} className="container section"><p className="eyebrow">{category.mark} · Your travel style</p><h2>{category.name}</h2><p className="muted">{category.description}</p><div className="cards experience-grid">{experiences.filter(item => item.category === category.name).map(item => <ExperienceCard key={item.slug} experience={item} />)}</div></section>)}<InquiryCTA /></>;
}
