import type { FAQ } from "@/types/content";
export function FAQAccordion({ items }: { items: FAQ[] }) {
  return <div className="faq">{items.map(item => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>;
}
