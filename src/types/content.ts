export type Scene = "mountain" | "lake" | "city" | "forest";
export type FAQ = { question: string; answer: string };
export type Experience = {
  slug: string; title: string; category: string; destination: string; duration: string;
  description: string; scene: Scene; suitability: string; highlights: string[];
  itinerary: { title: string; description: string }[];
};
export type Destination = {
  slug: string; title: string; subtitle: string; description: string; scene: Scene;
  interests: string[]; planning: string;
};
export type Editorial = { slug: string; title: string; category: string; description: string; paragraphs: string[] };
