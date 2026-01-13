"use client";
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Usability",
    description: "Designs that feel effortless. We focus on intuitive interfaces and human-centered flows that empower users to get things done—without confusion.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3m0 12v3M3 12h3m12 0h3m-2.1-6.9l-2.1 2.1m-9.8 9.8l-2.1 2.1m14-2.1l-2.1-2.1m-9.8-9.8l-2.1-2.1" />
      </svg>
    ),
  },
  {
    title: "Accessibility",
    description: "Inclusive by design. We build experiences that are usable by everyone, regardless of ability or device, ensuring true digital equity.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: "Scalability",
    description: "Design systems that grow with you. From MVPs to enterprise products, we create modular solutions that stay consistent as your product evolves.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

const FeaturesSection = () => {
  return (
    <section className="">
      <div className="max-w-[1390px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1A1A1A] border border-white/5 p-10 rounded-[12px] min-h-[400px] flex flex-col justify-end group hover:bg-[#222222] transition-colors"
            >
              {/* Icon Container */}
              <div className="text-gray-500 mb-20 group-hover:text-white transition-colors">
                {feature.icon}
              </div>

              {/* Text Content */}
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;