import { stories } from "@/data/content";
import { EditorialIndex } from "@/components/editorial/EditorialIndex";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Stories", "Original AweEscapes editorial samples about slow travel, curiosity, food, and meaningful moments.", "/stories");
export default function StoriesPage() { return <EditorialIndex kind="Stories" title="A slower look at the world." description="A few ideas for seeing more by doing a little less. Original editorial samples from the AweEscapes point of view." items={stories} />; }
