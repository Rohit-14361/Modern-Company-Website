import React from "react";

function Mission() {
  return (
    <div className="mt-12 ">
      <div className="px-12">
        <p className="text-xl font-mono text-gray-500">Our Mission</p>
      </div>

      <div className="px-12 mt-8 flex flex-row gap-y-3">
        <div className="border-r-2 w-[40%] flex flex-col gap-y-4 border-gray-800 h-[350px]">
          <h2 className="text-6xl font-semibold leading-16">
            Digital Solutions That Scale With You
          </h2>
          <p className="mt-8 text-md text-gray-600 ">
            We deliver tailored digital experiences that are simple, scalable,
            and focused on your business growth. Whether you're just starting
            online or ready to expand, we build platforms that evolve with your
            needs.
          </p>

          <button className="border-gray-400 cursor-pointer  hover:border-gray-600 border rounded-md w-fit py-2 px-3">
            Discover Our Story
          </button>
        </div>

        <div className="border-r-2 flex flex-col items-center gap-y-8 w-[35%] px-12  pt-32 border-gray-800 h-[350px]">
          <h3 className="text-3xl font-normal text-gray-900">
            Tailored Digital Presence
          </h3>
          <p className="text-lg text-gray-500 text-center">
            Crafting online experiences that resonate with your brand and engage
            your audience.
          </p>
        </div>

        <div className="flex flex-col items-center w-[25%] gap-y-8 pt-32">
          <h3 className="text-3xl font-normal text-gray-900">Growth-Driven Innovation</h3>
          
          <p className="text-lg text-gray-500 text-center">
            Crafting online experiences that resonate with your brand and engage
            your audience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mission;
