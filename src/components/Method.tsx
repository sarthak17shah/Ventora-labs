export default function Method() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24 lg:mb-32">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-card-dark">
        <div className="absolute inset-0 grid-bg opacity-30" />

        <div className="grid lg:grid-cols-2">
          {/* Left Content */}
          <div className="p-6 sm:p-10 lg:p-16 flex flex-col justify-center relative z-10">
            <div className="mb-4 sm:mb-6 inline-flex">
              <span className="px-2 sm:px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] sm:text-xs font-mono text-primary uppercase">
                The Ventora Method
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-4 sm:mb-6 text-white">
              Synergy by Design
            </h2>

            <p className="text-text-muted text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
              Our methodology integrates siloed disciplines into a singular
              force. Data informs design. Code enables strategy. Community
              drives growth.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {/* Data-First Approach */}
              <div className="flex gap-3 sm:gap-4 group">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
                  <svg
                    className="w-4 sm:w-5 h-4 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-base sm:text-lg font-display">
                    Data-First Approach
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Decisions backed by real-time market intelligence.
                  </p>
                </div>
              </div>

              {/* Full-Stack Execution */}
              <div className="flex gap-3 sm:gap-4 group">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center flex-shrink-0 text-secondary group-hover:bg-secondary group-hover:text-black transition-all duration-300">
                  <svg
                    className="w-4 sm:w-5 h-4 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-base sm:text-lg font-display">
                    Full-Stack Execution
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500">
                    From smart contracts to social media, we handle it all.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Animated Orbits */}
          <div className="relative h-64 sm:h-80 lg:h-auto min-h-[250px] sm:min-h-[350px] lg:min-h-[400px] bg-[#020302] border-t lg:border-t-0 lg:border-l border-white/5 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />

            <div className="relative w-40 sm:w-56 lg:w-64 h-40 sm:h-56 lg:h-64">
              {/* Center glow */}
              <div className="absolute inset-0 m-auto w-20 sm:w-28 lg:w-32 h-20 sm:h-28 lg:h-32 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-40 animate-pulse" />

              {/* Outer orbit */}
              <div className="absolute inset-0 border border-primary/20 rounded-full animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 sm:w-3 h-2 sm:h-3 bg-primary rounded-full shadow-[0_0_10px_#00E08E]" />
              </div>

              {/* Middle orbit */}
              <div className="absolute inset-3 sm:inset-4 border border-white/10 rounded-full animate-spin-slower">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full" />
              </div>

              {/* Inner orbit */}
              <div className="absolute inset-8 sm:inset-12 border border-secondary/30 rounded-full animate-spin-medium">
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-secondary rounded-full" />
              </div>

              {/* Floating stat card - hidden on smallest screens */}
              <div className="hidden sm:block absolute -bottom-6 sm:-bottom-10 -right-4 sm:-right-10 p-2 sm:p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg sm:rounded-xl animate-float">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="h-6 sm:h-8 w-6 sm:w-8 rounded-md sm:rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                    <svg
                      className="w-3 sm:w-4 h-3 sm:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-gray-400">Growth Rate</div>
                    <div className="text-xs sm:text-sm font-bold text-white">+127%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

