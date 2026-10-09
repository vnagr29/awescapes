import Link from "next/link";
import { PageIntro } from "@/components/ui/PageIntro";
import { ScenePlaceholder } from "@/components/ui/ScenePlaceholder";
import { DestinationGrid } from "@/components/home/DestinationGrid";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Destinations", "Explore Nepal through places, interests, and thoughtful journey ideas.", "/destinations");
export default function DestinationsPage() { return <><PageIntro eyebrow="Destinations" title="Begin with a place. Leave with a feeling." description="Our first chapter starts in Nepal. Explore places through the experiences you might have there." /><section className="container split"><ScenePlaceholder scene="mountain" label="Nepal destination overview" className="editorial-art" /><div><p className="eyebrow">Our first destination</p><h2>Nepal</h2><p className="lede muted">City discoveries, walking journeys, nature pauses, and a little space between plans.</p><Link href="/destinations/nepal" className="button">Explore Nepal ↗</Link></div></section><DestinationGrid /></>; }
