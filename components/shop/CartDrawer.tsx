"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/components/shop/CartProvider";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";

function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

export function CartDrawer() {
  const { items, removeItem, updateQuantity, total, itemCount, isOpen, closeCart } =
    useCart();

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeCart}
            className="fixed inset-0 z-[60] bg-black-forest/40 backdrop-blur-[2px]"
          />

          {/* Drawer */}
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-cornsilk flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-7 py-6 border-b border-black-forest/10">
              <div className="flex items-center gap-3">
                <Text variant="h4" className="text-black-forest">
                  Your bag
                </Text>
                {itemCount > 0 && (
                  <span className="font-body text-xs bg-copperwood text-cornsilk rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="text-black-forest/50 hover:text-black-forest transition-colors duration-200 p-1"
                aria-label="Close cart"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-7 py-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <div
                    className="w-16 h-16 rounded-full"
                    style={{ background: "linear-gradient(135deg, #606C38, #DDA15E)" }}
                  />
                  <Text variant="body-sm" className="text-black-forest/50">
                    Your bag is empty.
                  </Text>
                  <Button href="/shop" variant="ghost" onClick={closeCart}>
                    Browse prints →
                  </Button>
                </div>
              ) : (
                <ul className="flex flex-col gap-6">
                  {items.map((item) => (
                    <li
                      key={`${item.productId}-${item.priceId}`}
                      className="flex gap-4"
                    >
                      {/* Thumbnail */}
                      <div
                        className="w-20 h-24 flex-shrink-0"
                        style={{ background: item.gradient }}
                      />

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <Text variant="h4" className="text-black-forest mb-0.5 truncate">
                          {item.name}
                        </Text>
                        <Text variant="caption" className="mb-3">
                          {item.size}
                        </Text>

                        <div className="flex items-center justify-between">
                          {/* Quantity stepper */}
                          <div className="flex items-center border border-black-forest/20">
                            <button
                              onClick={() =>
                                updateQuantity(item.productId, item.priceId, item.quantity - 1)
                              }
                              className="w-7 h-7 flex items-center justify-center text-black-forest/60 hover:text-black-forest transition-colors"
                              aria-label="Decrease quantity"
                            >
                              −
                            </button>
                            <span className="w-7 h-7 flex items-center justify-center font-body text-sm text-black-forest">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.productId, item.priceId, item.quantity + 1)
                              }
                              className="w-7 h-7 flex items-center justify-center text-black-forest/60 hover:text-black-forest transition-colors"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>

                          <Text variant="body-sm" className="text-copperwood font-medium">
                            {formatPrice(item.unitAmount * item.quantity)}
                          </Text>
                        </div>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeItem(item.productId, item.priceId)}
                        className="text-black-forest/30 hover:text-black-forest/70 transition-colors self-start mt-0.5"
                        aria-label={`Remove ${item.name}`}
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M11 3L3 11M3 3l8 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-7 py-6 border-t border-black-forest/10 space-y-4">
                <div className="flex items-center justify-between">
                  <Text variant="label">Total</Text>
                  <Text variant="h4" className="text-black-forest">
                    {formatPrice(total)}
                  </Text>
                </div>
                <p className="font-body text-xs text-black-forest/40">
                  Shipping and taxes calculated at checkout.
                </p>
                {/* Stage 4: this href becomes /api/checkout */}
                <Button href="/shop" className="w-full justify-center" size="lg">
                  Checkout
                </Button>
                <button
                  onClick={closeCart}
                  className="w-full font-body text-xs uppercase tracking-widest text-black-forest/50 hover:text-black-forest transition-colors py-1"
                >
                  Continue shopping
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
