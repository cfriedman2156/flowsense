'use client'

import { useState } from "react";



export function Projects() {
  const caseStudies = [
    {
      image: '/assets/project1.png', // Replace with your actual image path
      title: 'Retail Sales Optimization with Predictive Analytics',
      description: 'A retail chain faced declining sales and inefficient inventory management.',
      link: '#',
    },
    {
      image: '/assets/project2.png', // Replace with your actual image path
      title: 'Customer Segmentation for a SaaS Company',
      description: 'A SaaS provider struggled to identify and target its most profitable customer segments.',
      link: '#',
    },
    {
      image: '/assets/project3.png', // Replace with your actual image path
      title: 'Supply Chain Optimization for Manufacturing',
      description: 'A manufacturing company faced high logistics costs and supply chain inefficiencies.',
      link: '#',
    },
  ];

  return (
    <div className="bg-blue-50 py-20">
      <div className="container mx-auto px-8">
        {/* Heading */}
        <h2 className="text-4xl text-center md:text-5xl text-4xl mb-16">
          Case<span className="text-blue-400 font-semibold"> Studies</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CaseStudyCard({ image, title, description, link }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`bg-white shadow-lg overflow-hidden transition-transform duration-300 ${hover ? '-translate-y-3' : ''}`}>
      {/* Image */}
      <img src={image} alt={title} className={`w-full h-60 object-cover duration-300 ${hover ? 'scale-105' : ''}`} />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>

        {/* Link */}
        <a
          href={link}
          className='text-blue-500 font-medium hover:underline flex items-center'
        >
          Discover more &raquo;
        </a>
      </div>
    </div>
  );
}










// 'use client'

// import { ArrowLongRightIcon } from '@heroicons/react/20/solid'
// import { clsx } from 'clsx'
// import { useRef, useState } from 'react'
// import useMeasure from 'react-use-measure'
// import { Container } from './container'
// import { Link } from './link'
// import { Heading } from './text'
// import { Gradient } from '@/components/gradient'
// import { FadeIn, FadeInStagger } from './FadeIn'

// const projects = [
//   {
//     img: '/projects/project1.webp',
//     title: 'AI-based enterprise software for No.1 retailer',
//     description: 'A comprehensive AI-powered data ecosystem with self-service BI capabilities that helps a global retail company make informed decisions by aggregating data from multiple sources and handling 13 million requests per day.',
//   },
//   {
//     img: '/projects/project2.webp',
//     title: 'AI-powered fitness mirror with a personal coach inside',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
//   {
//     img: '/projects/project3.webp',
//     title: 'Generative AI sales training platform for onboarding newly hired sales reps',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
//   {
//     img: '/projects/project4.webp',
//     title: 'Eye-tracking technology solution for neurological research',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
//   {
//     img: '/projects/project5.webp',
//     title: 'OCR application development for a multinational courier company',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
//   {
//     img: '/projects/project6.webp',
//     title: 'GenAI app design: a mobile application that categorizes art and spots forgery',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
// ]

// function ProjectCard({ img, title, description }) {
//   return (
//     <div className="relative flex aspect-[9/16] w-72 shrink-0 snap-center flex-col justify-end overflow-hidden rounded-3xl bg-white shadow-lg sm:aspect-[3/4] sm:w-96">
//       <img src={img} alt={title} className="absolute inset-x-0 top-0 aspect-square w-full object-cover" />
//       <div
//         aria-hidden="true"
//         className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black from-[calc(7/16*100%)] ring-1 ring-inset ring-gray-950/10 sm:from-25%"
//       />
//       <figure className="relative p-10">
//         <blockquote>
//           <p className="relative text-xl font-semibold text-white">
//             {title}
//           </p>
//         </blockquote>
//         <figcaption className="mt-6 border-t border-white/20 pt-6">
//           <p className="text-sm font-medium text-white">{description}</p>
//         </figcaption>
//       </figure>
//     </div>
//   )
// }

// export function Projects() {
//   const scrollRef = useRef(null)
//   const [activeIndex, setActiveIndex] = useState(0)

//   const scrollTo = (index) => {
//     const gap = 32
//     const cardWidth = scrollRef.current.children[0].offsetWidth
//     scrollRef.current.scrollTo({
//       left: (cardWidth + gap) * index,
//       behavior: 'smooth',
//     })
//     setActiveIndex(index)
//   }

//   const handleNext = () => {
//     if (activeIndex < projects.length - 1) {
//       scrollTo(activeIndex + 1)
//     }
//   }

//   const handlePrevious = () => {
//     if (activeIndex > 0) {
//       scrollTo(activeIndex - 1)
//     }
//   }

//   return (
//     <Gradient className="relative overflow-hidden mx-2 rounded-4xl pt-14">
//       <Container>
//         <FadeIn>
//           <Heading as="h3" className="font-semibold">
//             Latest Projects
//           </Heading>
//         </FadeIn>  
//       </Container>
//       <div
//         ref={scrollRef}
//         className={clsx([
//           'mt-16 flex gap-8 px-8 pb-12 overflow-x-auto snap-x snap-mandatory scroll-smooth',
//           '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
//         ])}
//       >
//         {projects.map((project, index) => (
//           <ProjectCard
//             key={index}
//             img={project.img}
//             title={project.title}
//             description={project.description}
//           />
//         ))}
//       </div>
//       {/* Left Arrow Button */}
//       <button
//         onClick={handlePrevious}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full hover:bg-gray-700 transition"
//       >
//         <span className="sr-only">Previous project</span>
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//           <path fillRule="evenodd" d="M10 2a1 1 0 01.707 1.707L4.414 10l6.293 6.293A1 1 0 0110 18a1 1 0 01-.707-.293l-7-7a1 1 0 010-1.414l7-7A1 1 0 0110 2z" clipRule="evenodd" />
//         </svg>
//       </button>

//       {/* Right Arrow Button */}
//       <button
//         onClick={handleNext}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full hover:bg-gray-700 transition"
//       >
//         <span className="sr-only">Next project</span>
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//           <path fillRule="evenodd" d="M10 18a1 1 0 01-.707-1.707L15.586 10l-6.293-6.293A1 1 0 0110.707 2.293l7 7a1 1 0 010 1.414l-7 7A1 1 0 0110 18z" clipRule="evenodd" />
//         </svg>
//       </button>
//     </Gradient>
//   )
// }
