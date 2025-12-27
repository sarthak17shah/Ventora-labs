"use client";

import Header from "@/components/Header";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Background effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00DC82]/10 rounded-full blur-[100px] sm:blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#10B981]/10 rounded-full blur-[100px] sm:blur-[150px]" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[450px] lg:h-[600px] bg-[#00DC82]/5 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px]" />
      </div>

      <Header />

      <main className="pt-20 sm:pt-24 lg:pt-28 relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20400%20400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noiseFilter%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%223%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url%28%23noiseFilter%29%22%2F%3E%3C%2Fsvg%3E')] opacity-20 pointer-events-none mix-blend-overlay" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6 sm:gap-8 order-2 lg:order-1 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-[#00DC82]/30 bg-[#00DC82]/5 w-fit mx-auto lg:mx-0">
                <span className="relative flex h-1.5 sm:h-2 w-1.5 sm:w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00DC82] opacity-75" />
                  <span className="relative inline-flex rounded-full h-full w-full bg-[#00DC82]" />
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-[#00DC82] uppercase tracking-widest">
                  Established 2018
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
                Shaping the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DC82] to-[#36E4DA]">
                  Future of Growth
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-lg leading-relaxed font-light mx-auto lg:mx-0">
                We are a collective of strategists and engineers redefining
                digital marketing. Ventora Labs bridges the gap between Web2
                stability and Web3 innovation.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 justify-center lg:justify-start">
                <button className="bg-[#00DC82] hover:bg-[#00bd6f] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all shadow-[0_0_20px_rgba(0,220,130,0.4)] hover:shadow-[0_0_30px_rgba(0,220,130,0.6)]">
                  Our Vision
                </button>
                <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all backdrop-blur-md">
                  Meet the Team
                </button>
              </div>
            </div>

            {/* Right - Animated Visual */}
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full flex items-center justify-center order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-radial from-[#00DC82]/10 to-transparent blur-3xl" />
              <div className="relative w-full h-full animate-float">
                {/* Rotating circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full border border-[#00DC82]/20 animate-spin [animation-duration:20s]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full border border-white/10 animate-spin [animation-duration:15s] [animation-direction:reverse]" />
                
                {/* Image */}
                <img
                  alt="Digital Abstract"
                  className="absolute inset-0 w-full h-full object-contain mix-blend-screen opacity-90 drop-shadow-[0_0_30px_rgba(0,220,130,0.5)]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxj65boJQKYGDG8oFK2j2bhhKLuDC7aO2TIpaI6blCGWb5t31A4Qkb_eGDf2NbSJtedHebT2vCRJg52QykldsNWaStv5wgwkTfS32g8ZBoxFupNYYd3_nNqpqJe7AknCB0wplxZIzTuPy-K2NwX2xdemgfI5Szm33SehCN6ectpvDUUXNm2-B_oyZ2wFpOpuQoQQvSby0Sm-w3Et2xCWPtDxio_wwQIbebYX7V7lKVVSDBlOv8q6gxaqOn0hQ1mkqVf9PbmzU9G0w"
                />

                {/* Floating stat cards */}
                <div className="absolute top-[15%] sm:top-[20%] right-[5%] sm:right-[10%] bg-[rgba(10,10,10,0.6)] backdrop-blur-[16px] border border-white/8 p-3 sm:p-4 rounded-xl sm:rounded-2xl animate-bounce [animation-duration:4s]">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[#00DC82]/20 flex items-center justify-center text-[#00DC82]">
                      <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-xs text-gray-400">Growth Rate</div>
                      <div className="text-sm sm:text-lg font-bold text-white">+245%</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-[15%] sm:bottom-[20%] left-[5%] sm:left-[10%] bg-[rgba(10,10,10,0.6)] backdrop-blur-[16px] border border-white/8 p-3 sm:p-4 rounded-xl sm:rounded-2xl animate-bounce [animation-duration:5s]">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[#36E4DA]/20 flex items-center justify-center text-[#36E4DA]">
                      <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-xs text-gray-400">Token Volume</div>
                      <div className="text-sm sm:text-lg font-bold text-white">$45M+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y border-white/5 bg-black/50 backdrop-blur-sm relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 divide-x divide-white/5">
              <div className="flex flex-col items-center justify-center group cursor-default p-2 sm:p-4">
                <span className="text-3xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 group-hover:to-[#00DC82] transition-all duration-500">
                  6+
                </span>
                <span className="text-xs sm:text-sm text-[#00DC82] uppercase tracking-widest mt-2 sm:mt-3 font-semibold text-center">
                  Years Active
                </span>
              </div>
              <div className="flex flex-col items-center justify-center group cursor-default p-2 sm:p-4">
                <span className="text-3xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 group-hover:to-[#00DC82] transition-all duration-500">
                  200+
                </span>
                <span className="text-xs sm:text-sm text-[#00DC82] uppercase tracking-widest mt-2 sm:mt-3 font-semibold text-center">
                  Clients Scaled
                </span>
              </div>
              <div className="flex flex-col items-center justify-center group cursor-default p-2 sm:p-4">
                <span className="text-3xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 group-hover:to-[#00DC82] transition-all duration-500">
                  $50M+
                </span>
                <span className="text-xs sm:text-sm text-[#00DC82] uppercase tracking-widest mt-2 sm:mt-3 font-semibold text-center">
                  Revenue Gen
                </span>
              </div>
              <div className="flex flex-col items-center justify-center group cursor-default p-2 sm:p-4">
                <span className="text-3xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 group-hover:to-[#00DC82] transition-all duration-500">
                  4
                </span>
                <span className="text-xs sm:text-sm text-[#00DC82] uppercase tracking-widest mt-2 sm:mt-3 font-semibold text-center">
                  Global Hubs
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* DNA/Values Section */}
        <section className="py-16 sm:py-24 lg:py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-3xl mx-auto">
              <span className="text-[#00DC82] font-bold tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">
                Our DNA
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
                The Infrastructure for{" "}
                <span className="text-white italic">Velocity</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed font-light px-4">
                We believe in a decentralized, digital-first world where brands
                win by combining relentless speed with absolute transparency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Card 1 */}
              <div className="bg-[rgba(10,10,10,0.6)] backdrop-blur-[16px] border border-white/8 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl transition-all duration-300 relative overflow-hidden group hover:shadow-[0_0_25px_rgba(0,220,130,0.15)] hover:border-[#00DC82]/30">
                <div className="absolute -right-10 -top-10 w-32 sm:w-40 h-32 sm:h-40 bg-[#00DC82]/20 rounded-full blur-3xl group-hover:bg-[#00DC82]/30 transition-all" />
                <div className="mb-6 sm:mb-8 relative z-10">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center">
                    <svg className="w-6 sm:w-8 h-6 sm:h-8 text-[#00DC82]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-[#00DC82] transition-colors">
                  Radical Transparency
                </h3>
                <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">
                  No black boxes. We build in public with you. Every metric,
                  every strategy, every pivot is shared in real-time through our
                  proprietary dashboards.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[rgba(10,10,10,0.6)] backdrop-blur-[16px] border border-white/8 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl transition-all duration-300 relative overflow-hidden group hover:shadow-[0_0_25px_rgba(0,220,130,0.15)] hover:border-[#00DC82]/30">
                <div className="absolute -right-10 -top-10 w-32 sm:w-40 h-32 sm:h-40 bg-[#36E4DA]/20 rounded-full blur-3xl group-hover:bg-[#36E4DA]/30 transition-all" />
                <div className="mb-6 sm:mb-8 relative z-10">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center">
                    <svg className="w-6 sm:w-8 h-6 sm:h-8 text-[#36E4DA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-[#36E4DA] transition-colors">
                  Hyper Velocity
                </h3>
                <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">
                  Speed is our currency. We iterate faster than the market
                  changes, deploying strategies in days, not months, keeping you
                  ahead of the adoption curve.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[rgba(10,10,10,0.6)] backdrop-blur-[16px] border border-white/8 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl transition-all duration-300 relative overflow-hidden group hover:shadow-[0_0_25px_rgba(0,220,130,0.15)] hover:border-[#00DC82]/30">
                <div className="absolute -right-10 -top-10 w-32 sm:w-40 h-32 sm:h-40 bg-[#10B981]/20 rounded-full blur-3xl group-hover:bg-[#10B981]/30 transition-all" />
                <div className="mb-6 sm:mb-8 relative z-10">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center">
                    <svg className="w-6 sm:w-8 h-6 sm:h-8 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-[#10B981] transition-colors">
                  Measurable Impact
                </h3>
                <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">
                  We don&apos;t deal in vanity metrics. We deal in revenue,
                  retention, and sustainable market share expansion. If it
                  doesn&apos;t move the needle, we don&apos;t do it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-black to-[#0A0A0A] relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 sm:mb-16 lg:mb-20 gap-4">
              <div className="md:w-1/2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
                  The Trajectory
                </h2>
                <p className="text-gray-400 text-sm sm:text-base">
                  From an Austin garage to a global powerhouse.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-end hidden md:block">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent to-[#00DC82]/50" />
              </div>
            </div>

            <div className="relative space-y-0">
              {/* Timeline Item 1 */}
              <div className="flex flex-col md:flex-row gap-6 sm:gap-10 group relative pb-8 sm:pb-12 border-l border-white/10 md:border-l-0">
                <div className="md:hidden absolute -left-[5px] top-0 h-2 w-2.5 rounded-full bg-[#00DC82] shadow-[0_0_10px_rgba(0,220,130,0.5)]" />
                <div className="md:w-1/4 md:text-right pt-2 md:pr-12 relative">
                  <div className="hidden md:block absolute right-[-6px] top-3 h-3 w-3 rounded-full bg-[#00DC82] shadow-[0_0_10px_rgba(0,220,130,0.8)] z-10" />
                  <span className="text-[#00DC82] font-mono text-xl sm:text-2xl font-bold block">
                    2018
                  </span>
                </div>
                <div className="md:w-3/4 pl-4 sm:pl-6 md:pl-12 border-l border-white/10 md:border-l-2 md:border-white/5 relative pb-2 md:pb-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                    Genesis Block
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    Ventora Labs founded. Mission: De-risk digital marketing for
                    seed-stage startups through data-driven validation.
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex flex-col md:flex-row gap-6 sm:gap-10 group relative pb-8 sm:pb-12 border-l border-white/10 md:border-l-0">
                <div className="md:hidden absolute -left-[5px] top-0 h-2 w-2.5 rounded-full bg-gray-600 group-hover:bg-[#00DC82] transition-colors" />
                <div className="md:w-1/4 md:text-right pt-2 md:pr-12 relative">
                  <div className="hidden md:block absolute right-[-6px] top-3 h-3 w-3 rounded-full bg-gray-700 group-hover:bg-[#00DC82] transition-colors z-10" />
                  <span className="text-gray-500 group-hover:text-white transition-colors font-mono text-xl sm:text-2xl font-bold block">
                    2020
                  </span>
                </div>
                <div className="md:w-3/4 pl-4 sm:pl-6 md:pl-12 border-l border-white/10 md:border-l-2 md:border-white/5 relative pb-2 md:pb-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                    The Great Pivot
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    Adapted to global remote shifts. Launched full-stack digital
                    transformation services and proprietary analytics suite.
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex flex-col md:flex-row gap-6 sm:gap-10 group relative pb-8 sm:pb-12 border-l border-white/10 md:border-l-0">
                <div className="md:hidden absolute -left-[5px] top-0 h-2 w-2.5 rounded-full bg-gray-600 group-hover:bg-[#00DC82] transition-colors" />
                <div className="md:w-1/4 md:text-right pt-2 md:pr-12 relative">
                  <div className="hidden md:block absolute right-[-6px] top-3 h-3 w-3 rounded-full bg-gray-700 group-hover:bg-[#00DC82] transition-colors z-10" />
                  <span className="text-gray-500 group-hover:text-white transition-colors font-mono text-xl sm:text-2xl font-bold block">
                    2022
                  </span>
                </div>
                <div className="md:w-3/4 pl-4 sm:pl-6 md:pl-12 border-l border-white/10 md:border-l-2 md:border-white/5 relative pb-2 md:pb-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                    Global Node Expansion
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    London and Singapore offices opened. 24/7 campaign management
                    protocols activated for international clients.
                  </p>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="flex flex-col md:flex-row gap-6 sm:gap-10 group relative border-l border-white/10 md:border-l-0">
                <div className="md:hidden absolute -left-[5px] top-0 h-2 w-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                <div className="md:w-1/4 md:text-right pt-2 md:pr-12 relative">
                  <div className="hidden md:block absolute right-[-6px] top-3 h-3 w-3 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)] z-10" />
                  <span className="text-white font-mono text-xl sm:text-2xl font-bold block">
                    2024
                  </span>
                </div>
                <div className="md:w-3/4 pl-4 sm:pl-6 md:pl-12 border-l border-white/10 md:border-l-2 md:border-white/5 relative pb-2 md:pb-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                    Ventora Ecosystem
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    50+ experts defining the future of growth marketing. Launch
                    of AI-driven creative studio and Web3 consulting arm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-12 sm:mb-16 flex flex-col md:flex-row justify-between items-end gap-4 sm:gap-6">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                  The Architects
                </h2>
                <p className="text-gray-400 max-w-lg text-sm sm:text-base">
                  Visionaries, builders, and strategists obsessed with
                  perfection.
                </p>
              </div>
              <button className="text-[#00DC82] hover:text-white font-medium flex items-center gap-2 transition-colors text-sm sm:text-base">
                View All Members{" "}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Team Member 1 */}
              <div className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-white/5 border border-white/5 hover:border-[#00DC82]/50 transition-all duration-300">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60" />
                  <img
                    alt="James Sterling"
                    className="h-full w-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlHWsWnEH0jJyjud8UnwZ6aid7M_mFENwILcSOJz6K8ndfmbMRy32hdRvT9md5-pSU_tsrYFD_2eih28RLyyM6SoYhUKKzTnAI9oYsMK3ooviOkGglTSx8cen61OSG870bT8dF140zZKcVfmtskYqyFDM0ltCU4D6t3qYnPo_H4dJnxyLbc_7scg44j9ZnxdnUwGPt2dntTmgdj1c17yxoLx-FdWFFbbz-pqgr-zqd6BC7SowwabviLB6SlaXPWfrQstXnbWiTYAI"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      James Sterling
                    </h3>
                    <p className="text-[#00DC82] text-xs sm:text-sm font-medium mb-2">
                      Founder & CEO
                    </p>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pt-2 border-t border-white/10">
                      <p className="text-[10px] sm:text-xs text-gray-300">
                        Ex-Google strategist scaling SaaS unicorns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-white/5 border border-white/5 hover:border-[#00DC82]/50 transition-all duration-300">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60" />
                  <img
                    alt="Elena Rodriguez"
                    className="h-full w-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdT1tt6A7GPe1ldNpswhzpDiqMhpnjw7KbS3YXEWGinSVmFgynRC436PVrzSqDH-BkAdarZ5ZhtfWxMj3Hl27RvCKDrP5fEHDGVccHp_Ixpe87U-ngEKEwEPNe7FOt8ecTrz4rKIMp3s9DpnxGHXJ4mkhrFWSY8hBLaHuc_qNjgXhgeVoLzi28NOukStVAgAlmm9q-yGdDrWIpS8wWVPHMMmeQCEEGUWHsC6uoj3DLcPBlnToOM7PuXr6nSgfMVhacjpylB_4Id8c"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Elena Rodriguez
                    </h3>
                    <p className="text-[#00DC82] text-xs sm:text-sm font-medium mb-2">
                      Head of Strategy
                    </p>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pt-2 border-t border-white/10">
                      <p className="text-[10px] sm:text-xs text-gray-300">
                        Data whisperer driving insight-led campaigns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-white/5 border border-white/5 hover:border-[#00DC82]/50 transition-all duration-300">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60" />
                  <img
                    alt="Marcus Chen"
                    className="h-full w-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoWF4Q478hAK9FAO2NTXQVc36i7amOvRsHjsecWmQ9vEwyElq6ptB1VhhnORk4NPtWFfnzl-VSUPhdNfTCC2OH3iy5CTkIAMUZkUWkuzKM0aQ4VapAESDpLreCnORo4b9RSHQKWh2zGMbArnio_iJdwk2DqDQktSaiQeYoJvHO2qnR4mrZ-RQxaKV-bvdeCsgk3R23x3DvpIFaeImS0R1LAmvUXwVXBMGTYcFnt593IFywUoqR9KZeFWts76mfozDiRX0AOKJS92Y"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Marcus Chen
                    </h3>
                    <p className="text-[#00DC82] text-xs sm:text-sm font-medium mb-2">
                      Creative Director
                    </p>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pt-2 border-t border-white/10">
                      <p className="text-[10px] sm:text-xs text-gray-300">
                        Merging art with conversion psychology.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-white/5 border border-white/5 hover:border-[#00DC82]/50 transition-all duration-300">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60" />
                  <img
                    alt="Sarah Okafor"
                    className="h-full w-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvJcfuumNibjOuiaofzkwvCGtmHsoBMZEk-PFyh3uXJuqv1Jcek0N6MhDcr3h4Wh7xaAo1plG-X1f-He0QSxLdKMiatxQFEHT5EhhK6X6GmTmTfSX0-Bx-j7LJkcIIH1hNqXmBa8WC6ST19VEBE2EpYXJUcHSQ9iSy2cN3sLvcegid3IPQXP4h7a9pbc2SsOYssvb90FW2fCgUPIo9MGBzEuoT5Ql7UkDRT0m9ADoJLuo8kxWhOACP5t69vJ6axC9Yf6_HvAFZTdk"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Sarah Okafor
                    </h3>
                    <p className="text-[#00DC82] text-xs sm:text-sm font-medium mb-2">
                      VP of Technology
                    </p>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pt-2 border-t border-white/10">
                      <p className="text-[10px] sm:text-xs text-gray-300">
                        Building proprietary tools for unfair advantages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-black">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[450px] lg:h-[600px] bg-gradient-radial from-[#00DC82]/10 to-transparent blur-[60px] sm:blur-[80px]" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="mb-4 sm:mb-6 inline-flex p-2 sm:p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
              <svg className="w-4 sm:w-5 h-4 sm:h-5 text-[#00DC82] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs sm:text-sm font-bold text-white">
                Join the elite network
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight">
              Ready to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#00DC82]">
                scale?
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-12 max-w-xl mx-auto">
              Join the visionary brands that have redefined their industries
              with Ventora Labs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-[#00DC82] text-black px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(0,220,130,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              >
                Start a Project
              </Link>
              <button className="bg-transparent border border-white/20 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-white/5 hover:border-[#00DC82]/50 transition-all backdrop-blur-sm">
                View Case Studies
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 bg-black py-8 sm:py-12 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <div className="size-7 sm:size-8 bg-white/5 rounded-lg flex items-center justify-center">
                <svg className="w-4 sm:w-5 h-4 sm:h-5 text-[#00DC82]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <span className="text-gray-500 text-xs sm:text-sm">
                © {new Date().getFullYear()} Ventora Labs.
              </span>
            </div>
            <div className="flex gap-6 sm:gap-8">
              <Link href="#" className="text-gray-500 hover:text-[#00DC82] text-xs sm:text-sm transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#00DC82] text-xs sm:text-sm transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#00DC82] text-xs sm:text-sm transition-colors">
                Twitter
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#00DC82] text-xs sm:text-sm transition-colors">
                LinkedIn
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

