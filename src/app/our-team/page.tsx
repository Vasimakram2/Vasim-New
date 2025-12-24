'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const teamMembers = [
  {
    name: 'Mohammed Sabir',
    role: 'CEO & Managing Director',
    image: '/assets/images/CCM (Continuous Casting Machine).jpg',
    description:
      'Visionary leader driving strategic growth, business development, and operational excellence with 30+ years of steel manufacturing expertise.',
  },
  {
    name: 'Aftab Alam',
    role: 'General Manager',
    image: '/assets/images/Aftab.jpg',
    description:
      'Strategic leader overseeing plant operations, production planning, quality control, and team performance to ensure operational excellence and timely delivery of high-quality steel products.',
  },
  {
    name: 'Javed Anwar M',
    role: 'Cheif Financial Officer',
    image: '/assets/images/javed pic.jpg',
    description:
      'Provides strategic financial leadership by managing budgets, cash flow, and risk, ensuring strong profitability and funding for capital‑intensive steel operations.',
  },
  {
    name: 'Vasim Akram M',
    role: 'HR Manager',
    image: '/assets/images/Vasim image.jpg',
    description:
      'Leads workforce planning, recruitment, and employee development while ensuring compliance with labor laws, fostering a safe, productive work culture, and supporting smooth HR operations across the plant.',
  },
];

export default function OurTeamPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden px-3 md:px-0 mt-4 md:mt-6">
          <div className="relative w-full h-full rounded-3xl overflow-hidden">
            <Image
              src="/assets/images/our team 1.jpg"
              alt="Our Team"
              fill
              className="object-cover rounded-3xl"
              priority
            />

            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="text-center text-white max-w-xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
                  Meet Our Team
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-200">
                  Our team built on trust &amp; teamwork
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="space-y-8 sm:space-y-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="
                  mx-auto
                  flex flex-col md:flex-row
                  bg-white rounded-2xl shadow-md
                  p-5 sm:p-6 md:p-8
                  w-full max-w-5xl
                  gap-6 md:gap-8
                "
              >
                {/* Image on the left, responsive height */}
                <div className="relative mx-auto md:mx-0 w-full md:w-[340px] h-52 sm:h-64 md:h-[280px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>

                {/* Text on the right, centered */}
                <div className="flex flex-1 items-center mt-4 md:mt-0">
                  <div className="w-full text-center md:text-left">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-red-500 font-medium mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-white py-14 sm:py-20 px-4">
          <div className="max-w-5xl mx-auto text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg">
              The principles that guide our team and drive
              <br />
              our commitment to excellence in steel manufacturing.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Safety First */}
            <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(15,23,42,0.08)] px-8 sm:px-10 py-10 sm:py-12 flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mb-5 sm:mb-6 flex items-center justify-center rounded-full bg-red-500 text-white text-3xl sm:text-4xl">
                🛡️
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 mb-2 sm:mb-3">
                Safety First
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-xs">
                We prioritize the safety and well‑being of our team members above all else,
                maintaining the highest safety standards in the industry.
              </p>
            </div>

            {/* Quality Excellence */}
            <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(15,23,42,0.08)] px-8 sm:px-10 py-10 sm:py-12 flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mb-5 sm:mb-6 flex items-center justify-center rounded-full bg-red-500 text-white text-3xl sm:text-4xl">
                🏆
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 mb-2 sm:mb-3">
                Quality Excellence
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-xs">
                Our commitment to quality drives every decision, ensuring that our steel
                products meet and exceed industry standards.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(15,23,42,0.08)] px-8 sm:px-10 py-10 sm:py-12 flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mb-5 sm:mb-6 flex items-center justify-center rounded-full bg-red-500 text-white text-3xl sm:text-4xl">
                💡
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 mb-2 sm:mb-3">
                Innovation
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-xs">
                We continuously invest in new technologies and processes to stay at the
                forefront of steel manufacturing innovation.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
