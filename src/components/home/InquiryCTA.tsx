import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
export function InquiryCTA() {
 return <section className="container section cta-section"><Reveal><div className="inquiry-cta"><div><p className="eyebrow">Your next chapter</p><h2>A place in mind?<br /><em>Or just a feeling?</em></h2></div><div className="cta-copy"><p>Start with the things you love. A mountain morning, a shared table, a little time away. Give your next journey a shape.</p><Link href="/plan-your-trip" className="button">Plan your trip <span aria-hidden="true">↗</span></Link><p className="cta-note">Start with an idea in our local planning preview.</p></div><span className="cta-spark" aria-hidden="true">✳</span></div></Reveal></section>;
}
