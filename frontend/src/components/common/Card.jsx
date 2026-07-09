import React from "react";

function Card({heading,text,icons}) {
  return (
    <div className="max-w-[450px] bg-gray-400 cursor-pointer translate-all duration-300 hover:scale-95 h-[270px] border border-gray-400 px-3 rounded-sm">
      {/* icons */}
      <div className="pt-8 text-gray-50 h-16 w-16 mb-6">
        {icons}
      </div>

      {/* heading and text content */}
      <div className="flex flex-col gap-y-4 text-gray-200">
        <h2 className="text-3xl font-bold mt-4">{heading}</h2>
        <p className=" text-lg">{text}</p>
      </div>
    </div>
  );
}

export default Card;
