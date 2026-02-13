"use client";
import PageLayout from "../components/PageLayout";
import { ArrowUpRight, Plane } from "lucide-react";
import AnimatedButton from "../components/ui/AnimatedButton";
import Image from "next/image";
import { motion } from "framer-motion";
import Heading from "../components/ui/Heading";
import PerspectiveCarousel from "../components/PerspectiveCarousel";

const projects = [
  { id: 1, title: "Lune", category: "App Visual Design", img: "/images/1.jpg" },
  { id: 2, title: "Arin", category: "Fashion Brand Launch", img: "/images/1.jpg" },
  { id: 3, title: "Oura", category: "Brand Refreshment", img: "/images/1.jpg" },
  { id: 4, title: "Forma", category: "Product Design", img: "/images/1.jpg" },
  { id: 5, title: "Oko", category: "Product UI", img: "/images/1.jpg" },
  { id: 6, title: "Aren", category: "Product UI", img: "/images/1.jpg" },
];

const ProjectCard = ({ title, category, img }) => (
  <motion.div 
    className="flex flex-col gap-4 mb-10"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    {/* Image Container */}
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] bg-[#1a1a1a] group">
      <Image
        src={img}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
      />
      
      {/* Hover Overlay Button (From Video) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/10">
        <div className="bg-white text-black p-4 rounded-full flex items-center gap-2 font-semibold shadow-xl scale-90 group-hover:scale-100 transition-transform duration-500">
           <ArrowUpRight className="w-6 h-6" />
        </div>
      </div>
    </div>

    {/* Text Content (Title & Category Below Image) */}
    <div className="flex flex-col gap-1 px-2">
      <h3 className="text-2xl font-medium text-black">{title}</h3>
      <p className="text-gray-500 text-lg">{category}</p>
    </div>
  </motion.div>
);

export default function ProjectsPage() {
  return (
    <PageLayout>
      <section className="bg-white text-black py-20 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            {/* <h1 className="text-7xl md:text-9xl font-medium tracking-tighter">
              Projects
            </h1> */}
                  <Heading text="Projects" />
            
            <p className="text-[#171717] max-w-sm text-lg leading-relaxed mb-4">
              Discover our innovative design projects — a testament to creativity and effectiveness. Dive into case studies that demonstrate our influence.
            </p>
          </div>

          {/* 2-Column Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                category={project.category}
                img={project.img}
              />
            ))}
          </div>

          {/* Bottom CTA (As seen in video) */}
          <div className="mt-32 text-center py-20 border-t border-gray-100">
             <h2 className="text-5xl md:text-7xl font-medium mb-10">
               Let's Build <br /> somethina meaningful
             </h2>
             <p className="text-gray-500 mb-10 text-xl">
               Check out our awesome projects that are sure to grab attention on Instagram!
             </p>
             <button className="bg-black text-white px-10 py-5 rounded-full text-xl font-medium hover:bg-gray-800 transition-colors">
               Book A Call Now
             </button>
          </div>
        </div>
      </section>
      <PerspectiveCarousel  />
    </PageLayout>
  );
}