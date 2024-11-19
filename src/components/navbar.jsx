'use client'

import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

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
    <nav className="flex pt-12 items-center justify-between px-6 py-4 rounded-b-2xl">
      {/* Logo */}
      <Link href="/" passHref>
        <div className="flex items-center cursor-pointer">
          <span className="text-lg font-bold text-black">Flow Sense Solutions</span>
        </div>
      </Link>

      {/* Contact Button */}
      <button
        onClick={(e) => goToContact(e, router, pathname)}
        className="bg-black text-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-800 transition duration-300"
      >
        Contact us
      </button>
    </nav>
  );
}
