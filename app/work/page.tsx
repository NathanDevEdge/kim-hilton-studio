import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { WorkGrid } from "@/components/work/WorkGrid";
import { workItems } from "@/lib/placeholder-work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Photography, marketing and design projects by Kim Hilton Studio. A curated selection of brand and commercial work.",
};

export default function WorkPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-40 pb-20 bg-cornsilk">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <Text variant="label" className="mb-4 block">
                Selected projects
              </Text>
              <Text variant="h1" className="text-black-forest max-w-xl">
                Work that
                <br />
                <em className="not-italic italic font-heading text-copperwood">
                  means something.
                </em>
              </Text>
            </div>
            <Text
              variant="body-sm"
              className="text-black-forest/50 max-w-xs lg:text-right leading-relaxed"
            >
              A selection of photography, marketing and design projects. Every
              piece of work here started with a conversation.
            </Text>
          </div>
        </Container>
      </section>

      <div className="h-px bg-black-forest/10" />

      {/* Filterable grid */}
      <section className="py-20 bg-cornsilk">
        <Container wide>
          <WorkGrid items={workItems} />
        </Container>
      </section>

      {/* CTA strip */}
      <section className="py-24 bg-black-forest">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <Text variant="h3" className="text-cornsilk mb-2">
                Got a project in mind?
              </Text>
              <Text variant="body-sm" className="text-cornsilk/50">
                Photography, brand design, or marketing — let's talk about it.
              </Text>
            </div>
            <a
              href="/contact"
              className="flex-shrink-0 font-body text-xs uppercase tracking-widest px-8 py-4 bg-copperwood text-cornsilk hover:bg-sunlit-clay hover:text-black-forest transition-colors duration-300"
            >
              Start a conversation
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
