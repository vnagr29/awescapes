import { experiences } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceCard } from "@/components/discovery/ExperienceCard";
export function FeaturedExperiences() {
  return <section className="container section home-experiences"><SectionHeading eyebrow="02 / The beginning of a good story" title="Go for the place. Stay for the feeling." link={{ href:"/experiences", label:"All experiences" }} /><p className="sample-note mb-8">Sample journey concepts. Routes, duration, availability, and prices are details to be confirmed.</p><div className="cards experience-grid">{experiences.map(experience => <ExperienceCard key={experience.slug} experience={experience} />)}</div></section>;
}
