import React from "react";
import CTAButton from "../common/CTAButton";
import CompanyIntro from "./CompanyIntro";
import ContactIntro from "../common/ContactIntro";
function Elevate() {
  return (
    <div className="w-full px-16 mt-16">
      <div className="flex justify-between">
        <div className="w-[50%] flex flex-col gap-y-4">
          <p className="text-8xl  font-bold leading-28">
            Ready to elevate your brand?
          </p>
          <p className="text-lg  mt-8">
            Let's talk about your vision and create a digital experience that
            drives growth.
          </p>
          <div className="w-fit">
            <CTAButton text={"Let's get started"} />
          </div>
        </div>

        {/*  */}
        <div className="flex text-xl text-gray-800  flex-col gap-y-6 px-40 ">
          <p className="hover:underline cursor-pointer">Home</p>
          <p className="hover:underline cursor-pointer">About</p>
          <p className="hover:underline cursor-pointer">Contact</p>
          <p className="hover:underline cursor-pointer">Services</p>
        </div>
      </div>
      {/* contact  section*/}
      <div className="px-8">
              <ContactIntro/>

      </div>


      <div className="flex items-center justify-center">
        
      {/* <CompanyIntro /> */}
      </div>
    </div>
  );
}

export default Elevate;
