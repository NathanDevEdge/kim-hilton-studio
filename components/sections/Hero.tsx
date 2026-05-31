"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background photo */}
      <Image
        src="/images/HERO-01.png"
        alt=""
        fill
        className="object-cover z-0"
        priority
      />

      {/* Dark overlay so text stays readable */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "linear-gradient(160deg, rgba(17,26,10,0.62) 0%, rgba(30,43,18,0.45) 50%, rgba(40,54,24,0.38) 100%)",
        }}
      />

      {/* Warm accent glow — top right */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 80% 10%, rgba(221,161,94,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-[3] pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(17,26,10,0.4))",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Text variant="label" className="text-sunlit-clay mb-8 block tracking-[0.2em]">
            Photography · Marketing · Design
          </Text>

          <Text variant="display" className="text-cornsilk mb-6">
            Where story
            <br />
            <em className="not-italic font-heading italic text-sunlit-clay">meets craft.</em>
          </Text>

          <Text
            variant="body"
            className="text-cornsilk/60 mb-12 max-w-sm mx-auto leading-relaxed"
          >
            Visual storytelling and brand design for businesses that want to be
            remembered.
          </Text>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/work" size="lg">
              See the work
            </Button>
            <Button
              href="/about"
              variant="secondary"
              size="lg"
              className="border-cornsilk/40 text-cornsilk hover:bg-cornsilk hover:text-black-forest"
            >
              About Kim
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <Text variant="caption" className="text-cornsilk/30 tracking-[0.2em]">
          Scroll
        </Text>
        <motion.div
          animate={{ scaleY: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-10 bg-cornsilk/30 origin-top"
        />
      </motion.div>
    </section>
  );
}
