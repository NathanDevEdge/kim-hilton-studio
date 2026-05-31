export interface ProductSize {
  label: string;
  priceId: string;
  unitAmount: number; // cents
}

export interface Product {
  id: string;
  name: string;
  description: string;
  images: string[]; // populated from Stripe or CDN in Stage 8
  gradient: string; // placeholder until real images
  sizes: ProductSize[];
  edition: "Limited edition" | "Open edition";
  category: "landscape" | "architecture" | "wildlife" | "abstract";
  metadata: Record<string, string>;
}

export interface CartItem {
  productId: string;
  priceId: string;
  name: string;
  size: string;
  unitAmount: number; // cents
  quantity: number;
  gradient: string;
}
