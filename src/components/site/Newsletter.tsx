import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
      <div className="rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
        <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
          Wisdom in your inbox, free forever
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-primary-foreground/70">
          One short email a month: mukhi deep-dives, wearing rituals and early
          access to rare beads. No spam, no paid tiers, unsubscribe anytime.
        </p>

        {subscribed ? (
          <p className="mt-8 font-medium text-accent">
            🙏 Welcome to the sangha — check your inbox.
          </p>
        ) : (
          <form
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              if (email.trim()) setSubscribed(true);
            }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="h-12 flex-1 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-5 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button type="submit" variant="accent" size="lg">
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
