import { PageIntro } from "@/components/ui/PageIntro";
import { TravelerFeedback } from "@/components/home/TravelerFeedback";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Traveler feedback", "Learn how AweEscapes will present genuine, attributable traveler feedback once available.", "/reviews");
export default function ReviewsPage() { return <><PageIntro eyebrow="Traveler feedback" title="Real journeys. Real voices." description="No verified traveler reviews have been supplied yet. We will add feedback with a clear source and appropriate permission when it becomes available." /><TravelerFeedback /><section className="container prose pb-20"><h2>How feedback will be presented</h2><p>Future reviews should identify their source, relate to a real experience, and preserve the traveler’s meaning. No sample ratings, review counts, or testimonials are used in this foundation.</p></section></>; }
