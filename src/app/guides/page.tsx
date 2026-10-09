import { guides } from "@/data/content";
import { EditorialIndex } from "@/components/editorial/EditorialIndex";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Travel guides", "Start planning your Nepal journey with practical questions about pace, interests, and preparation.", "/guides");
export default function GuidesPage() { return <EditorialIndex kind="Travel guides" title="A good journey starts with good questions." description="Approachable planning ideas to help you think about your time, travel style, and the details to confirm." items={guides} />; }
