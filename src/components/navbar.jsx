'use client'

import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

const goToContact = (e, router, pathname) => {
  e.preventDefault();
  const offset = -40;

  const scrollToSection = () => {
    const contactSection = document.getElementById('contact-section');
    const topPos = contactSection.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top: topPos, behavior: 'smooth' });
  };

  const findSection = () => {
    const contactSection = document.getElementById('contact-section');
    const topPos = contactSection.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top: topPos });
  };

  if (pathname === '/') {
    scrollToSection();
  } else {
    router.push('/').then(() => {
      findSection();
    });
  }
};

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center mb-16">
      <div className="flex items-center text-2xl font-bold">
        <Image
          src="/assets/logo.png"
          alt="FlowSense Logo"
          width={70}
          height={70}
          className="object-contain mx-3"
        />
        <h1 className='font-thin'>FlowSense</h1>
      </div>
      <ul className="flex space-x-6 text-sm">
        <li><a href="#about" className="hover:text-blue-400">About Us</a></li>
        <li><a href="#services" className="hover:text-blue-400">Services</a></li>
        <li><a href="#case-studies" className="hover:text-blue-400">Case Studies</a></li>
        <li><a href="#contact" className="hover:text-blue-400">Contact Us</a></li>
      </ul>
      <a href="#get-started" className="bg-blue-600 px-5 py-3 rounded-lg text-sm  hover:bg-blue-500">
        Get Started
      </a>
    </nav>


    // <nav className="flex pt-12 items-center justify-between px-6 py-4 rounded-b-2xl">
    //   {/* Logo */}
    //   <Link href="/" passHref>
    //     <div className="flex items-center cursor-pointer">
    //       <span className="text-lg font-bold text-black">Flow Sense Solutions</span>
    //     </div>
    //   </Link>

    //   {/* Contact Button */}
    //   <button
    //     onClick={(e) => goToContact(e, router, pathname)}
    //     className="bg-black text-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-800 transition duration-300"
    //   >
    //     Contact us
    //   </button>
    // </nav>
  );
}
