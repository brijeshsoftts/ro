import { Sparkle } from "lucide-react";
import React from "react";

export function FeatureMarquee() {
  const features = [
    "24-hour front desk",
    "Daily housekeeping",
    "High Speed Wifi",
    "Climate control",
  ];

  const marqueeItems = [...features, ...features, ...features];

  return (
    <div className="relative flex w-full items-center overflow-hidden border-y border-border/20 bg-primary py-4 md:py-6">
      <style>
        {`
          @keyframes infinite-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 20s linear infinite;
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Marquee Track */}
      <div className="animate-infinite-scroll flex w-max whitespace-nowrap">
        <div className="flex items-center">
          {marqueeItems.map((feature, index) => (
            <React.Fragment key={index}>
              {/* Text Item */}
              <span className="text-md px-8 font-heading font-medium tracking-wide text-primary-foreground capitalize md:px-12 md:text-2xl">
                {feature}
              </span>

              {/* Separator Icon */}
              <Sparkle className="h-5 w-5 shrink-0 text-secondary md:h-6 md:w-6" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
