import { Header, Hero, Marquee, Services, Method, CTA, Footer } from "@/components";

export default function Home() {
  return (
    <>
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Background effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-hero-glow" />
        <div className="grid-bg absolute inset-0 opacity-40" />
        <div className="blob bg-primary w-[500px] h-[500px] rounded-full top-[-20%] left-[-10%] animate-pulse opacity-10" />
        <div className="blob bg-secondary w-96 h-96 rounded-full bottom-[10%] right-[-5%] opacity-10" />
      </div>

      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="relative z-10 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
        <Hero />
        <Marquee />
        <Services />
        <Method />
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

