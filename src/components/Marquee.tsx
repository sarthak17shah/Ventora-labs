const items = [
  "Strategic Advisory",
  "Viral Marketing",
  "Token Engineering",
  "Web3 Development",
  "Community Architecture",
  "KOL Networks",
  "Smart Contracts",
  "Brand Identity",
];

export default function Marquee() {
  return (
    <div className="w-full border-y border-white/5 bg-black/40 backdrop-blur-md py-4 sm:py-6 overflow-hidden mb-12 sm:mb-16 lg:mb-24 relative">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-background-dark to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-background-dark to-transparent z-10" />

      {/* Scrolling content */}
      <div className="flex gap-6 sm:gap-12 whitespace-nowrap animate-marquee items-center text-text-muted/60 font-display font-bold uppercase tracking-widest text-xs sm:text-sm">
        {/* First set */}
        {items.map((item, index) => (
          <span key={`first-${index}`} className="flex items-center gap-6 sm:gap-12">
            <span>{item}</span>
            <span className="text-primary">•</span>
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {items.map((item, index) => (
          <span key={`second-${index}`} className="flex items-center gap-6 sm:gap-12">
            <span>{item}</span>
            <span className="text-primary">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

