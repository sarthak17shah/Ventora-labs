"use client";

import { useState } from "react";
import Header from "@/components/Header";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      {/* Background effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[300px] sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[450px] lg:h-[600px] bg-[#13ec5b]/10 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[250px] sm:w-[400px] lg:w-[500px] h-[250px] sm:h-[400px] lg:h-[500px] bg-[#326744]/20 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px] pointer-events-none" />
      </div>

      <Header />

      <main className="relative pt-20 sm:pt-24 lg:pt-28 flex-grow flex flex-col items-center justify-center min-h-screen">
        <div className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-24 grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start z-10">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:sticky lg:top-32">
            <div className="space-y-4 sm:space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#13ec5b]/10 border border-[#13ec5b]/20 text-[#13ec5b] text-[10px] sm:text-xs font-bold uppercase tracking-wider w-fit">
                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#13ec5b] animate-pulse" />
                Available for new projects
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black leading-tight tracking-[-0.03em]">
                Let&apos;s Scale{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13ec5b] to-green-600">
                  Together
                </span>
              </h1>

              {/* Description */}
              <p className="text-[#92c9a4] text-sm sm:text-lg lg:text-xl font-normal leading-relaxed max-w-lg">
                Ready to accelerate your growth? We blend strategy, design, and
                technology to build brands that dominate the Web3 landscape.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid gap-4 sm:gap-6 mt-2 sm:mt-4">
              {/* Email Card */}
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-[#193322] border border-[#326744]/50 hover:border-[#13ec5b]/50 transition-colors group">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-[#0f1f14] flex items-center justify-center text-[#13ec5b] border border-[#326744] group-hover:bg-[#13ec5b] group-hover:text-black transition-colors flex-shrink-0">
                  <svg
                    className="w-5 sm:w-6 h-5 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-white font-bold text-base sm:text-lg">
                    Email Us
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-1">
                    For general inquiries and partnerships
                  </p>
                  <a
                    className="text-[#13ec5b] font-medium hover:underline text-sm sm:text-base break-all"
                    href="mailto:hello@ventoralabs.com"
                  >
                    hello@ventoralabs.com
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-[#193322] border border-[#326744]/50 hover:border-[#13ec5b]/50 transition-colors group">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-[#0f1f14] flex items-center justify-center text-[#13ec5b] border border-[#326744] group-hover:bg-[#13ec5b] group-hover:text-black transition-colors flex-shrink-0">
                  <svg
                    className="w-5 sm:w-6 h-5 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-white font-bold text-base sm:text-lg">
                    Visit HQ
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-1">
                    Come say hello at our office
                  </p>
                  <p className="text-white font-medium text-sm sm:text-base">
                    123 Innovation Dr, Crypto Valley, CH
                  </p>
                </div>
              </div>
            </div>

            {/* 3D Image - Hidden on mobile */}
            <div className="relative w-full h-48 sm:h-56 lg:h-64 hidden lg:block rounded-xl sm:rounded-2xl overflow-hidden border border-[#326744]/30 mt-4 sm:mt-8">
              <img
                alt="Abstract 3D Design"
                className="absolute inset-0 w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSuXYPFX79JjxbHoU8RZwgfj0DmVWdaqeaDWi0lS5_VBt_XKic0sdzvzI2bwmGE8jZOzPKgGnZoOyVRuLHaTfG8bX-aewgciKU-gj-16sN6c6arGSKqexsdWQ5gUqL9xM12gsIc-mFB3hthcAaJo_A1nAVKWQWOlQ1IyIlEMoOyiOVpSxmVMmPIRYh5TTh5HzoF4RIlkwrU3XsTBI-KdsHw7cPGhBVLZvxGQEMyzF0EZ-HaRsNxSdjQOD7536yCIxnZt57Kt_UDKw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102216] to-transparent" />
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                <p className="text-[10px] sm:text-xs text-[#13ec5b]/80 font-mono">
                  RENDER_ID: #8821X // 3D_VISUAL
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative">
            <div className="absolute -top-6 sm:-top-10 -right-6 sm:-right-10 w-full h-full bg-gradient-to-bl from-[#13ec5b]/10 to-transparent rounded-2xl sm:rounded-3xl blur-2xl -z-10" />
            <form
              onSubmit={handleSubmit}
              className="bg-[#193322]/40 backdrop-blur-xl border border-[#326744] rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-2xl flex flex-col gap-4 sm:gap-6"
            >
              <div className="mb-1 sm:mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">
                  Usually respond within 24 hours.
                </p>
              </div>

              {/* Name and Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <label className="flex flex-col gap-1.5 sm:gap-2">
                  <span className="text-xs sm:text-sm font-semibold text-gray-300">
                    Full Name
                  </span>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full h-11 sm:h-12 px-3 sm:px-4 rounded-lg bg-[#112217] border border-[#326744] text-white placeholder-gray-500 focus:outline-none focus:border-[#13ec5b] focus:ring-1 focus:ring-[#13ec5b] transition-all text-sm sm:text-base"
                    placeholder="John Doe"
                    type="text"
                    required
                  />
                </label>
                <label className="flex flex-col gap-1.5 sm:gap-2">
                  <span className="text-xs sm:text-sm font-semibold text-gray-300">
                    Business Email
                  </span>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-11 sm:h-12 px-3 sm:px-4 rounded-lg bg-[#112217] border border-[#326744] text-white placeholder-gray-500 focus:outline-none focus:border-[#13ec5b] focus:ring-1 focus:ring-[#13ec5b] transition-all text-sm sm:text-base"
                    placeholder="john@company.com"
                    type="email"
                    required
                  />
                </label>
              </div>

              {/* Subject */}
              <label className="flex flex-col gap-1.5 sm:gap-2">
                <span className="text-xs sm:text-sm font-semibold text-gray-300">
                  Subject
                </span>
                <div className="relative">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full h-11 sm:h-12 px-3 sm:px-4 pr-10 rounded-lg bg-[#112217] border border-[#326744] text-white focus:outline-none focus:border-[#13ec5b] focus:ring-1 focus:ring-[#13ec5b] transition-all appearance-none cursor-pointer text-sm sm:text-base"
                    required
                  >
                    <option disabled value="">
                      Select a topic
                    </option>
                    <option value="marketing">Marketing Strategy</option>
                    <option value="consulting">Consulting Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                  <svg
                    className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-[#13ec5b] pointer-events-none w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </label>

              {/* Message */}
              <label className="flex flex-col gap-1.5 sm:gap-2">
                <span className="text-xs sm:text-sm font-semibold text-gray-300">
                  Message
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 sm:p-4 rounded-lg bg-[#112217] border border-[#326744] text-white placeholder-gray-500 focus:outline-none focus:border-[#13ec5b] focus:ring-1 focus:ring-[#13ec5b] transition-all resize-none text-sm sm:text-base"
                  placeholder="Tell us about your project goals..."
                  rows={5}
                  required
                />
              </label>

              {/* Submit Button */}
              <div className="pt-1 sm:pt-2">
                <button
                  type="submit"
                  className="group w-full h-11 sm:h-12 bg-[#13ec5b] hover:bg-green-400 text-black font-bold rounded-lg transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(19,236,91,0.4)] text-sm sm:text-base"
                >
                  <span>Send Message</span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Map Section */}
      <section className="w-full border-t border-[#23482f] bg-[#0c1a11]">
        <div className="max-w-[1280px] mx-auto">
          <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[400px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 group">
            <img
              alt="Map showing location in a dark themed city"
              className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfvowj7GOKhE9EWy_ZfCnQxwsNIINnyr6w1X0J_0xK34R4SansXij_QPrleZ5o0in7B7iWjKKAn6FnKZ96LZuosJKZ3nuWIohh6Gi-5gWO_JP6BYE4_rwetD33MIXP3JmgqcduuahCR9VxGUdiUgDovtys4ZUrOQAjaIuW5UXceAH64JcySkpAVXS2IOdiuul0DCGdHTgHoBgI1duY_kgCfaVoG19hLFuoDpZ7NERxBeAjzNuWrZAmXMsXVl2HfBXFFGidl7CCaik"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a11] via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
              <div className="relative">
                <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[#13ec5b] rounded-full animate-ping absolute inset-0" />
                <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[#13ec5b] rounded-full relative border-2 border-black" />
              </div>
              <div className="bg-black/80 backdrop-blur border border-[#13ec5b]/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-center transform translate-y-1 sm:translate-y-2">
                <p className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                  Ventora HQ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b160e] py-6 sm:py-8 border-t border-[#1a3824]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Ventora Labs. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a
              className="text-gray-400 hover:text-[#13ec5b] transition-colors"
              href="#"
              aria-label="Twitter"
            >
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              className="text-gray-400 hover:text-[#13ec5b] transition-colors"
              href="#"
              aria-label="LinkedIn"
            >
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

