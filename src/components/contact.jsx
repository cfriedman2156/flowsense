export function Contact() {
    return (
      <div className="py-20">
        <div className="container mx-auto px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-medium mb-4">
              Get in <span className="text-blue-400 font-semibold">Touch</span> With Us
            </h2>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
  
          {/* Form */}
          <div className="max-w-lg mx-auto">
            <form>
              {/* Name */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-textInputCustom   py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
  
              {/* Email */}
              <div className="mb-6">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-textInputCustom py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
  
              {/* Phone Number */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-full bg-textInputCustom py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
  
              {/* Company Name */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full bg-textInputCustom py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
  
              {/* Message */}
              <div className="mb-6">
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full bg-textInputCustom py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>
  
              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 rounded-lg text-white font-medium py-2.5 px-6  hover:bg-blue-500 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  







// import React from 'react';
// import { Gradient } from './gradient';
// import { Heading } from './text';

// export function Contact() {
//     return (
//         <Gradient className="rounded-4xl mx-4 ring-1 ring-inset ring-black/5" id="contact-section">
//             <div className="flex items-center justify-center py-24 text-black">
//                 <div className="max-w-4xl w-full">
//                     <Heading as="h3" className="mb-8 max-w-3xl font-semibold">
//                         Get in Touch
//                     </Heading>

//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                         <div>
//                             <label className="block text-sm font-medium mb-2">Name*</label>
//                             <input
//                                 type="text"
//                                 className="w-full bg-transparent -b -gray-500 focus:-white focus:outline-none py-2 mb-6"
//                                 placeholder="Your name"
//                             />

//                             <label className="block text-sm font-medium mb-2">Email*</label>
//                             <input
//                                 type="email"
//                                 className="w-full bg-transparent -b -gray-500 focus:-white focus:outline-none py-2 mb-6"
//                                 placeholder="Your email"
//                             />

//                             <div className="flex items-center gap-2 text-sm mb-6">
//                                 <span className="text-yellow-400">📎</span>
//                                 <span>Attach your file</span>
//                                 <span className="text-gray-500 ml-2">up to 20MB</span>
//                             </div>
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium mb-2">Phone</label>
//                             <input
//                                 type="tel"
//                                 className="w-full bg-transparent -b -gray-500 focus:-white focus:outline-none py-2 mb-6"
//                                 placeholder="Your phone number"
//                             />

//                             <label className="block text-sm font-medium mb-2">Message*</label>
//                             <textarea
//                                 className="w-full bg-transparent -b -gray-500 focus:-white focus:outline-none py-2 mb-6"
//                                 placeholder="Your message"
//                                 rows="4"
//                             />
//                         </div>
//                     </div>
//                     <div className="mt-8">
//                         <button
//                             type="submit"
//                             className="w-full bg-gray-800 text-white font-semibold py-3 rounded-md cursor-not-allowed"
//                         >
//                             Send message
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </Gradient>
//     );
// }
