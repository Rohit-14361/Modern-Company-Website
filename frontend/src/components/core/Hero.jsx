import React from "react";
import Wave from "../Wave";

function Hero() {
  return (
    <section className="flex flex-col items-center bg-[#050816]   pt-16 text-white max-h-screen ">
      <div className="w-full px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Empowering Your Business
          <br />
          Through Digital
          <span className="text-green-400"> Transformation</span>
        </h1>

        <p className="mt-6 text-gray-300 text-lg">
          We build scalable software solutions for modern businesses.
        </p>
      </div>

      <div className="w-full h-[300px] md:h-[500px] lg:h-[600px] mt-8 ">
        <Wave />
      </div>
    </section>
  );
}

export default Hero;
