import { FileCheck, Microscope, PackageCheck, ScanLine } from "lucide-react";

const steps = [
  {
    icon: ScanLine,
    title: "X-ray verification",
    text: "Every bead is X-rayed to confirm internal seed chambers match the mukhi count — the only test that can't be faked.",
  },
  {
    icon: Microscope,
    title: "Expert inspection",
    text: "Third-generation graders in Kathmandu check density, surface and water-sink behaviour by hand.",
  },
  {
    icon: FileCheck,
    title: "Certificate included",
    text: "A signed lab certificate with your bead's unique ID ships in every box — free, not sold separately.",
  },
  {
    icon: PackageCheck,
    title: "Lifetime guarantee",
    text: "If any bead is ever proven inauthentic, we refund 200% of your purchase. For life.",
  },
];

export function Authenticity() {
  return (
    <section id="authenticity" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Authenticity First
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
            Most “Nepali” Rudraksha online is fake. <br /> Ours is proven.
          </h2>
          <p className="mt-4 text-muted-foreground">
            The market is flooded with glued, carved and dyed imitations. We
            source directly from family farms in eastern Nepal and put every
            single bead through a four-step verification before it reaches you.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {steps.map((step) => (
              <div key={step.title}>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-3 font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=900&q=80"
            alt="Meditation and sacred ritual"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-3xl object-cover"
          />
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-5 shadow-lg sm:block">
            <p className="font-serif text-3xl font-bold text-primary">200%</p>
            <p className="text-sm text-muted-foreground">
              refund if ever proven fake
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
