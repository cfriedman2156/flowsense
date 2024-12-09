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
      <div className=" py-20">
        <div className="container mx-auto px-8 text-center">
          {/* Heading */}
          <h2 className="text-5xl md:text-5xl font-medium mb-4">
            <span className="text-blue-400 font-semibold">Industries </span> We Specialize In
          </h2>
          <p className="text-gray-600 mb-12">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p> 
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-6 text-center transition-transform transform hover:scale-105"
              >
                {/* Image */}
                <div className="mb-6">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-24 h-24 mx-auto object-contain"
                  />
                </div>
                {/* Title */}
                <h3 className="text-xl font-semibold mb-4">{industry.title}</h3>
                {/* Description */}
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  