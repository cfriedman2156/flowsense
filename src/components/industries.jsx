export function Industries() {
  const industries = [
    {
      image: '/assets/finance.png',
      title: 'Finance',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      image: '/assets/ecommerce.png',
      title: 'Ecommerce',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      image: '/assets/manufacturing.png',
      title: 'Manufacturing',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      image: '/assets/education.png',
      title: 'Education',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
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
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
