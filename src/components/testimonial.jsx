"use client";

import { useState } from "react";
import Image from "next/image";
import { Heading } from "./text";
import logoBrightPath from "../../public/clients/bright-path/logo-light.svg";
import logoFamilyFund from "../../public/clients/family-fund/logo-light.svg";
import logoGreenLife from "../../public/clients/green-life/logo-light.svg";
import { FadeIn, FadeInStagger } from './FadeIn'

export function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const testimonials = [
    {
      logo: logoBrightPath,
      quote:
        "“Flow Sense Solutions exceeded our expectations with their strategic insight and attention to detail. The team’s expertise helped streamline our processes and provided actionable solutions that led to measurable improvements. Their collaborative approach made it easy to implement changes effectively. Highly recommend Flow Sense Solutions for anyone looking to elevate their business operations.”",
      name: "Judith Black",
      title: "CEO of Tuple",
    },
    {
      logo: logoFamilyFund,
      quote:
        "“Working with Flow Sense Solutions was a transformative experience. Their team quickly identified key areas for growth and offered tailored strategies that were both innovative and practical. They were responsive, professional, and committed to our success every step of the way. We highly recommend Flow Sense Solutions for businesses seeking impactful and sustainable improvements.”",
      name: "Joseph Rodriguez",
      title: "CEO of Reform",
    },
    {
      logo: logoGreenLife,
      quote:
        "“The insights provided by Flow Sense Solutions were instrumental in taking our company to the next level. Their deep understanding of our industry and proactive approach enabled us to make data-driven decisions with confidence. The team is exceptionally knowledgeable and easy to work with.”",
      name: "Emily Davis",
      title: "CEO of Savvy",
    },
  ];

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setFade(true);
    }, 300);
  };

  const handlePrevious = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
      );
      setFade(true);
    }, 300);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative bg-white py-18 sm:py-24">
      <FadeIn className="mx-32">
        <Heading as="h3" className="mb-20 font-semibold">
          What clients say about us
        </Heading>
      </FadeIn>
      <FadeIn className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Testimonial Wrapper with Fixed Height */}
        <div className="relative mx-auto max-w-2xl lg:max-w-none lg:flex lg:justify-center h-[350px]">
          <div
            className={`transition-opacity duration-300 rounded-4xl bg-black text-white py-10 px-20 ${fade ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              alt="Logo"
              src={currentTestimonial.logo}
              className="h-12 self-start mb-6"
            />
            <figure>
              <blockquote>
                <p className="text-lg">{currentTestimonial.quote}</p>
              </blockquote>
              <figcaption className="mt-10">
                <div className="font-semibold">{currentTestimonial.name}</div>
                <div className="text-gray-400">{currentTestimonial.title}</div>
              </figcaption>
            </figure>
          </div>
        
        {/* Left Arrow Button */}
        </div>
        <button
          onClick={handlePrevious}
          className="absolute left-10 top-96 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full hover:bg-gray-700 transition"
        >
          <span className="sr-only">Previous testimonial</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 01.707 1.707L4.414 10l6.293 6.293A1 1 0 0110 18a1 1 0 01-.707-.293l-7-7a1 1 0 010-1.414l7-7A1 1 0 0110 2z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          className="absolute right-10 top-96 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full hover:bg-gray-700 transition"
        >
          <span className="sr-only">Next testimonial</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a1 1 0 01-.707-1.707L15.586 10l-6.293-6.293A1 1 0 0110.707 2.293l7 7a1 1 0 010 1.414l-7 7A1 1 0 0110 18z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </FadeIn>
    </section>
  );
}
