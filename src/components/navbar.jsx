'use client';

import React from 'react';
import Image from 'next/image';

export function Navbar() {
  const scrollToSection = (e, sectionId, offset = -40) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);

    if (section) {
      const topPos = section.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex justify-between items-center mb-16 px-4 sm:px-8">
      {/* Logo Section */}
      <div className="flex items-center text-lg sm:text-2xl font-bold">
        <Image
          src="/assets/logo.png"
          alt="FlowSense Logo"
          width={50}
          height={50}
          className="object-contain mx-2"
        />
        <div>
          <h1 className="font-thin">FlowSense</h1>
          <h1 className="font-black -mt-2">Solutions</h1>
        </div>
      </div>

      {/* Navigation Items and Get Started Button */}
      <div className="flex items-center space-x-6">
        {/* Navigation Links */}
        <div className="hidden sm:flex">
          <ul className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
            <li>
              <a
                href="#services"
                onClick={(e) => scrollToSection(e, 'services-section', -150)}
                className="hover:text-blue-400"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#case-studies"
                onClick={(e) => scrollToSection(e, 'case-studies-section', 20)}
                className="hover:text-blue-400"
              >
                Case Studies
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                onClick={(e) => scrollToSection(e, 'testimonials-section', -50)}
                className="hover:text-blue-400"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact-section', 20)}
                className="hover:text-blue-400"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Get Started Button */}
        <div>
          <a
            href="#get-started"
            onClick={(e) => scrollToSection(e, 'contact-section', 20)}
            className="bg-blue-600 px-3 sm:px-5 py-2 sm:py-3 rounded-lg text-xs sm:text-sm hover:bg-blue-500"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
