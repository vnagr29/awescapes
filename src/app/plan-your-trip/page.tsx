import { PageIntro } from "@/components/ui/PageIntro";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Plan your trip", "Shape your Nepal journey ideas with the AweEscapes planning form preview.", "/plan-your-trip");
export default async function PlanPage({ searchParams }: { searchParams: Promise<{ experience?: string | string[] }> }) {
  const params = await searchParams;
  const experience = typeof params.experience === "string" ? params.experience.slice(0,150) : "";
  return <><PageIntro eyebrow="Plan your trip" title="Start with what moves you." description="You do not need a finished itinerary. A place, an interest, or a sense of how you want to spend your days is enough to begin." /><section className="container pb-20"><div className="max-w-3xl"><h2 className="text-3xl mb-6">A few details about your ideas</h2><InquiryForm initialExperience={experience} /></div></section></>;
}
