import React from "react";
import { Link } from "react-router-dom";
import CTAButton from "./common/CTAButton";
import CompanyIntro from "./core/CompanyIntro";
function Nav() {
  return (
    <div className="h-28 w-full px-10 py-3 flex flex-row items-center justify-between border-t-gray-200 border-l-0 border-r-0 border-b-gray-200 border">
      {/* logo section */}
      <CompanyIntro />
      {/* about services and contact section */}

      <div className=" items-center justify-center flex flex-row gap-x-8 pr-20 ">
        <Link to="/about">
          <h3 className="text-xl hover:underline font-mono text-gray-500">
            About
          </h3>
        </Link>

        <Link to="/services">
          <h3 className="text-xl font-mono hover:underline text-gray-500">
            Services
          </h3>
        </Link>

        <Link to="/contact">
          <CTAButton text={"Let's talk"} />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
