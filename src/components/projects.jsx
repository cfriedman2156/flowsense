'use client';

import { useState } from "react";

export function Projects() {
  const caseStudies = [
    {
      image: '/assets/project1.png',
      title: 'Retail Sales Optimization with Predictive Analytics',
      description: 'A retail chain faced declining sales and inefficient inventory management. By implementing predictive analytics, they were able to forecast demand trends, optimize inventory levels, and increase overall revenue by 25%.',
    },
    {
      image: '/assets/project2.png',
      title: 'Customer Segmentation for a SaaS Company',
      description: 'A SaaS provider struggled to identify and target its most profitable customer segments. Through advanced clustering algorithms, the company successfully identified key customer segments, which led to a 40% increase in conversion rates and a 20% reduction in churn.',
    },
    {
      image: '/assets/project3.png',
      title: 'Supply Chain Optimization for Manufacturing',
      description: 'A manufacturing company faced high logistics costs and supply chain inefficiencies. By leveraging AI-powered tools, they streamlined their operations, reducing logistics costs by 30% and delivery times by 15%.',
    },
  ];

  const [selectedStudy, setSelectedStudy] = useState(null);

  return (
    <div className="bg-blue-50 py-20" id="case-studies-section">
      <div className="container mx-auto text-center px-8">
        {/* Heading */}
        <h2 className="text-4xl text-center md:text-5xl text-4xl mb-4">
          Case<span className="text-blue-400 font-semibold"> Studies</span>
        </h2>
        <p className="text-gray-600 mb-16">View some of our past successes</p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} onClick={() => setSelectedStudy(study)}>
              <CaseStudyCard {...study} />
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedStudy && (
          <Modal study={selectedStudy} onClose={() => setSelectedStudy(null)} />
        )}
      </div>
    </div>
  );
}

function CaseStudyCard({ image, title, description }) {
  return (
    <div className="bg-white shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-3 cursor-pointer h-full">
      <img src={image} alt={title} className="w-full h-60 object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
      </div>
    </div>
  );
}

function Modal({ study, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto rounded-lg shadow-lg">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">{study.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &#10005;
          </button>
        </div>
        
        {/* Modal Content */}
        <div className="p-4">
          <img src={study.image} alt={study.title} className="w-full h-60 object-cover mb-4 rounded" />
          <p className="text-gray-700">{study.description}</p>
        </div>
      </div>
    </div>
  );
}

