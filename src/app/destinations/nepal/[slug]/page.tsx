import { notFound } from "next/navigation";
import { destinations, experiences, faqs } from "@/data/content";
import { PageIntro } from "@/components/ui/PageIntro";
import { ScenePlaceholder } from "@/components/ui/ScenePlaceholder";
import { ExperienceCard } from "@/components/discovery/ExperienceCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { InquiryCTA } from "@/components/home/InquiryCTA";
import { pageMetadata } from "@/lib/seo";
type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return destinations.map(item => ({ slug:item.slug })); }
export async function generateMetadata({ params }: Props) { const { slug } = await params; const item = destinations.find(item => item.slug === slug); return item ? pageMetadata(item.title, item.description, `/destinations/nepal/${slug}`) : {}; }
export default async function DestinationPage({ params }: Props) {
  const { slug } = await params; const item = destinations.find(item => item.slug === slug); if (!item) notFound();
  return <><PageIntro eyebrow="Nepal through places" title={item.title} description={item.subtitle} breadcrumbs={[{ label:"Destinations", href:"/destinations" }, { label:"Nepal", href:"/destinations/nepal" }, { label:item.title }]} /><div className="container"><ScenePlaceholder scene={item.scene} label={item.title} className="detail-art" /><div className="prose"><h2>A first look</h2><p>{item.description}</p><h2>What might draw you here</h2><ul>{item.interests.map(interest => <li key={interest}>{interest}</li>)}</ul><h2>Shape your time here</h2><p>{item.planning}</p><h3>Getting there and staying</h3><p>Travel time, access, accommodation styles, and facilities are details to be confirmed for the chosen itinerary.</p><h3>When to go</h3><p>Review current seasonal conditions and activity suitability before confirming dates.</p><p className="sample-note">Original sample destination content. Operational information has not yet been verified.</p></div></div><section className="container section"><p className="eyebrow">A possible next chapter</p><h2>Experience ideas in {item.title}</h2><div className="cards experience-grid">{experiences.filter(experience => experience.destination === slug).map(experience => <ExperienceCard key={experience.slug} experience={experience} />)}</div></section><section className="container"><h2>Before you go</h2><FAQAccordion items={faqs.slice(0,3)} /></section><InquiryCTA /></>;
}
