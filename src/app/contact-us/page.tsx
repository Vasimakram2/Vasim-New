'use client';
import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function ContactForm() {
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  useEffect(() => {
    const service = searchParams.get('service');
    if (service) {
      setSelectedService(service);
    }
  }, [searchParams]);

  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
        setSelectedService('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center px-4 py-4 overflow-hidden mt-10">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 object-cover z-0"
        src="/assets/Videos/Contact Us.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ width: '1440px', height: '880px' }}
      />

      <div className="absolute inset-0 bg-black/80 z-0"></div>

      {/* Contact Box */}
      <div
        className="relative z-10 mx-auto rounded-[28px] overflow-hidden flex flex-col lg:flex-row bg-transparent shadow-2xl max-w-full lg:max-w-[1280px] h-auto lg:h-[649px]"
        style={{ width: '100%' }}
      >
        {/* LEFT SIDE */}
        <div className="w-full lg:w-[510px] px-6 sm:px-14 py-10 flex flex-col justify-start text-center lg:text-left">
          <h2
            className="text-[#ff4747] text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            Contact us
          </h2>
          <p
            className="text-white text-base sm:text-lg mb-8 font-light"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            Our friendly team would love to hear from you.
          </p>
          <div
            className="flex flex-col gap-6 text-white text-sm sm:text-base text-left md:text-center lg:text-left"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            {/* Email */}
            <div className="flex items-center gap-3 md:flex-col md:gap-2 lg:flex-row lg:gap-3">
              <span className="md:mx-auto lg:mx-0">
                <svg
                  width="21"
                  height="21"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.7"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2.5" />
                  <path d="m3 5 9 7 9-7" />
                </svg>
              </span>
              <a href="mailto:akramvasim91@gmail.com" className="underline hover:text-[#ff4747] transition-colors">
                akramvasim91@gmail.com
              </a>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-3 md:flex-col md:gap-2 lg:flex-row lg:gap-3">
              <span className="md:mx-auto lg:mx-0">
                <svg
                  width="21"
                  height="21"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.7"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 16.92V17a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18a2 2 0 0 1 2-2H7a2 2 0 0 1 2 1.72c.13.84.41 1.65.85 2.4a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.07 6.07l1.27-1.27a2 2 0 0 1 2.11-.45c.75.44 1.56.72 2.4.85A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <a href="tel:7538889923" className='hover:text-[#ff4747] transition-colors'>75388 89923</a>
            </div>
            {/* Address */}
            <div className="flex items-start gap-3 md:flex-col md:gap-2 lg:flex-row lg:gap-3">
              <span className="md:mx-auto lg:mx-0 md:mt-0 lg:mt-1">
                <svg
                  width="21"
                  height="21"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.7"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4.35 8-10A8 8 0 1 0 4 12c0 5.65 8 10 8 10Z" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </span>
              <a href="https://www.google.com/maps/place/10%C2%B047'23.4%22N+76%C2%B044'52.0%22E/@10.7898388,76.7452126,17z/data=!3m1!4b1!4m4!3m3!8m2!3d10.7898388!4d76.7477875?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff4747] transition-colors">
                No: 15/55, Anbu nagar 2nd street, Vadavalli – Edayarpalayam Rd,
                near Keerthi maligai,Edayarpalayam, Coimbatore, Tamil Nadu 641025
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form
          action="https://formspree.io/f/xgvpanvo"
          method="POST"
          onSubmit={handleSubmit}
          className="flex-1 px-6 sm:px-14 py-10 flex flex-col justify-center scroll-mt-20"
          style={{ fontFamily: 'Quicksand, sans-serif' }}
          id="form"
        >
          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="mb-4 p-4 bg-black/20 border text-center border-red-500 mt-3 rounded-md text-red-500">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="mb-4 p-4 bg-red-500/20 border border-red-500 rounded-md text-red-400">
              Oops! There was a problem submitting your form. Please try again.
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#ff4747] text-[16px] mb-2 font-semibold">
                First name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="first name"
                required
                className="w-full h-[44px] px-4 bg-transparent border border-[#ff4747] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff4747] placeholder-white"
              />
            </div>
            <div>
              <label className="block text-[#ff4747] text-[16px] mb-2 font-semibold">
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="last name"
                required
                className="w-full h-[44px] px-4 bg-transparent border border-[#ff4747] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff4747] placeholder-white"
              />
            </div>
            <div>
              <label className="block text-[#ff4747] text-[16px] mb-2 font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="email address"
                required
                className="w-full h-[44px] px-4 bg-transparent border border-[#ff4747] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff4747] placeholder-white"
              />
            </div>
            <div>
              <label className="block text-[#ff4747] text-[16px] mb-2 font-semibold">
                Phone number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="phone number"
                required
                className="w-full h-[44px] px-4 bg-transparent border border-[#ff4747] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff4747] placeholder-white"
              />
            </div>
            <div className="col-span-1 sm:col-span-2">
              <label className="block text-[#ff4747] text-[16px] mb-2 font-semibold">
                Choose a Service
              </label>
              <select
  name="service"
  value={selectedService}
  onChange={(e) => setSelectedService(e.target.value)}
  required
  className="w-full h-[44px] px-4 bg-transparent border border-[#ff4747] text-white rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-[#ff4747]"
>
  <option value="" className="text-black">Select one...</option>
  <option value="Commissioning" className="text-black">Commissioning</option>
  <option value="Operations & maintains for induction furnace" className="text-black">Operations & maintains for induction furnace</option>
  <option value="CCM (Continuous Casting Machine)" className="text-black">CCM (Continuous Casting Machine)</option>
  <option value="Manpower Supply for Gulf Countries" className="text-black">Manpower Supply for Gulf Countries</option>
</select>

            </div>
            <div className="col-span-1 sm:col-span-2">
              <label className="block text-[#ff4747] text-[16px] mb-2 font-semibold">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Type your message..."
                className="w-full px-4 py-2 bg-transparent border border-[#ff4747] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff4747] resize-none placeholder-white"
              ></textarea>
            </div>
          </div>
          <div className="flex items-center mb-3 mt-6">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              required
              className="w-5 h-5 border-[#ff4747] text-[#ff4747] bg-black rounded mr-2 accent-[#ff4747]"
            />
            <label htmlFor="terms" className="text-white text-[16px]">
              I accept the{' '}
              <a href="/terms-of-services" className="underline text-[#ff4747]">
                Terms
              </a>
            </label>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-[138px] h-[44px] bg-[#ff4747] text-white font-bold rounded-md text-lg mt-2 transition hover:bg-[#fa3030] mx-auto lg:mx-0 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <ContactForm />
      </Suspense>
      <Footer />
    </div>
  );
}