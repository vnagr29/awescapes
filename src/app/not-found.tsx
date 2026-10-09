import Link from "next/link";
export default function NotFound() { return <section className="container section"><p className="eyebrow">404 · A little detour</p><h1>This path ends here.</h1><p className="lede muted">The page you are looking for could not be found. There are more journey ideas waiting nearby.</p><Link className="button" href="/experiences">Explore experiences ↗</Link></section>; }
