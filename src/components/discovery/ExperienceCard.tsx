import Link from "next/link";
import type { Experience } from "@/types/content";
import { destinations } from "@/data/content";
import { ScenePlaceholder } from "@/components/ui/ScenePlaceholder";
export function ExperienceCard({ experience }: { experience: Experience }) {
  return <article className="card experience-card"><Link className="card-link" href={`/experiences/${experience.slug}`}><div className="card-image"><ScenePlaceholder scene={experience.scene} label={experience.title} className="card-art" /><span className="image-tag">{experience.category}</span><span className="illustration-label">Original illustration</span></div><div className="card-body"><div className="card-meta"><span>{destinations.find(item => item.slug === experience.destination)?.title}</span><span>{experience.duration}</span></div><h3>{experience.title}<span className="card-arrow" aria-hidden="true">↗</span></h3><p className="muted">{experience.description}</p><p className="suitability">{experience.suitability}</p></div></Link></article>;
}

