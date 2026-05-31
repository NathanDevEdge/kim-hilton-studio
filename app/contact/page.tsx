import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Kim Hilton Studio. Whether you have a brief ready or just an idea — the first conversation is always free.",
};

const details = [
  {
    label: "Email",
    value: "admin@kimhiltonstudio.com",
    href: "mailto:admin@kimhiltonstudio.com",
  },
  {
    label: "Instagram",
    value: "@kimhiltonstudio",
    href: "https://instagram.com/kimhiltonstudio",
  },
  {
    label: "Response time",
    value: "Within 2 business days",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="pt-40 pb-20 bg-cornsilk">
        <Container>
          <FadeIn>
            <Text variant="label" className="mb-4 block">
              Get in touch
            </Text>
            <Text variant="h1" className="text-black-forest max-w-2xl">
              Every project starts
              <br />
              <em className="not-italic italic font-heading text-copperwood">
                with a conversation.
              </em>
            </Text>
          </FadeIn>
        </Container>
      </section>

      <div className="h-px bg-black-forest/10" />

      {/* ── Main layout: form + details ── */}
      <section className="py-20 bg-cornsilk">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-24">
            {/* Form */}
            <FadeIn>
              <Text variant="body" className="text-black-forest/55 leading-relaxed mb-10 max-w-md">
                Whether you have a clear brief or just a vague direction — reach
                out. The first conversation is always free, and there's no
                obligation to go further.
              </Text>
              <ContactForm />
            </FadeIn>

            {/* Details sidebar */}
            <FadeIn delay={0.15} className="lg:pt-2">
              <div className="space-y-10">
                {/* Contact details */}
                <div>
                  <Text variant="label" className="mb-6 block">
                    Direct contact
                  </Text>
                  <div className="space-y-5">
                    {details.map((d) => (
                      <div key={d.label}>
                        <Text variant="caption" className="mb-1 block">
                          {d.label}
                        </Text>
                        {d.href ? (
                          <a
                            href={d.href}
                            target={d.href.startsWith("http") ? "_blank" : undefined}
                            rel={d.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="font-body text-sm text-black-forest hover:text-copperwood transition-colors duration-300"
                          >
                            {d.value}
                          </a>
                        ) : (
                          <Text variant="body-sm" className="text-black-forest/70">
                            {d.value}
                          </Text>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-black-forest/10" />

                {/* What to expect */}
                <div>
                  <Text variant="label" className="mb-6 block">
                    What to expect
                  </Text>
                  <div className="space-y-4">
                    {[
                      "A reply within 2 business days.",
                      "A short call to understand your project before any proposal.",
                      "An honest conversation about whether we're a good fit.",
                    ].map((item) => (
                      <div key={item} className="flex gap-3">
                        <span className="text-olive-leaf mt-0.5 flex-shrink-0 font-body text-sm">—</span>
                        <Text variant="body-sm" className="text-black-forest/60 leading-relaxed">
                          {item}
                        </Text>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-black-forest/10" />

                {/* Not sure section */}
                <div>
                  <Text variant="label" className="mb-3 block">
                    Not sure where to start?
                  </Text>
                  <Text variant="body-sm" className="text-black-forest/55 leading-relaxed">
                    Browse the{" "}
                    <a href="/work" className="text-copperwood hover:text-black-forest transition-colors underline underline-offset-4">
                      work
                    </a>{" "}
                    to get a sense of what's possible, or pick up a{" "}
                    <a href="/shop" className="text-copperwood hover:text-black-forest transition-colors underline underline-offset-4">
                      print
                    </a>{" "}
                    if you'd like something from the studio without committing to a project.
                  </Text>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
