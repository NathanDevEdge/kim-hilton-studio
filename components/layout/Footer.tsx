import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com/kimhiltonstudio" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black-forest pt-20 pb-10">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-16 pb-16 border-b border-cornsilk/10">
          <div className="max-w-xs">
            <Link
              href="/"
              className="font-heading text-2xl text-cornsilk hover:text-sunlit-clay transition-colors duration-300 block mb-4"
            >
              Kim Hilton Studio
            </Link>
            <Text variant="body-sm" className="text-cornsilk/50 leading-relaxed">
              Photography, marketing and design for brands and small businesses
              that want to be remembered.
            </Text>
          </div>

          <div className="flex gap-16 lg:gap-24">
            <div>
              <Text variant="label" className="text-cornsilk/30 mb-5 block">
                Navigate
              </Text>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-body text-sm text-cornsilk/60 hover:text-sunlit-clay transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <Text variant="label" className="text-cornsilk/30 mb-5 block">
                Connect
              </Text>
              <div className="flex flex-col gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-cornsilk/60 hover:text-sunlit-clay transition-colors duration-300"
                  >
                    {s.label}
                  </a>
                ))}
                <a
                  href="mailto:admin@kimhiltonstudio.com"
                  className="font-body text-sm text-cornsilk/60 hover:text-sunlit-clay transition-colors duration-300"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
          <Text variant="caption" className="text-cornsilk/30">
            © {year} Kim Hilton Studio. All rights reserved.
          </Text>
          <Text variant="caption" className="text-cornsilk/20">
            Photography · Marketing · Design
          </Text>
        </div>
      </Container>
    </footer>
  );
}
