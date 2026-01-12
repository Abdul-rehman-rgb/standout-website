"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Plane } from "lucide-react";
import AnimatedButton from "./ui/AnimatedButton";

export default function Works() {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-10 overflow-hidden">
      <div className="max-w-[1390px] mx-auto">
        
        {/* Top Branding/Header */}
        <div className="flex flex-col items-center text-center mb-16 gap-6">
          <AnimatedButton text="Projects" Icon={Plane} className="text-white" />
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight max-w-3xl">
            Our works across industries
          </h1>
          <p className="text-gray-400 max-w-lg">
            Check out our awesome projects that are sure to grab attention!
          </p>
        </div>

        {/* EXACT BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[280px]">
          
          {/* 1. Prime Hosting (Top Left) */}
          <ProjectCard 
            className="md:col-span-1 md:row-span-1" 
            title="Prime Hosting" 
            img="/images/1.jpg" 
          />

          {/* 2. Cloud Realm (Center Large) */}
          <ProjectCard 
            className="md:col-span-2 md:row-span-2" 
            title="Cloud Realm Corner" 
            img="/images/1.jpg" 
            isLarge
          />

          {/* 3. Summit Bank (Top Right) */}
          <ProjectCard 
            className="md:col-span-1 md:row-span-1" 
            title="Summit Bank" 
            img="/images/1.jpg" 
          />

          {/* 4. Elevate Hosting (Bottom Left) */}
          <ProjectCard 
            className="md:col-span-1 md:row-span-1" 
            title="Elevate Experience" 
            img="/images/1.jpg" 
          />

          {/* 5. Essential Defense (Bottom Right Side) */}
          <ProjectCard 
            className="md:col-span-1 md:row-span-1" 
            title="Digital Realm" 
            img="/images/1.jpg" 
          />

          {/* 6. Crypto Journey (Wide Bottom) */}
          <ProjectCard 
            className="md:col-span-2 md:row-span-1" 
            title="Crypto Journey" 
            img="/images/1.jpg" 
          />

          {/* 7. Drone Settings (Full Height Right) */}
          <ProjectCard 
            className="md:col-span-2 md:row-span-1" 
            title="Drone Settings" 
            img="/images/1.jpg" 
          />
        </div>
      </div>
    </section>
  );
}

// Reusable Card Component with exact Hover Effects
const ProjectCard = ({ className, title, img, isLarge }) => (
  <motion.div
    className={`relative group overflow-hidden rounded-[24px] cursor-pointer bg-[#1a1a1a] ${className}`}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.4 }}
  >
    {/* Image */}
    <Image
      src={img || "https://via.placeholder.com/800"} // Fallback image
      alt={title}
      fill
      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
    />

    {/* Hover Overlay Button (CENTER) */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
      <div className="bg-white text-black px-6 py-3 rounded-full flex items-center gap-3 font-semibold shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        View CaseStudy
        <span className="bg-black text-white p-1 rounded-full">
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </div>
    </div>

    {/* Title (Bottom Left) */}
    <div className="absolute bottom-6 left-6 z-10">
      <h3 className={`font-medium text-white drop-shadow-md ${isLarge ? 'text-3xl' : 'text-xl'}`}>
        {title}
      </h3>
    </div>

    {/* Subtle Gradient Shadow */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
  </motion.div>
);