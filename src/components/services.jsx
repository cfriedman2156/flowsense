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
        <div className="bg-white px-4 sm:px-8 lg:px-40">
            <div className="container mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl mb-10 sm:mb-16 text-center">
                    <span className="text-blue-400 font-semibold">Services </span>We Offer
                </h2>
                <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
            id="services-section"
            className={`transition-transform duration-300 ${hover ? 'translate-x-2' : ''}`}
        >
            <div
                className={`flex flex-col sm:flex-row items-start p-6 rounded-xl transition ${hover ? 'bg-gray-100' : ''}`}
            >
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 mb-4 sm:mb-0 sm:mr-4">
                    <img src={icon} alt={title} className="object-contain w-full h-full" />
                </div>

                {/* Content */}
                <div>
                    <h3 className="text-xl sm:text-2xl font-medium text-black">{title}</h3>
                    <p className="text-sm sm:text-base text-gray-700 mt-2">{description}</p>
                </div>
            </div>
        </div>
    );
}



// 'use client'

// import { useState } from 'react';


// export function Services() {
//     const services = [
//         {
//             icon: '/assets/setup.png',
//             title: 'Data Infrastructure Setup',
//             description:
//                 'Set up and configure databases, data leaks and data warehouses to ensure your data is stored efficiently and securely, ready for processing and analysis',
//         },
//         {
//             icon: '/assets/development.png',
//             title: 'Analytics Platform Development',
//             description:
//                 'Build user-friendly analytics platforms that enable you to visualize data trends, create reports, and make data-driven decisions with ease.',
//         },
//         {
//             icon: '/assets/analytics.png',
//             title: 'Customer Insights and Analytics',
//             description:
//                 'Use advanced analytics to track and analyze customer behavior, preferences, and feedback, providing you with valuable insights to enhance customer satisfaction and loyalty.',
//         },
//         {
//             icon: '/assets/ai.png',
//             title: 'AI Implementation',
//             description:
//                 'Develop and integrate AI and machine learning models to automate data analysis, predict future trends, and optimize decision-making processes, boosting overall business efficiency.',
//         },
//         {
//             icon: '/assets/automation.png',
//             title: 'Data Pipeline Automation',
//             description:
//                 'Automate the flow of data from various sources to your data warehouse, reducing manual intervention and ensuring timely, accurate data delivery.',
//         },
//         {
//             icon: '/assets/solutions.png',
//             title: 'Custom Data Solutions',
//             description:
//                 'Create tailored data models, unique analytics dashboards, and bespoke integrations to ensure your data systems align perfectly with your specific business needs.',
//         },
//     ];




//     return (
//         <div className="bg-white mx-40">
//             <div className="container mx-auto px-8">
//                 <h2 className="text-4xl md:text-5xl text-4xl mb-16">
//                     <span className="text-blue-400 font-semibold">Services </span>We Offer
//                 </h2>
//                 <div className="grid gap-2">
//                     {services.map((service, index) => (
//                         <ServiceCard key={index} {...service} />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// function ServiceCard({ icon, title, description }) {
//     const [hover, setHover] = useState(false);

//     return (
//         <div
//             onMouseEnter={() => setHover(true)}
//             onMouseLeave={() => setHover(false)}
//             id='services-section'
//             className={`transition-transform duration-300 ${hover ? 'translate-x-3' : ''}`}
//         >
//             <div className={`flex items-start p-6 rounded-xl transition ${hover ? 'bg-gray-100' : ''}`}>
//                 {/* Icon */}
//                 <div className="flex-shrink-0 w-16 h-12">
//                     <img src={icon} alt={title} className="object-contain" />
//                 </div>

//                 {/* Content */}
//                 <div className="pl-24 w-4/12">
//                     <h3 className="text-2xl font-medium text-black">{title}</h3>
//                 </div>
//                 <div className="pl-10 w-full text-gray-700">
//                     <p className=' transition ease-in duration-150'>{description}</p>
//                 </div>
//             </div>
//         </div>
//     );
// }