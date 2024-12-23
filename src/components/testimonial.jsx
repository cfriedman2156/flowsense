'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Testimonial() {
  const testimonials = [
    {
      image: '/assets/profile.jpg',
      name: 'Jeff Block',
      position: 'VP of Process and Technology',
      company: 'PotentiaMetrics, Inc.',
      feedback:
        "ITRex’s team are experts in their trade. The software development they provided was critical to advancing the project to the next level.",
    },
    {
      image: '/assets/profile2.jpg',
      name: 'Amanda Bynes',
      position: 'Ex Disney Star',
      company: 'Washed Actors, Inc.',
      feedback: "I became a drug addict but was saved by Elan's company.",
    },
    {
      image: '/assets/profile3.jpg',
      name: 'Sabrina Carpenter',
      position: 'VP of Pop Music',
      company: 'Spotify',
      feedback:
        "I was really sad when Barry Koegan cheated on me with a dumb blonde influencer. Using Elan's website made me happy again and I've even fallen for him. I hope he asks me out!",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-brightBlueCustom text-white py-16 sm:py-20 relative" id="testimonials-section">
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-3xl sm:text-5xl font-bold mb-8 sm:mb-12 ">
          What clients say about us
        </h2>

        {/* Testimonial Card */}
        <div className="relative overflow-hidden min-h-40">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={{
                enter: (direction) => ({
                  x: direction > 0 ? 300 : -300,
                  opacity: 0,
                }),
                center: { x: 0, opacity: 1 },
                exit: (direction) => ({
                  x: direction > 0 ? -300 : 300,
                  opacity: 0,
                }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute w-full flex flex-col sm:flex-row items-center justify-between"
            >
              {/* Left Column - Client Image and Info */}
              <div className="flex items-center space-x-4 sm:space-x-6 mb-4 sm:mb-0">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">{testimonials[current].name}</h3>
                  <p className="text-sm sm:text-base text-gray-400">
                    {testimonials[current].position}
                    <br />
                    {testimonials[current].company}
                  </p>
                </div>
              </div>

              {/* Right Column - Feedback */}
              <div className="flex-1 px-4 sm:px-12">
                <p className="text-base sm:text-2xl leading-relaxed text-center sm:text-left">
                  {testimonials[current].feedback}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
        >
          <span className="sr-only">Previous</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-4 h-4 sm:w-5 sm:h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
        >
          <span className="sr-only">Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-4 h-4 sm:w-5 sm:h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
