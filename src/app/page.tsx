import { pageMetadata } from "@/lib/seo";
import { HeroSection } from "@/components/home/HeroSection";
import { ConfidenceStrip } from "@/components/home/ConfidenceStrip";
import { ExperienceCategories } from "@/components/home/ExperienceCategories";
import { FeaturedExperiences } from "@/components/home/FeaturedExperiences";
import { DestinationGrid } from "@/components/home/DestinationGrid";
import { ApproachSection } from "@/components/home/ApproachSection";
import { EditorialFeature } from "@/components/home/EditorialFeature";
import { TravelerFeedback } from "@/components/home/TravelerFeedback";
import { PlanningGuides } from "@/components/home/PlanningGuides";
import { InquiryCTA } from "@/components/home/InquiryCTA";
export const metadata = pageMetadata("Step out. Feel more. | Nepal escapes", "Curated Nepal escapes shaped around adventure, culture, nature, and meaningful moments. Explore sample journeys and ideas for your trip.", "/");
export default function Home() { return <><HeroSection /><ConfidenceStrip /><ExperienceCategories /><FeaturedExperiences /><div className="tinted"><DestinationGrid /></div><ApproachSection /><EditorialFeature /><TravelerFeedback /><PlanningGuides /><InquiryCTA /></>; }
