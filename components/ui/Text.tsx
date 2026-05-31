type TextVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body"
  | "body-sm"
  | "caption"
  | "label";

interface TextProps {
  variant?: TextVariant;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  italic?: boolean;
}

const variantConfig: Record<
  TextVariant,
  { tag: React.ElementType; classes: string }
> = {
  display: {
    tag: "h1",
    classes: "font-heading text-[clamp(3.5rem,8vw,8rem)] font-light leading-[0.95] tracking-tight",
  },
  h1: {
    tag: "h1",
    classes: "font-heading text-[clamp(2.5rem,5vw,5rem)] font-light leading-tight",
  },
  h2: {
    tag: "h2",
    classes: "font-heading text-[clamp(2rem,4vw,3.75rem)] font-light leading-tight",
  },
  h3: {
    tag: "h3",
    classes: "font-heading text-[clamp(1.5rem,3vw,2.5rem)] font-light leading-snug",
  },
  h4: {
    tag: "h4",
    classes: "font-heading text-xl font-medium leading-snug",
  },
  body: {
    tag: "p",
    classes: "font-body text-base leading-relaxed font-light",
  },
  "body-sm": {
    tag: "p",
    classes: "font-body text-sm leading-relaxed font-light",
  },
  caption: {
    tag: "p",
    classes: "font-body text-xs leading-relaxed tracking-wide text-olive-leaf",
  },
  label: {
    tag: "span",
    classes:
      "font-body text-xs uppercase tracking-widest font-medium text-olive-leaf",
  },
};

export function Text({
  variant = "body",
  children,
  className = "",
  as,
  italic = false,
}: TextProps) {
  const { tag: DefaultTag, classes } = variantConfig[variant];
  const Tag = as ?? DefaultTag;

  return (
    <Tag className={`${classes} ${italic ? "italic" : ""} ${className}`}>
      {children}
    </Tag>
  );
}
