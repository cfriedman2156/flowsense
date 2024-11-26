import React from 'react';
import { Gradient } from './gradient';
import { Heading } from './text';

export function Contact() {
    return (
        <Gradient className="rounded-4xl mx-4 ring-1 ring-inset ring-black/5" id="contact-section">
            <div className="flex items-center justify-center py-24 text-black">
                <div className="max-w-4xl w-full">
                    <Heading as="h3" className="mb-8 max-w-3xl font-semibold">
                        Get in Touch
                    </Heading>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">Name*</label>
                            <input
                                type="text"
                                className="w-full bg-transparent border-b border-gray-500 focus:border-white focus:outline-none py-2 mb-6"
                                placeholder="Your name"
                            />

                            <label className="block text-sm font-medium mb-2">Email*</label>
                            <input
                                type="email"
                                className="w-full bg-transparent border-b border-gray-500 focus:border-white focus:outline-none py-2 mb-6"
                                placeholder="Your email"
                            />

                            <div className="flex items-center gap-2 text-sm mb-6">
                                <span className="text-yellow-400">📎</span>
                                <span>Attach your file</span>
                                <span className="text-gray-500 ml-2">up to 20MB</span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Phone</label>
                            <input
                                type="tel"
                                className="w-full bg-transparent border-b border-gray-500 focus:border-white focus:outline-none py-2 mb-6"
                                placeholder="Your phone number"
                            />

                            <label className="block text-sm font-medium mb-2">Message*</label>
                            <textarea
                                className="w-full bg-transparent border-b border-gray-500 focus:border-white focus:outline-none py-2 mb-6"
                                placeholder="Your message"
                                rows="4"
                            />
                        </div>
                    </div>
                    <div className="mt-8">
                        <button
                            type="submit"
                            className="w-full bg-gray-800 text-white font-semibold py-3 rounded-md cursor-not-allowed"
                        >
                            Send message
                        </button>
                    </div>
                </div>
            </div>
        </Gradient>
    );
}
