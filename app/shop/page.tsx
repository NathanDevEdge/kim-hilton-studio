import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { PrintCard } from "@/components/shop/PrintCard";
import { placeholderProducts } from "@/lib/placeholder-products";

export const metadata: Metadata = {
  title: "Prints",
  description: "Fine art prints by Kim Hilton. Limited and open edition photography available to own.",
};

export default function ShopPage() {
  // Stage 4: replace placeholderProducts with await getActiveProducts()
  const products = placeholderProducts;

  return (
    <>
      {/* Page header */}
      <section className="pt-40 pb-20 bg-cornsilk">
        <Container>
          <Text variant="label" className="mb-4 block">
            Fine art prints
          </Text>
          <Text variant="h1" className="text-black-forest max-w-xl">
            Photography you can
            <br />
            <em className="not-italic italic font-heading text-copperwood">
              live with.
            </em>
          </Text>
          <Text variant="body" className="text-black-forest/50 mt-6 max-w-md">
            Each print is produced to archival standards on premium paper.
            Limited editions include a signed certificate of authenticity.
          </Text>
        </Container>
      </section>

      {/* Thin divider */}
      <div className="h-px bg-black-forest/10" />

      {/* Product grid */}
      <section className="py-20 bg-cornsilk">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-14">
            {products.map((product) => (
              <PrintCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom callout */}
      <section className="py-20 bg-black-forest">
        <Container narrow>
          <div className="text-center">
            <Text variant="label" className="text-sunlit-clay/70 mb-4 block">
              Custom sizing
            </Text>
            <Text variant="h3" className="text-cornsilk mb-4">
              Need something specific?
            </Text>
            <Text variant="body-sm" className="text-cornsilk/50 mb-8 max-w-sm mx-auto">
              Custom framing, canvas, or sizes not listed are available on
              request. Get in touch.
            </Text>
            <a
              href="mailto:admin@kimhiltonstudio.com"
              className="font-body text-xs uppercase tracking-widest text-sunlit-clay hover:text-cornsilk transition-colors border-b border-sunlit-clay/40 hover:border-cornsilk pb-px"
            >
              admin@kimhiltonstudio.com
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
