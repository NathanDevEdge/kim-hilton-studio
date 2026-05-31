import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";

export function Testimonial() {
  return (
    <section className="py-32 bg-black-forest relative overflow-hidden">
      {/* Warm accent — bottom right */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom right, rgba(188,108,37,0.15) 0%, transparent 65%)",
        }}
      />

      <Container narrow>
        <div className="text-center relative z-10">
          <Text variant="label" className="text-sunlit-clay/70 mb-12 block tracking-[0.2em]">
            Client words
          </Text>

          <div className="mb-10">
            {/* Opening quote mark */}
            <span
              className="block font-heading text-[6rem] leading-none text-sunlit-clay/20 mb-[-1.5rem]"
              aria-hidden="true"
            >
              "
            </span>
            <Text
              variant="h3"
              italic
              className="text-cornsilk leading-relaxed"
            >
              Kim transformed how our brand looks and feels. The photography
              alone changed the way customers see us — and the design tied
              everything together perfectly.
            </Text>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-sunlit-clay/30" />
            <Text variant="caption" className="text-cornsilk/40">
              Sarah M., Founder of Bloom & Co.
            </Text>
            <div className="h-px w-12 bg-sunlit-clay/30" />
          </div>
        </div>
      </Container>
    </section>
  );
}
