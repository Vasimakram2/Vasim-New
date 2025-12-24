'use client';
import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Service {
  id: string;
  title: string;
  image: string;
  description: string;
  benefits: string[];
}

export default function ServicesPage() {
  const steelServices: Service[] = [
    {
      id: 'commissioning',
      title: 'Commissioning',
      image: '/assets/images/Commissioning 1.jpg',
      description:
        'We provide complete commissioning services for steel plants, ensuring safe startup, smooth operation, and compliance with design and safety standards. Our team handles mechanical, electrical, and automation commissioning from cold trials to hot production.',
      benefits: [
        'Safe and structured equipment startup',
        'Reduced commissioning risks',
        'Faster plant readiness',
        'Compliance with safety standards',
        'Optimized equipment performance',
      ],
    },
    {
      id: 'induction-furnace',
      title: 'Operations & Maintenance for Induction Furnace',
      image: '/assets/images/Maintenance.jpg',
      description:
        'We offer end-to-end operation and maintenance services for induction furnaces to ensure consistent melting performance, reduced power consumption, and extended equipment life.',
      benefits: [
        'Improved furnace efficiency',
        'Reduced power consumption',
        'Minimized breakdowns',
        'Extended furnace life',
        'Skilled technical manpower',
      ],
    },
    {
      id: 'ccm',
      title: 'CCM (Continuous Casting Machine)',
      image: '/assets/images/CCM (Continuous Casting Machine).jpg',
      description:
        'Our CCM services focus on stable continuous casting operations, ensuring defect-free billets, blooms, and slabs with optimized production cycles.',
      benefits: [
        'Improved casting quality',
        'Reduced surface and internal defects',
        'Stable continuous production',
        'Higher yield and productivity',
        'Process optimization support',
      ],
    },
    {
      id: 'manpower',
      title: 'Manpower Supply for Gulf Countries',
      image: '/assets/images/manpower.jpg',
      description:
        'We supply skilled and semi-skilled manpower for steel plants and industrial projects in Gulf countries, including furnace operators, maintenance staff, and supervisors.',
      benefits: [
        'Experienced steel plant professionals',
        'International project readiness',
        'Reduced recruitment burden',
        'Reliable and trained workforce',
        'Compliance with Gulf standards',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[55vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center text-white overflow-hidden rounded-b-3xl px-3 sm:px-4">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/images/service.jpg')" }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70" />

          {/* Content */}
          <div className="relative z-10 text-center px-3 sm:px-4">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4">
              Trusted Steel Solutions
            </h1>
            <p className="max-w-xl md:max-w-2xl mx-auto mb-5 md:mb-6 text-sm sm:text-base md:text-lg">
              Supplying skilled manpower and technical services to steel plants worldwide.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded text-sm sm:text-base font-audiowide"
            >
              Contact Us
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {steelServices.map((service, index) => {
            const reverse = index % 2 !== 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className={`
                  flex flex-col lg:flex-row
                  ${reverse ? 'lg:flex-row-reverse' : ''}
                  gap-8 sm:gap-10 mb-12 sm:mb-16 lg:mb-20 items-center
                `}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      w-full
                      h-52 sm:h-64 md:h-72
                      object-cover rounded-xl shadow-lg
                    "
                  />
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl font-bold text-red-600 mb-3 sm:mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <div className="mb-5 sm:mb-6">
                    <h3 className="text-base sm:text-lg font-semibold text-red-600 mb-2 sm:mb-3">
                      Key Benefits
                    </h3>
                    <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                      {service.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-start justify-center lg:justify-start text-gray-700"
                        >
                          <span className="text-red-600 mr-2 mt-[2px]">✔</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/contact-us?service=${encodeURIComponent(service.title)}`}
                    className="inline-block bg-red-600 hover:bg-red-700 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded text-sm sm:text-base font-audiowide"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            );
          })}
        </section>
      </main>

      <Footer />
    </div>
  );
}
