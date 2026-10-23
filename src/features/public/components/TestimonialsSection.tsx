import { Star } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

import { testimonials } from "../public.mock";

import { SectionHeader } from "./SectionHeader";

export function TestimonialsSection() {
  return (
    <div>
      <section className="container mx-auto max-w-5xl px-4 py-18 sm:px-6">
        <SectionHeader
          title="Guest Reviews"
          description={
            <>
              What Our Satisfied <br /> Guests Are Saying{" "}
            </>
          }
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>
    </div>
  );
}

export interface TestimonialCardProps {
  rating?: number;
  title: string;
  content: string;
  authorName: string;
  authorRole: string;
  authorImage?: string;
}

function TestimonialCard({
  rating = 5.0,
  title,
  content,
  authorName,
  authorRole,
  authorImage,
}: TestimonialCardProps) {
  // Extract initials: first char of the first word, and first char of the last word
  const getInitials = (name: string) => {
    const parts = name.trim().split(" ");
    if (parts.length === 0) return "";
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (
      parts[0].charAt(0) + parts[parts.length - 1].charAt(0)
    ).toUpperCase();
  };

  return (
    <Card className="relative w-full overflow-hidden rounded-3xl border-border/50 shadow-sm hover:shadow-md">
      <CardContent className="relative z-10 flex flex-col gap-6 p-8 pb-6">
        {/* Rating Section */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-secondary">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(rating)
                    ? "fill-current"
                    : "text-muted-foreground/30"
                }`}
              />
            ))}
          </div>
          <span className="text-lg font-semibold text-foreground">
            {rating.toFixed(1)}
          </span>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h3 className="font-heading text-2xl font-bold text-foreground">
            {title}
          </h3>
          <p className="leading-relaxed text-muted-foreground">{content}</p>
        </div>

        {/* Large Background Quote Watermark */}
        <span
          className="pointer-events-none absolute right-4 bottom-1 font-heading text-[20rem] leading-none text-muted/40 select-none"
          aria-hidden="true"
        >
          &rdquo;
        </span>

        {/* Author Section */}
        <div className="mt-2 flex items-center gap-4">
          {/* Avatar with concentric ring effect */}
          <div className="shrink-0 rounded-full border border-border/50 p-0.5">
            <Avatar className="h-12 w-12 border border-background">
              <AvatarImage
                src={authorImage}
                alt={authorName}
                className="object-cover"
              />
              <AvatarFallback className="bg-muted font-semibold text-muted-foreground">
                {getInitials(authorName)}
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="flex flex-col">
            <span className="font-heading text-lg leading-tight font-bold text-foreground">
              {authorName}
            </span>
            <span className="text-sm text-muted-foreground">{authorRole}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
