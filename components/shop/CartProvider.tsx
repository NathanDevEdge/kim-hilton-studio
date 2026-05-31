"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import type { CartItem } from "@/types/product";

interface CartContextValue {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: string, priceId: string) => void;
  updateQuantity: (productId: string, priceId: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  total: number; // cents
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Hydrate from localStorage after mount to avoid SSR mismatch
  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("khs-cart");
      if (stored) setItems(JSON.parse(stored));
    } catch {
      // Corrupted storage — start fresh
    }
  }, []);

  // Persist to localStorage on every change
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("khs-cart", JSON.stringify(items));
    }
  }, [items, mounted]);

  const addItem = useCallback((incoming: CartItem) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.productId === incoming.productId && i.priceId === incoming.priceId
      );
      if (existing) {
        return prev.map((i) =>
          i.productId === incoming.productId && i.priceId === incoming.priceId
            ? { ...i, quantity: i.quantity + incoming.quantity }
            : i
        );
      }
      return [...prev, incoming];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((productId: string, priceId: string) => {
    setItems((prev) =>
      prev.filter((i) => !(i.productId === productId && i.priceId === priceId))
    );
  }, []);

  const updateQuantity = useCallback(
    (productId: string, priceId: string, quantity: number) => {
      if (quantity < 1) {
        removeItem(productId, priceId);
        return;
      }
      setItems((prev) =>
        prev.map((i) =>
          i.productId === productId && i.priceId === priceId
            ? { ...i, quantity }
            : i
        )
      );
    },
    [removeItem]
  );

  const clearCart = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const total = items.reduce((sum, i) => sum + i.unitAmount * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        total,
        isOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
