interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  wide?: boolean;
  narrow?: boolean;
}

export function Container({
  children,
  className = "",
  as: Tag = "div",
  wide = false,
  narrow = false,
}: ContainerProps) {
  const widthClass = narrow
    ? "max-w-2xl"
    : wide
    ? "max-w-screen-2xl"
    : "max-w-screen-xl";

  return (
    <Tag className={`${widthClass} mx-auto px-6 lg:px-12 w-full ${className}`}>
      {children}
    </Tag>
  );
}
