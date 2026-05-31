import type { MetadataRoute } from "next";
import { placeholderProducts } from "@/lib/placeholder-products";
import { workItems } from "@/lib/placeholder-work";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kimhiltonstudio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, priority: 1, changeFrequency: "monthly" },
    { url: `${BASE_URL}/about`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/work`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${BASE_URL}/shop`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${BASE_URL}/contact`, priority: 0.7, changeFrequency: "yearly" },
  ];

  const workPages: MetadataRoute.Sitemap = workItems.map((w) => ({
    url: `${BASE_URL}/work/${w.slug}`,
    priority: 0.7,
    changeFrequency: "monthly",
  }));

  const shopPages: MetadataRoute.Sitemap = placeholderProducts.map((p) => ({
    url: `${BASE_URL}/shop/${p.id}`,
    priority: 0.6,
    changeFrequency: "monthly",
  }));

  return [...staticPages, ...workPages, ...shopPages];
}
