import { Hero } from "@/components/sections/Hero";
import { ServiceSection } from "@/components/sections/ServiceSection";
import { FeaturedPrints } from "@/components/sections/FeaturedPrints";
import { Testimonial } from "@/components/sections/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceSection />
      <FeaturedPrints />
      <Testimonial />
    </>
  );
}
