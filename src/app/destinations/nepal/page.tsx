import { PageIntro } from "@/components/ui/PageIntro";
import { DestinationGrid } from "@/components/home/DestinationGrid";
import { PlanningGuides } from "@/components/home/PlanningGuides";
import { InquiryCTA } from "@/components/home/InquiryCTA";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Discover Nepal", "Explore Kathmandu Valley, Pokhara, Annapurna, and Chitwan through original travel concepts.", "/destinations/nepal");
export default function NepalPage() { return <><PageIntro eyebrow="Nepal" title="More than one kind of adventure." description="Let your interests shape the route: a city morning, an open trail, a lakeside pause, or time to watch the natural world." breadcrumbs={[{ label:"Destinations", href:"/destinations" }, { label:"Nepal" }]} /><section className="container prose"><h2>Build a journey around your pace</h2><p>Choose a small number of places and consider the time needed between them. Culture, walking, rest, and nature can each become the focus of a journey.</p><h2>Before you make plans</h2><p>Seasonal suitability, transport, entry requirements, accommodation, and operating arrangements must be checked against current sources and confirmed with your itinerary. This is a sample destination hub.</p></section><DestinationGrid title="Find your Nepal chapter." /><PlanningGuides /><InquiryCTA /></>; }
