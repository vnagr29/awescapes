import Link from "next/link";
import { navigation } from "@/data/content";
import styles from "./SiteChrome.module.css";
export function Footer() {
  return (
    <footer className={`footer ${styles.footer}`}>
      <div className="container">
        <div className={styles.footerPrelude}>
          <p>For the places<br />that <em>stay with you.</em></p>
          <span aria-hidden="true">✳</span>
        </div>
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="logo" href="/" aria-label="AweEscapes home">awe<span className="logo-dot">.</span>escapes</Link>
            <p>Nepal journey ideas, at your own pace.</p>
            <p className={styles.previewNote}>Sample website preview.<br />Operating details to be confirmed.</p>
          </div>
          <nav aria-label="Explore footer">
            <h2>Explore</h2>
            {navigation.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </nav>
          <nav aria-label="Useful links">
            <h2>A little more</h2>
            <Link href="/responsible-travel">Responsible travel</Link>
            <Link href="/reviews">Traveler feedback</Link>
            <Link href="/faqs">Questions & answers</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/plan-your-trip">Plan your trip</Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} AweEscapes</span>
          <span>Made for curiosity. Designed for a slower look.</span>
        </div>
      </div>
    </footer>
  );
}
