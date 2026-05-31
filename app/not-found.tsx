import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex-1 flex items-center justify-center py-32 bg-cornsilk relative overflow-hidden">
      {/* Large background 404 */}
      <span
        className="absolute inset-0 flex items-center justify-center font-heading text-[30vw] text-black-forest/[0.04] select-none pointer-events-none leading-none"
        aria-hidden="true"
      >
        404
      </span>

      <Container narrow className="relative z-10 text-center">
        <Text variant="label" className="mb-6 block">
          Page not found
        </Text>
        <Text variant="h2" className="text-black-forest mb-4">
          This page doesn't exist —
          <br />
          <em className="not-italic italic font-heading text-copperwood">
            but plenty do.
          </em>
        </Text>
        <Text variant="body" className="text-black-forest/50 mb-12 max-w-sm mx-auto">
          The page you're looking for has moved, been removed, or never existed.
          Here are some places to go instead.
        </Text>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button href="/" size="lg">
            Go home
          </Button>
          <Button href="/work" variant="secondary" size="lg">
            See the work
          </Button>
        </div>

        <div className="flex items-center justify-center gap-8">
          {[
            { label: "Shop", href: "/shop" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-xs uppercase tracking-widest text-black-forest/40 hover:text-copperwood transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
