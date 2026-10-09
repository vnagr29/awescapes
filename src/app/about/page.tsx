import { PageIntro } from "@/components/ui/PageIntro";
import { ApproachSection } from "@/components/home/ApproachSection";
import { InquiryCTA } from "@/components/home/InquiryCTA";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("About AweEscapes", "Discover the idea behind AweEscapes: thoughtful Nepal journeys shaped around curiosity, comfort, and pace.", "/about");
export default function AboutPage() { return <><PageIntro eyebrow="About AweEscapes" title="For the places that stay with you." description="AweEscapes begins with a simple idea: the shape of a journey should come from the person taking it." /><section className="container prose pb-16"><h2>Our proposed approach</h2><p>We are developing a travel experience centered on curiosity, practical clarity, and time to enjoy a place. This first website presents the direction through original sample content.</p><h2>The people behind the journey</h2><p>Team biographies, business registration, qualifications, and operating credentials are details to be confirmed. They will be published after verification.</p></section><ApproachSection /><InquiryCTA /></>; }
