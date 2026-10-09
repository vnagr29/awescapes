import Link from "next/link";
import Image from "next/image";
export function HeroSection() {
  return (
    <section className="container hero" aria-labelledby="home-heading">
      <div className="hero-topline">
        <p className="eyebrow"><span className="brand-spark" aria-hidden="true">✳</span> Nepal, through a different lens</p>
        <span className="hero-edition">An invitation to explore</span>
      </div>
      <div className="hero-layout">
        <figure className="hero-visual">
          <div className="hero-art">
            <Image
              src="/images/nepal-landscape.svg"
              alt="Original illustration of layered Himalayan-inspired ridges and a winding trail; not a destination photograph"
              fill
              preload
              sizes="(max-width: 720px) calc(100vw - 40px), (max-width: 1360px) calc(100vw - 80px), 1280px"
              className="object-cover"
            />
          </div>
          <figcaption>Himalayan daydreams <span>Original illustration</span></figcaption>
        </figure>
        <div className="hero-copy">
          <p className="hero-kicker">A little further from the everyday.</p>
          <h1 id="home-heading">Step out.<br /> <em>Feel more.</em></h1>
          <p className="lede">Curated Nepal escapes shaped around adventure, culture, nature, and meaningful moments.</p>
          <div className="actions">
            <Link className="button" href="/experiences">Explore experiences <span aria-hidden="true">↗</span></Link>
            <Link className="button button-light" href="/plan-your-trip">Plan your trip <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <span className="hero-compass" aria-hidden="true">N<span>✳</span></span>
      </div>
      <div className="hero-bottomline">
        <p>A little curiosity. A world of possibility.</p>
        <a className="text-link" href="#find-your-escape">Find your kind of escape <span aria-hidden="true">↓</span></a>
      </div>
    </section>
  );
}
