'use client';

import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StatCounter from './components/Stats';
import Link from 'next/link';

export default function SteelPlantPage() {
  const services = [
    { id: 'Commissioning', title: 'Commissioning', image: '/assets/images/commisioning.jpg', delay: 0 },
    { id: 'Operations', title: 'Operations & Maintenance for Induction Furnace', image: '/assets/images/operations.jpg', delay: 0.1 },
    { id: 'CCM', title: 'CCM', image: '/assets/images/CCM.jpg', delay: 0.2 },
    { id: 'Manpower', title: 'Manpower Provided for Gulf Countries', image: '/assets/images/man power.jpg', delay: 0.3 },
  ];

  const slides = [
    {
      type: 'image',
      src: '/assets/images/front 1.jpg',
      title: 'Building Tomorrow with Stronger Steel',
      description: 'Engineered with advanced technology to ensure durability, performance, and reliability.',
    },
    {
      type: 'image',
      src: '/assets/images/front 3.jpg',
      title: 'Forging the Future with Superior Steel',
      description: 'Crafted with precision and innovation to deliver unmatched strength and longevity.',
    },
    {
      type: 'image',
      src: '/assets/images/front 4.jpg',
      title: 'Crafting Strength for a Stronger Tomorrow',
      description: 'Produced with strict quality control for unmatched endurance and structural integrity.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen bg-white text-white overflow-x-hidden flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Anchor for home */}
        <section id="home" />

        {/* Hero Section */}
        <section className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
          {/* Rounded wrapper */}
          <div className="relative w-full h-full overflow-hidden rounded-b-[40px] sm:rounded-b-[60px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
              </div>
            ))}

            {/* Navigation Buttons (desktop only) */}
            <button
              onClick={prevSlide}
              className="hidden md:block absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-md p-2.5 lg:p-3 rounded-full transition-all hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8 text-white hover:text-red-500" />
            </button>

            <button
              onClick={nextSlide}
              className="hidden md:block absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-md p-2.5 lg:p-3 rounded-full transition-all hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8 text-white hover:text-red-500" />
            </button>

            {/* Slide Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center z-20 px-4">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-700 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0 absolute'
                  }`}
                >
                  <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light mb-3 sm:mb-4 text-white leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-gray-300 text-xs sm:text-sm md:text-lg max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Indicators */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide ? 'bg-red-600 w-6 sm:w-8' : 'bg-white w-2'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="max-w-7xl mx-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-red-500 text-lg sm:text-xl md:text-2xl mb-2">
              Our Services
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
              Quality-driven services for every industry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={`/services#${service.id}`}
                className="relative h-56 sm:h-64 lg:h-80 rounded-2xl overflow-hidden group cursor-pointer w-full block"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-10 text-white">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold group-hover:text-red-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-gray-300 group-hover:text-red-500 transition-colors duration-300">
                    View More
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-6xl mx-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <img
                src="/assets/images/about 2.jpg"
                alt="About"
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 w-full"
              />
            </div>
            <div>
              <h3 className="text-red-500 text-base sm:text-lg md:text-xl mb-2">
                About Us
              </h3>
              <h2 className="text-red-500 text-2xl sm:text-3xl md:text-[42px] font-medium mb-4 sm:mb-6 leading-snug">
                Delivering decades of expertise in high-quality steel manufacturing
              </h2>
              <p className="text-black/50 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                At <strong>AJ Business Consultancy</strong>, we are a global steel manufacturing
                and contracting company committed to delivering high-quality, reliable, and
                innovative steel solutions. With state-of-the-art production facilities and a
                highly skilled team, we supply premium-grade steel and undertake major
                industrial, construction, and infrastructure contracts across the world.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
              <div>
                <h2 className="text-red-500 text-2xl sm:text-3xl md:text-[42px] mb-3 sm:mb-4 leading-tight">
                  Trusted expertise in steel manufacturing
                </h2>
                <p className="text-black mb-6 sm:mb-8 text-sm sm:text-base">
                  Driven by technology, strengthened by experience.
                </p>
                <div className="grid grid-cols-2 gap-5 sm:gap-8">
                  <StatCounter end={30} suffix="+ Years" description="Experience in project handling" />
                  <StatCounter end={300} suffix="+" description="Projects Completed" />
                  <StatCounter end={200} suffix="+" description="Machine installed" />
                  <StatCounter end={85} suffix="%" description="5-star Reviews" />
                </div>
              </div>
              <div className="relative h-72 sm:h-[360px] lg:h-[526px] w-full rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/images/front 1.jpg')] bg-cover bg-center opacity-70" />
                <img
                  src="/assets/images/about us 1.jpg"
                  alt="Steel Plant"
                  className="relative z-10 w-full h-full object-contain p-4 sm:p-6 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
