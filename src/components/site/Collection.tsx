import { ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

export function Collection() {
  const { add } = useCart();

  return (
    <section id="collection" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          The Collection
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
          Find your bead
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          From the everyday 5 Mukhi to the rare Ek Mukhi, every bead ships with
          its own lab certificate — included free, never behind a paywall.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
          >
            <div className="relative aspect-square overflow-hidden bg-secondary">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {product.badge && (
                <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {product.badge}
                </span>
              )}
            </div>

            <div className="flex flex-1 flex-col p-4">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                <span className="font-semibold text-foreground">
                  {product.rating}
                </span>
                ({product.reviews} reviews)
              </div>
              <h3 className="mt-1 font-serif text-lg font-semibold">
                {product.name}
              </h3>
              <p className="text-xs text-muted-foreground">{product.mukhi}</p>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">
                {product.benefit}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="ml-2 text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                <Button size="sm" onClick={() => add(product)}>
                  <ShoppingBag className="h-3.5 w-3.5" />
                  Add
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
