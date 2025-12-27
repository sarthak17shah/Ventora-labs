export default function CTA() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[450px] lg:h-[600px] bg-primary/10 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20400%20400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noiseFilter%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%223%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url%28%23noiseFilter%29%22%2F%3E%3C%2Fsvg%3E')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6 tracking-tight text-white">
          Ready to Break the Mold?
        </h2>

        <p className="text-text-muted text-sm sm:text-lg lg:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
          Partner with the agency that is redefining digital success. Stop
          following trends. Start setting them.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center px-4 sm:px-0">
          <button className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-5 bg-primary text-black font-display font-bold text-sm sm:text-lg rounded-full hover:bg-white transition-all shadow-[0_0_40px_rgba(0,224,142,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:scale-105">
            Start Your Project
          </button>
          <button className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-5 bg-transparent border border-white/20 text-white font-display font-bold text-sm sm:text-lg rounded-full hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-md">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}

