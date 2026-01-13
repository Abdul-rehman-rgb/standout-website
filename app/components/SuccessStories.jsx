"use client";
import React from "react";
import Image from "next/image";
import { Star, Plane } from "lucide-react";
import ContactFAQ from "./ContactFAQ";

const SuccessStories = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-10 lg:px-16 max-w-[1390px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
        {/* Card 1: Title Card */}
        <div className="bg-[#F7F8F9] rounded-[24px] p-8 md:p-12 flex flex-col justify-between min-h-[500px]">
          <div>
            <span className="text-xl font-bold block mb-8">
              Standout Studioz
            </span>
            <h2 className="text-[54px] md:text-[64px] font-medium leading-[1.1] tracking-tight text-[#171717]">
              Success <br /> Stories
            </h2>
          </div>
          <div className="text-[#8e8e8e] text-sm md:text-base max-w-[200px] self-end text-right leading-snug">
            We&apos;ve delivered 50+ projects that help companies generate real
            results.
          </div>
        </div>

        {/* Card 2: Image Testimonial Card */}
        <div className="relative rounded-[24px] overflow-hidden group min-h-[500px]">
          <Image
            src="/images/user.jpeg" // Apni image path yahan dalen
            alt="Liam Carter"
            fill
            className="object-cover"
          />
          {/* Dark Overlay with Blur Effect */}
          <div className="absolute inset-x-4 bottom-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-[24px] p-6 text-white">
            <p className="text-sm md:text-base font-normal leading-relaxed mb-6">
              Kenzo&apos;s Webflow development skills are unmatched! They built a
              fast, interactive, and visually stunning website
            </p>
            <div>
              <h4 className="font-semibold text-lg">Liam Carter</h4>
              <p className="text-white/70 text-sm">
                Head of Product at FlowTech
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Stats & Rating Card */}
        <div className="bg-[#F7F8F9] rounded-[24px] p-8 md:p-10 flex flex-col justify-between min-h-[500px] relative">
          <div>
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-black text-black" />
              ))}
            </div>
            <p className="text-[#171717] text-lg md:text-xl leading-relaxed">
              Working with Kenzo Agency on our Webflow site was a game-changer.
              They delivered a sleek, high-performing, and engaging website that
              exceeded our expectations.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {/* Stats */}
            <div className="flex justify-between items-start border-b border-gray-200 pb-8">
              <div>
                <h3 className="text-4xl md:text-5xl font-medium text-[#171717]">
                  35+
                </h3>
                <p className="text-[#8e8e8e] text-sm mt-1">
                  Presence in countries.
                </p>
              </div>
              <div>
                <h3 className="text-4xl md:text-5xl font-medium text-[#171717]">
                  20+
                </h3>
                <p className="text-[#8e8e8e] text-sm mt-1">Experience</p>
              </div>
            </div>

            {/* Profile Footer */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden relative">
                <Image
                  src="/images/rounded-user.png" // User avatar path
                  alt="Liam Carter"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-[#171717]">Liam Carter</h4>
                <p className="text-[#8e8e8e] text-sm">
                  Head of Product at FlowTech
                </p>
              </div>
            </div>
          </div>

          {/* Floating Back to Top (Sirf is section ke liye agar chahiye) */}
          {/* <button className="absolute bottom-6 right-6 p-4 bg-[#171717] rounded-[12px] text-white hover:bg-black transition-colors">
            <ArrowUp className="w-5 h-5" />
          </button> */}
        </div>
      </div>

      <ContactFAQ />

  
    </section>
  );
};

export default SuccessStories;
