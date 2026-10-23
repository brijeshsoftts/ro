import { AmenityCard } from "@/features/public/components/AmenityCard";
import { CTASection } from "@/features/public/components/CTASection";
import { FAQSection } from "@/features/public/components/FAQSection";
import { FeatureMarquee } from "@/features/public/components/FeatureMarquee";
import { RoomCard } from "@/features/public/components/RoomCard";
import { SectionHeader } from "@/features/public/components/SectionHeader";
import { TestimonialsSection } from "@/features/public/components/TestimonialsSection";
// import { WhyChooseUs } from "@/features/public/components/WhyChooseUs";
import { amenities, rooms } from "@/features/public/public.mock";

export default function LandingPage() {
  return (
    <>
      <section className="container mx-auto max-w-5xl px-4 py-18 sm:px-6">
        <SectionHeader
          title="Rooms & Suites"
          description="Luxury Rooms & Suites"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {rooms.map((room, index) => (
            <RoomCard key={index} {...room} />
          ))}
        </div>
      </section>
      <FeatureMarquee />
      <div className="bg-muted/40">
        <section className="container mx-auto max-w-5xl px-4 py-18 sm:px-6">
          <SectionHeader
            title="Hotel Facilities"
            description="Relax with Premium Facilities"
            className="text-start"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {amenities.map((amenity, index) => (
              <AmenityCard key={index} {...amenity} />
            ))}
          </div>
        </section>
      </div>
      <FeatureMarquee />
      {/* <WhyChooseUs /> */}
      {/* <FeatureMarquee /> */}
      <TestimonialsSection />
      <FeatureMarquee />
      <FAQSection />
      <FeatureMarquee />
      <CTASection />
    </>
  );
}
