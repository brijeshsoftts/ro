export function AboutSection() {
  return (
    <section className="container mx-auto overflow-hidden px-4 py-20 lg:py-32">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Left Column: Image & Badge */}
        <div className="relative mx-auto w-full max-w-md pt-8 pl-6 lg:mx-0 lg:max-w-none lg:pl-12">
          {/* Main Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-muted shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1562810151-5120a1eb973b?auto=format&fit=crop&q=80&w=800&h=1000"
              alt="Friendly hotel receptionist"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Years of Service Badge */}
          <div className="absolute top-12 left-0 z-10 flex flex-col items-end">
            <div className="relative flex items-center gap-3 rounded-r-xl rounded-bl-xl bg-primary py-4 pr-6 pl-8 text-primary-foreground shadow-lg">
              <span className="font-heading text-5xl leading-none font-bold">
                16
              </span>
              <div className="flex flex-col text-sm leading-tight font-medium">
                <span>Years</span>
                <span className="font-normal opacity-80">of Services</span>
              </div>
              {/* Ribbon Fold decorative element */}
              <svg
                className="absolute -bottom-4 left-0 h-4 w-4 text-primary brightness-50"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M16 0L0 0L16 16Z" />
              </svg>
            </div>
          </div>

          {/* Decorative Sparkles (Bottom Left) */}
          <div className="pointer-events-none absolute bottom-16 -left-6 z-10 text-secondary">
            {/* Large Star */}
            <svg
              width="80"
              height="80"
              viewBox="0 0 100 100"
              fill="currentColor"
              className="absolute bottom-0 left-8"
            >
              <path d="M50 0C50 27.6142 27.6142 50 0 50C27.6142 50 50 72.3858 50 100C50 72.3858 72.3858 50 100 50C72.3858 50 50 27.6142 50 0Z" />
            </svg>
            {/* Small Star 1 */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 100 100"
              fill="currentColor"
              className="absolute bottom-24 left-0"
            >
              <path d="M50 0C50 27.6142 27.6142 50 0 50C27.6142 50 50 72.3858 50 100C50 72.3858 72.3858 50 100 50C72.3858 50 50 27.6142 50 0Z" />
            </svg>
            {/* Small Star 2 */}
            <svg
              width="30"
              height="30"
              viewBox="0 0 100 100"
              fill="currentColor"
              className="absolute -bottom-4 left-4"
            >
              <path d="M50 0C50 27.6142 27.6142 50 0 50C27.6142 50 50 72.3858 50 100C50 72.3858 72.3858 50 100 50C72.3858 50 50 27.6142 50 0Z" />
            </svg>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="relative flex flex-col gap-6 lg:pl-12">
          {/* Background Watermark Text */}
          <span
            className="pointer-events-none absolute -top-10 -left-4 -z-10 font-heading text-[5rem] font-black tracking-widest whitespace-nowrap text-muted/40 uppercase lg:-top-16 lg:-left-12 lg:text-[7rem]"
            aria-hidden="true"
          >
            About Us
          </span>

          {/* Decorative Flourish */}
          <div className="w-24 text-primary">
            <svg viewBox="0 0 100 20" fill="currentColor">
              <path d="M50,10 C40,10 35,5 25,5 C15,5 10,15 0,15 L0,17 C10,17 15,7 25,7 C35,7 40,12 50,12 C60,12 65,7 75,7 C85,7 90,17 100,17 L100,15 C90,15 85,5 75,5 C65,5 60,10 50,10 Z M50,15 C48,15 46.5,13.5 46.5,11.5 C46.5,9.5 48,8 50,8 C52,8 53.5,9.5 53.5,11.5 C53.5,13.5 52,15 50,15 Z" />
            </svg>
          </div>

          <div>
            <span className="text-sm font-semibold tracking-[0.2em] text-secondary uppercase">
              About Us
            </span>
            <h2 className="mt-4 font-heading text-4xl leading-[1.15] text-foreground lg:text-5xl">
              Luxurious Comfort, <br className="hidden lg:block" />
              Timeless Elegance Awaits
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Welcome to Nivara Hotels, where unparalleled hospitality meets
            sophisticated design. For over a decade and a half, we have
            dedicated ourselves to crafting memorable stays, ensuring every
            guest experiences the perfect blend of modern luxury and warm,
            personalized service.
          </p>

          {/* Stats Row */}
          <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-6 border-t border-border/40 py-6">
            <div className="flex flex-col gap-1 border-r border-border/50 pr-8">
              <span className="font-heading text-4xl font-medium text-primary">
                50+
              </span>
              <span className="text-sm text-muted-foreground">
                Luxury Rooms
              </span>
            </div>
            <div className="flex flex-col gap-1 border-r border-border/50 pr-8">
              <span className="font-heading text-4xl font-medium text-primary">
                60k+
              </span>
              <span className="text-sm text-muted-foreground">
                Happy Guests
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-heading text-4xl font-medium text-primary">
                99%
              </span>
              <span className="text-sm text-muted-foreground">
                Guest Satisfaction
              </span>
            </div>
          </div>

          {/* Signature Area */}
          <div className="mt-2 flex flex-col">
            <span
              className="text-4xl text-foreground"
              style={{
                fontFamily: "'Cedarville Cursive', 'Brush Script MT', cursive",
              }}
            >
              Jenny Alexander
            </span>
            <span className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
              Jenny Alexander{" "}
              <span className="mb-1 text-lg leading-none text-secondary">
                •
              </span>{" "}
              Owner
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
