import Link from "next/link";
import { categories } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
const categoryPaths = [
  "M3 27 13 8l6 11 4-7 10 15H3Zm7-13 3 4 3-4M23 12V5m0 0h7l-3 3h-4",
  "M5 30V14h26v16M3 14 18 5l15 9M10 18v8m8-8v8m8-8v8M3 30h30",
  "M18 31V17m0 7C5 25 4 14 6 7c9 0 14 4 12 13m0 3c0-10 5-16 14-17 1 9-3 17-14 17",
  "M5 25h26M9 30h18M10 20a8 8 0 0 1 16 0M18 5v3M5 10l3 3m23-3-3 3M2 20h4m24 0h4",
];
export function ExperienceCategories() {
  return (
    <section id="find-your-escape" className="container section home-categories">
      <SectionHeading eyebrow="01 / Follow your curiosity" title="Your escape. Your own rhythm." />
      <div className="category-grid">
        {categories.map((category, index) => (
          <Link className="category" key={category.name} href={`/experiences#${category.mark}`}>
            <div className="category-top">
              <svg viewBox="0 0 36 36" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={categoryPaths[index]} /></svg>
              <span className="number">{category.mark}</span>
            </div>
            <h3>{category.name} <span aria-hidden="true">↗</span></h3>
            <p className="muted">{category.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
