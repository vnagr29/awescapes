import { experiences } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceCard } from "@/components/discovery/ExperienceCard";
export function FeaturedExperiences() {
  return <section className="container section pt-0"><SectionHeading eyebrow="The beginning of a good story" title="Small moments. Memorable journeys." link={{ href:"/experiences", label:"All experiences" }} /><p className="sample-note mb-8">Sample journey concepts. Routes, duration, availability, and prices are details to be confirmed.</p><div className="cards experience-grid">{experiences.map(experience => <ExperienceCard key={experience.slug} experience={experience} />)}</div></section>;
}
