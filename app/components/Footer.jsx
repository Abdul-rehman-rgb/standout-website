"use client";
import React from "react";
import { ArrowUp, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";
import Image from "next/image";
import logo from "../../public/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#111315] text-white pt-20 pb-10 px-6 md:px-10 lg:px-16">
      <div className="max-w-[1390px] mx-auto">
        
        {/* Top Section: Logo and Navigation */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          
          {/* Left Side: Logo and Newsletter */}
          <div className="flex flex-col gap-10 w-full lg:w-1/3">
             <Image
            src={logo}
            alt="Standou-studioz Logo"
            width={205}
            height={60}
            className="object-contain w-32 sm:w-40 md:w-[205px] h-auto"
          />
            
            <div className="relative w-full max-w-sm border-b border-gray-700 pb-2 flex items-center justify-between">
              <input 
                type="email" 
                placeholder="Subscribe our newsletter" 
                className="bg-transparent border-none outline-none text-gray-400 placeholder:text-gray-500 w-full text-lg"
              />
              <button className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 text-gray-400">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>

          {/* Right Side: Links Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 w-full lg:w-auto">
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              <h4 className="text-lg font-medium">Navigation</h4>
              <ul className="flex flex-col gap-4 text-gray-400 text-sm">
                <li className="hover:text-white cursor-pointer transition-colors">Home</li>
                <li className="hover:text-white cursor-pointer transition-colors">About us</li>
                <li className="hover:text-white cursor-pointer transition-colors">Blogs</li>
                <li className="hover:text-white cursor-pointer transition-colors">Projects</li>
                <li className="hover:text-white cursor-pointer transition-colors">Services</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              <h4 className="text-lg font-medium">Company</h4>
              <ul className="flex flex-col gap-4 text-gray-400 text-sm">
                <li className="hover:text-white cursor-pointer transition-colors">Team</li>
                <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
                <li className="hover:text-white cursor-pointer transition-colors">404</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              <h4 className="text-lg font-medium">Resources</h4>
              <ul className="flex flex-col gap-4 text-gray-400 text-sm">
                <li className="hover:text-white cursor-pointer transition-colors">Style Guide</li>
                <li className="hover:text-white cursor-pointer transition-colors">Licenses</li>
                <li className="hover:text-white cursor-pointer transition-colors">Changelog</li>
                <li className="hover:text-white cursor-pointer transition-colors">401</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright and Meta Links */}
        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            2025 ©StandotStudioz. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm">
            <p className="text-gray-500">Design by <span className="text-white">©StandotStudioz</span></p>
            <p className="text-gray-500">License</p>
          </div>

          {/* Back to Top Button */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors group"
          >
            <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;