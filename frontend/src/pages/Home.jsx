import React from "react";
import Wave from "../components/Wave";
import Hero from "../components/core/Hero";
import Mission from "../components/core/Mission";
import Solution from "../components/core/Solution";
import Elevate from "../components/core/Elevate";
import CompanyIntro from "../components/core/CompanyIntro";
import OurProcess from "../components/common/OurProcess";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Mission />
      <Solution />
      <Elevate />
      <OurProcess />
      <Footer />
    </div>
  );
}

export default Home;

