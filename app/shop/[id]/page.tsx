import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductById, placeholderProducts } from "@/lib/placeholder-products";
import { ProductDetail } from "@/components/shop/ProductDetail";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return placeholderProducts.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Print not found" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  return <ProductDetail product={product} />;
}
