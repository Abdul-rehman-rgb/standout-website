"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";
import { MoveRight, MoveLeft, Plane } from "lucide-react";
import AnimatedButton from "./AnimatedButton";

const teamMembers = [
  { name: "Oliver Bennett", role: "Director of Strategy", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800" },
  { name: "Sophia Mitchell", role: "Chief Technology Officer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800" },
  { name: "Liam Johnson", role: "VP Product Management", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800" },
  { name: "Emma Thompson", role: "Lead Product Designer", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800" },
];

const TeamSlider = () => {
  // Navigation fix ke liye State use karen
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1390px] mx-auto px-6 md:px-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="flex flex-col gap-6">
            <AnimatedButton text="Our Team" Icon={Plane} />
            <h2 className="text-4xl md:text-5xl lg:text-[64px] font-medium text-[#171717] leading-[1.1] tracking-tight">
              Meet the experts <br /> behind gence
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 pb-2">
            <button
              ref={(node) => setPrevEl(node)} // State update on mount
              className="w-14 h-12 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-[#171717] hover:text-white transition-all duration-300 disabled:opacity-30"
            >
              <MoveLeft className="w-6 h-6" />
            </button>
            <button
              ref={(node) => setNextEl(node)} // State update on mount
              className="w-14 h-12 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-[#171717] hover:text-white transition-all duration-300 disabled:opacity-30"
            >
              <MoveRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Slider Section */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevEl,
            nextEl: nextEl,
          }}
          // Re-render handle karne ke liye key add karen jab refs mil jayen
          key={prevEl && nextEl ? "ready" : "not-ready"}
          spaceBetween={24}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="!overflow-visible"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <motion.div 
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] mb-6">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl md:text-[28px] font-medium text-[#171717]">{member.name}</h3>
                  <p className="text-[#8e8e8e] text-base">{member.role}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeamSlider;