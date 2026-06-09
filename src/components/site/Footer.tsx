const columns = [
  {
    title: "Shop",
    links: ["All Beads", "Malas", "Bracelets", "Siddha Collection", "Gift Cards"],
  },
  {
    title: "Learn",
    links: ["Mukhi Guide", "How to Wear", "Care Instructions", "Authenticity Tests", "Blog"],
  },
  {
    title: "Support",
    links: ["Shipping & Returns", "Track Order", "Lifetime Guarantee", "Contact Us", "FAQ"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-lg text-primary-foreground">
              ॐ
            </span>
            <span className="font-serif text-xl font-semibold">Rudraveda</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Authentic Himalayan Rudraksha, sourced directly from family farms in
            eastern Nepal. Lab-certified, fairly traded, and honestly priced —
            since day one.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            hello@rudraveda.com · Kathmandu & worldwide
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border py-6">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Rudraveda. All rights reserved. Rudraksha
          beads are spiritual aids, not a substitute for medical care.
        </p>
      </div>
    </footer>
  );
}
