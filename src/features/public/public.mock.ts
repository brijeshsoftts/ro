import {
  CarFront,
  Coffee,
  Dumbbell,
  Utensils,
  Waves,
  Wifi,
} from "lucide-react";

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

export const faqs = [
  {
    question: "What time is check-in and check-out?",
    answer:
      "Standard check-in time is 3:00 PM, and check-out is at 11:00 AM. Early check-in or late check-out can be requested and is subject to availability.",
  },
  {
    question: "What is the hotel's cancellation policy?",
    answer:
      "Our standard cancellation policy allows you to cancel your reservation up to 48 hours prior to arrival without penalty. Late cancellations may incur a fee equivalent to one night's stay.",
  },
  {
    question: "Does the hotel have on-site restaurants?",
    answer:
      "Yes, we have three on-site dining options ranging from casual cafe fare to fine dining, all featuring locally sourced ingredients.",
  },
  {
    question: "What types of rooms are available?",
    answer:
      "We offer a variety of rooms including standard guest rooms, deluxe suites with city views, and premium executive suites with separate living areas.",
  },
  {
    question: "Is parking available at the hotel?",
    answer:
      "Yes, we offer both secure underground self-parking and 24/7 valet service for an additional daily fee.",
  },
  {
    question: "Does the hotel have event or meeting spaces?",
    answer:
      "Absolutely. We have over 10,000 square feet of flexible meeting space, including a grand ballroom and intimate boardrooms equipped with modern AV technology.",
  },
];
