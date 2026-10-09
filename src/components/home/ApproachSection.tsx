import Link from "next/link";
export function ApproachSection() {
  return (
    <section className="section home-approach" aria-labelledby="approach-heading">
      <div className="container approach-layout">
        <div className="approach-intro">
          <p className="eyebrow">The AweEscapes idea</p>
          <h2 id="approach-heading">A journey should fit<br /><em>the person taking it.</em></h2>
          <p className="lede muted">Start with what moves you. Build in the practical details. Leave a little room for discovery.</p>
          <Link href="/about" className="text-link">Get to know the idea <span aria-hidden="true">↗</span></Link>
          <span className="approach-spark" aria-hidden="true">✳</span>
        </div>
        <ol className="approach-steps">
          <li><span aria-hidden="true">01</span><div><h3>Start with you</h3><p>Your interests, energy, comfort, and the time you have.</p></div></li>
          <li><span aria-hidden="true">02</span><div><h3>Make the details clear</h3><p>Understand the pace, everyday arrangements, and what still needs confirming.</p></div></li>
          <li><span aria-hidden="true">03</span><div><h3>Leave space to be there</h3><p>Balance the things you want to do with time to enjoy where you are.</p></div></li>
        </ol>
      </div>
    </section>
  );
}
