import Link from "next/link";
import type { Destination } from "@/types/content";
import { ScenePlaceholder } from "@/components/ui/ScenePlaceholder";
export function DestinationCard({ destination }: { destination: Destination }) {
  return <article className="card destination-card"><Link className="card-link" href={`/destinations/nepal/${destination.slug}`}><ScenePlaceholder scene={destination.scene} label={destination.title} className="card-art" /><div className="card-body"><p className="eyebrow">Nepal</p><h3>{destination.title}<span className="card-arrow" aria-hidden="true">↗</span></h3><p className="muted">{destination.subtitle}</p><span className="destination-caption">Original illustration</span></div></Link></article>;
}

