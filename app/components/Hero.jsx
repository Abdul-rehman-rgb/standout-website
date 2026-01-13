"use client";
import bg from "../../public/images/hero.gif";
import Image from "next/image";
import user from "../../public/images/user.jpeg";
import { MoveUpRight } from "lucide-react"; // Arrow icon ke liye

export default function Hero() {
  return (
    <section className="max-w-[1390px] mx-auto mt-20 sm:mt-24 md:mt-30 mb-5">
      <div
        className="relative min-h-[60vh] sm:h-[70vh] md:h-[80vh] w-full bg-cover bg-center bg-no-repeat overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-4xl"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="relative z-10 h-full flex flex-col justify-between px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
          
          {/* Top Secstion */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[100px] font-medium leading-[0.9] text-white tracking-tight">
                Standout
                <br />
                Studioz
              </h1>
            </div>

            <div className="flex flex-col justify-between items-start md:items-end gap-2 text-left md:text-right md:mt-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-[64px] leading-tight font-normal text-white">
                Studio
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-[20px] font-normal text-gray-200">
                UIX, Development and Branding
              </p>
            </div>
          </div>

          {/* Middle/Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mt-auto">
            {/* Description */}
            <div className="w-full md:w-[460px] text-[#e0e0e0] text-sm sm:text-base md:text-lg leading-relaxed">
              <p>
                <span className="font-semibold text-white">
                  A creative studio crafting
                </span>{" "}
                bold, user-focused digital experiences. At Kenzo, we blend
                strategy, design, and innovation to help brands stand out.
              </p>
            </div>

            {/* Team/Contact Cards */}
            <div className="flex flex-row gap-3 items-stretch">
              {/* User Image */}
              <div className="bg-white rounded-[12px] p-1 flex items-center">
                <Image
                  src={user}
                  alt="user image"
                  width={78}
                  height={120}
                  className="rounded-[8px] object-cover h-full w-16 md:w-[78px]"
                />
              </div>

              {/* Info & Flip Button Card */}
              <div className="bg-white rounded-[12px] p-4 text-[#171717] w-[240px] flex flex-col justify-between gap-4">
                <div>
                  <h4 className="text-[#171717] text-lg md:text-[20px] font-medium">CEO</h4>
                  <h5 className="text-[#5D5D5D] text-sm md:text-[16px]">At Standout Studio</h5>
                </div>

                {/* --- Flip Animation Button Start --- */}
                <a
                  href="#"
                  className="group relative flex items-center justify-between pl-5 pr-2 py-2 bg-black border border-black rounded-full overflow-hidden transition-all duration-500 hover:bg-white [perspective:1000px]"
                >
                  {/* Text Container */}
                  <div className="relative h-5 w-24 [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateX(-90deg)]">
                    <span className="absolute inset-0 flex items-center text-white text-sm font-medium [backface-visibility:hidden]">
                      Lets Talk
                    </span>
                    <span className="absolute inset-0 flex items-center text-black text-sm font-medium [transform:rotateX(90deg)translateZ(10px)] [backface-visibility:hidden]">
                      Lets Talk
                    </span>
                  </div>

                  {/* Icon Circle */}
                  <div className="bg-white group-hover:bg-black p-2 rounded-full transition-colors duration-500">
                    <MoveUpRight className="w-4 h-4 text-black group-hover:text-white transition-transform duration-500 group-hover:rotate-45" />
                  </div>
                </a>
                {/* --- Flip Animation Button End --- */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}