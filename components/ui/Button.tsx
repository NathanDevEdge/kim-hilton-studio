"use client";

import { forwardRef } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

interface ButtonAsButton extends ButtonBaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-copperwood text-cornsilk hover:bg-black-forest border border-copperwood hover:border-black-forest",
  secondary:
    "bg-transparent text-black-forest border border-black-forest hover:bg-black-forest hover:text-cornsilk",
  ghost:
    "bg-transparent text-olive-leaf border-b border-olive-leaf hover:text-copperwood hover:border-copperwood rounded-none px-0",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "text-xs tracking-widest px-5 py-2.5",
  md: "text-sm tracking-widest px-7 py-3.5",
  lg: "text-base tracking-widest px-9 py-4",
};

const baseClasses =
  "inline-flex items-center justify-center font-body font-medium uppercase tracking-widest transition-all duration-300 rounded-none cursor-pointer";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", ...props }, ref) => {
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    if ("href" in props && props.href) {
      const { href, children, target, rel, ...rest } = props as ButtonAsLink;
      return (
        <Link href={href} className={classes} target={target} rel={rel}>
          {children}
        </Link>
      );
    }

    const { children, ...rest } = props as ButtonAsButton;
    return (
      <button ref={ref} className={classes} {...rest}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
