"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.png";
import { Plane, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-white backdrop-blur-md z-50 px-4 sm:px-6 md:px-10 py-4 md:py-6"
    >
      <div className="max-w-[1390px] mx-auto flex items-center justify-between">
        {/* Left - Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="Standou-studioz Logo"
            width={205}
            height={60}
            className="object-contain w-32 sm:w-40 md:w-[205px] h-auto"
          />
        </Link>

        {/* Center - Nav Items (Desktop) */}
        <div className="hidden lg:flex justify-evenly space-x-8 xl:space-x-20 text-[16px] text-[#171717] font-medium">
          <Link href="/" className="hover:text-gray-600 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-600 transition">
            About
          </Link>
          <Link href="/projects" className="hover:text-gray-600 transition">
            Projects
          </Link>
          <Link href="/blog" className="hover:text-gray-600 transition">
            Blog
          </Link>
        </div>

        <div className="hidden md:flex justify-end items-center space-x-3">
          {/* <a
            href="#"
            className="flex items-center gap-2 hover:text-gray-600 transition text-sm lg:text-base"
          >
            Cart
            <span className="bg-black rounded-full text-white h-[18px] w-[18px] flex items-center justify-center text-[12px]">
              0
            </span>
          </a> */}

          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-4 px-6 py-3 bg-black border border-black text-white rounded-full transition-colors duration-500 hover:bg-white hover:text-black [perspective:1000px]"
          >
            {/* 3D Flip Text Container */}
            <div className="relative h-6 w-24 [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateX(-90deg)]">
              {/* Front Face (White text on Black background initially) */}
              <span className="absolute inset-0 flex items-center justify-start [backface-visibility:hidden]">
                Contact Us
              </span>

              {/* Bottom Face (Black text - appears when button turns white on hover) */}
              <span className="absolute inset-0 flex items-center justify-start [transform:rotateX(90deg)translateZ(12px)] [backface-visibility:hidden]">
                Contact Us
              </span>
            </div>

            {/* Icon Circle */}
            <div className="relative z-10 p-2 rounded-full bg-white text-black transition-all duration-500 group-hover:bg-black group-hover:text-white group-hover:rotate-[360deg]">
              <Plane className="w-4 h-4" />
            </div>
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-[#171717]"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden mt-4 pb-4 border-t border-gray-200"
        >
          <div className="flex flex-col space-y-4 pt-4">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#171717] font-medium hover:text-gray-600 transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#171717] font-medium hover:text-gray-600 transition"
            >
              About
            </Link>
            <Link
              href="/projects"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#171717] font-medium hover:text-gray-600 transition"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#171717] font-medium hover:text-gray-600 transition"
            >
              Blog
            </Link>
            <div className="flex items-center gap-4 pt-2">
              
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="group relative inline-flex items-center gap-4 px-6 py-3 bg-black border border-black text-white rounded-full transition-colors duration-500 hover:bg-white hover:text-black [perspective:1000px]"
          >
            {/* 3D Flip Text Container */}
            <div className="relative h-6 w-24 [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateX(-90deg)]">
              {/* Front Face (White text on Black background initially) */}
              <span className="absolute inset-0 flex items-center justify-start [backface-visibility:hidden]">
                Contact Us
              </span>

              {/* Bottom Face (Black text - appears when button turns white on hover) */}
              <span className="absolute inset-0 flex items-center justify-start [transform:rotateX(90deg)translateZ(12px)] [backface-visibility:hidden]">
                Contact Us
              </span>
            </div>

            {/* Icon Circle */}
            <div className="relative z-10 p-2 rounded-full bg-white text-black transition-all duration-500 group-hover:bg-black group-hover:text-white group-hover:rotate-[360deg]">
              <Plane className="w-4 h-4" />
            </div>
          </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
