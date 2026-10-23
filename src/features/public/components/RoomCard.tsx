import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Bath, BedDouble, Scaling, Star } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";

export interface RoomCardProps {
  imageUrl?: string;
  badgeText?: string;
  price?: number;
  title?: string;
  rating?: number;
  beds?: number;
  baths?: number;
  sqft?: number;
}

export function RoomCard({
  imageUrl = "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800&h=600",
  badgeText = "Luxury Room",
  price = 250,
  title = "Deluxe Rooms",
  rating = 5.0,
  beds = 1,
  baths = 2,
  sqft = 400,
}: RoomCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Track mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the tilt animation
  const springConfig = {
    damping: 20,
    stiffness: 180,
    mass: 0.5,
  };

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [5, -5]),
    springConfig
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-5, 5]),
    springConfig
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="w-full"
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        y: -8,
        scale: 1.025,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <Link to={`/rooms/${title}`}>
        <Card className="relative w-full overflow-visible rounded-2xl border-border/50 bg-card p-0 shadow-sm transition-shadow duration-300 hover:shadow-xl">
          {/* Room Image */}
          <div className="relative h-52 w-full overflow-hidden rounded-t-2xl">
            <motion.img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </div>

          {/* Overlapping Badge */}
          <div className="absolute top-46 -left-2 z-10">
            <motion.div
              className="rounded-r-xl bg-primary py-2 pr-5 pl-4 text-sm text-primary-foreground shadow-md"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {badgeText}

              {/* Ribbon Fold shadow effect */}
              <svg
                className="absolute top-full left-0 h-2 w-2 text-primary brightness-50"
                viewBox="0 0 8 8"
                fill="currentColor"
              >
                <path d="M8 0L0 0L8 8Z" />
              </svg>
            </motion.div>
          </div>

          <CardContent className="flex flex-col gap-4 p-6 pt-7">
            {/* Price and Rating Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-1.5">
                <span className="font-heading text-3xl font-bold text-primary">
                  ₹{price}
                </span>
                <span className="text-xs font-medium text-muted-foreground">
                  /night
                </span>
              </div>

              <motion.div
                className="flex items-center gap-1.5"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Star className="h-5 w-5 fill-secondary text-secondary" />
                <span className="font-bold text-foreground">
                  {rating.toFixed(1)}
                </span>
              </motion.div>
            </div>

            {/* Title */}
            <h3 className="font-heading text-xl font-bold text-foreground">
              {title}
            </h3>

            {/* Divider */}
            <hr className="my-2 border-border/40" />

            {/* Amenities */}
            <div className="flex items-center justify-between text-sm font-medium text-foreground">
              <div className="flex items-center gap-2">
                <BedDouble className="h-4 w-4 text-secondary" />
                <span>{beds} Bed</span>
              </div>

              <div className="flex items-center gap-2">
                <Bath className="h-4 w-4 text-secondary" />
                <span>{baths} Bath</span>
              </div>

              <div className="flex items-center gap-2">
                <Scaling className="h-4 w-4 text-secondary" />
                <span>{sqft} sqft</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
