"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/content";
// Native disclosure keeps navigation usable before hydration and without JavaScript.
export function MobileNavigation() {
  const disclosure = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();
  useEffect(() => { if (disclosure.current) disclosure.current.open = false; }, [pathname]);
  useEffect(() => {
    function dismiss(event: PointerEvent) {
      if (event.target instanceof Node && !disclosure.current?.contains(event.target)) close();
    }
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, []);
  function close() { if (disclosure.current) disclosure.current.open = false; }
  return (
    <details ref={disclosure} className="mobile-nav" onKeyDown={event => {
      if (event.key === "Escape") { close(); disclosure.current?.querySelector("summary")?.focus(); }
    }}>
      <summary>Menu</summary>
      <nav className="mobile-panel" aria-label="Mobile navigation">
        <p className="eyebrow">Find your next chapter</p>
        {navigation.map(item => (
          <Link href={item.href} key={item.href} onClick={close} aria-current={pathname === item.href ? "page" : undefined}>
            {item.label}<span aria-hidden="true">↗</span>
          </Link>
        ))}
        <Link href="/plan-your-trip" onClick={close}>Plan your trip <span aria-hidden="true">↗</span></Link>
      </nav>
    </details>
  );
}
