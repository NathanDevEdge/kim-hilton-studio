import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getWorkItemBySlug, workItems } from "@/lib/placeholder-work";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { WorkCard } from "@/components/work/WorkCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return workItems.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getWorkItemBySlug(slug);
  if (!item) return { title: "Project not found" };
  return {
    title: item.title,
    description: item.shortDescription,
  };
}

const categoryLabels = {
  photography: "Photography",
  marketing: "Marketing",
  design: "Design",
};

const aspectStyles = {
  portrait: "aspect-[3/4] max-h-[80vh]",
  landscape: "aspect-[16/9]",
  square: "aspect-square max-h-[70vh]",
};

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getWorkItemBySlug(slug);
  if (!item) notFound();

  const related = workItems
    .filter((w) => w.slug !== slug && w.category === item.category)
    .slice(0, 3);

  return (
    <>
      {/* Hero image */}
      <section className="pt-20 bg-black-forest">
        <div className={`w-full relative overflow-hidden ${aspectStyles[item.aspectRatio]}`}>
          <div
            className="absolute inset-0"
            style={{ background: item.gradient }}
          />
          {/* Gradient footer fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(10,16,6,0.7))" }}
          />
          {/* Category label on image */}
          <div className="absolute top-8 left-8">
            <span className="font-body text-[10px] uppercase tracking-widest text-cornsilk/60 bg-black-forest/40 backdrop-blur-sm px-3 py-1.5">
              {categoryLabels[item.category]}
            </span>
          </div>
        </div>
      </section>

      {/* Project info */}
      <section className="bg-cornsilk py-20">
        <Container>
          {/* Back link */}
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-widest text-black-forest/40 hover:text-copperwood transition-colors duration-300 mb-12 group"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            >
              <path d="M10 7H4M4 7l3-3M4 7l3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All work
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16">
            {/* Main content */}
            <div>
              <Text variant="h1" className="text-black-forest mb-6">
                {item.title}
              </Text>
              <Text variant="body" className="text-black-forest/70 leading-loose max-w-xl">
                {item.fullDescription}
              </Text>
            </div>

            {/* Project details sidebar */}
            <div className="space-y-8 lg:pt-4">
              <div>
                <Text variant="label" className="mb-2 block">Client</Text>
                <Text variant="body-sm" className="text-black-forest/70">{item.client}</Text>
              </div>
              <div>
                <Text variant="label" className="mb-2 block">Discipline</Text>
                <Text variant="body-sm" className="text-black-forest/70">{categoryLabels[item.category]}</Text>
              </div>
              <div>
                <Text variant="label" className="mb-2 block">Year</Text>
                <Text variant="body-sm" className="text-black-forest/70">{item.year}</Text>
              </div>
              <div>
                <Text variant="label" className="mb-3 block">Services</Text>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-xs text-black-forest/60 border border-black-forest/20 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-black-forest/10">
                <Link
                  href="/contact"
                  className="font-body text-xs uppercase tracking-widest text-copperwood hover:text-black-forest transition-colors duration-300 flex items-center gap-2 group"
                >
                  Start a similar project
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M2 6h8M8 4l2 2-2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related work */}
      {related.length > 0 && (
        <section className="py-24 bg-cornsilk border-t border-black-forest/10">
          <Container wide>
            <div className="flex items-end justify-between mb-12">
              <Text variant="h3" className="text-black-forest">
                More {categoryLabels[item.category].toLowerCase()}
              </Text>
              <Link
                href="/work"
                className="font-body text-xs uppercase tracking-widest text-black-forest/40 hover:text-copperwood transition-colors duration-300"
              >
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
              {related.map((w) => (
                <WorkCard key={w.slug} item={w} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
