import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function Hero() {
  return (
    <section className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Lab-certified · Sourced directly from Nepal
            </p>
            <h1 className="font-serif text-4xl font-semibold text-foreground">
              Sacred beads of the Himalayas, <br />
              <span className="mt-1 text-4xl font-bold leading-none md:text-[6rem]">
                Authentic Rudraksha
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              Every bead is X-ray tested, ethically harvested, and shipped free
              worldwide — no paywalls, no hidden fees, lifetime authenticity
              guarantee.
            </p>
          </>
        }
      >
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80"
          alt="The Himalayas of Nepal, home of authentic Rudraksha"
          height={720}
          width={1400}
          className="mx-auto h-full rounded-2xl object-cover object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
}
