'use client';

import { Navbar } from "./navbar";
import React from "react";

export function Hero() {
  const scrollToSection = (e, sectionId, offset = -40) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);

    if (section) {
      const topPos = section.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-darkBlueCustom from-blue-900 to-black text-white">
      <div className="container mx-auto px-6 sm:px-10 lg:px-20 py-10">
        <Navbar />
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center pt-4 md:pt-16 lg:items-start lg:space-x-10">
          {/* Text Content */}
          <div className="text-center lg:text-left max-w-lg">
            <h1 className="text-4xl sm:text-5xl md:text-6xl">
              <span className="text-blue-400 font-semibold">Data Solutions</span> for Business Growth
            </h1>
            <p className="mt-8 text-sm sm:text-base">
              At FlowSense Solutions, we specialize in crafting data strategies that align with your business goals.
              Our solutions are designed to empower businesses with clear insights, smarter automation, and scalable systems 
              to thrive in today’s data-driven world.
            </p>
            <div className="mt-8 sm:mt-14 mb-12 lg:mb-24">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact-section', 20)}
                className="bg-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded text-xs sm:text-sm font-semibold hover:bg-blue-500"
              >
                Contact Us
              </a>
            </div>
          </div>
          {/* Image */}
          <div className="hidden sm:flex -mt-16 ml-10 w-full lg:w-1/2 justify-center">
            <img
              src="/assets/hero2.png"
              alt="FlowSense Hero Image"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
