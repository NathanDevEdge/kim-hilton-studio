"use client";

import { useState } from "react";
import Link from "next/link";
import type { Product, ProductSize } from "@/types/product";
import { Text } from "@/components/ui/Text";
import { Container } from "@/components/ui/Container";
import { AddToCartButton } from "@/components/shop/AddToCartButton";
import { PrintCard } from "@/components/shop/PrintCard";
import { placeholderProducts } from "@/lib/placeholder-products";

function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(0)}`;
}

export function ProductDetail({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState<ProductSize>(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const related = placeholderProducts
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  const cartItem = {
    productId: product.id,
    priceId: selectedSize.priceId,
    name: product.name,
    size: selectedSize.label,
    unitAmount: selectedSize.unitAmount,
    quantity,
    gradient: product.gradient,
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-28 pb-4 bg-cornsilk">
        <Container>
          <nav className="flex items-center gap-2 font-body text-xs uppercase tracking-widest text-black-forest/40">
            <Link href="/shop" className="hover:text-copperwood transition-colors">
              Prints
            </Link>
            <span>/</span>
            <span className="text-black-forest/70">{product.name}</span>
          </nav>
        </Container>
      </div>

      {/* Main product layout */}
      <section className="bg-cornsilk pb-24">
        <Container wide>
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20">
            {/* Image */}
            <div className="aspect-[4/5] lg:aspect-auto lg:min-h-[70vh] relative overflow-hidden sticky top-20 self-start">
              <div
                className="absolute inset-0"
                style={{ background: product.gradient }}
              />
              {/* Edition badge */}
              <div className="absolute top-6 left-6">
                <span
                  className={`font-body text-[10px] uppercase tracking-widest px-3 py-1.5 ${
                    product.edition === "Limited edition"
                      ? "bg-black-forest/70 text-sunlit-clay"
                      : "bg-black-forest/50 text-cornsilk/70"
                  }`}
                >
                  {product.edition}
                </span>
              </div>
            </div>

            {/* Info panel */}
            <div className="flex flex-col gap-8 lg:pt-4">
              {/* Title + price */}
              <div>
                <Text variant="label" className="mb-3 block">
                  {product.category}
                </Text>
                <Text variant="h1" className="text-black-forest mb-4 leading-tight">
                  {product.name}
                </Text>
                <Text variant="h3" className="text-copperwood">
                  {formatPrice(selectedSize.unitAmount)}
                </Text>
              </div>

              {/* Description */}
              <div className="border-t border-black-forest/10 pt-8">
                <Text variant="body" className="text-black-forest/70 leading-loose">
                  {product.description}
                </Text>
              </div>

              {/* Size selector */}
              <div className="border-t border-black-forest/10 pt-8">
                <div className="flex items-center justify-between mb-4">
                  <Text variant="label">Select size</Text>
                  <Text variant="caption">{selectedSize.label}</Text>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {product.sizes.map((size) => {
                    const isSelected = size.priceId === selectedSize.priceId;
                    return (
                      <button
                        key={size.priceId}
                        onClick={() => setSelectedSize(size)}
                        className={`flex items-center justify-between px-4 py-3 border text-left transition-all duration-200 ${
                          isSelected
                            ? "border-copperwood bg-copperwood/5"
                            : "border-black-forest/20 hover:border-black-forest/40"
                        }`}
                      >
                        <span
                          className={`font-body text-sm ${
                            isSelected ? "text-copperwood" : "text-black-forest"
                          }`}
                        >
                          {size.label}
                        </span>
                        <span
                          className={`font-body text-sm ${
                            isSelected ? "text-copperwood" : "text-black-forest/50"
                          }`}
                        >
                          {formatPrice(size.unitAmount)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity */}
              <div className="border-t border-black-forest/10 pt-8">
                <Text variant="label" className="mb-4 block">
                  Quantity
                </Text>
                <div className="flex items-center border border-black-forest/20 w-fit">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center text-black-forest/50 hover:text-black-forest transition-colors"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="w-10 h-10 flex items-center justify-center font-body text-sm text-black-forest border-x border-black-forest/20">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-10 h-10 flex items-center justify-center text-black-forest/50 hover:text-black-forest transition-colors"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <div className="border-t border-black-forest/10 pt-8 space-y-3">
                <AddToCartButton item={{ ...cartItem, quantity }} />
                <Text variant="caption" className="text-center block">
                  Free shipping on orders over $150 · Ships within 5–7 business days
                </Text>
              </div>

              {/* Print details */}
              <div className="border-t border-black-forest/10 pt-8">
                <Text variant="label" className="mb-4 block">
                  Print details
                </Text>
                <ul className="space-y-2">
                  {[
                    "Printed on 300gsm Hahnemühle Photo Rag",
                    "Archival pigment inks — 100+ year lifespan",
                    "Each print hand-inspected before shipping",
                    product.edition === "Limited edition"
                      ? "Numbered and signed certificate included"
                      : "Open edition — no certificate",
                  ].map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <span className="text-olive-leaf mt-1 flex-shrink-0">—</span>
                      <Text variant="body-sm" className="text-black-forest/60">
                        {detail}
                      </Text>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related prints */}
      {related.length > 0 && (
        <section className="py-24 bg-cornsilk border-t border-black-forest/10">
          <Container>
            <Text variant="label" className="mb-4 block">
              You may also like
            </Text>
            <Text variant="h3" className="text-black-forest mb-12">
              More from the collection
            </Text>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-14">
              {related.map((p) => (
                <PrintCard key={p.id} product={p} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
