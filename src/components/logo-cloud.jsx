export function LogoCloud() {
  const logos = [
    '/clients/bright-path/logo-dark.svg',
    '/clients/family-fund/logo-dark.svg',
    '/clients/green-life/logo-dark.svg',
    '/clients/home-work/logo-dark.svg',
    '/clients/mail-smirk/logo-dark.svg',
    '/clients/north-adventures/logo-dark.svg',
    '/clients/phobia/logo-dark.svg',
    '/clients/unseal/logo-dark.svg',
  ];

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-5xl font-medium mb-4">
          <span className="text-blue-400 font-semibold">Technology </span>Partners
        </h2>
        <p className="text-gray-600 mb-12">
          We leverage industry-leading tools and platforms to deliver exceptional results.
        </p>

        {/* Scrolling Logos */}
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll space-x-12">
            {logos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-48 ">
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
            {/* Duplicate logos */}
            {logos.map((logo, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0 w-48 h-24">
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
