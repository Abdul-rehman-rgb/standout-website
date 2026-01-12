"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedHeading() {
  const headingRefs = useRef([]);

  useEffect(() => {
    headingRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { color: "0% 100%" }, // start with only gray showing
        {
          color: "100% 100%", // full red fill
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  const setRefs = (el) => {
    if (el && !headingRefs.current.includes(el)) {
      headingRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h2
        ref={setRefs}
        className="text-[5vw] font-bold"
        style={{
          color: "gray",
          WebkitTextStroke: "0.05rem #000", // subtle outline
          background: "linear-gradient(to right, red 0%, red 0%, gray 0%, gray 100%) no-repeat",
          backgroundSize: "0% 100%", // initial empty red
          backgroundPosition: "0% 0%",
        }}
      >
        Text Fill Effect
      </h2>
    </div>
  );
}
