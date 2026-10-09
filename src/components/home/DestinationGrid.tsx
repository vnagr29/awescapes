import { destinations } from "@/data/content";
import type { Destination } from "@/types/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DestinationCard } from "@/components/discovery/DestinationCard";
export function DestinationGrid({ items = destinations, title = "One country. So many ways to feel it." }: { items?: Destination[]; title?: string }) {
  return <section className="container section"><SectionHeading eyebrow="Nepal through places" title={title} description="From courtyard corners to open horizons. Find a place that speaks to your curiosity." link={{ href:"/destinations/nepal", label:"Get to know Nepal" }} /><div className="cards destination-grid">{items.map(destination => <DestinationCard key={destination.slug} destination={destination} />)}</div></section>;
}

