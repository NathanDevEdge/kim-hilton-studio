"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Text } from "@/components/ui/Text";

type ServiceId = "photography" | "marketing" | "design";

const services = [
  {
    id: "photography" as ServiceId,
    number: "01",
    label: "Photography",
    copy: "Imagery that speaks before words do.",
    gradient:
      "linear-gradient(155deg, #111a0a 0%, #1e2b12 30%, #283618 55%, #606C38 100%)",
    // Positioned: left side, vertically centred
    desktopClass: "left-[8%] top-1/2 -translate-y-1/2",
  },
  {
    id: "marketing" as ServiceId,
    number: "02",
    label: "Marketing",
    copy: "Strategy that turns attention into loyalty.",
    gradient:
      "linear-gradient(155deg, #1e2b12 0%, #4a2a0e 40%, #BC6C25 75%, #DDA15E 100%)",
    // Positioned: right side, upper quarter
    desktopClass: "right-[9%] top-[18%]",
  },
  {
    id: "design" as ServiceId,
    number: "03",
    label: "Design",
    copy: "Aesthetics built to outlast trends.",
    gradient:
      "linear-gradient(155deg, #111a0a 0%, #283618 35%, #4a2a0e 70%, #BC6C25 100%)",
    // Positioned: right side, lower quarter
    desktopClass: "right-[9%] bottom-[18%]",
  },
];

const defaultGradient =
  "linear-gradient(155deg, #111a0a 0%, #1e2b12 30%, #283618 55%, #606C38 100%)";

export function ServiceSection() {
  const [active, setActive] = useState<ServiceId | null>(null);

  return (
    <section>
      {/* ── Desktop: immersive full-bleed ── */}
      <div className="hidden lg:block relative h-[88vh] overflow-hidden">
        {/* Default background */}
        <motion.div
          className="absolute inset-0"
          style={{ background: defaultGradient }}
          animate={{ opacity: active ? 0 : 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />

        {/* Per-service backgrounds — all rendered, opacity controlled */}
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="absolute inset-0"
            style={{ background: service.gradient }}
            animate={{ opacity: active === service.id ? 1 : 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
        ))}

        {/* Warm top-right accent that intensifies on marketing hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 85% 15%, rgba(221,161,94,0.2) 0%, transparent 65%)",
          }}
          animate={{ opacity: active === "marketing" ? 1.5 : 0.6 }}
          transition={{ duration: 0.7 }}
        />

        {/* "What I do" label — top left */}
        <div className="absolute top-12 left-12 z-10">
          <Text variant="label" className="text-cornsilk/35">
            What I do
          </Text>
        </div>

        {/* Service labels */}
        {services.map((service) => {
          const isActive = active === service.id;
          return (
            <button
              key={service.id}
              onMouseEnter={() => setActive(service.id)}
              onMouseLeave={() => setActive(null)}
              className={`absolute z-10 text-left cursor-default group ${service.desktopClass}`}
              aria-label={service.label}
            >
              {/* Number + expanding line */}
              <div className="flex items-center gap-3 mb-3">
                <Text variant="label" className="text-cornsilk/35 tabular-nums">
                  {service.number}
                </Text>
                <motion.div
                  className="h-px bg-sunlit-clay"
                  animate={{ width: isActive ? 44 : 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </div>

              {/* Label */}
              <motion.div
                animate={{ color: isActive ? "#DDA15E" : "#FEFAE0" }}
                transition={{ duration: 0.4 }}
              >
                <Text variant="h2" as="span" className="block leading-none">
                  {service.label}
                </Text>
              </motion.div>

              {/* Copy — fades in below label */}
              <motion.div
                animate={{
                  opacity: isActive ? 1 : 0,
                  y: isActive ? 0 : 10,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="mt-3 max-w-[220px]"
              >
                <Text variant="body-sm" className="text-cornsilk/65 leading-relaxed">
                  {service.copy}
                </Text>
              </motion.div>
            </button>
          );
        })}

        {/* Centre "hover to explore" prompt */}
        <motion.div
          animate={{ opacity: active ? 0 : 1 }}
          transition={{ duration: 0.35 }}
          className="absolute inset-0 flex items-end justify-center pb-12 pointer-events-none"
        >
          <Text variant="label" className="text-cornsilk/25 tracking-[0.2em]">
            Hover to explore
          </Text>
        </motion.div>
      </div>

      {/* ── Mobile: stacked cards ── */}
      <div className="lg:hidden">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative h-72 flex items-end px-7 pb-8 overflow-hidden"
          >
            <div
              className="absolute inset-0"
              style={{ background: service.gradient }}
            />
            {/* Subtle warm glow on marketing card */}
            {service.id === "marketing" && (
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 50% at 80% 20%, rgba(221,161,94,0.2) 0%, transparent 65%)",
                }}
              />
            )}
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Text variant="label" className="text-cornsilk/35">
                  {service.number}
                </Text>
                <div className="h-px w-8 bg-sunlit-clay/60" />
              </div>
              <Text variant="h3" className="text-cornsilk mb-2 leading-none">
                {service.label}
              </Text>
              <Text variant="body-sm" className="text-cornsilk/60">
                {service.copy}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
