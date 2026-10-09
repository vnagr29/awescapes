import { PageIntro } from "@/components/ui/PageIntro";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { InquiryCTA } from "@/components/home/InquiryCTA";
import { faqs } from "@/data/content";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Questions & answers", "Answers about the AweEscapes website preview, journey concepts, prices, and planning form.", "/faqs");
export default function FAQsPage() { return <><PageIntro eyebrow="Questions & answers" title="A little clarity before you go." description="What is ready to explore, what is still being confirmed, and how this first website preview works." /><section className="container"><FAQAccordion items={faqs} /></section><InquiryCTA /></>; }
