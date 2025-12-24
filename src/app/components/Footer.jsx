'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Footer = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Our Team', href: '/our-team' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  const isActive = (href) => pathname === href;

  return (
    <footer className="relative py-12 px-4 overflow-hidden text-gray-800">


      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-6">

        {/* Logo */}
        <Link href="/">
          <img
            src="/assets/Images/logo.svg"
            className="h-[80px]"
            alt="Logo"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-8 font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition font-[500] ${
                isActive(item.href)
                  ? 'text-red-600 font-audiowide'
                  : 'text-black hover:text-red-600 font-lato'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Address */}
        <div className="text-center text-sm leading-relaxed hidden md:block">
          <p className="font-[500] text-red-600 mb-1 font-audiowide">Address:</p>
          <a
            href="https://www.google.com/maps/place/10%C2%B047'23.4%22N+76%C2%B044'52.0%22E/@10.7898388,76.7452126,17z/data=!3m1!4b1!4m4!3m3!8m2!3d10.7898388!4d76.7477875?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition"
          >
            <p>No: 14/1 Rajendra Prasad Street,near Chavadi Police Station,</p>
            <p>KG Chavadi, Coimbatore, Tamil Nadu 641105</p>
          </a>
        </div>

        {/* Contact */}
        <div className="text-center text-sm flex flex-col">
          <p className="font-[500] text-red-600 mb-1 font-audiowide">Contact:</p>
          <a href="tel:+919994335432" className="underline">
            99943 35432
          </a>
          <a href="mailto:akramvasim91@gmail.com" className="underline">
            akramvasim91@gmail.com
          </a>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-300 my-6"></div>

        {/* Bottom Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/privacy-policy" className="underline hover:text-red-600">
            Privacy Policy
          </Link>
          <Link href="/terms-of-services" className="underline hover:text-red-600">
            Terms of Services
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm">
          <p>
            © 2025 AJ Business Consultancy. All rights reserved. Powered by{' '}
            <a
              href="https://vmtechnology.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-red-600"
            >
              VM Technology
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
