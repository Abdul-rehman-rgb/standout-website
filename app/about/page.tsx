"use client";

import PageLayout from "../components/PageLayout";
import { Plane } from "lucide-react";
import AnimatedButton from "../components/ui/AnimatedButton";
import Image from "next/image";
import user from "../../public/images/user.jpeg";
import logo1 from "../../public/images/logos/1.png";
import logo2 from "../../public/images/logos/2.png";
import logo3 from "../../public/images/logos/3.png";
import { motion } from "framer-motion";
import StatsCounter from "../components/StatsCounter";
import FeaturesSection from "../components/FeaturesSection";
import Team from "../components/Team";
import TestimonialSection from "../components/TestimonialSection";
import ContactFAQ from "../components/ContactFAQ";

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-[1390px] mx-auto">
          {/* Header Section: Flex-row for Desktop, Stacked for Mobile */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
            <h1 className="text-6xl md:text-[110px] font-medium tracking-tighter text-[#171717] leading-none">
              About Us
            </h1>

            <div className="max-w-md">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-normal">
                We are a team of passionate designers and developers dedicated
                to crafting digital experiences that don&apos;t just look good
                but deliver real business growth for our global clients.
              </p>
            </div>
          </div>

          {/* Hero Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full h-[350px] md:h-[600px] rounded-[32px] md:rounded-[48px] overflow-hidden"
          >
            <Image
              src="/images/about-hero.jpg" // Make sure this path exists
              alt="Team of experts"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <StatsCounter />
          {/* Subtle Stats Row (Optional - matches the professional theme) */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 border-t border-gray-100 pt-16">
            {[
              { label: "Successful Projects", value: "250+" },
              { label: "Global Clients", value: "120+" },
              { label: "Awards Won", value: "15+" },
              { label: "Team Experts", value: "45+" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="text-4xl font-medium text-black">
                  {stat.value}
                </span>
                <span className="text-gray-400 text-sm uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </div> */}
        </div>
      </section>
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="max-w-[1390px] mx-auto">
          {/* Main Grid Container: Heading Left, Content Right */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">
            {/* Left Column: Badge and Main Heading */}
            <div className="flex flex-col items-start gap-6 md:gap-9 max-w-xl">
              <div className="shrink-0">
                <AnimatedButton text="Our story" Icon={Plane} href="#about" />
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-[52px] lg:text-[52px] font-medium text-[#171717] leading-[1.1] tracking-tight text-left">
                Starting small to shaping digital experiences
              </h1>
            </div>

            {/* Right Column: Content split into 3 clean paragraphs */}
            <div className="flex flex-col gap-8 text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl">
              <p>
                Founded with a shared passion for design and technology, our
                agency began as a small team of creators driven to make
                intuitive, beautiful, and effective digital experiences. Today,
                we partner with global brands to build products that empower
                users and elevate businesses.
              </p>

              <p>
                Every pixel we craft is rooted in research, empathy, and
                functionality. Our cross-functional teams merge design thinking
                with real-world usability to create experiences that people
                remember — and rely on.
              </p>

              <p>
                We&apos;re committed to clarity, creativity, and measurable
                impact. Recognized for our user-first design approach, we take
                pride in creating tools that simplify life, spark joy, and grow
                with users.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20 px-4 md:px-10 overflow-hidden">
        <div className="max-w-[1390px] mx-auto">
          {/* Top Branding/Header */}
          <div className="flex flex-col items-center text-center mb-16 gap-6">
            <AnimatedButton
              text="Our Values"
              Icon={Plane}
              className="text-white"
              iconClassName="bg-white text-black rounded-full"
            />
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight max-w-3xl">
              Our works across industries
            </h1>
            <p className="text-[18px] max-w-lg text-[#d1d1d1]">
              Check out our awesome projects that are sure to grab attention on
              Instagram!
            </p>
          </div>
          <FeaturesSection />
        </div>
      </section>
      <Team />
      <TestimonialSection />
      <ContactFAQ />
    </PageLayout>
  );
}
