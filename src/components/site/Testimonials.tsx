import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ananya S.",
    location: "Mumbai, India",
    text: "The certificate and X-ray report came in the box at no extra cost. My 7 Mukhi is clearly genuine — you can feel the difference.",
  },
  {
    name: "Michael R.",
    location: "Austin, USA",
    text: "Ordered a 5 Mukhi mala for daily meditation. Shipping to Texas was free and took six days. The beads are beautifully matched.",
  },
  {
    name: "Priya K.",
    location: "London, UK",
    text: "I'd been burned by fakes before. Rudraveda's water test video of my actual bead before dispatch won me over completely.",
  },
  {
    name: "Tenzin D.",
    location: "Kathmandu, Nepal",
    text: "As a Nepali, I appreciate that they name the farms they source from and pay fairly. The Siddha Mala is heirloom quality.",
  },
  {
    name: "Sofia L.",
    location: "Berlin, Germany",
    text: "The free mukhi guide helped me choose without pressure. No upsells, no locked content — just honest information and fair prices.",
  },
  {
    name: "Rahul V.",
    location: "Singapore",
    text: "Replaced a bracelet I lost within a week under their guarantee, no questions asked. Customer service actually answers.",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="bg-secondary/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Reviews
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
            Trusted by seekers in 60+ countries
          </h2>
          <div className="mt-3 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-accent text-accent" />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">
              4.9 average from 4,100+ verified orders
            </span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm text-foreground">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-semibold">{t.name}</span>
                <span className="text-muted-foreground"> · {t.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
