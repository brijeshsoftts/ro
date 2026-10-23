import { Check, Plus } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { SectionHeader } from "./SectionHeader";

export function WhyChooseUs() {
  return (
    <div>
      <section className="container mx-auto max-w-5xl px-4 py-18 sm:px-6">
        <SectionHeader
          title="Why Choose Us?"
          description={
            <>
              Discover Comfort Like <br /> Never Before
            </>
          }
        />
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column: Image Composition */}
          <div className="relative flex items-end gap-4 pr-4 lg:gap-6 lg:pr-0">
            {/* Main Left Image (Wider, Square-ish) */}
            <div className="relative z-0 aspect-[4/5] w-[60%] overflow-hidden rounded-[2rem] sm:aspect-square">
              <img
                src="https://plus.unsplash.com/premium_photo-1665990294519-7f1b5b8bcfc2?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                alt="Luxurious hotel lounge area"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Secondary Right Image (Taller, Portrait) */}
            <div className="relative z-0 aspect-[3/5] w-[40%] translate-y-8 overflow-hidden rounded-[2rem]">
              <img
                src="https://plus.unsplash.com/premium_photo-1665990294519-7f1b5b8bcfc2?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                alt="Exceptional waitstaff service"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Overlapping Review Badge */}
            <div className="absolute -bottom-6 left-4 z-20 flex items-center gap-5 rounded-2xl border border-white/10 bg-primary px-6 py-4 text-primary-foreground shadow-xl sm:-bottom-10 sm:left-12">
              {/* Avatar Stack */}
              <div className="flex -space-x-4">
                <Avatar className="h-12 w-12 border-2 border-primary">
                  <AvatarImage src="https://i.pravatar.cc/150?img=47" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar className="h-12 w-12 border-2 border-primary">
                  <AvatarImage src="https://i.pravatar.cc/150?img=32" />
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>
                <Avatar className="h-12 w-12 border-2 border-primary">
                  <AvatarImage src="https://i.pravatar.cc/150?img=12" />
                  <AvatarFallback>MK</AvatarFallback>
                </Avatar>
                {/* Plus Indicator */}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-secondary text-secondary-foreground">
                  <Plus className="h-5 w-5" strokeWidth={3} />
                </div>
              </div>

              {/* Rating Text */}
              <div className="flex flex-col">
                <span className="font-heading text-xl leading-tight font-bold text-white">
                  4.9 Star
                </span>
                <span className="text-sm font-medium text-primary-foreground/80">
                  Reviews
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="mt-12 flex flex-col gap-8 lg:mt-0 lg:pl-10">
            <p className="leading-relaxed text-muted-foreground">
              Experience the perfect blend of modern sophistication and timeless
              elegance. We are dedicated to providing an unforgettable stay.
            </p>

            <hr className="border-border/40" />

            {/* Stats Row */}
            <div className="grid grid-cols-3 divide-x divide-border/40 text-center sm:text-left">
              <div className="flex flex-col gap-1 sm:pr-6">
                <span className="font-heading text-4xl font-bold text-primary sm:text-5xl">
                  125+
                </span>
                <span className="text-sm text-muted-foreground">
                  Staff Members
                </span>
              </div>
              <div className="flex flex-col gap-1 px-4 sm:px-8">
                <span className="font-heading text-4xl font-bold text-primary sm:text-5xl">
                  20+
                </span>
                <span className="text-sm text-muted-foreground">Amenities</span>
              </div>
              <div className="flex flex-col gap-1 pl-4 sm:pl-8">
                <span className="font-heading text-4xl font-bold text-primary sm:text-5xl">
                  24/7
                </span>
                <span className="text-sm text-muted-foreground">
                  Booking Availability
                </span>
              </div>
            </div>

            <hr className="border-border/40" />

            {/* Features List */}
            <ul className="flex flex-col gap-5">
              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 rounded-full bg-secondary p-1.5 text-secondary-foreground">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </div>
                <span className="text-lg font-medium text-foreground">
                  Luxurious & Comfortable Accommodations
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 rounded-full bg-secondary p-1.5 text-secondary-foreground">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </div>
                <span className="text-lg font-medium text-foreground">
                  Exceptional Service & Hospitality
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 rounded-full bg-secondary p-1.5 text-secondary-foreground">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </div>
                <span className="text-lg font-medium text-foreground">
                  Delicious Dining Options
                </span>
              </li>
            </ul>

            <div className="pt-4">
              <Button size="lg" className={"h-10 rounded-full px-4"}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
