import type { ReactNode } from "react";

export function SectionHeader({
  title,
  description,
  className,
}: {
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}) {
  return (
    <header className={`relative mx-auto mb-12 text-center ${className || ""}`}>
      <p
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-2 w-full font-heading text-5xl font-semibold text-muted-foreground/5 uppercase sm:-top-2 sm:text-8xl dark:text-muted-foreground/3"
      >
        {title}
      </p>
      {/* <Crown aria-hidden="true" className="mx-auto mb-2 block text-primary" /> */}
      <p className="text-md font-medium tracking-[0.2em] text-secondary uppercase">
        {title}
      </p>
      <p
        id="why-choose-us-heading"
        className="mx-auto mt-2 font-heading text-3xl leading-tight font-bold sm:text-4xl"
      >
        {description}
      </p>
    </header>
  );
}
