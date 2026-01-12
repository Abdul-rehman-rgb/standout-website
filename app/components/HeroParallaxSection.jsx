"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";

const products = [
  {
    title: "E-commerce Platform",
    link: "#",
    thumbnail: "/images/paral1.jpg",
  },
  {
    title: "Mobile Banking App",
    link: "#",
    thumbnail: "/images/paral2.jpg",
  },
  {
    title: "SaaS Dashboard",
    link: "#",
    thumbnail: "/images/paral2.jpg",
  },
  {
    title: "Healthcare Portal",
    link: "#",
    thumbnail: "/images/paral1.jpg",
  },
  {
    title: "Real Estate Platform",
    link: "#",
    thumbnail: "/images/paral2.jpg",
  },
  {
    title: "Fitness App",
    link: "#",
    thumbnail: "/images/paral1.jpg",
  },
  {
    title: "Education Platform",
    link: "#",
    thumbnail: "/images/paral2.jpg",
  },
  {
    title: "Food Delivery App",
    link: "#",
    thumbnail: "/images/paral1.jpg",
  },
  {
    title: "Travel Booking System",
    link: "#",
    thumbnail: "/images/paral2.jpg",
  },
  {
    title: "Social Media Platform",
    link: "#",
    thumbnail: "/images/paral1.jpg",
  },
  {
    title: "CRM Solution",
    link: "#",
    thumbnail: "/images/paral2.jpg",
  },
  {
    title: "Analytics Dashboard",
    link: "#",
    thumbnail: "/images/paral1.jpg",
  },
  {
    title: "Music Streaming App",
    link: "#",
    thumbnail: "/images/paral2.jpg",
  },
  {
    title: "Gaming Platform",
    link: "#",
    thumbnail: "/images/paral1.jpg",
  },
  {
    title: "Project Management Tool",
    link: "#",
    thumbnail: "/images/paral2.jpg",
  },
];

export default function HeroParallaxSection() {
  return <HeroParallax products={products} />;
}

