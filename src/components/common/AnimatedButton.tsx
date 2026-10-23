"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type AnimatedButtonProps = React.ComponentProps<typeof Button> & {
  rippleColor?: string;
};

export function AnimatedButton({
  children,
  className,
  variant = "outline",
  size = "default",
  rippleColor = "bg-primary",
  onMouseEnter,
  ...props
}: AnimatedButtonProps) {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [pos, setPos] = React.useState({ x: 0, y: 0 });

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    onMouseEnter?.(e);
  };

  return (
    <Button
      {...props}
      ref={buttonRef}
      variant={variant}
      size={size}
      onMouseEnter={handleMouseEnter}
      className={cn(
        "group relative h-auto cursor-pointer overflow-hidden rounded-full border border-border px-6 py-3 transition-all duration-300",
        className
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute h-10 w-10 scale-0 rounded-full transition-transform duration-400 ease-in-out group-hover:scale-[15]",
          rippleColor
        )}
        style={{
          left: pos.x - 20,
          top: pos.y - 20,
        }}
      />

      <span className="pointer-events-none relative z-10 transition-colors duration-500 group-hover:text-primary-foreground">
        {children}
      </span>
    </Button>
  );
}
