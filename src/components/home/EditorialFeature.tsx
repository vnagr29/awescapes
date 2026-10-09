import Link from "next/link";
import { ScenePlaceholder } from "@/components/ui/ScenePlaceholder";
export function EditorialFeature() {
  return (
    <section className="container section split home-editorial" aria-labelledby="story-heading">
      <figure className="editorial-figure">
        <ScenePlaceholder scene="lake" label="A quiet lakeside landscape for the slow travel editorial" className="editorial-art" />
        <figcaption>A slower perspective <span>Original illustration</span></figcaption>
      </figure>
      <div className="editorial-copy">
        <p className="eyebrow">Field notes · Slow travel</p>
        <h2 id="story-heading">The space<br /> <em>between plans.</em></h2>
        <p className="lede muted">An open morning. A longer lunch. A turn you did not expect to take. Sometimes the best part of a journey is the room you leave in it.</p>
        <Link href="/stories#the-space-between-plans" className="text-link">Read the story <span aria-hidden="true">↗</span></Link>
        <p className="editorial-note">From the AweEscapes sample journal</p>
      </div>
    </section>
  );
}
