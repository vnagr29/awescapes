import Link from "next/link";
import { navigation } from "@/data/content";
import { MobileNavigation } from "./MobileNavigation";
import styles from "./SiteChrome.module.css";
export function Header() {
  return (
    <header className={`site-header ${styles.header}`}>
      <div className="container header-inner">
        <Link href="/" className="brand-lockup" aria-label="AweEscapes home">
          <span className="logo">awe<span className="logo-dot">.</span>escapes</span>
          <span className="brand-caption">NEPAL, WITH FEELING</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className={styles.headerActions}>
          <Link className="button header-cta" href="/plan-your-trip">Plan your trip <span aria-hidden="true">↗</span></Link>
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
