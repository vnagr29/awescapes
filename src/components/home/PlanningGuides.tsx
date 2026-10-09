import Link from "next/link";
import { guides } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
export function PlanningGuides() {
  return (
    <section className="container section planning-section">
      <SectionHeading eyebrow="Before you go" title="A little preparation. A lot of possibility." link={{ href: "/guides", label: "All travel guides" }} />
      <div className="cards">
        {guides.map((guide, index) => (
          <article className="guide-card" key={guide.slug}>
            <Link className="guide-link" href={`/guides#${guide.slug}`}>
              <span className="guide-number" aria-hidden="true">0{index + 1}<span className="guide-mark">↗</span></span>
              <p className="eyebrow">{guide.category}</p>
              <h3>{guide.title}</h3>
              <p className="muted">{guide.description}</p>
              <span className="text-link">Read the guide <span aria-hidden="true">↗</span></span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
