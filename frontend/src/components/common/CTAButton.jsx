import React from "react";

function CTAButton({text}) {
  return (
    <button className="bg-[#C6FA50] min-w-40 h-14 font-normal transition-all duration-300  hover:text-white hover:bg-black cursor-pointer  text-gray-600 text-lg rounded-4xl">
      {text}
    </button>
  );
}

export default CTAButton;
