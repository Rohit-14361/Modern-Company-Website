import React from "react";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ContactFAQ  from "../components/contact/ContactFAQ";
import Footer      from "../components/Footer";

function Contact() {
  return (
    <div className="min-h-screen bg-[#050816]">
      {/* ── Hero + Form ──────────────────────────────────────── */}
      <section
        id="contact-main"
        className="relative pt-36 pb-24 px-6 md:px-12 lg:px-20 overflow-hidden"
      >
        {/* Background auras */}
        <div className="aura-radial w-[700px] h-[700px] bg-[#C6FA50]/7 -top-60 -left-60"  aria-hidden="true" />
        <div className="aura-radial w-[500px] h-[500px] bg-[#00ff99]/5 top-0  -right-40"  aria-hidden="true" />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      {/* ── FAQ + Stats ───────────────────────────────────────── */}
      <ContactFAQ />

      <Footer />
    </div>
  );
}

export default Contact;