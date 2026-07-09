import React from "react";

import { LuBotMessageSquare } from "react-icons/lu";
import Card from "../common/Card";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { BiRightTopArrowCircle } from "react-icons/bi";


function Solution() {
  return (
    <div className="mt-20">
      <div className="flex items-center justify-center flex-col gap-y-4">
        <p className="font-semibold mask-radial-from-neutral-600 text-gray-400 text-4xl">
          Powerful Solutions
        </p>

        <p className="text-xl font-semibold text-gray-500">
          Comprehensive automation tools designed to transform your operations
        </p>
      </div>

      {/* card section */}

      <div className="grid grid-cols-3 px-8 items-center mb-8 justify-around mt-16">
        <Card
          icons={<LuBotMessageSquare className="h-16 w-16" />}
          heading={"AI Integration"}
          text={
            "Seamlessly integrate advance AI models into your workflows for intelligent decision making and automation. "
          }
        />
        <Card icons={<HiMiniArrowTrendingUp className="h-16 w-16"/>} heading={"Scalable Solutions"} text={"Infrastructure that grows with your business, handling increased deemand effortlessly."}/>
        <Card icons={<BiRightTopArrowCircle className="h-16 w-16"/>} heading={"Process Automation"} text={"Automate repetitive tasks and complex workflows to free up your team strategic initiative."}/>
      </div>
    </div>
  );
}

export default Solution;
