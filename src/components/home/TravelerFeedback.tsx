import Link from "next/link";
export function TravelerFeedback() {
  return <section className="container section pt-0"><div className="feedback"><p className="eyebrow">Traveler voices</p><h2>Good stories deserve real voices.</h2><p className="muted">Verified traveler feedback will belong here. Until it is available, explore the journey details and the thinking behind AweEscapes.</p><Link className="text-link" href="/reviews">About traveler feedback <span aria-hidden="true">↗</span></Link></div></section>;
}
