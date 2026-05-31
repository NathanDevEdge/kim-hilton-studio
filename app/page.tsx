import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServiceSection } from "@/components/sections/ServiceSection";
import { FeaturedPrints } from "@/components/sections/FeaturedPrints";
import { Testimonial } from "@/components/sections/Testimonial";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kimhiltonstudio.com",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Kim Hilton Studio",
  description:
    "Photography, marketing and design for brands and small businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kimhiltonstudio.com",
  email: "admin@kimhiltonstudio.com",
  sameAs: ["https://instagram.com/kimhiltonstudio"],
  knowsAbout: ["Photography", "Graphic Design", "Brand Marketing", "Fine Art Prints"],
};

export default function Home() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Hero />
      <ServiceSection />
      <FeaturedPrints />
      <Testimonial />
    </>
  );
}
