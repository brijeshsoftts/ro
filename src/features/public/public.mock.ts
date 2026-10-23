import type { AmenityCardProps } from "./components/AmenityCard";
import type { RoomCardProps } from "./components/RoomCard";
import type { TestimonialCardProps } from "./components/TestimonialsSection";
export const testimonials: TestimonialCardProps[] = [
  {
    rating: 5,
    title: "Exceptional Experience",
    content:
      "The entire experience was seamless from start to finish. The team was professional, responsive, and delivered results beyond our expectations.",
    authorName: "Sarah Johnson",
    authorRole: "Marketing Director",
  },
  {
    rating: 5,
    title: "Outstanding Results",
    content:
      "Working with this team has been a game-changer for our business. Their attention to detail, creativity, and commitment to quality truly set them apart.",
    authorName: "Michael Chen",
    authorRole: "Founder & CEO",
  },
  {
    rating: 5,
    title: "A Team You Can Trust",
    content:
      "From the initial consultation to the final delivery, everything was handled with care and professionalism. The results exceeded our expectations, and we couldn't be happier with the experience.",
    authorName: "Emily Davis",
    authorRole: "Product Manager",
    authorImage: "/images/testimonials/emily.jpg",
  },
];
export const rooms: RoomCardProps[] = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
    badgeText: "Popular",
    price: 5400,
    title: "Deluxe Room",
    rating: 4.5,
    beds: 1,
    baths: 1,
    sqft: 431,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    badgeText: "Best Value",
    price: 4950,
    title: "Superior Twin Room",
    rating: 4.3,
    beds: 2,
    baths: 1,
    sqft: 377,
  },

  {
    imageUrl:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
    badgeText: "Luxury",
    price: 12999,
    title: "Deluxe Suite",
    rating: 4.9,
    beds: 1,
    baths: 2,
    sqft: 883,
  },
];

import {
  CarFront,
  Coffee,
  Dumbbell,
  Utensils,
  Waves,
  Wifi,
} from "lucide-react";

export const amenities: AmenityCardProps[] = [
  {
    title: "Free Wi-Fi",
    description:
      "Stay connected with high-speed internet throughout your stay.",
    Icon: Wifi,
  },
  {
    title: "Free Parking",
    description: "Enjoy convenient and secure on-site parking.",
    Icon: CarFront,
  },
  {
    title: "Restaurant",
    description: "Savor delicious meals prepared by our expert chefs.",
    Icon: Utensils,
  },
  {
    title: "Fitness Center",
    description: "Keep up with your workout routine in our modern gym.",
    Icon: Dumbbell,
  },
  {
    title: "Swimming Pool",
    description: "Relax and unwind in our refreshing swimming pool.",
    Icon: Waves,
  },
  {
    title: "Coffee Lounge",
    description: "Enjoy freshly brewed coffee in a comfortable setting.",
    Icon: Coffee,
  },
];
