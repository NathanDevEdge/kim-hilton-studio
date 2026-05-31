"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { WorkItem, WorkCategory } from "@/types/work";
import { WorkCard } from "@/components/work/WorkCard";
import { Text } from "@/components/ui/Text";

type Filter = "all" | WorkCategory;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "photography", label: "Photography" },
  { id: "marketing", label: "Marketing" },
  { id: "design", label: "Design" },
];

interface WorkGridProps {
  items: WorkItem[];
}

export function WorkGrid({ items }: WorkGridProps) {
  const [active, setActive] = useState<Filter>("all");

  const filtered =
    active === "all" ? items : items.filter((i) => i.category === active);

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap items-center gap-2 mb-14">
        {filters.map((filter) => {
          const isActive = active === filter.id;
          return (
            <button
              key={filter.id}
              onClick={() => setActive(filter.id)}
              className={`relative font-body text-xs uppercase tracking-widest px-5 py-2.5 transition-all duration-300 ${
                isActive
                  ? "bg-copperwood text-cornsilk"
                  : "bg-transparent text-black-forest/50 hover:text-black-forest border border-black-forest/15 hover:border-black-forest/40"
              }`}
            >
              {filter.label}
              {isActive && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 bg-copperwood -z-10"
                  transition={{ type: "spring", damping: 30, stiffness: 350 }}
                />
              )}
            </button>
          );
        })}

        <Text variant="caption" className="ml-auto hidden sm:block">
          {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        </Text>
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              key={item.slug}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <WorkCard item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-32 text-center"
        >
          <Text variant="body-sm" className="text-black-forest/40">
            No projects in this category yet.
          </Text>
        </motion.div>
      )}
    </div>
  );
}
