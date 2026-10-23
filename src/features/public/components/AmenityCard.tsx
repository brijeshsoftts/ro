import { type LucideIcon, Wifi } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export interface AmenityCardProps {
  title?: string;
  description?: string;
  Icon?: LucideIcon;
}

export function AmenityCard({
  title = "High Speed Wifi",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  Icon = Wifi,
}: AmenityCardProps) {
  return (
    <Card className="group relative w-full max-w-[320px] overflow-hidden rounded-3xl border-border/50 bg-card shadow-sm transition-all hover:bg-primary hover:shadow-md">
      {/* Large Background Icon Watermark */}
      <div
        className="pointer-events-none absolute top-1/2 -right-8 z-0 -translate-y-1/2 text-muted/40"
        aria-hidden="true"
      >
        <Icon className="h-40 w-40" strokeWidth={1} />
      </div>

      <CardContent className="relative z-10 flex flex-col gap-4 px-6 py-4">
        {/* Active Icon */}
        <div className="text-secondary">
          <Icon className="h-8 w-8" strokeWidth={2} />
        </div>

        {/* Text Content */}
        <div className="mt-2 space-y-3">
          <h3 className="font-heading text-2xl font-bold text-foreground group-hover:text-white">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
