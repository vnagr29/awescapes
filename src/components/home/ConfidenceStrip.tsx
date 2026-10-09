export function ConfidenceStrip() {
  return (
    <section className="confidence" aria-label="Our proposed planning approach">
      <div className="container confidence-inner">
        <p className="confidence-label">Thoughtfully shaped.<br /><span className="muted">Around you.</span></p>
        <ul className="service-cues">
          <li><span aria-hidden="true">01</span><div><strong>Local planning</strong><p>A closer look at Nepal.</p></div></li>
          <li><span aria-hidden="true">02</span><div><strong>Flexible journeys</strong><p>Room for your own rhythm.</p></div></li>
          <li><span aria-hidden="true">03</span><div><strong>Experience-first design</strong><p>Begin with what moves you.</p></div></li>
        </ul>
      </div>
      <p className="container confidence-note">Our proposed approach · sample website preview. Service arrangements to be confirmed.</p>
    </section>
  );
}
