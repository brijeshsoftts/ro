import { AnimatedButton } from "@/components/common/AnimatedButton";
import { Input } from "@/components/ui/input";

import { SectionHeader } from "./SectionHeader";

export function CTASection() {
  return (
    <div>
      <section className="container mx-auto max-w-5xl px-4 py-18 sm:px-6">
        <SectionHeader
          title="Our Newsletter"
          description={
            <>
              Unlock Exclusive Updates and Offers <br /> from Our Luxury Hotel
            </>
          }
        />
        <form
          className="mx-auto flex w-full max-w-lg flex-col items-center gap-4 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Pill-shaped Input Wrapper */}

          {/* Borderless Input */}
          <Input
            type="email"
            placeholder="Enter Email Address "
            className="h-10 rounded-full bg-card px-4"
          />

          {/* Subscribe Button */}
          <AnimatedButton
            variant={"default"}
            rippleColor="bg-secondary"
            className={"h-10"}
          >
            Subscribe
          </AnimatedButton>
        </form>
      </section>
    </div>
  );
}
