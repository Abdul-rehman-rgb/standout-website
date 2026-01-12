"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "What services do you offer?",
    answer: "I offer UI/UX design, web development, and branding to craft stunning digital experiences.",
  },
  {
    question: "What tools and technologies do you use?",
    answer: "I specialize in React, Next.js, Tailwind CSS, Framer Motion, and Figma for design and development.",
  },
  {
    question: "Can I see more of your work?",
    answer: "Yes, you can explore my portfolio section or contact me directly for specific case studies.",
  },
  {
    question: "Do you offer consultations?",
    answer: "Absolutely! I offer free initial consultations to discuss your project goals and requirements.",
  },
  {
    question: "What's your design process like?",
    answer: "My process involves research, wireframing, high-fidelity design, and iterative development to ensure the best results.",
  },
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-4 overflow-hidden rounded-[20px] bg-[#F7F8F9] transition-all duration-300">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between px-6 py-6 md:px-8"
      >
        <span className="text-left text-lg md:text-xl font-medium text-[#171717]">
          {question}
        </span>
        
        {/* Dynamic Icon Circle */}
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen ? "bg-[#171717] text-white" : "bg-[#ECEEEF] text-[#171717]"
          }`}
        >
          {isOpen ? (
            <Minus className="h-5 w-5" />
          ) : (
            <Plus className="h-5 w-5" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="pb-6 text-[#5D5D5D] text-base md:text-lg leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // Pehla item default open

  return (
    <section className="mx-auto max-w-[1390px] py-10 px-4 md:px-10">
      <div className="mx-auto max-w-4xl">
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;