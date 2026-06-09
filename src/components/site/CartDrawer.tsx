import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

export function CartDrawer() {
  const { items, isOpen, setOpen, remove, setQty, total } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/40"
            onClick={() => setOpen(false)}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col bg-background shadow-2xl"
            aria-label="Shopping cart"
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <h2 className="font-serif text-lg font-semibold">Your Cart</h2>
              <button
                onClick={() => setOpen(false)}
                className="rounded-md p-1.5 hover:bg-secondary"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 text-muted-foreground">
                <ShoppingBag className="h-10 w-10" />
                <p>Your cart is empty</p>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Browse the collection
                </Button>
              </div>
            ) : (
              <>
                <div className="flex-1 space-y-4 overflow-y-auto px-6 py-4">
                  {items.map(({ product, qty }) => (
                    <div key={product.id} className="flex gap-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-20 w-20 rounded-xl object-cover"
                      />
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-sm font-semibold">
                              {product.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {product.mukhi}
                            </p>
                          </div>
                          <button
                            onClick={() => remove(product.id)}
                            className="text-muted-foreground hover:text-destructive"
                            aria-label={`Remove ${product.name}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center gap-2 rounded-full border border-border px-2 py-1">
                            <button
                              onClick={() => setQty(product.id, qty - 1)}
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="w-5 text-center text-sm">
                              {qty}
                            </span>
                            <button
                              onClick={() => setQty(product.id, qty + 1)}
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <span className="text-sm font-semibold">
                            ${product.price * qty}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border px-6 py-5">
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium text-primary">Free</span>
                  </div>
                  <div className="mb-4 flex justify-between text-base font-semibold">
                    <span>Total</span>
                    <span>${total}</span>
                  </div>
                  <Button className="w-full" size="lg">
                    Checkout securely
                  </Button>
                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    Lab certificate included free with every bead.
                  </p>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
