export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="lg:w-3/5 space-y-5 sm:space-y-8 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-[10px] sm:text-xs font-mono text-primary uppercase tracking-widest font-bold">
              Web3 Growth Engine
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight">
            We Engineer <br />
            <span className="text-gradient-primary">Unfair Advantages</span>
          </h1>

          {/* Description */}
          <p className="text-text-muted text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 border-l-2 border-primary/30 pl-4 sm:pl-6 text-left">
            Ventora Labs is a premier incubation and marketing powerhouse. We
            combine strategic consulting with viral mechanics to engineer web3
            dominance.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary hover:bg-primary-hover text-black font-display font-bold text-sm sm:text-base rounded-lg transition-all shadow-[0_0_20px_rgba(0,224,142,0.3)] hover:shadow-[0_0_30px_rgba(0,224,142,0.5)] flex items-center justify-center gap-2 group hover:-translate-y-1">
              Explore Services
              <svg
                className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border border-white/10 hover:border-primary/50 text-white font-display font-medium text-sm sm:text-base rounded-lg transition-all hover:bg-primary/10">
              Download Pitch Deck
            </button>
          </div>
        </div>

        {/* Right - 3D Cube */}
        <div className="lg:w-2/5 relative h-[300px] sm:h-[400px] lg:h-[500px] w-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-20 blur-3xl rounded-full" />

          {/* 3D Cube - scaled for mobile */}
          <div className="cube-wrapper scale-[0.6] sm:scale-75 lg:scale-100">
            <div className="cube">
              <div className="face front bg-black/80 backdrop-blur-sm border-primary/30">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <div className="face back bg-black/80 backdrop-blur-sm border-primary/30">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="face right bg-black/80 backdrop-blur-sm border-primary/30">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  />
                </svg>
              </div>
              <div className="face left bg-black/80 backdrop-blur-sm border-primary/30">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <div className="face top bg-black/80 backdrop-blur-sm border-primary/30" />
              <div className="face bottom bg-black/80 backdrop-blur-sm border-primary/30" />
            </div>
          </div>

          {/* Floating badges - hidden on smallest screens, repositioned */}
          <div className="hidden sm:flex absolute top-5 sm:top-10 right-2 sm:right-0 p-2 sm:p-3 bg-card-dark border border-card-border rounded-lg sm:rounded-xl shadow-[0_0_15px_rgba(0,224,142,0.1)] animate-float z-30 items-center gap-2 sm:gap-3">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono text-gray-300">
              Strategy_Optimized
            </span>
          </div>

          <div className="hidden sm:flex absolute bottom-10 sm:bottom-20 left-2 sm:left-0 p-2 sm:p-3 bg-card-dark border border-card-border rounded-lg sm:rounded-xl shadow-[0_0_15px_rgba(0,224,142,0.1)] animate-float-delayed z-30 items-center gap-2 sm:gap-3">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-accent-lime animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono text-gray-300">
              Growth_Active
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

