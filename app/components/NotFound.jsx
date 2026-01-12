"use client";
import React from "react";
import { motion } from "framer-motion";
import { Home, MoveLeft } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50" />

      <div className="relative z-10 text-center">
        {/* Animated 404 Number */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[120px] md:text-[200px] lg:text-[250px] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20"
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 md:-mt-10"
        >
          <h2 className="text-2xl md:text-4xl font-medium mb-4">
            Lost in Space?
          </h2>
          <p className="text-gray-400 max-w-md mx-auto mb-10 text-sm md:text-base leading-relaxed">
            The page you are looking for doesn&apos;t exist or has been moved. 
            Don&apos;t worry, even the best studios get lost sometimes.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          
          {/* Back Button (Outline) */}
          <button 
            onClick={() => window.history.back()}
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <MoveLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>

          {/* Home Button (Flip Animation Style) */}
          <Link
            href="/"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black overflow-hidden transition-all duration-500 hover:bg-black hover:text-white [perspective:1000px]"
          >
            {/* ICON CIRCLE */}
            <span className="relative z-20 p-2 rounded-full bg-black text-white flex items-center justify-center transition-colors duration-500 group-hover:bg-white group-hover:text-black">
              <Home className="w-4 h-4" />
            </span>

            {/* TEXT WITH 3D FLIP */}
            <div className="relative h-6 w-28 [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateX(-90deg)] text-left">
              <span className="absolute inset-0 flex items-center text-[16px] font-semibold [backface-visibility:hidden]">
                Back Home
              </span>
              <span className="absolute inset-0 flex items-center text-[16px] font-semibold [transform:rotateX(90deg)translateZ(12px)] [backface-visibility:hidden]">
                Back Home
              </span>
            </div>
          </Link>

        </div>
      </div>

      {/* Subtle Floating Elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0] 
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[10%] w-24 h-24 border border-white/10 rounded-full hidden md:block"
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-[15%] w-32 h-32 border border-white/5 rounded-2xl rotate-12 hidden md:block"
      />
    </div>
  );
};

export default NotFound;