"use client";
import { useEffect, useRef } from "react";
import { LazyMotion, domAnimation, MotionConfig, useReducedMotion, useAnimationControls } from "motion/react";
import * as m from "motion/react-m";
export function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const controls = useAnimationControls();
  useEffect(() => {
    if (reduced || !ref.current || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        // Opacity stays visible: content never relies on JavaScript to appear.
        void controls.start({ y: [8, 0], opacity: [0.92, 1], transition: { duration: 0.3, ease: "easeOut" } });
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls, reduced]);
  return <LazyMotion features={domAnimation} strict><MotionConfig reducedMotion="user"><m.div ref={ref} initial={false} animate={controls}>{children}</m.div></MotionConfig></LazyMotion>;
}
