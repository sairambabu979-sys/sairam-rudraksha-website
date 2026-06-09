import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "How do I know my Rudraksha is genuine?",
    a: "Every bead is X-ray tested to verify its internal seed chambers match the mukhi count, hand-inspected by expert graders in Kathmandu, and shipped with a signed lab certificate carrying a unique bead ID. If a bead is ever proven inauthentic, we refund 200% of your purchase — for life.",
  },
  {
    q: "Is the certificate or mukhi guide behind a paywall?",
    a: "No. Unlike many sellers, the lab certificate is included free in every box, and our complete mukhi guide, wearing rituals and care instructions are free to read on this site. We never charge for knowledge.",
  },
  {
    q: "How much is shipping?",
    a: "Shipping is free worldwide on every order, with tracking. Most orders reach India in 3–5 days, the US and Europe in 5–8 days, and the rest of the world within 12 days.",
  },
  {
    q: "Can anyone wear Rudraksha?",
    a: "Yes. Rudraksha can be worn by anyone regardless of gender, age, culture or faith. The 5 Mukhi is a wonderful first bead for daily wear and meditation.",
  },
  {
    q: "How should I care for my beads?",
    a: "Keep beads lightly oiled (a drop of coconut or sandalwood oil monthly), remove them before swimming in chlorinated water, and store them in the cotton pouch we include. Cared-for beads last generations.",
  },
  {
    q: "What is your return policy?",
    a: "30-day no-questions-asked returns on every product. If you don't feel a connection with your bead, send it back for a full refund — we even cover return postage.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          FAQ
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
          Questions, answered honestly
        </h2>
      </div>

      <div className="divide-y divide-border rounded-2xl border border-border bg-card">
        {faqs.map((faq, i) => (
          <div key={faq.q}>
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-medium"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              {faq.q}
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
                  open === i && "rotate-180"
                )}
              />
            </button>
            {open === i && (
              <p className="px-6 pb-5 text-sm text-muted-foreground">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
