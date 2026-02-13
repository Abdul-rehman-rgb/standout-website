"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/1.jpg",
  "/images/1.jpg",
  "/images/1.jpg",
  "/images/1.jpg",
  "/images/1.jpg",
  "/images/1.jpg",
  "/images/1.jpg",
];

const PerspectiveCarousel = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Isse scroll ki progress 0 se 1 tak track hogi
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Images ko left-right move karne aur rotate karne ke liye transforms
  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-40%"]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [45, -45]);

  return (
    <section 
      ref={targetRef} 
      className="relative h-[150vh] bg-black py-20 overflow-hidden"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div 
          style={{ x }} 
          className="flex gap-10 px-10"
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              style={{
                rotateY,
                perspective: "1000px",
              }}
              className="relative h-[450px] w-[300px] md:h-[600px] md:w-[400px] shrink-0 overflow-hidden rounded-[30px] bg-zinc-800"
            >
              <Image
                src={src}
                alt={`Project ${index}`}
                fill
                className="object-cover"
              />
              
              {/* Reflection/Glass Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PerspectiveCarousel;