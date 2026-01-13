"use client";
import React from "react";
import Image from "next/image";
import { Quote, ArrowUp } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="bg-[#0D0D0D] py-20 px-6 md:px-12 flex items-center relative overflow-hidden">
      {/* Container with tighter max-width to reduce center gap */}
      <div className="max-w-[1390px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-10 lg:gap-20 items-center">
        
        {/* Left Side: Exact Image Shape */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative w-[320px] h-[400px] sm:w-[420px] sm:h-[480px] bg-white rounded-t-[120px] rounded-bl-[120px] rounded-br-[30px] overflow-hidden shadow-2xl">
            <Image
              src="/images/user.jpeg" 
              alt="David K"
              fill
              className="object-cover grayscale"
              priority
            />
          </div>
        </div>

        {/* Right Side: Tighter Content Layout */}
        <div className="flex flex-col items-start text-left space-y-6 md:space-y-8">
          
          {/* Quote Badge with Scalloped Look */}
          <div className="w-14 h-14 bg-[#1A1A1A] rounded-full flex items-center justify-center border border-white/5 relative">
             <div className="absolute inset-0 border-2 border-dashed border-white/10 rounded-full scale-110 opacity-50" />
             <Quote className="text-white fill-white" size={20} />
          </div>

          <div className="space-y-4">
            <span className="text-white text-lg font-normal opacity-90 block">
              Testimonials
            </span>

            {/* Heading with tight leading */}
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-medium text-white leading-[1.1] tracking-tight max-w-[600px]">
              Our reach grew fast like nothing we ever saw before — donations are up!
            </h2>

            <div className="pt-4">
              <p className="text-white font-semibold text-xl">David K</p>
              <p className="text-gray-500 text-sm uppercase tracking-[0.15em] mt-1">
                Nonprofit Director
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default TestimonialSection;