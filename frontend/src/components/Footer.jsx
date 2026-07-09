import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-gray-700 w-full px-32 py-16">
      {/* footer-top section */}
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-y-3">
          <p className="text-3xl text-gray-200 font-semibold">Digi Labs</p>
          <p className="text-md text-gray-400 ">
            AI-powered automation solutions for modern enterprises.
          </p>
        </div>

        <div className="flex flex-row gap-x-4 px-8">
          <FaFacebookSquare className="h-8 w-8 text-white" />
          <FaInstagram className="h-8 w-8 text-white" />
          <IoLogoTwitter className="h-8 w-8 text-white" />
          <FaLinkedin className="h-8 w-8 text-white" />
        </div>
      </div>
      {/* border section */}
      <div className="w-full border border-gray-400 mt-8"></div>
      {/* footer-bottom section */}
      <div className="flex justify-between items-center text-gray-300 mt-8">
        <p>© 2026 Digi Labs. All rights reserved.</p>
        <p>Made with ❤️ by Rohit Kumar.</p>
      </div>
    </div>
  );
}

export default Footer;
