import Link from "next/link";
import type { WorkItem } from "@/types/work";
import { Text } from "@/components/ui/Text";

interface WorkCardProps {
  item: WorkItem;
}

const aspectClasses = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

const categoryLabels = {
  photography: "Photography",
  marketing: "Marketing",
  design: "Design",
};

export function WorkCard({ item }: WorkCardProps) {
  return (
    <Link href={`/work/${item.slug}`} className="group block">
      <div className={`${aspectClasses[item.aspectRatio]} relative overflow-hidden`}>
        {/* Background — replace with next/image in Stage 8 */}
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          style={{ background: item.gradient }}
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black-forest/0 group-hover:bg-black-forest/50 transition-colors duration-500" />

        {/* Category tag — always visible */}
        <div className="absolute top-4 left-4 z-10">
          <span className="font-body text-[10px] uppercase tracking-widest text-cornsilk/70 bg-black-forest/40 backdrop-blur-sm px-2.5 py-1">
            {categoryLabels[item.category]}
          </span>
        </div>

        {/* Title + client — revealed on hover */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
          <Text variant="caption" className="text-sunlit-clay mb-1">
            {item.client} · {item.year}
          </Text>
          <Text variant="h4" className="text-cornsilk leading-snug">
            {item.title}
          </Text>
          <Text variant="body-sm" className="text-cornsilk/60 mt-2 line-clamp-2">
            {item.shortDescription}
          </Text>
        </div>

        {/* Arrow — appears on hover */}
        <div className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center border border-cornsilk/0 group-hover:border-cornsilk/30 transition-all duration-400 opacity-0 group-hover:opacity-100">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 10L10 2M10 2H4M10 2v6" stroke="#FEFAE0" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Below-card label (visible on mobile where hover doesn't exist) */}
      <div className="mt-3 lg:hidden">
        <Text variant="h4" className="text-black-forest">{item.title}</Text>
        <Text variant="caption">{item.client} · {item.year}</Text>
      </div>
    </Link>
  );
}
