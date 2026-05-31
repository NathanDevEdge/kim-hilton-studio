import type { Product } from "@/types/product";

// Stage 4: replace with getActiveProducts() from Stripe.
// Each product's sizes map to separate Stripe Price objects on the same Product.
// Add a `slug` field to each Stripe product's metadata to keep clean URLs.
export const placeholderProducts: Product[] = [
  {
    id: "golden-hour",
    name: "Golden Hour",
    description:
      "Captured at the exact moment the light bends warm and amber across the landscape. A quiet, luminous piece that changes with the light of the room it inhabits.",
    images: [],
    gradient: "linear-gradient(155deg, #7a3c10 0%, #BC6C25 45%, #DDA15E 75%, #f5deb3 100%)",
    edition: "Limited edition",
    category: "landscape",
    sizes: [
      { label: '8×10"', priceId: "price_gh_sm", unitAmount: 8500 },
      { label: '11×14"', priceId: "price_gh_md", unitAmount: 11500 },
      { label: '16×20"', priceId: "price_gh_lg", unitAmount: 15500 },
      { label: '24×30"', priceId: "price_gh_xl", unitAmount: 22500 },
    ],
    metadata: {},
  },
  {
    id: "still-forest",
    name: "Still Forest",
    description:
      "An image of deep patience. The forest holds its breath here — layers of green shadow and filtered light that rewards a long look.",
    images: [],
    gradient: "linear-gradient(155deg, #0d1a08 0%, #1e2b12 35%, #283618 65%, #606C38 100%)",
    edition: "Limited edition",
    category: "landscape",
    sizes: [
      { label: '8×10"', priceId: "price_sf_sm", unitAmount: 9500 },
      { label: '11×14"', priceId: "price_sf_md", unitAmount: 12500 },
      { label: '16×20"', priceId: "price_sf_lg", unitAmount: 16500 },
      { label: '24×30"', priceId: "price_sf_xl", unitAmount: 24500 },
    ],
    metadata: {},
  },
  {
    id: "morning-light",
    name: "Morning Light",
    description:
      "Soft, unhurried, and full of possibility. This print carries the particular quality of early light before the world gets loud.",
    images: [],
    gradient: "linear-gradient(155deg, #DDA15E 0%, #e8c99a 40%, #FEFAE0 80%, #f5f0d0 100%)",
    edition: "Open edition",
    category: "abstract",
    sizes: [
      { label: '8×10"', priceId: "price_ml_sm", unitAmount: 7500 },
      { label: '11×14"', priceId: "price_ml_md", unitAmount: 9500 },
      { label: '16×20"', priceId: "price_ml_lg", unitAmount: 13500 },
    ],
    metadata: {},
  },
  {
    id: "copper-fields",
    name: "Copper Fields",
    description:
      "Harvest season, viewed from above. The land turns the colour of old coins and dried grass — a warmth that belongs to no particular year.",
    images: [],
    gradient: "linear-gradient(155deg, #5c3010 0%, #8B4513 35%, #BC6C25 65%, #DDA15E 100%)",
    edition: "Limited edition",
    category: "landscape",
    sizes: [
      { label: '8×10"', priceId: "price_cf_sm", unitAmount: 9500 },
      { label: '11×14"', priceId: "price_cf_md", unitAmount: 12500 },
      { label: '16×20"', priceId: "price_cf_lg", unitAmount: 16500 },
      { label: '24×30"', priceId: "price_cf_xl", unitAmount: 23500 },
    ],
    metadata: {},
  },
  {
    id: "winter-coast",
    name: "Winter Coast",
    description:
      "The sea in its most honest mood. Cold light, grey water, and a horizon that stretches further than comfort — and yet, there is something restful here.",
    images: [],
    gradient: "linear-gradient(155deg, #1a2530 0%, #2d3d50 40%, #4a6070 70%, #8aA0b0 100%)",
    edition: "Limited edition",
    category: "landscape",
    sizes: [
      { label: '8×10"', priceId: "price_wc_sm", unitAmount: 8500 },
      { label: '11×14"', priceId: "price_wc_md", unitAmount: 11500 },
      { label: '16×20"', priceId: "price_wc_lg", unitAmount: 15500 },
      { label: '24×30"', priceId: "price_wc_xl", unitAmount: 22500 },
    ],
    metadata: {},
  },
  {
    id: "stone-arch",
    name: "Stone Arch",
    description:
      "Architecture made by wind and time. The arch frames an improbable blue — the kind of composition that reminds you the world is already art.",
    images: [],
    gradient: "linear-gradient(155deg, #3d2b1a 0%, #6b4c2a 40%, #9a7040 70%, #c4a060 100%)",
    edition: "Open edition",
    category: "architecture",
    sizes: [
      { label: '8×10"', priceId: "price_sa_sm", unitAmount: 7500 },
      { label: '11×14"', priceId: "price_sa_md", unitAmount: 9500 },
      { label: '16×20"', priceId: "price_sa_lg", unitAmount: 13500 },
    ],
    metadata: {},
  },
];

export function getProductById(id: string): Product | undefined {
  return placeholderProducts.find((p) => p.id === id);
}
