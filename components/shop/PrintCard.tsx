import Link from "next/link";
import type { Product } from "@/types/product";
import { Text } from "@/components/ui/Text";

interface PrintCardProps {
  product: Product;
}

function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(0)}`;
}

export function PrintCard({ product }: PrintCardProps) {
  const lowestPrice = Math.min(...product.sizes.map((s) => s.unitAmount));

  return (
    <Link href={`/shop/${product.id}`} className="group block">
      {/* Image */}
      <div className="aspect-[3/4] mb-5 overflow-hidden relative">
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          style={{ background: product.gradient }}
        />
        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black-forest/0 group-hover:bg-black-forest/15 transition-colors duration-500" />
        {/* View label on hover */}
        <div className="absolute inset-0 flex items-end justify-center pb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="font-body text-xs uppercase tracking-widest text-cornsilk bg-black-forest/55 backdrop-blur-sm px-5 py-2">
            View print
          </span>
        </div>
        {/* Edition badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`font-body text-[10px] uppercase tracking-widest px-2.5 py-1 ${
              product.edition === "Limited edition"
                ? "bg-black-forest/70 text-sunlit-clay"
                : "bg-black-forest/50 text-cornsilk/70"
            }`}
          >
            {product.edition}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <Text
            variant="h4"
            className="text-black-forest mb-1 group-hover:text-copperwood transition-colors duration-300 truncate"
          >
            {product.name}
          </Text>
          <Text variant="caption">{product.sizes.length} sizes available</Text>
        </div>
        <Text variant="body-sm" className="text-copperwood font-medium flex-shrink-0">
          From {formatPrice(lowestPrice)}
        </Text>
      </div>
    </Link>
  );
}
