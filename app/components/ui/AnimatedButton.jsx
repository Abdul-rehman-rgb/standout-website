"use client";

import { motion, useAnimation } from "framer-motion";
import { Plane } from "lucide-react";

export default function AnimatedButton({
  text = "About Us",
  Icon = Plane,
  href = "#",
  className = "",       // Button classes
  iconClassName = "",   // Icon classes
  iconSpanClassName = "", // Optional icon span classes
}) {
  const controls = useAnimation();

  return (
    <motion.a
      href={href}
      className={`group relative flex items-center gap-2 py-3 rounded-full text-[18px] overflow-hidden ${className}`}
      onHoverStart={() => controls.start("hover")}
      onHoverEnd={() => controls.start("initial")}
    >
      {/* ICON */}
      <motion.span
        className={`relative z-20 p-1 rounded-full ml-2 bg-black text-white flex items-center justify-center ${iconSpanClassName}`}
        variants={{
          initial: { rotateX: 0 },
          hover: { rotateX: 180 },
        }}
        animate={controls}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Icon className={`w-4 h-4 ${iconClassName}`} />
      </motion.span>

      {/* TEXT */}
      <span className="relative overflow-hidden w-[100px] h-[24px] flex items-center">
        {/* Default Text */}
        <motion.span
          className="absolute inset-0 flex items-center justify-center"
          variants={{
            initial: { y: 0 },
            hover: { y: -24 },
          }}
          animate={controls}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {text}
        </motion.span>

        {/* Hover Text */}
        <motion.span
          className="absolute inset-0 flex items-center justify-center"
          variants={{
            initial: { y: 24 },
            hover: { y: 0 },
          }}
          animate={controls}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {text}
        </motion.span>
      </span>
    </motion.a>
  );
}
