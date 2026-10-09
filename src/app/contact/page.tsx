import Link from "next/link";
import { PageIntro } from "@/components/ui/PageIntro";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Contact", "Find the AweEscapes trip planning preview and the status of contact details.", "/contact");
export default function ContactPage() { return <><PageIntro eyebrow="Contact" title="A conversation is a good beginning." description="Verified email, phone, office details, and response hours will be added before launch." /><section className="container prose pb-20"><h2>Start with your trip ideas</h2><p>For now, explore the planning form preview. It helps you organize your ideas and save a local test inquiry. It does not email or notify the team.</p><Link href="/plan-your-trip" className="button">Open the planning preview ↗</Link><h2>Contact details</h2><p>Email, telephone, WhatsApp, business address, and operating hours: details to be confirmed.</p></section></>; }
