"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Plane, Plus, Minus } from "lucide-react";
import AnimatedButton from "./ui/AnimatedButton";
import Heading from "./ui/Heading";

const services = [
  {
    title: "Web Design & Development",
    image: "/images/1.jpg",
    categories: ["Web Design", "Web development", "No code", "Webflow", "Style guide"],
  },
  {
    title: "UX Strategy & Research",
    image: "/images/1.jpg",
    categories: ["Web Design", "Web development", "No code", "Webflow", "Style guide"],
  },
  {
    title: "Mobile App Design",
    image: "/images/1.jpg",
    categories: ["Web Design", "Web development", "No code", "Webflow", "Style guide"],
  },
  {
    title: "Branding & Identity",
    image: "/images/1.jpg",
    categories: ["Web Design", "Web development", "No code", "Webflow", "Style guide"],
  },
];

export default function Services() {
  return (
    <div className="max-w-[1390px] mx-auto space-y-4 pt-[60px] md:pt-[120px] px-4 md:px-10 text-white">
      <div className="flex justify-start">
        <AnimatedButton text="Services" Icon={Plane} href="#about" className="text-black" iconSpanClassName="text-white" />
      </div>

      <Heading text="See our all services" />

      <div className="mt-10 border-t border-gray-200">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="group overflow-hidden cursor-pointer border-b border-gray-200 max-sm:flex-col"
            initial={{ height: 80 }}
            whileHover={{ height: "auto" }} // Mobile par height auto rakhna zaroori hai
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {/* Main Wrapper: Desktop par Flex-row, Mobile par padding bottom */}
            <div className="flex flex-col md:flex-row items-start px-2 md:px-6 py-6 h-full gap-4 md:gap-6 relative">
              
              {/* Index Number */}
              <div className="text-gray-400 text-[16px] md:text-[18px] font-mono min-w-[50px] md:min-w-[70px]">
                ({String(i + 1).padStart(2, "0")})
              </div>

              {/* Title: Mobile par size chota aur transition smooth */}
              <div className="flex-1 text-[22px] md:text-[20px] md:group-hover:text-[32px] leading-tight font-medium transition-all duration-300 tracking-[-1px] text-black">
                {service.title}
              </div>

              {/* Expanded Content: Mobile par layout vertical ho jayega */}
              <div className="flex flex-col lg:flex-row gap-6 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-x-0 md:translate-x-6 transition-all duration-500 pb-4 md:pb-0">
                {service.image && (
                  <div className="w-full md:w-[200px] h-[180px] md:h-[130px] lg:h-[150px] relative rounded-xl overflow-hidden bg-gray-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}

                {service.categories.length > 0 && (
                  <div className="flex flex-col max-w-sm">
                    <p className="text-[16px] md:text-[18px] mb-[8px] text-[#171717] font-medium tracking-[-1px] opacity-70">
                      Categories
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {service.categories.map((cat, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-[13px] md:text-[14px] bg-[#F7F8F9] text-[#171717] font-medium rounded-[8px] border border-gray-100"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Icon Container: Position absolute for mobile consistency */}
              <div className="absolute right-2 top-7 md:relative md:top-0 md:ml-auto flex items-center w-[22px]">
                <Plus size={22} className="text-black opacity-50 group-hover:opacity-0 transition-all duration-300" />
                <Minus size={22} className="absolute text-black opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}