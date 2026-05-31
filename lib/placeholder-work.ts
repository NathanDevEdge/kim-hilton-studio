import type { WorkItem } from "@/types/work";

// Stage 8: replace gradients with real imagery from Kim's portfolio.
// Order is intentional — interleaved categories for the "All" view.
export const workItems: WorkItem[] = [
  {
    slug: "bloom-brand-shoot",
    title: "Brand Shoot",
    client: "Bloom & Co",
    category: "photography",
    year: "2024",
    shortDescription: "Full brand photography suite for an independent florist.",
    fullDescription:
      "Bloom & Co wanted imagery that felt as considered as their arrangements. Shot over two days across their studio and a rural property, the work captures both the craft and the quiet personality of the brand — florals in their natural environment, hands at work, light through glass.",
    gradient: "linear-gradient(155deg, #1a2b10 0%, #283618 40%, #4a6030 70%, #8a9a60 100%)",
    aspectRatio: "landscape",
    tags: ["Brand photography", "Studio", "Lifestyle"],
  },
  {
    slug: "copper-clay-identity",
    title: "Brand Identity",
    client: "Copper & Clay",
    category: "marketing",
    year: "2024",
    shortDescription: "Identity and brand strategy for a ceramic studio.",
    fullDescription:
      "Copper & Clay needed a visual language as tactile as their work. The identity draws from raw materials — earth tones, hand-drawn marks, and type that feels made rather than manufactured. Delivered with full brand guidelines and a social strategy.",
    gradient: "linear-gradient(155deg, #4a1e08 0%, #7a3512 40%, #BC6C25 75%, #DDA15E 100%)",
    aspectRatio: "portrait",
    tags: ["Brand identity", "Strategy", "Guidelines"],
  },
  {
    slug: "stone-grain-logo",
    title: "Logo & Identity",
    client: "Stone & Grain",
    category: "design",
    year: "2025",
    shortDescription: "Logo design and visual identity for an artisan bakery.",
    fullDescription:
      "Stone & Grain is a bakery that takes its time. The identity reflects that — a wordmark with considered weight and spacing, a palette pulled from grain and stone, and a set of supporting marks that work across packaging, signage, and digital.",
    gradient: "linear-gradient(155deg, #2a2018 0%, #4a3828 40%, #7a6040 70%, #c4a878 100%)",
    aspectRatio: "portrait",
    tags: ["Logo", "Wordmark", "Packaging"],
  },
  {
    slug: "editorial-slow-season",
    title: "The Slow Season",
    client: "Editorial",
    category: "photography",
    year: "2024",
    shortDescription: "A personal editorial series on rest and rural life.",
    fullDescription:
      "A self-initiated series made over the quieter months of the year. No brief, no client — just a deliberate slowness. The work explores what it looks like when nothing urgent is happening: long grasses, empty tables, open windows.",
    gradient: "linear-gradient(155deg, #1e2810 0%, #2d3c18 35%, #606C38 65%, #8a9e50 100%)",
    aspectRatio: "portrait",
    tags: ["Editorial", "Personal work", "Documentary"],
  },
  {
    slug: "golden-fields-campaign",
    title: "Campaign Design",
    client: "Golden Fields",
    category: "marketing",
    year: "2025",
    shortDescription: "Seasonal campaign for an organic produce brand.",
    fullDescription:
      "Golden Fields releases a small-batch seasonal range each quarter. The campaign needed to feel as unhurried as the produce itself — photography-led, minimal copy, and a colour palette that shifted with the harvest. Delivered across print, social, and packaging inserts.",
    gradient: "linear-gradient(155deg, #5a3a08 0%, #8a5a10 40%, #c48a20 70%, #e8c850 100%)",
    aspectRatio: "landscape",
    tags: ["Campaign", "Seasonal", "Print & digital"],
  },
  {
    slug: "oak-studio-guidelines",
    title: "Brand Guidelines",
    client: "The Oak Studio",
    category: "design",
    year: "2024",
    shortDescription: "Comprehensive brand system for an interior design practice.",
    fullDescription:
      "The Oak Studio needed a brand system that could flex across residential and commercial work without losing its character. The guidelines cover typography, colour, photography art direction, spatial design principles, and tone of voice — a complete creative framework.",
    gradient: "linear-gradient(155deg, #1a1810 0%, #3a3020 40%, #6a5838 70%, #a08858 100%)",
    aspectRatio: "portrait",
    tags: ["Brand system", "Typography", "Art direction"],
  },
  {
    slug: "mill-house-architecture",
    title: "The Mill House",
    client: "Architecture",
    category: "photography",
    year: "2025",
    shortDescription: "Architectural photography for a converted rural property.",
    fullDescription:
      "A 19th-century flour mill converted into a private residence. The brief was to document the tension between the old and new — exposed beams against polished concrete, raw stone beside floor-to-ceiling glass. Shot over a full day to capture the changing quality of light.",
    gradient: "linear-gradient(155deg, #18201a 0%, #2a3028 40%, #484840 70%, #787868 100%)",
    aspectRatio: "portrait",
    tags: ["Architecture", "Interior", "Long-form"],
  },
  {
    slug: "wild-free-social",
    title: "Social Strategy",
    client: "Wild & Free",
    category: "marketing",
    year: "2025",
    shortDescription: "Social content strategy and art direction for a lifestyle brand.",
    fullDescription:
      "Wild & Free had a strong product but an inconsistent presence. Over six months, we built a content system — templates, a photography brief, a posting cadence, and a tone of voice document — that gave their team everything they needed to show up consistently without losing spontaneity.",
    gradient: "linear-gradient(155deg, #2a1808 0%, #4a2a10 40%, #7a4818 70%, #b07030 100%)",
    aspectRatio: "portrait",
    tags: ["Social media", "Content strategy", "Art direction"],
  },
  {
    slug: "product-copper-clay",
    title: "Product Photography",
    client: "Copper & Clay",
    category: "photography",
    year: "2024",
    shortDescription: "Still life product photography for an e-commerce launch.",
    fullDescription:
      "Shot to support Copper & Clay's online store launch. The challenge was making handmade ceramics feel considered on screen — not sterile, not over-styled. Natural light, linen surfaces, and negative space do most of the work.",
    gradient: "linear-gradient(155deg, #3a2818 0%, #5a3a20 40%, #8a6040 70%, #c09060 100%)",
    aspectRatio: "square",
    tags: ["Product", "Still life", "E-commerce"],
  },
  {
    slug: "harvest-collective-packaging",
    title: "Packaging Design",
    client: "Harvest Collective",
    category: "design",
    year: "2025",
    shortDescription: "Packaging system for a small-batch preserve brand.",
    fullDescription:
      "Harvest Collective makes preserves in small batches, by hand, from a single farm. The packaging needed to tell that story in a glance — hand-lettered labels, kraft substrates, wax seals, and a colour code for each variety. A system that scales without losing its handmade quality.",
    gradient: "linear-gradient(155deg, #3a1808 0%, #603018 40%, #9a4820 70%, #d07838 100%)",
    aspectRatio: "landscape",
    tags: ["Packaging", "Print", "Illustration"],
  },
];

export function getWorkItemBySlug(slug: string): WorkItem | undefined {
  return workItems.find((w) => w.slug === slug);
}
