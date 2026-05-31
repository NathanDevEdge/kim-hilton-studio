import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kim Hilton is a photographer, designer and brand strategist. Learn about her background, approach and the work she does.",
};

const approach = [
  {
    number: "01",
    title: "Start with listening",
    body: "Every project begins with understanding what you're actually trying to say — not just what you want to look like. The best visual work is always rooted in something true.",
  },
  {
    number: "02",
    title: "Work deliberately",
    body: "Good creative work takes time. I don't rush projects and I don't overload my calendar. You get focus, not a production line.",
  },
  {
    number: "03",
    title: "Build for the long term",
    body: "The work I make is designed to be used for years, not months. Visual consistency is one of the most underrated assets a brand can have.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[85vh] flex items-end pb-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(155deg, #0d1508 0%, #1e2b12 40%, #283618 70%, #3d4a20 100%)",
          }}
        />
        {/* Warm top-right glow */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 85% 10%, rgba(221,161,94,0.15) 0%, transparent 65%)",
          }}
        />
        <Container className="relative z-10">
          <FadeIn>
            <Text variant="label" className="text-sunlit-clay/70 mb-6 block tracking-[0.2em]">
              About
            </Text>
            <Text variant="display" className="text-cornsilk mb-8 max-w-3xl">
              Photographer,
              <br />
              <em className="not-italic italic text-sunlit-clay">designer,</em>
              <br />
              strategist.
            </Text>
            <Text variant="body" className="text-cornsilk/55 max-w-md leading-relaxed">
              {/* Replace with Kim's actual location */}
              Based in the studio. Working with brands and small businesses who
              care about how they look and what they say.
            </Text>
          </FadeIn>
        </Container>
      </section>

      {/* ── Pull quote ── */}
      <section className="py-28 bg-cornsilk">
        <Container narrow>
          <FadeIn>
            <div className="text-center">
              <span
                className="block font-heading text-[5rem] leading-none text-olive-leaf/20 mb-[-1rem]"
                aria-hidden="true"
              >
                "
              </span>
              <Text
                variant="h2"
                italic
                className="text-black-forest leading-relaxed"
              >
                I got into this work because I believed beautiful things could
                change how people feel about a brand. I still believe that.
              </Text>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── Story ── */}
      <section className="py-24 bg-cornsilk border-t border-black-forest/8">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-start">
            {/* Portrait placeholder — replace with next/image in Stage 8 */}
            <FadeIn direction="left" className="sticky top-28 self-start">
              <div className="aspect-[3/4] relative overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(155deg, #1e2b12 0%, #283618 35%, #4a5a28 60%, #DDA15E 100%)",
                  }}
                />
                {/* Placeholder label */}
                <div className="absolute bottom-6 left-6">
                  <Text variant="caption" className="text-cornsilk/40">
                    Kim Hilton — portrait placeholder
                  </Text>
                </div>
              </div>
            </FadeIn>

            {/* Text */}
            <div className="space-y-10">
              <FadeIn delay={0.1}>
                <Text variant="label" className="mb-4 block">
                  The background
                </Text>
                <Text variant="h3" className="text-black-forest mb-6">
                  Where the work comes from
                </Text>
                <Text variant="body" className="text-black-forest/65 leading-loose">
                  {/*
                    Placeholder — replace with Kim's real bio.
                    Suggested prompts to ask Kim:
                    - How did you get started in photography?
                    - When did design and marketing become part of your practice?
                    - What kind of clients do you love working with most?
                  */}
                  Kim Hilton is a photographer and creative director with a
                  background in both visual arts and brand strategy. She founded
                  Kim Hilton Studio after years working across editorial,
                  commercial, and brand photography — realising that the most
                  effective creative work happened when photography, design, and
                  strategy were considered together from the start.
                </Text>
              </FadeIn>

              <FadeIn delay={0.15}>
                <Text variant="body" className="text-black-forest/65 leading-loose">
                  Her clients are typically small to medium-sized businesses who
                  want their visual presence to feel as considered as the product
                  or service they offer. She works with founders, creative
                  directors, and marketing teams who understand that how
                  something looks is part of how it works.
                </Text>
              </FadeIn>

              <FadeIn delay={0.2}>
                <Text variant="body" className="text-black-forest/65 leading-loose">
                  Outside of client work, Kim maintains a personal photography
                  practice — the prints available in the shop are the result of
                  that ongoing work. It keeps her eye sharp and her relationship
                  with the medium honest.
                </Text>
              </FadeIn>

              {/* Credential strip */}
              <FadeIn delay={0.25}>
                <div className="pt-8 border-t border-black-forest/10 grid grid-cols-2 gap-6">
                  {[
                    { label: "Founded", value: "2019" },
                    { label: "Based", value: "Your location" },
                    { label: "Disciplines", value: "3" },
                    { label: "Clients served", value: "50+" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <Text variant="label" className="mb-1 block">
                        {stat.label}
                      </Text>
                      <Text variant="h4" className="text-black-forest">
                        {stat.value}
                      </Text>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Approach ── */}
      <section className="py-28 bg-black-forest">
        <Container>
          <FadeIn>
            <Text variant="label" className="text-sunlit-clay/70 mb-4 block tracking-[0.2em]">
              How I work
            </Text>
            <Text variant="h2" className="text-cornsilk mb-20 max-w-lg">
              The approach
            </Text>
          </FadeIn>

          <div className="space-y-0 divide-y divide-cornsilk/8">
            {approach.map((item, i) => (
              <FadeIn key={item.number} delay={i * 0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr_2fr] gap-4 lg:gap-12 py-12 group">
                  <span className="font-heading text-5xl text-cornsilk/15 leading-none self-start">
                    {item.number}
                  </span>
                  <Text variant="h3" className="text-sunlit-clay self-start">
                    {item.title}
                  </Text>
                  <Text variant="body" className="text-cornsilk/55 leading-loose">
                    {item.body}
                  </Text>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Values strip ── */}
      <section className="py-16 bg-cornsilk border-y border-black-forest/10 overflow-hidden">
        <Container wide>
          <FadeIn>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <Text variant="label" className="text-olive-leaf/60 mr-4">
                Values
              </Text>
              {[
                "Intentional",
                "Honest",
                "Considered",
                "Long-term",
                "Collaborative",
                "Detail-oriented",
                "Human",
              ].map((value, i) => (
                <span key={value} className="flex items-center gap-8">
                  <span className="font-heading text-2xl text-black-forest/80 italic">
                    {value}
                  </span>
                  {i < 6 && (
                    <span className="text-sunlit-clay/40 font-body text-lg">·</span>
                  )}
                </span>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 bg-cornsilk">
        <Container narrow>
          <FadeIn>
            <div className="text-center">
              <Text variant="label" className="mb-6 block">
                Ready when you are
              </Text>
              <Text variant="h2" className="text-black-forest mb-6">
                Let's make something
                <br />
                <em className="not-italic italic font-heading text-copperwood">
                  worth remembering.
                </em>
              </Text>
              <Text variant="body" className="text-black-forest/50 mb-10 max-w-sm mx-auto">
                Whether you have a clear brief or just an idea, the first
                conversation is always free.
              </Text>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/contact" size="lg">
                  Get in touch
                </Button>
                <Button href="/work" variant="secondary" size="lg">
                  See the work first
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
