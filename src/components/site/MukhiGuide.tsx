import { motion } from "framer-motion";

const guide = [
  { mukhi: "1", focus: "Enlightenment", note: "The rarest bead — pure consciousness and liberation." },
  { mukhi: "2", focus: "Unity", note: "Ardhanarishvara — balance in partnerships and marriage." },
  { mukhi: "3", focus: "Confidence", note: "Agni — burns past karma, frees you from guilt." },
  { mukhi: "4", focus: "Knowledge", note: "Brahma — memory, speech and creative intelligence." },
  { mukhi: "5", focus: "Wellbeing", note: "The everyday bead — calm mind and healthy heart." },
  { mukhi: "6", focus: "Willpower", note: "Kartikeya — grounding, focus and emotional stability." },
  { mukhi: "7", focus: "Abundance", note: "Mahalakshmi — prosperity and new opportunity." },
  { mukhi: "8", focus: "Obstacles", note: "Ganesha — removes blockages on any new path." },
  { mukhi: "9", focus: "Courage", note: "Durga — protection and fearless energy." },
  { mukhi: "10", focus: "Protection", note: "Vishnu — shields from negativity and ill intent." },
  { mukhi: "11", focus: "Meditation", note: "Hanuman — discipline for deep practice." },
  { mukhi: "12", focus: "Radiance", note: "Surya — leadership, vitality and charisma." },
];

export function MukhiGuide() {
  return (
    <section id="guide" className="bg-primary py-20 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Free Knowledge — No Paywall
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
            The Mukhi Guide
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-primary-foreground/70">
            A mukhi is a natural facet line on the bead. Each count carries a
            different energy. Our full guide is open to everyone — read it all
            before you spend a single dollar.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {guide.map((item, i) => (
            <motion.div
              key={item.mukhi}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-5"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-3xl font-bold text-accent">
                  {item.mukhi}
                </span>
                <span className="font-semibold">{item.focus}</span>
              </div>
              <p className="mt-2 text-sm text-primary-foreground/70">
                {item.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
