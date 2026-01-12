// Heading.jsx
import React from "react";

const Heading = ({ text }) => {
  return (
    <h2 className="text-[52px] font-semibold text-[#171717] mb-5 tracking-[-1.2px]">
      {text}
    </h2>
  );
};

export default Heading;
