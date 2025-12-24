'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Our Team', href: '/our-team' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <nav className="container mx-auto flex items-center h-16 md:h-20 px-4">

        {/* Left - Logo */}
        <div className="flex-1 flex justify-start">
          <Link href="/">
            <img
              src="/assets/Images/logo.svg"
              className="h-[45px] md:h-[50px] w-auto cursor-pointer"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Center - Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center gap-10">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-[500] transition ${
                isActive(item.href)
                  ? 'text-red-500 font-audiowide'
                  : 'text-black hover:text-red-500 font-lato'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right - Mobile Button */}
        <div className="flex-1 flex justify-end md:justify-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 space-y-4 text-center">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block font-[500] transition ${
                isActive(item.href)
                  ? 'text-red-500 font-audiowide'
                  : 'text-black hover:text-red-500 font-lato'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
