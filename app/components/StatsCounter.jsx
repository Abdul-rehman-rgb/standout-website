"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stats = [
  { target: 84, label: "Intregated with", subLabel: "Web3 platforms" },
  { target: 78, label: "Intregated with", subLabel: "Webflow" },
  { target: 92, label: "Intregated with", subLabel: "Framer" },
];

const RollingNumber = ({ value }) => {
  return (
    <div className="relative h-[80px] md:h-[110px] overflow-hidden flex justify-center items-center">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-6xl md:text-[64px] font-medium text-[#171717] inline-block"
        >
          {value}%
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const StatItem = ({ target, label, subLabel }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="flex flex-col items-center justify-center py-5 md:py-8">
      <RollingNumber value={count} />
      <div className="text-center">
        <p className="text-[#888] text-[18px] md:text-base mb-1">{label}</p>
        <p className="text-[#171717] text-lg md:text-[20px] font-medium">{subLabel}</p>
      </div>
    </div>
  );
};

export default function StatsCounter() {
  return (
    <section className="py-12">
      <div className="max-w-[1390px] mx-auto border border-[#0000001f] rounded-[8px] overflow-hidden bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {stats.map((stat, index) => (
            <StatItem 
              key={index} 
              target={stat.target} 
              label={stat.label} 
              subLabel={stat.subLabel} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}