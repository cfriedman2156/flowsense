'use client'

import { useState } from 'react';


export function Services() {
    const services = [
        {
            icon: '/assets/setup.png',
            title: 'Data Infrastructure Setup',
            description:
                'Set up and configure databases, data leaks and data warehouses to ensure your data is stored efficiently and securely, ready for processing and analysis',
        },
        {
            icon: '/assets/development.png',
            title: 'Analytics Platform Development',
            description:
                'Build user-friendly analytics platforms that enable you to visualize data trends, create reports, and make data-driven decisions with ease.',
        },
        {
            icon: '/assets/analytics.png',
            title: 'Customer Insights and Analytics',
            description:
                'Use advanced analytics to track and analyze customer behavior, preferences, and feedback, providing you with valuable insights to enhance customer satisfaction and loyalty.',
        },
        {
            icon: '/assets/ai.png',
            title: 'AI Implementation',
            description:
                'Develop and integrate AI and machine learning models to automate data analysis, predict future trends, and optimize decision-making processes, boosting overall business efficiency.',
        },
        {
            icon: '/assets/automation.png',
            title: 'Data Pipeline Automation',
            description:
                'Automate the flow of data from various sources to your data warehouse, reducing manual intervention and ensuring timely, accurate data delivery.',
        },
        {
            icon: '/assets/solutions.png',
            title: 'Custom Data Solutions',
            description:
                'Create tailored data models, unique analytics dashboards, and bespoke integrations to ensure your data systems align perfectly with your specific business needs.',
        },
    ];




    return (
        <div className="bg-white mx-40">
            <div className="container mx-auto px-8">
                <h2 className="text-4xl md:text-5xl text-4xl mb-16">
                    <span className="text-blue-400 font-semibold">Services </span>We Offer
                </h2>
                <div className="grid gap-2">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function ServiceCard({ icon, title, description }) {
    const [hover, setHover] = useState(false);

    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            id='services-section'
            className={`transition-transform duration-300 ${hover ? 'translate-x-3' : ''}`}
        >
            <div className={`flex items-start p-6 rounded-xl transition ${hover ? 'bg-gray-100' : ''}`}>
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-12">
                    <img src={icon} alt={title} className="object-contain" />
                </div>

                {/* Content */}
                <div className="pl-24 w-4/12">
                    <h3 className="text-2xl font-medium text-black">{title}</h3>
                </div>
                <div className="w-full text-gray-700">
                    <p className=' transition ease-in duration-150'>{description}</p>
                </div>

                {/* Hover Arrow */}
                {/* <div
                    className={`flex-shrink-0 pl-3  transition-opacity duration-700 ${
                        hover ? ' opacity-100' : ' opacity-0'
                    }`}
                >
                    <img
                        src="/assets/arrow.png"
                        alt="Arrow"
                        className="w-10 h-10 object-contain"
                    />
                </div> */}
            </div>
        </div>
    );
}







// <div className="">
//     <div className="mx-auto max-w-2xl lg:max-w-7xl">
//         <FadeIn>
//             <Heading as="h3" className="mt-2 max-w-3xl font-semibold">
//                 How we can help you
//             </Heading>
//         </FadeIn>
//         {/* Container for the grid */}
//         <FadeIn className="mt-10 grid gap-4 sm:mt-10 lg:grid-cols-3">

//             {/* First Pair */}
//             <div>
//                 {/* Card 1 */}
//                 <div className="relative mb-4 ">
//                     <div className="absolute inset-px rounded-lg bg-black"></div>
//                     <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
//                         <div className="px-8 py-6">
//                             <p className="mt-2 text-3xl font-bold tracking-tight text-white max-lg:text-center">AI Solutions</p>
//                             <p className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center">
//                             Utilize the power of artificial intelligence to overcome your unique business challenges. For impactful results, our enterprise software engineering company employs a full range of capabilities—from AI consulting and development to machine learning, deep learning, NLP, computer vision, generative AI, and intelligent process automation.
//                             </p>
//                         </div>
//                         <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-4">
//                             {/* <img
//                                 className="w-full max-lg:max-w-xs"
//                                 src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
//                                 alt=""
//                             /> */}
//                         </div>
//                     </div>
//                     <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
//                 </div>

//                 {/* Card 2 */}
//                 <div className="relative">
//                     <div className="absolute inset-px rounded-lg bg-black"></div>
//                     <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
//                         <div className="px-8 py-6">
//                             <p className="mt-2 text-3xl font-bold tracking-tight text-white max-lg:text-center">Data and Analytics</p>
//                             <p className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center">
//                             Transform your data into a powerful asset that fuels decision-making at all levels. From data governance and management to advanced analytics and data science, ITRex empowers your business—not just IT—to take full control and leverage its data effectively.
//                             </p>
//                         </div>
//                         <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-4">
//                             {/* <img
//                                 className="w-full max-lg:max-w-xs"
//                                 src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
//                                 alt=""
//                             /> */}
//                         </div>
//                     </div>
//                     <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
//                 </div>
//             </div>

//             {/* Second Pair */}
//             <div>
//                 {/* Card 3 */}
//                 <div className="relative mb-4">
//                     <div className="absolute inset-px rounded-lg bg-black"></div>
//                     <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
//                         <div className="px-8 py-6">
//                             <p className="mt-2 text-3xl font-bold tracking-tight text-white max-lg:text-center">IoT & Embedded Systems</p>
//                             <p className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center">
//                             Drive innovation with connected devices and embedded systems that expand your capabilities. Our expertise spans from IoT solution development to firmware engineering and HMI design, integrating intelligent hardware seamlessly into your business model.
//                             </p>
//                         </div>
//                         <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-4">
//                             {/* <img
//                                 className="w-full max-lg:max-w-xs"
//                                 src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
//                                 alt=""
//                             /> */}
//                         </div>
//                     </div>
//                     <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
//                 </div>

//                 {/* Card 4 */}
//                 <div className="relative">
//                     <div className="absolute inset-px rounded-lg bg-black"></div>
//                     <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
//                         <div className="px-8 py-6">
//                             <p className="mt-2 text-3xl font-bold tracking-tight text-white max-lg:text-center">Cloud & Modernization Services</p>
//                             <p className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center">
//                             Accelerate your digital journey with cloud solutions and legacy modernization services. From seamless cloud migration to DevOps, ITRex optimizes operations for speed, scalability, and cost-efficiency. Our end-to-end services ensure that your IT infrastructure is resilient, secure, and future-ready.
//                             </p>
//                         </div>
//                         <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-4">
//                             {/* <img
//                                 className="w-full max-lg:max-w-xs"
//                                 src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
//                                 alt=""
//                             /> */}
//                         </div>
//                     </div>
//                     <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
//                 </div>
//             </div>

//             {/* Third Pair */}
//             <div>
//                 {/* Card 5 */}
//                 <div className="relative mb-4">
//                     <div className="absolute inset-px rounded-lg bg-black"></div>
//                     <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
//                         <div className="px-8 py-6">
//                             <p className="mt-2 text-3xl font-bold tracking-tight text-white max-lg:text-center">Software Engineering</p>
//                             <p className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center">
//                             Create high-performance software that is tailored to your enterprise requirements. Whether you require full project support or a specific skillset, we cover all areas—from business analysis, UX/UI design, quality assurance to development and post-launch support—across web, mobile, desktop, cloud, and embedded platforms.
//                             </p>
//                         </div>
//                         <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-4">
//                             {/* <img
//                                 className="w-full max-lg:max-w-xs"
//                                 src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
//                                 alt=""
//                             /> */}
//                         </div>
//                     </div>
//                     <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
//                 </div>

//                 {/* Card 6 */}
//                 <div className="relative">
//                     <div className="absolute inset-px rounded-lg bg-black"></div>
//                     <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
//                         <div className="px-8 py-6">
//                             <p className="mt-2 text-3xl font-bold tracking-tight text-white max-lg:text-center">Innovation Consulting</p>
//                             <p className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center">
//                             Restructure your business with strategic guidance. Our team is here to make every step easier, from IT audits, idea validation, and strategy planning to process optimization, all while aligning each initiative with your specific goals.
//                             </p>
//                         </div>
//                         <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-4">
//                             {/* <img
//                                 className="w-full max-lg:max-w-xs"
//                                 src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
//                                 alt=""
//                             /> */}
//                         </div>
//                     </div>
//                     <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
//                 </div>
//             </div>

//         </FadeIn>
//     </div>
// </div>
