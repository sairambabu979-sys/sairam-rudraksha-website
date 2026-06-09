import { BadgeCheck, Globe, Leaf, RotateCcw, ShieldCheck, Truck } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "X-ray Lab Certified" },
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Easy Returns" },
  { icon: Leaf, label: "Ethically Harvested" },
  { icon: BadgeCheck, label: "Lifetime Authenticity Guarantee" },
  { icon: Globe, label: "Trusted in 60+ Countries" },
];

export function TrustBar() {
  const row = [...badges, ...badges];
  return (
    <div className="border-y border-border bg-card py-5">
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-12 px-6">
          {row.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 text-sm font-medium text-muted-foreground"
            >
              <badge.icon className="h-5 w-5 text-primary" />
              {badge.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
