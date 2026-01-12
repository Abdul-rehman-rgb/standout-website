"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import user from "../../public/images/user.jpeg";
import { Plane } from "lucide-react";
import logo1 from "../../public/images/logos/1.png";
import logo2 from "../../public/images/logos/2.png";
import logo3 from "../../public/images/logos/3.png";
import AnimatedButton from "./ui/AnimatedButton";

export default function About() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#fafafa] text-center px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="max-w-[1390px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 sm:gap-9 mb-8 sm:mb-12 md:mb-16">
          <div className="shrink-0">
            <AnimatedButton text="About Us" Icon={Plane} href="#about" />
          </div>

          <div className="flex justify-center sm:justify-start">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-semibold text-[#171717] text-center sm:text-left">
              Results for every project,
              <br />
              with a focus on design and functionality
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-6 sm:gap-8 md:gap-10 mt-8 sm:mt-12 md:mt-16 lg:mt-25 px-6">
          <div className="bg-white rounded-[24px] overflow-hidden w-full lg:w-[432px] h-[400px] sm:h-[500px] lg:h-[550px] mx-auto lg:mx-0">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full h-full overflow-hidden"
            >
              <Image
                src={user}
                alt="user image"
                width={432}
                height={550}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-1">
            <p className="text-left text-[#B0B0B0] text-sm sm:text-base md:text-lg lg:text-[20px] leading-[20px] sm:leading-[24px] md:leading-[20px] max-w-full lg:max-w-[450px] font-medium">
              <strong className="text-[#171717]">Lorem ipsum</strong> dolor sit
              amet consectetur adiciting Tempor quis nec sodales scelerisque.
              Viverra aliquam consequat morbi lobortis. Aenean sed convallis{" "}
            </p>
            <div className="grid grid-cols-2 justify-evenly items-center gap-2 sm:gap-3 md:gap-2 mt-8 sm:mt-12 md:mt-15">
              <div className="relative flex flex-row justify-between items-center bg-white h-[80px] sm:h-[90px] md:h-[100px] rounded-[12px] p-3 sm:p-4">
                <div>
                  <h3 className="text-3xl sm:text-4xl md:text-[44px] text-[#171717] leading-[36px] sm:leading-[40px] md:leading-[44px] font-medium">
                    50+
                  </h3>
                </div>

                <div className="absolute top-3 sm:top-4 right-3 sm:right-5">
                  <p className="text-xs sm:text-sm md:text-[14px] leading-[18px] sm:leading-[20px] text-[#6D6D6D] font-medium">
                    01
                  </p>
                </div>
              </div>

              <div className="relative flex flex-row justify-between items-center bg-white h-[80px] sm:h-[90px] md:h-[100px] rounded-[12px] p-3 sm:p-4">
                <div>
                  <h3 className="text-3xl sm:text-4xl md:text-[44px] text-[#171717] leading-[36px] sm:leading-[40px] md:leading-[44px] font-medium">
                    95%
                  </h3>
                </div>

                <div className="absolute top-3 sm:top-4 right-3 sm:right-5">
                  <p className="text-xs sm:text-sm md:text-[14px] leading-[18px] sm:leading-[20px] text-[#6D6D6D] font-medium">
                    02
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-2 mt-4 sm:mt-6 md:mt-0">
              <div className="bg-white rounded-[12px] p-4 sm:p-5 md:p-6 space-y-6 sm:space-y-8 md:space-y-40">
                <h4 className="text-base sm:text-lg md:text-[20px] text-[#171717] leading-[22px] sm:leading-[24px] md:leading-[26px] font-medium text-right">
                  Success project
                  <br /> completed
                </h4>
                <p className="text-sm sm:text-base md:text-[16px] text-[#5D5D5D] leading-[20px] sm:leading-[22px] font-normal text-left">
                  We've delivered 50+ projects that help companies generate real
                  results.
                </p>
              </div>
              <div className="bg-white rounded-[12px] p-4 sm:p-5 md:p-6 space-y-6 sm:space-y-8 md:space-y-40 overflow-hidden">
                <h4 className="text-base sm:text-lg md:text-[20px] text-[#171717] leading-[22px] sm:leading-[24px] md:leading-[26px] font-medium text-right">
                  Customer <br /> satisfaction rate
                </h4>

                <div className="overflow-hidden w-full">
                  <div className="slider flex items-center gap-4 sm:gap-6">
                    <Image
                      src={logo1}
                      alt="logo1"
                      width={105}
                      height={16}
                      className="w-20 sm:w-24 md:w-[105px] h-auto"
                    />
                    <Image
                      src={logo2}
                      alt="logo2"
                      width={105}
                      height={16}
                      className="w-20 sm:w-24 md:w-[105px] h-auto"
                    />
                    <Image
                      src={logo3}
                      alt="logo3"
                      width={105}
                      height={16}
                      className="w-20 sm:w-24 md:w-[105px] h-auto"
                    />

                    {/* Duplicate Logos For Smooth Endless Loop */}
                    <Image
                      src={logo1}
                      alt="logo1"
                      width={105}
                      height={16}
                      className="w-20 sm:w-24 md:w-[105px] h-auto"
                    />
                    <Image
                      src={logo2}
                      alt="logo2"
                      width={105}
                      height={16}
                      className="w-20 sm:w-24 md:w-[105px] h-auto"
                    />
                    <Image
                      src={logo3}
                      alt="logo3"
                      width={105}
                      height={16}
                      className="w-20 sm:w-24 md:w-[105px] h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
