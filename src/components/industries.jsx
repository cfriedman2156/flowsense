export function Industries() {
  const industries = [
    {
      image: '/assets/finance.png',
      title: 'Finance',
      description: 'Navigate regulatory complexities and unlock real-time insights to drive financial innovation.',
    },
    {
      image: '/assets/ecommerce.png',
      title: 'Ecommerce',
      description: 'Transform data into personalized experiences and smarter operations for sustainable growth.',
    },
    {
      image: '/assets/manufacturing.png',
      title: 'Manufacturing',
      description: 'Harness data to predict maintenance, optimize workflows, and enhance production efficiency.',
    },
    {
      image: '/assets/education.png',
      title: 'Education',
      description: 'Empower institutions with data-driven insights to improve learning outcomes and operations.',
    },
  ];

  return (
    <div className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-medium mb-6 sm:mb-4 mx-8 md:mx-1">
          <span className="text-blue-400 font-semibold">Industries </span> We Specialize In
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-10 sm:mb-12">
          Discover the industries we’ve worked with and helped unlock the full potential of their data
        </p>
        
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 text-center transition-transform transform hover:scale-105"
            >
              {/* Image */}
              <div className="mb-4 sm:mb-6">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-16 h-16 sm:w-24 sm:h-24 mx-auto object-contain"
                />
              </div>
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{industry.title}</h3>
              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
