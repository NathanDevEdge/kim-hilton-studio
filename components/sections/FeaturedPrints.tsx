import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";

// Placeholder data — replaced with live Stripe products in Stage 4
const placeholderPrints = [
  {
    id: "1",
    title: "Golden Hour",
    price: "$85",
    size: "Limited edition",
    gradient: "linear-gradient(155deg, #BC6C25 0%, #DDA15E 60%, #FEFAE0 100%)",
  },
  {
    id: "2",
    title: "Still Forest",
    price: "$95",
    size: "Limited edition",
    gradient: "linear-gradient(155deg, #111a0a 0%, #283618 50%, #606C38 100%)",
  },
  {
    id: "3",
    title: "Morning Light",
    price: "$75",
    size: "Open edition",
    gradient: "linear-gradient(155deg, #DDA15E 0%, #FEFAE0 70%, #f5f0d0 100%)",
  },
];

export function FeaturedPrints() {
  return (
    <section className="py-28 bg-cornsilk">
      <Container>
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <Text variant="label" className="mb-4 block">
              Fine art prints
            </Text>
            <Text variant="h2" className="text-black-forest">
              Own a piece
              <br />
              <em className="not-italic font-heading italic text-copperwood">
                of the work.
              </em>
            </Text>
          </div>
          <Button href="/shop" variant="ghost">
            View all prints →
          </Button>
        </div>

        {/* Print grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
          {placeholderPrints.map((print) => (
            <Link
              key={print.id}
              href={`/shop/${print.id}`}
              className="group block"
            >
              {/* Image — replace with next/image in Stage 8 */}
              <div className="aspect-[3/4] mb-5 overflow-hidden relative">
                <div
                  className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  style={{ background: print.gradient }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black-forest/0 group-hover:bg-black-forest/10 transition-colors duration-500" />
                {/* Quick buy label on hover */}
                <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <span className="font-body text-xs uppercase tracking-widest text-cornsilk bg-black-forest/60 backdrop-blur-sm px-4 py-2">
                    View print
                  </span>
                </div>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <Text variant="h4" className="text-black-forest mb-1 group-hover:text-copperwood transition-colors duration-300">
                    {print.title}
                  </Text>
                  <Text variant="caption">{print.size}</Text>
                </div>
                <Text variant="body-sm" className="text-copperwood font-medium">
                  {print.price}
                </Text>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
