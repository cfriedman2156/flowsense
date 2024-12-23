'use client';

import { useState } from "react";

export function Projects() {
  const caseStudies = [
    {
      image: '/assets/project1.png',
      title: 'Retail Sales Optimization with Predictive Analytics',
      description: 'A top global creative marketplace struggled to manage a 60-petabyte digital library as rapid growth led to data disorganization and inefficiency. The transition to technologies like Snowflake further highlighted the lack of a unified source of truth, hindering decision-making and operations.',
      details: {
        problem: 'A top global creative marketplace struggled to manage a 60-petabyte digital library as rapid growth led to data disorganization and inefficiency. The transition to technologies like Snowflake further highlighted the lack of a unified source of truth, hindering decision-making and operations.',
        solution: 'We built a modern, scalable data infrastructure to address challenges in data organization, accessibility, and usability.',
        solutionPoints: ['Understanding the Landscape: Conducted a comprehensive audit of structured and unstructured data sources, including databases, APIs, and real-time analytics, to define a clear data strategy.',
          'Streamlining Data Pipelines: Designed pipelines for real-time ingestion and used tools like dbt to transform raw data into meaningful, structured layers.',
          'Customized Departmental Solutions: Developed tailored data marts for sales, HR, and finance, aligning data insights with specific team needs.',
          'Delivering Insights: Created intuitive dashboards and reports using Snowflake, SQL, Looker, and Tableau to provide actionable insights and simplify data analysis.',
          'Advanced Analytics: Integrated Python-based visualizations within Snowflake to uncover hidden trends.',
          'Automation for Agility: Leveraged ActiveBatch to automate workflows, enabling real-time updates and reducing manual effort.'],
        impact: ['Cost Savings: By migrating to Snowflake and automating workflows, the client reduced data storage and processing costs by 35%, saving approximately $2.1 million annually.',
          'Efficiency Gains: Data processing times were slashed by 50%, with ETL processes that previously took 12 hours now completing in under 6 hours.',
          'Enhanced Decision-Making: Improved data accessibility and accuracy resulted in a 20% faster decision-making cycle, helping the client seize market opportunities more quickly.',
          'Revenue Growth: With better insights and real-time data, the client increased their marketing campaign ROI by 15%, contributing to an estimated $5 million increase in annual revenue.',
          'Operational Productivity: Automation and custom data marts streamlined workflows, saving teams an estimated 2,500 person-hours per year, equivalent to a $400,000 reduction in labor costs.',
          'User Adoption: The intuitive dashboards and visualizations led to a 40% increase in internal user adoption of the data platform, with over 75% of business units actively leveraging insights.'
        ],
        technologies: ['Data Storage: Snowflake served as the core data warehouse platform, providing scalability and performance.', 
          'Data Integration & Transformation: SQL Server, dbt, SSIS were used to establish robust ETL processes.', 
          'Data Marts & Reports: SSAS and custom SQL procedures powered department-specific data marts. Reporting and visualization tools like Looker, Tableau, and Python enhanced analytics capabilities.',
          'Orchestration: ActiveBatch ensured streamlined workflows and automated processes for data integration and reporting.'
        ],
        conclusion: "This design provided a scalable, modern, and efficient data management system that met the client's current and future needs."
      },
    },
    {
      image: '/assets/project1.png',
      title: 'Retail Sales Optimization with Predictive Analytics',
      description: 'A top global creative marketplace struggled to manage a 60-petabyte digital library as rapid growth led to data disorganization and inefficiency. The transition to technologies like Snowflake further highlighted the lack of a unified source of truth, hindering decision-making and operations.',
      details: {
        problem: 'A top global creative marketplace struggled to manage a 60-petabyte digital library as rapid growth led to data disorganization and inefficiency. The transition to technologies like Snowflake further highlighted the lack of a unified source of truth, hindering decision-making and operations.',
        solution: 'We built a modern, scalable data infrastructure to address challenges in data organization, accessibility, and usability.',
        solutionPoints: ['Understanding the Landscape: Conducted a comprehensive audit of structured and unstructured data sources, including databases, APIs, and real-time analytics, to define a clear data strategy.',
          'Streamlining Data Pipelines: Designed pipelines for real-time ingestion and used tools like dbt to transform raw data into meaningful, structured layers.',
          'Customized Departmental Solutions: Developed tailored data marts for sales, HR, and finance, aligning data insights with specific team needs.',
          'Delivering Insights: Created intuitive dashboards and reports using Snowflake, SQL, Looker, and Tableau to provide actionable insights and simplify data analysis.',
          'Advanced Analytics: Integrated Python-based visualizations within Snowflake to uncover hidden trends.',
          'Automation for Agility: Leveraged ActiveBatch to automate workflows, enabling real-time updates and reducing manual effort.'],
        impact: ['Cost Savings: By migrating to Snowflake and automating workflows, the client reduced data storage and processing costs by 35%, saving approximately $2.1 million annually.',
          'Efficiency Gains: Data processing times were slashed by 50%, with ETL processes that previously took 12 hours now completing in under 6 hours.',
          'Enhanced Decision-Making: Improved data accessibility and accuracy resulted in a 20% faster decision-making cycle, helping the client seize market opportunities more quickly.',
          'Revenue Growth: With better insights and real-time data, the client increased their marketing campaign ROI by 15%, contributing to an estimated $5 million increase in annual revenue.',
          'Operational Productivity: Automation and custom data marts streamlined workflows, saving teams an estimated 2,500 person-hours per year, equivalent to a $400,000 reduction in labor costs.',
          'User Adoption: The intuitive dashboards and visualizations led to a 40% increase in internal user adoption of the data platform, with over 75% of business units actively leveraging insights.'
        ],
        technologies: ['Data Storage: Snowflake served as the core data warehouse platform, providing scalability and performance.', 
          'Data Integration & Transformation: SQL Server, dbt, SSIS were used to establish robust ETL processes.', 
          'Data Marts & Reports: SSAS and custom SQL procedures powered department-specific data marts. Reporting and visualization tools like Looker, Tableau, and Python enhanced analytics capabilities.',
          'Orchestration: ActiveBatch ensured streamlined workflows and automated processes for data integration and reporting.'
        ],
        conclusion: "This design provided a scalable, modern, and efficient data management system that met the client's current and future needs."
      },
    },
    {
      image: '/assets/project1.png',
      title: 'Retail Sales Optimization with Predictive Analytics',
      description: 'A top global creative marketplace struggled to manage a 60-petabyte digital library as rapid growth led to data disorganization and inefficiency. The transition to technologies like Snowflake further highlighted the lack of a unified source of truth, hindering decision-making and operations.',
      details: {
        problem: 'A top global creative marketplace struggled to manage a 60-petabyte digital library as rapid growth led to data disorganization and inefficiency. The transition to technologies like Snowflake further highlighted the lack of a unified source of truth, hindering decision-making and operations.',
        solution: 'We built a modern, scalable data infrastructure to address challenges in data organization, accessibility, and usability.',
        solutionPoints: ['Understanding the Landscape: Conducted a comprehensive audit of structured and unstructured data sources, including databases, APIs, and real-time analytics, to define a clear data strategy.',
          'Streamlining Data Pipelines: Designed pipelines for real-time ingestion and used tools like dbt to transform raw data into meaningful, structured layers.',
          'Customized Departmental Solutions: Developed tailored data marts for sales, HR, and finance, aligning data insights with specific team needs.',
          'Delivering Insights: Created intuitive dashboards and reports using Snowflake, SQL, Looker, and Tableau to provide actionable insights and simplify data analysis.',
          'Advanced Analytics: Integrated Python-based visualizations within Snowflake to uncover hidden trends.',
          'Automation for Agility: Leveraged ActiveBatch to automate workflows, enabling real-time updates and reducing manual effort.'],
        impact: ['Cost Savings: By migrating to Snowflake and automating workflows, the client reduced data storage and processing costs by 35%, saving approximately $2.1 million annually.',
          'Efficiency Gains: Data processing times were slashed by 50%, with ETL processes that previously took 12 hours now completing in under 6 hours.',
          'Enhanced Decision-Making: Improved data accessibility and accuracy resulted in a 20% faster decision-making cycle, helping the client seize market opportunities more quickly.',
          'Revenue Growth: With better insights and real-time data, the client increased their marketing campaign ROI by 15%, contributing to an estimated $5 million increase in annual revenue.',
          'Operational Productivity: Automation and custom data marts streamlined workflows, saving teams an estimated 2,500 person-hours per year, equivalent to a $400,000 reduction in labor costs.',
          'User Adoption: The intuitive dashboards and visualizations led to a 40% increase in internal user adoption of the data platform, with over 75% of business units actively leveraging insights.'
        ],
        technologies: ['Data Storage: Snowflake served as the core data warehouse platform, providing scalability and performance.', 
          'Data Integration & Transformation: SQL Server, dbt, SSIS were used to establish robust ETL processes.', 
          'Data Marts & Reports: SSAS and custom SQL procedures powered department-specific data marts. Reporting and visualization tools like Looker, Tableau, and Python enhanced analytics capabilities.',
          'Orchestration: ActiveBatch ensured streamlined workflows and automated processes for data integration and reporting.'
        ],
        conclusion: "This design provided a scalable, modern, and efficient data management system that met the client's current and future needs."
      },
    },
    {
      image: '/assets/project1.png',
      title: 'Retail Sales Optimization with Predictive Analytics',
      description: 'A top global creative marketplace struggled to manage a 60-petabyte digital library as rapid growth led to data disorganization and inefficiency. The transition to technologies like Snowflake further highlighted the lack of a unified source of truth, hindering decision-making and operations.',
      details: {
        problem: 'A top global creative marketplace struggled to manage a 60-petabyte digital library as rapid growth led to data disorganization and inefficiency. The transition to technologies like Snowflake further highlighted the lack of a unified source of truth, hindering decision-making and operations.',
        solution: 'We built a modern, scalable data infrastructure to address challenges in data organization, accessibility, and usability.',
        solutionPoints: ['Understanding the Landscape: Conducted a comprehensive audit of structured and unstructured data sources, including databases, APIs, and real-time analytics, to define a clear data strategy.',
          'Streamlining Data Pipelines: Designed pipelines for real-time ingestion and used tools like dbt to transform raw data into meaningful, structured layers.',
          'Customized Departmental Solutions: Developed tailored data marts for sales, HR, and finance, aligning data insights with specific team needs.',
          'Delivering Insights: Created intuitive dashboards and reports using Snowflake, SQL, Looker, and Tableau to provide actionable insights and simplify data analysis.',
          'Advanced Analytics: Integrated Python-based visualizations within Snowflake to uncover hidden trends.',
          'Automation for Agility: Leveraged ActiveBatch to automate workflows, enabling real-time updates and reducing manual effort.'],
        impact: ['Cost Savings: By migrating to Snowflake and automating workflows, the client reduced data storage and processing costs by 35%, saving approximately $2.1 million annually.',
          'Efficiency Gains: Data processing times were slashed by 50%, with ETL processes that previously took 12 hours now completing in under 6 hours.',
          'Enhanced Decision-Making: Improved data accessibility and accuracy resulted in a 20% faster decision-making cycle, helping the client seize market opportunities more quickly.',
          'Revenue Growth: With better insights and real-time data, the client increased their marketing campaign ROI by 15%, contributing to an estimated $5 million increase in annual revenue.',
          'Operational Productivity: Automation and custom data marts streamlined workflows, saving teams an estimated 2,500 person-hours per year, equivalent to a $400,000 reduction in labor costs.',
          'User Adoption: The intuitive dashboards and visualizations led to a 40% increase in internal user adoption of the data platform, with over 75% of business units actively leveraging insights.'
        ],
        technologies: ['Data Storage: Snowflake served as the core data warehouse platform, providing scalability and performance.', 
          'Data Integration & Transformation: SQL Server, dbt, SSIS were used to establish robust ETL processes.', 
          'Data Marts & Reports: SSAS and custom SQL procedures powered department-specific data marts. Reporting and visualization tools like Looker, Tableau, and Python enhanced analytics capabilities.',
          'Orchestration: ActiveBatch ensured streamlined workflows and automated processes for data integration and reporting.'
        ],
        conclusion: "This design provided a scalable, modern, and efficient data management system that met the client's current and future needs."
      },
    },
    {
      image: '/assets/project1.png',
      title: 'Retail Sales Optimization with Predictive Analytics',
      description: 'A top global creative marketplace struggled to manage a 60-petabyte digital library as rapid growth led to data disorganization and inefficiency. The transition to technologies like Snowflake further highlighted the lack of a unified source of truth, hindering decision-making and operations.',
      details: {
        problem: 'A top global creative marketplace struggled to manage a 60-petabyte digital library as rapid growth led to data disorganization and inefficiency. The transition to technologies like Snowflake further highlighted the lack of a unified source of truth, hindering decision-making and operations.',
        solution: 'We built a modern, scalable data infrastructure to address challenges in data organization, accessibility, and usability.',
        solutionPoints: ['Understanding the Landscape: Conducted a comprehensive audit of structured and unstructured data sources, including databases, APIs, and real-time analytics, to define a clear data strategy.',
          'Streamlining Data Pipelines: Designed pipelines for real-time ingestion and used tools like dbt to transform raw data into meaningful, structured layers.',
          'Customized Departmental Solutions: Developed tailored data marts for sales, HR, and finance, aligning data insights with specific team needs.',
          'Delivering Insights: Created intuitive dashboards and reports using Snowflake, SQL, Looker, and Tableau to provide actionable insights and simplify data analysis.',
          'Advanced Analytics: Integrated Python-based visualizations within Snowflake to uncover hidden trends.',
          'Automation for Agility: Leveraged ActiveBatch to automate workflows, enabling real-time updates and reducing manual effort.'],
        impact: ['Cost Savings: By migrating to Snowflake and automating workflows, the client reduced data storage and processing costs by 35%, saving approximately $2.1 million annually.',
          'Efficiency Gains: Data processing times were slashed by 50%, with ETL processes that previously took 12 hours now completing in under 6 hours.',
          'Enhanced Decision-Making: Improved data accessibility and accuracy resulted in a 20% faster decision-making cycle, helping the client seize market opportunities more quickly.',
          'Revenue Growth: With better insights and real-time data, the client increased their marketing campaign ROI by 15%, contributing to an estimated $5 million increase in annual revenue.',
          'Operational Productivity: Automation and custom data marts streamlined workflows, saving teams an estimated 2,500 person-hours per year, equivalent to a $400,000 reduction in labor costs.',
          'User Adoption: The intuitive dashboards and visualizations led to a 40% increase in internal user adoption of the data platform, with over 75% of business units actively leveraging insights.'
        ],
        technologies: ['Data Storage: Snowflake served as the core data warehouse platform, providing scalability and performance.', 
          'Data Integration & Transformation: SQL Server, dbt, SSIS were used to establish robust ETL processes.', 
          'Data Marts & Reports: SSAS and custom SQL procedures powered department-specific data marts. Reporting and visualization tools like Looker, Tableau, and Python enhanced analytics capabilities.',
          'Orchestration: ActiveBatch ensured streamlined workflows and automated processes for data integration and reporting.'
        ],
        conclusion: "This design provided a scalable, modern, and efficient data management system that met the client's current and future needs."
      },
    },
    {
      image: '/assets/project1.png',
      title: 'Retail Sales Optimization with Predictive Analytics',
      description: 'A top global creative marketplace struggled to manage a 60-petabyte digital library as rapid growth led to data disorganization and inefficiency. The transition to technologies like Snowflake further highlighted the lack of a unified source of truth, hindering decision-making and operations.',
      details: {
        problem: 'A top global creative marketplace struggled to manage a 60-petabyte digital library as rapid growth led to data disorganization and inefficiency. The transition to technologies like Snowflake further highlighted the lack of a unified source of truth, hindering decision-making and operations.',
        solution: 'We built a modern, scalable data infrastructure to address challenges in data organization, accessibility, and usability.',
        solutionPoints: ['Understanding the Landscape: Conducted a comprehensive audit of structured and unstructured data sources, including databases, APIs, and real-time analytics, to define a clear data strategy.',
          'Streamlining Data Pipelines: Designed pipelines for real-time ingestion and used tools like dbt to transform raw data into meaningful, structured layers.',
          'Customized Departmental Solutions: Developed tailored data marts for sales, HR, and finance, aligning data insights with specific team needs.',
          'Delivering Insights: Created intuitive dashboards and reports using Snowflake, SQL, Looker, and Tableau to provide actionable insights and simplify data analysis.',
          'Advanced Analytics: Integrated Python-based visualizations within Snowflake to uncover hidden trends.',
          'Automation for Agility: Leveraged ActiveBatch to automate workflows, enabling real-time updates and reducing manual effort.'],
        impact: ['Cost Savings: By migrating to Snowflake and automating workflows, the client reduced data storage and processing costs by 35%, saving approximately $2.1 million annually.',
          'Efficiency Gains: Data processing times were slashed by 50%, with ETL processes that previously took 12 hours now completing in under 6 hours.',
          'Enhanced Decision-Making: Improved data accessibility and accuracy resulted in a 20% faster decision-making cycle, helping the client seize market opportunities more quickly.',
          'Revenue Growth: With better insights and real-time data, the client increased their marketing campaign ROI by 15%, contributing to an estimated $5 million increase in annual revenue.',
          'Operational Productivity: Automation and custom data marts streamlined workflows, saving teams an estimated 2,500 person-hours per year, equivalent to a $400,000 reduction in labor costs.',
          'User Adoption: The intuitive dashboards and visualizations led to a 40% increase in internal user adoption of the data platform, with over 75% of business units actively leveraging insights.'
        ],
        technologies: ['Data Storage: Snowflake served as the core data warehouse platform, providing scalability and performance.', 
          'Data Integration & Transformation: SQL Server, dbt, SSIS were used to establish robust ETL processes.', 
          'Data Marts & Reports: SSAS and custom SQL procedures powered department-specific data marts. Reporting and visualization tools like Looker, Tableau, and Python enhanced analytics capabilities.',
          'Orchestration: ActiveBatch ensured streamlined workflows and automated processes for data integration and reporting.'
        ],
        conclusion: "This design provided a scalable, modern, and efficient data management system that met the client's current and future needs."
      },
    },
  ];

  // const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedStudy, setSelectedStudy] = useState(null);

  // const cardWidthPercentage = 33.33; 

  // const goToNext = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex + 1 >= caseStudies.length - 2 ? 0 : prevIndex + 1
  //   );
  // };

  // const goToPrevious = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? caseStudies.length - 3 : prevIndex - 1
  //   );
  // };

  return (
    <div className="bg-blue-50 py-20 relative" id="case-studies-section">
      <div className=" container mx-auto sm:px-8 relative">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl text-center md:text-5xl mb-2">
            Case <span className="text-blue-400 font-semibold">Studies</span>
          </h2>
          <p className="text-gray-600">View some of our past successes</p>
        </div>
        
        {/* Horizontal Slider */}
        <div
          className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100 py-4"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="snap-center flex-shrink-0 w-80 lg:min-w-[33.33%] px-4 cursor-pointer"
              onClick={() => setSelectedStudy(study)}
            >
              <div className="bg-white shadow-lg h-iphoneProjects md:h-100 max-w-96 transition-transform duration-300 md:hover:-translate-y-3 cursor-pointer">
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
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative border-b-2 border-blue-200 pb-4 mb-6">
          <h2 className="text-3xl text-blue-500 font-extrabold text-center">
            {study.title}
          </h2>
          <button
            onClick={onClose}
            className="absolute right-0.5 top-1 transform -translate-y-1/2 text-gray-400 hover:text-gray-700 focus:outline-none transition duration-300"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
  
        {/* Modal Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          {/* Problem Section */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-500 mb-2">
              Problem
            </h3>
            <p className="pl-6 border-l-4 border-blue-100 font-semibold">{study.details.problem}</p>
          </div>
  
          {/* Solution Section */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-500 mb-2">
              Solution
            </h3>
            <div className="border-l-4 border-blue-100 pl-4">
              <p className="pb-4 pl-2 font-semibold">{study.details.solution}</p>
              <ul className="list-disc space-y-2 pl-8 text-gray-600">
                {study.details.solutionPoints.map((item, index) => (
                  <li key={index} className="hover:text-blue-500 transition duration-200">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
          {/* Impact Section */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-500 mb-3">
              Impact
            </h3>
            <ul className="list-disc space-y-2 pl-12 text-gray-600 border-l-4 border-blue-100">
              {study.details.impact.map((item, index) => (
                <li key={index} className="hover:text-blue-500 transition duration-200">
                  {item}
                </li>
              ))}
            </ul>
          </div>
  
          {/* Technology Design Section */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-500 mb-2">
              Technology Design
            </h3>
            <div className="border-l-4 border-blue-100 pl-4">
              <p className="pl-2 mb-2 font-semibold">
                The technical architecture and tools leveraged for this solution included:
              </p>
              <ul className="list-disc space-y-2 pl-8 text-gray-600">
                {study.details.technologies.map((tech, index) => (
                  <li key={index} className="hover:text-blue-500 transition duration-200">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
          {/* Conclusion */}
          <div>
            <p className="text-gray-600 font-semibold text-center">
              {study.details.conclusion}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  
}



{/* Navigation Arrows */}
        {/* <button
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
        </button> */}

        {/* Sliding Cards */}
        {/* <div className=" w-full">
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
                onClick={() => setSelectedStudy(study)}
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
        </div> */}