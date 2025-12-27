const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Strategic Advisory",
    description: "Architecting the blueprint for market dominance. We provide deep-dive market analysis, token utility modeling, and GTM roadmap structuring.",
    features: ["GTM Strategy", "Tokenomics", "Partnerships"],
    dotColor: "bg-primary",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Growth & Hype",
    description: "Aggressive user acquisition leveraging data-driven paid media, viral mechanics, and global influencer ecosystems.",
    features: ["Performance Ads", "KOL Management", "Viral Loop Design"],
    dotColor: "bg-secondary",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Web3 Engineering",
    description: "Enterprise-grade smart contracts, dApps, and platform engineering. Security-first architecture for scalable blockchain solutions.",
    features: ["Smart Contracts", "Full-Stack dApps", "Audits"],
    dotColor: "bg-primary",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Brand & Design",
    description: "Creating visual languages that stick. From logo design to immersive 3D web experiences, we define how the world sees you.",
    features: ["Visual Identity", "UI/UX Design", "Motion Graphics"],
    dotColor: "bg-emerald-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: "Community Ops",
    description: "Building cult-like followings. We manage your Discord, Telegram, and social channels with 24/7 engagement teams.",
    features: ["Moderation", "Event Hosting", "Ambassadors"],
    dotColor: "bg-green-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    title: "Public Relations",
    description: "Control the narrative. We secure placements in top-tier financial and crypto publications to build immense credibility.",
    features: ["Press Releases", "Media Tours", "Crisis Mgmt"],
    dotColor: "bg-lime-500",
  },
];

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24 lg:mb-32">
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold mb-3 sm:mb-4">
          Our Expertise
        </h2>
        <p className="text-text-muted max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-4">
          Holistic solutions for the decentralized web. We don&apos;t just follow
          the roadmap; we build it.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card group relative p-[1px] rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/10 to-white/0 overflow-hidden h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full bg-card-dark rounded-[15px] sm:rounded-[23px] p-5 sm:p-8 flex flex-col z-10 overflow-hidden">
              {/* Background glow */}
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-primary/10 transition-all" />

              {/* Icon */}
              <div className="w-11 sm:w-14 h-11 sm:h-14 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300 shadow-lg shadow-black/50">
                <span className="text-gray-300 group-hover:text-primary transition-colors [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-7 sm:[&>svg]:h-7">
                  {service.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-2xl font-display font-bold mb-2 sm:mb-3 text-white group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                {service.description}
              </p>

              {/* Features */}
              <div className="border-t border-white/5 pt-3 sm:pt-4 mt-auto">
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-500 font-mono">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className={`w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full ${service.dotColor}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

