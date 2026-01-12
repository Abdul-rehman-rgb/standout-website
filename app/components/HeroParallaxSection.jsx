"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";

const products = [
  {
    title: "E-commerce Platform",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop",
  },
  {
    title: "Mobile Banking App",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop",
  },
  {
    title: "SaaS Dashboard",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop",
  },
  {
    title: "Healthcare Portal",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop",
  },
  {
    title: "Real Estate Platform",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop",
  },
  {
    title: "Fitness App",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop",
  },
  {
    title: "Education Platform",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop",
  },
  {
    title: "Food Delivery App",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop",
  },
  {
    title: "Travel Booking System",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop",
  },
  {
    title: "Social Media Platform",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop",
  },
  {
    title: "CRM Solution",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop",
  },
  {
    title: "Analytics Dashboard",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop",
  },
  {
    title: "Music Streaming App",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop",
  },
  {
    title: "Gaming Platform",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop",
  },
  {
    title: "Project Management Tool",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop",
  },
];

export default function HeroParallaxSection() {
  return <HeroParallax products={products} />;
}

