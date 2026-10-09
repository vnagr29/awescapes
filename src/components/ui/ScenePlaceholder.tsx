import Image from "next/image";
import type { Scene } from "@/types/content";
const artwork: Record<Scene, string> = { mountain: "nepal-landscape", city: "courtyard", lake: "lakeside", forest: "forest" };
export function ScenePlaceholder({ scene = "mountain", label, className = "" }: { scene?: Scene; label: string; className?: string }) {
  return <div className={`scene scene-${scene} ${className}`}><Image src={`/images/${artwork[scene]}.svg`} alt={`Original illustration: ${label}. Not a destination photograph.`} fill sizes="(max-width: 720px) calc(100vw - 40px), (max-width: 1360px) 45vw, 624px" className="object-cover" /></div>;
}
