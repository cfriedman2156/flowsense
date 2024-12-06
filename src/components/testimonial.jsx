'use client'

import { useState } from 'react';

export function Testimonial() {
  const testimonials = [
    {
      image: '/assets/profile.jpg', // Replace with the actual image path
      name: 'Jeff Block',
      position: 'VP of Process and Technology',
      company: 'PotentiaMetrics, Inc.',
      feedback:
        "ITRex’s team are experts in their trade. The software development they provided was critical to advancing the project to the next level.",
    },
    {
      image: '/assets/profile2.jpg', // Replace with the actual image path
      name: 'Amanda Bynes',
      position: 'Ex Disney Star',
      company: 'Washed Actors, Inc.',
      feedback:
        "I became a drug addict but was saved by Elan's company",
    },
    {
      image: '/assets/profile3.jpg', // Replace with the actual image path
      name: 'Sabrina Carpenter',
      position: 'VP of Pop Music',
      company: 'SPotify',
      feedback:
        "I was really sad when Barry Koegan cheated on me with a dumb blonde influencer. Using Elan's website made me happy again and I've even fallen for him. I hope he asks me out!",
    },
    // Add more testimonials here if needed
  ];

  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-brightBlueCustom text-white py-20 h-96">
      <div className="container mx-auto px-8">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12">What clients say about us</h2>

        {/* Testimonial Card */}
        <div className="flex items-center justify-between">
          {/* Left Column - Client Image and Info */}
          <div className="flex items-center space-x-6">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-bold">{testimonials[current].name}</h3>
              <p className="text-gray-400">
                {testimonials[current].position}
                <br />
                {testimonials[current].company}
              </p>
            </div>
          </div>

          {/* Right Column - Feedback */}
          <div className="flex-1 px-12">
            <p className="text-2xl leading-relaxed">{testimonials[current].feedback}</p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center"
            >
              <span className="sr-only">Previous</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center"
            >
              <span className="sr-only">Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}





// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { Heading } from "./text";
// import logoBrightPath from "../../public/clients/bright-path/logo-light.svg";
// import logoFamilyFund from "../../public/clients/family-fund/logo-light.svg";
// import logoGreenLife from "../../public/clients/green-life/logo-light.svg";

// export function Testimonial() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const testimonials = [
//     {
//       logo: logoBrightPath,
//       quote:
//         "“Flow Sense Solutions exceeded our expectations with their strategic insight and attention to detail. The team’s expertise helped streamline our processes and provided actionable solutions that led to measurable improvements. Their collaborative approach made it easy to implement changes effectively. Highly recommend Flow Sense Solutions for anyone looking to elevate their business operations.”",
//       name: "Judith Black",
//       title: "CEO of Tuple",
//     },
//     {
//       logo: logoFamilyFund,
//       quote:
//         "“Working with Flow Sense Solutions was a transformative experience. Their team quickly identified key areas for growth and offered tailored strategies that were both innovative and practical. They were responsive, professional, and committed to our success every step of the way. We highly recommend Flow Sense Solutions for businesses seeking impactful and sustainable improvements.”",
//       name: "Joseph Rodriguez",
//       title: "CEO of Reform",
//     },
//     {
//       logo: logoGreenLife,
//       quote:
//         "“The insights provided by Flow Sense Solutions were instrumental in taking our company to the next level. Their deep understanding of our industry and proactive approach enabled us to make data-driven decisions with confidence. The team is exceptionally knowledgeable and easy to work with.”",
//       name: "Emily Davis",
//       title: "CEO of Savvy",
//     },
//   ];

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   const handlePrevious = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
//     );
//   };

//   const visibleTestimonials = [
//     testimonials[currentIndex],
//     testimonials[(currentIndex + 1) % testimonials.length],
//   ];

//   return (
//     <section className="relative bg-white py-18 sm:py-24">
//       <div className="mx-32">
//         <Heading as="h3" className="mb-20 font-semibold">
//           What clients say about us
//         </Heading>
//       </div>
//       <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="flex justify-between gap-8 relative">
//           {visibleTestimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="w-1/2 bg-white p-8 rounded-none text-gray-900"
//             >
//               <Image
//                 alt="Logo"
//                 src={testimonial.logo}
//                 className="h-12 w-auto mb-6"
//               />
//               <blockquote>
//                 <p className="text-lg leading-8">{testimonial.quote}</p>
//               </blockquote>
//               <figcaption className="mt-6">
//                 <div className="font-semibold">{testimonial.name}</div>
//                 <div className="text-gray-500">{testimonial.title}</div>
//               </figcaption>
//             </div>
//           ))}
//           {/* Add a single line between testimonials */}
//           <div className="absolute inset-y-0 left-1/2 w-[1px] bg-gray-300"></div>
//         </div>
//         {/* Left Arrow Button */}
//         <button
//           onClick={handlePrevious}
//           className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full hover:bg-gray-700 transition"
//         >
//           <span className="sr-only">Previous testimonial</span>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path
//               fillRule="evenodd"
//               d="M10 2a1 1 0 01.707 1.707L4.414 10l6.293 6.293A1 1 0 0110 18a1 1 0 01-.707-.293l-7-7a1 1 0 010-1.414l7-7A1 1 0 0110 2z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </button>
//         {/* Right Arrow Button */}
//         <button
//           onClick={handleNext}
//           className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full hover:bg-gray-700 transition"
//         >
//           <span className="sr-only">Next testimonial</span>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path
//               fillRule="evenodd"
//               d="M10 18a1 1 0 01-.707-1.707L15.586 10l-6.293-6.293A1 1 0 0110.707 2.293l7 7a1 1 0 010 1.414l-7 7A1 1 0 0110 18z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </button>
//       </div>
//     </section>
//   );
// }
