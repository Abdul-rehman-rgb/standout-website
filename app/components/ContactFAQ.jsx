"use client";
import React, { useState } from "react";
import { Plane, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "What services do you offer?", a: "I offer UI/UX design, web development, and branding to craft stunning digital experiences." },
  { q: "What tools and technologies do you use?", a: "I primarily use React, Next.js, Tailwind CSS, and Framer Motion for development, and Figma for design." },
  { q: "Do you offer consultations?", a: "Absolutely! I offer free discovery calls to discuss your project requirements." },
];

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-[1390px] mx-auto">
        
        {/* Header & Contact Button Section */}
        <div className="flex flex-col justify-center items-center text-center mb-20 px-4 md:px-0">
          <h2 className="text-4xl md:text-6xl font-medium text-[#171717] mb-6 tracking-tight">
            Have Any Questions?
          </h2>
          <p className="text-[#555555] max-w-[600px] mx-auto mb-10 text-lg leading-relaxed">
            Got questions? I&apos;m here for you 24/7, no matter where you are, ready to
            provide support and answers anytime.
          </p>

          <a
            href="mailto:contact@example.com"
            className="group relative inline-flex items-center gap-4 px-8 py-4 bg-[#fafafa] border border-black text-black rounded-full transition-colors duration-500 hover:bg-black hover:text-white [perspective:1000px]"
          >
            {/* 3D Flip Text Container */}
            <div className="relative h-6 w-24 [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateX(-90deg)]">
              <span className="absolute inset-0 flex items-center justify-start [backface-visibility:hidden]">
                Contact Us
              </span>
              <span className="absolute inset-0 flex items-center justify-start [transform:rotateX(90deg)translateZ(12px)] [backface-visibility:hidden]">
                Contact Us
              </span>
            </div>

            {/* Icon Circle */}
            <div className="relative z-10 p-2 rounded-full bg-black text-white transition-all duration-500 group-hover:bg-white group-hover:text-black group-hover:rotate-[360deg]">
              <Plane className="w-4 h-4" />
            </div>
          </a>
        </div>

        {/* FAQ List Section */}
        <div className="max-w-[1100px] mx-auto flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#F7F8F9] rounded-[24px] overflow-hidden transition-all border border-transparent hover:border-gray-200">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full px-8 md:px-10 py-8 flex justify-between items-center text-left"
              >
                <span className="text-xl md:text-2xl font-medium text-[#171717]">{faq.q}</span>
                <div className={`p-3 rounded-full transition-all duration-300 ${openIndex === i ? 'bg-black text-white rotate-180' : 'bg-gray-200 text-black'}`}>
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-8 md:px-10 pb-10"
                  >
                    <p className="text-gray-500 text-lg max-w-3xl leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContactFAQ;