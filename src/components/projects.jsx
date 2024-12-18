'use client';

import { useState } from "react";

export function Projects() {
  const caseStudies = [
    {
      image: '/assets/project1.png',
      title: 'Retail Sales Optimization with Predictive Analytics',
      description: 'A retail chain faced declining sales and inefficient inventory management...',
      details: {
        problem: 'Declining sales and inefficient inventory management...',
        solution: 'Implemented predictive analytics to forecast demand trends...',
        impact: ['Increased revenue by 25%', 'Optimized inventory levels'],
        technologies: ['Python', 'Tableau', 'SQL'],
      },
    },
    {
      image: '/assets/project2.png',
      title: 'Financial Lender Case Study',
      description: 'A global creative marketplace managed a massive digital library...',
      details: {
        problem: 'Data disorganization and inefficiency...',
        solution: 'Designed pipelines and used Snowflake to analyze data.',
        impact: ['Reduced costs by 35%', 'Improved processing time by 50%'],
        technologies: ['Snowflake', 'SQL', 'Looker'],
      },
    },
    {
      image: '/assets/project3.png',
      title: 'Supply Chain Optimization for Manufacturing',
      description: 'A manufacturing company faced high logistics costs...',
      details: {
        problem: 'High logistics costs...',
        solution: 'Leveraged AI-powered tools to streamline operations.',
        impact: ['30% reduction in logistics costs', '15% faster delivery times'],
        technologies: ['AI', 'Power BI', 'SQL'],
      },
    },
    {
      image: '/assets/project1.png',
      title: 'Retail Sales Optimization with Predictive Analytics',
      description: 'A retail chain faced declining sales and inefficient inventory management...',
      details: {
        problem: 'Declining sales and inefficient inventory management...',
        solution: 'Implemented predictive analytics to forecast demand trends...',
        impact: ['Increased revenue by 25%', 'Optimized inventory levels'],
        technologies: ['Python', 'Tableau', 'SQL'],
      },
    },
    {
      image: '/assets/project2.png',
      title: 'Financial Lender Case Study',
      description: 'A global creative marketplace managed a massive digital library...',
      details: {
        problem: 'Data disorganization and inefficiency...',
        solution: 'Designed pipelines and used Snowflake to analyze data.',
        impact: ['Reduced costs by 35%', 'Improved processing time by 50%'],
        technologies: ['Snowflake', 'SQL', 'Looker'],
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedStudy, setSelectedStudy] = useState(null);

  const cardWidthPercentage = 33.33; // 3 cards visible at a time

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= caseStudies.length ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-blue-50 py-20 relative overflow-hidden" id="case-studies-section">
      <div className="container mx-auto px-8 relative">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl text-center md:text-5xl mb-2">
            Case <span className="text-blue-400 font-semibold">Studies</span>
          </h2>
          <p className="text-gray-600">View some of our past successes</p>
        </div>
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 rounded-full w-12 h-12 flex items-center justify-center z-10"
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
          onClick={goToNext}
          className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 rounded-full w-12 h-12 flex items-center justify-center z-10"
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

        {/* Sliding Cards */}
        <div className=" w-full">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * cardWidthPercentage}%)`,
            }}
          >
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="min-w-[33.33%] px-4 cursor-pointer"
                onClick={() => setSelectedStudy(study)} // Open modal
              >
                <div className="bg-white shadow-xl h-96 max-w-96 overflow-hidden transition-transform duration-300 hover:-translate-y-3 cursor-pointer h-full">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                    <p className="text-gray-700 text-sm">{study.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>

      {/* Modal */}
      {selectedStudy && (
        <Modal study={selectedStudy} onClose={() => setSelectedStudy(null)} />
      )}
    </div>
  );
}

function Modal({ study, onClose }) {
  const handleBackdropClick = (e) => {
    if (e.target.id === "modal-backdrop") {
      onClose();
    }
  };

  return (
    <div
      id="modal-backdrop"
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto rounded shadow-lg p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl text-blue-400 font-semibold">{study.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &#10005;
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <h3 className="font-bold mb-2 text-blue-500">Problem:</h3>
          <p>{study.details.problem}</p>

          <h3 className="font-bold mt-4 mb-2 text-blue-500">Solution:</h3>
          <p>{study.details.solution}</p>

          <h3 className="font-bold mt-4 mb-2 text-blue-500">Impact:</h3>
          <ul className="list-disc pl-5">
            {study.details.impact.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3 className="font-bold mt-4 mb-2 text-blue-500">Technologies Used:</h3>
          <ul className="list-disc pl-5">
            {study.details.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}




// 'use client';

// import { useState } from "react";

// export function Projects() {
//   const caseStudies = [
//     {
//       image: '/assets/project1.png',
//       title: 'Retail Sales Optimization with Predictive Analytics',
//       description: 'A retail chain faced declining sales and inefficient inventory management...',
//       details: {
//         problem: 'Declining sales and inefficient inventory management...',
//         solution: 'Implemented predictive analytics to forecast demand trends...',
//         impact: [
//           'Increased revenue by 25%',
//           'Optimized inventory levels',
//         ],
//         technologies: ['Python', 'Tableau', 'SQL'],
//       },
//     },
//     {
//       image: '/assets/project2.png',
//       title: 'Financial Lender Case Study',
//       description: 'A top global creative marketplace struggled to manage a 60-petabyte digital library as rapid growth led to data disorganization and inefficiency. The transition to technologies like Snowflake further highlighted the lack of a unified source of truth, hindering decision-making and operations.',
//       details: {
//         problem: A top global creative marketplace struggled to manage a 60-petabyte digital library as rapid growth led to data disorganization and inefficiency. 
//                   The transition to technologies like Snowflake further highlighted the lack of a unified source of truth, hindering decision-making and operations.,
//         solution: [
//           'Conducted a comprehensive audit of structured and unstructured data sources, including databases, APIs, and real-time analytics, to define a clear data strategy.',
//           'Designed pipelines for real-time ingestion and used tools like dbt to transform raw data into meaningful, structured layers.',
//           'Developed tailored data marts for sales, HR, and finance, aligning data insights with specific team needs.',
//           'Created intuitive dashboards and reports using Snowflake, SQL, Looker, and Tableau to provide actionable insights and simplify data analysis.',
//           'Integrated Python-based visualizations within Snowflake to uncover hidden trends.',
//           'Leveraged ActiveBatch to automate workflows, enabling real-time updates and reducing manual effort.',
//         ],
//         impact: [
//           'Cost Savings: By migrating to Snowflake and automating workflows, the client reduced data storage and processing costs by 35%, saving approximately $2.1 million annually.',
//           'Efficiency Gains: Data processing times were slashed by 50%, with ETL processes that previously took 12 hours now completing in under 6 hours.',
//           'Enhanced Decision-Making: Improved data accessibility and accuracy resulted in a 20% faster decision-making cycle, helping the client seize market opportunities more quickly.',
//           'Revenue Growth: With better insights and real-time data, the client increased their marketing campaign ROI by 15%, contributing to an estimated $5 million increase in annual revenue.',
//           'Operational Productivity: Automation and custom data marts streamlined workflows, saving teams an estimated 2,500 person-hours per year, equivalent to a $400,000 reduction in labor costs.',
//           'User Adoption: The intuitive dashboards and visualizations led to a 40% increase in internal user adoption of the data platform, with over 75% of business units actively leveraging insights.',
//         ],
//         technologies: [
//           'Data Storage: Snowflake served as the core data warehouse platform, providing scalability and performance.',
//           'Data Integration & Transformation: SQL Server, dbt, SSIS were used to establish robust ETL processes.',
//           'Data Marts & Reports: SSAS and custom SQL procedures powered department-specific data marts. Reporting and visualization tools like Looker, Tableau, and Python enhanced analytics capabilities.',
//           'Orchestration: ActiveBatch ensured streamlined workflows and automated processes for data integration and reporting.',
//         ],
//       },
//     },
//     {
//       image: '/assets/project3.png',
//       title: 'Supply Chain Optimization for Manufacturing',
//       description: 'A manufacturing company faced high logistics costs and supply chain inefficiencies...',
//       details: {
//         problem: 'High logistics costs and supply chain inefficiencies...',
//         solution: 'Leveraged AI-powered tools to streamline operations...',
//         impact: [
//           '30% reduction in logistics costs',
//           '15% reduction in delivery times',
//         ],
//         technologies: ['AI', 'Power BI', 'SQL'],
//       },
//     },
//     // {
//     //   image: '/assets/project6.png',
//     //   title: 'Project Placeholder 3',
//     //   description: 'Yet another placeholder for carousel functionality testing.',
//     // },
//     // {
//     //   image: '/assets/project6.png',
//     //   title: 'Project Placeholder 3',
//     //   description: 'Yet another placeholder for carousel functionality testing.',
//     // },
//     // {
//     //   image: '/assets/project6.png',
//     //   title: 'Project Placeholder 3',
//     //   description: 'Yet another placeholder for carousel functionality testing.',
//     // },
//   ];
  
  

//   const [selectedStudy, setSelectedStudy] = useState(null);

//   return (
//     <div className="bg-blue-50 py-20" id="case-studies-section">
//       <div className="container mx-auto text-center px-8">
//         {/* Heading */}
//         <h2 className="text-4xl text-center md:text-5xl text-4xl mb-4">
//           Case<span className="text-blue-400 font-semibold"> Studies</span>
//         </h2>
//         <p className="text-gray-600 mb-16">View some of our past successes</p>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {caseStudies.map((study, index) => (
//             <div key={index} onClick={() => setSelectedStudy(study)}>
//               <CaseStudyCard {...study} />
//             </div>
//           ))}
//         </div>

//         {/* Modal */}
//         {selectedStudy && (
//           <Modal study={selectedStudy} onClose={() => setSelectedStudy(null)} />
//         )}
//       </div>
//     </div>
//   );
// }

// function CaseStudyCard({ image, title, description }) {
//   return (
//     <div className="bg-white shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-3 cursor-pointer h-full">
//       <img src={image} alt={title} className="w-full h-60 object-cover" />
//       <div className="p-6">
//         <h3 className="text-lg font-semibold mb-2">{title}</h3>
//         <p className="text-gray-700 mb-4">{description}</p>
//       </div>
//     </div>
//   );
// }

// function Modal({ study, onClose }) {
//   const handleBackdropClick = (e) => {
//     if (e.target.id === "modal-backdrop") {
//       onClose();
//     }
//   };

//   return (
//     <div
//       id="modal-backdrop"
//       className="fixed inset-0 bg-black bg-opacity-50 flex justify-center  items-center z-50"
//       onClick={handleBackdropClick}
//     >
//       <div
//         className="bg-white w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto rounded shadow-lg p-6"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Modal Header */}
//         <div className="flex justify-between items-center p-4 border-b">
//           <h2 className="text-5xl text-blue-400 font-semibold w-full text-center">{study.title}</h2>
//           <button onClick={onClose} className="text-gray-500 hover:text-gray-700 absolute right-4">
//             &#10005;
//           </button>
//         </div>

//         {/* Modal Content */}
//         <div className="p-6 px-12 ">
//           {/* <img src={study.image} alt={study.title} className="w-full h-60 object-cover mb-4 rounded" /> */}

//           {/* Problem Section */}
//           {study.details.problem && (
//             <div className="mb-6">
//               <h3 className="text-2xl font-bold mb-2">The <span className="text-blue-400 font-semibold"> Problem</span></h3>
//               <p className="text-gray-700 whitespace-pre-line mx-12">{study.details.problem}</p>
//             </div>
//           )}

//           {/* Solution Section */}
//           {study.details.solution && (
//             <div className="mb-6 text-left">
//               <h3 className="text-xl font-bold mb-2">The <span className="text-blue-400 font-semibold"> Solution</span></h3>
//               <ul className="list-disc pl-6 text-gray-700">
//                 {study.details.solution.map((item, index) => (
//                   <li className='pb-1'key={index}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Impact Section */}
//           {study.details.impact && (
//             <div className="mb-6 text-left">
//               <h3 className="text-xl font-bold mb-2">The <span className="text-blue-400 font-semibold"> Impact</span></h3>
//               <ul className="list-disc pl-6 text-gray-700">
//                 {study.details.impact.map((item, index) => (
//                   <li className='pb-1' key={index}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Technologies Section */}
//           {study.details.technologies && (
//             <div className="text-left">
//               <h3 className="text-xl font-bold mb-2"><span className="text-blue-400 font-semibold">Technologies </span> Used</h3>
//               <ul className="list-disc pl-6 text-gray-700">
//                 {study.details.technologies.map((tech, index) => (
//                   <li className='pb-1' key={index}>{tech}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }