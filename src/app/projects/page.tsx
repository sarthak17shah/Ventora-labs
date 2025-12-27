"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Link from "next/link";

type FilterType = "all" | "growth" | "advisory" | "branding";

interface Project {
  id: number;
  category: FilterType;
  categoryLabel: string;
  client: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const projects: Project[] = [
  {
    id: 1,
    category: "growth",
    categoryLabel: "GROWTH",
    client: "DefiProtocol X",
    title: "$10M TVL in 48 Hours",
    description:
      "A strategic launch campaign leveraging influencer networks and community incentives to bootstrap liquidity for a new DEX.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBeOqrCtdHRN8JwscWcw08khttIgOtjbgHXJPsDf0Y2fKicjIiBVLXsTR2ggEcDzlBQZSUIrOTqhRe6CUXzBnn8Tt5Ovh97mY7vlEpa0mU-s2epjS_h2__nGOE_lq7kak-7sN2JFSm1FFMT3ICWVTQ17uYY6AkETnj0JC0B5komWL35Wn_i_-TPe_sU0kY7gSMT_1A7voH9hs6laOCOUy06YDcyPEk5wJoVr1m2LjhPQjGmGK7aHZJOkQoWAyqI9XRqRB40KrQRtYA",
    imageAlt: "Futuristic cryptocurrency dashboard interface on a dark screen",
  },
  {
    id: 2,
    category: "branding",
    categoryLabel: "BRANDING",
    client: "TechStart Y",
    title: "Complete Brand Overhaul",
    description:
      "Reimagining identity for a Series A AI startup. From logo redesign to full design system implementation across all touchpoints.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBjIkMV1h8h2pSC08aP27LSluBFWFNduc11rr_vMVDpFxiGHRj77Msf7qO98PW9djmz62C9RMAaInTror_hGU3UhdLk2W6T1RQ1OsmEkd2jPcYW8T1RrhNHp3P8pohXz3U-3BBZhIfZsgaPXj4IiDx-beguVEUcINqtZBkfFYQ5ZX63K7r9JbDaEA2JSL44A80STVwVxQBVHZNm31_xB9J-8zLBzn8_UbP8nJ4JcKm5grF6xaVQeUfB9xu5KoZaKLS6MY7Tpl88qD0",
    imageAlt: "Abstract fluid 3D shapes representing brand identity rework",
  },
  {
    id: 3,
    category: "advisory",
    categoryLabel: "ADVISORY",
    client: "MetaWorld Inc",
    title: "Metaverse Launch Strategy",
    description:
      "Comprehensive go-to-market strategy for a virtual real estate platform, resulting in a sold-out initial land offering.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuArk4_fIbJgE4NRvuErXV148JpJ_8RHTNKLm85w6Qhw-KUhBE6eCF6dAQfQA3AclA8_NIULk6-GCVa9h3e6LEAzOXtff8sA8fgkYOmeQp5gcP_fpS_wmSoptKrgLbF7wQjuMoqLjLzi-imGHg66PvSErv9nIehJozMeotTaEvokmGkWAod-BE3t4adfAtczvm5PIAK7Dyh_OrXdR6Zi1TUGku1iwUxz_38d6XS9sTtoWWOfcn1zoBILQkFKo4FlqEwdYPzNslDHTYo",
    imageAlt: "Cyberpunk style metaverse environment mockup",
  },
  {
    id: 4,
    category: "advisory",
    categoryLabel: "FUNDRAISING",
    client: "Fintech Global",
    title: "Series B Pitch Deck",
    description:
      "Crafting the narrative and visual design for a $50M raise. Focused on data visualization and clear value proposition.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBxzDqYdvqUCWBSFBzBAk4qWwOt_ENMBid-UmZmVAyrfeY1-h61KH_Vv7UQcF694LcnYHBoBp09uULegU0XFb5bedpufeVazi3osOlzUgCLPRg6p2S1OgOrceWkrobJNKYsLx_MFESnGIPSpWUfZ8Msw0e5uYSZrXsgdrmF4q9swEF3SvUYgjrh1hPGUAmQjzknyTPmRoHeKPlsCKrWKErkcI5d_JsCYVgrIPSR0sZOffYCHE_SQqKO8c8KXIRaicfj7F_6uHjGVKE",
    imageAlt: "Modern minimal slide deck presentation on a laptop",
  },
  {
    id: 5,
    category: "growth",
    categoryLabel: "GROWTH",
    client: "PixelArtists",
    title: "NFT Collection Drop",
    description:
      "Managing discord community growth and whitelist mechanics for a highly anticipated 10k PFP collection.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAYjE4rtiv3Yqt8UZajwPovXzwtGxVPHzr_mF9xh2HjqHjVYuTEHBtdf1_KYxIizcMbGSfP_lzpkXAM8AtBmJZ3_KSZxSQqLx5ST-uLyFa9aU1JQEujj9oGap7WBXvtUXssxwAAhH6eHeQTH8utt8oox7DarSBjvHeOiHANesIvz3py165Iw62n5tLRYYKdtQO3cAhraDEtANL5aWt_hS5bG0jTUVI9D6bQmRWppdAE8k7ChyxFHhlEJ5fF_2y4sxarFQZexfOiYRs",
    imageAlt: "Colorful digital art NFT collection preview",
  },
  {
    id: 6,
    category: "advisory",
    categoryLabel: "ADVISORY",
    client: "SafeChain",
    title: "Smart Contract Audit",
    description:
      "Providing technical advisory and coordinating with top-tier audit firms to secure a new lending protocol before mainnet launch.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDNxbsgMhQRojmixe3RLgF5oIfpWHcoEgzabHvnrCwqxkc9UQlTSBS-hD1NbjaxG9UEdtljOVf8bTHe34vvRy8-nGwNfAN4X15vf68WUemwVoeX4hBpV-RzK1-sKlSpLBretdV0UCxEhNdsKX0qqkTzx0ClD454U5OFSQp7UDFCoA20zzr09izefrryqxEQL2OHFseZ18iERVSUPdWLdPdsVVpk9xy3LmD1pK6xg1_32MoLGNjG-z1z8EyzQYfD7LJoMC8Mv1r1ZjY",
    imageAlt: "Matrix style binary code and smart contract code on screen",
  },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-[400px] sm:h-[600px] lg:h-[800px] bg-[radial-gradient(circle_at_50%_0%,rgba(19,236,91,0.15),transparent_60%)]" />
        <div className="absolute bottom-0 right-0 w-[250px] sm:w-[400px] lg:w-[500px] h-[250px] sm:h-[400px] lg:h-[500px] bg-[#13ec5b]/5 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px]" />
        <div className="absolute top-[40%] left-[-100px] sm:left-[-150px] lg:left-[-200px] w-[300px] sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[450px] lg:h-[600px] bg-[#13ec5b]/5 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px]" />
      </div>

      <Header />

      <main className="relative z-10 flex-grow flex flex-col items-center w-full pt-20 sm:pt-24 lg:pt-28">
        <div className="w-full max-w-[1280px] px-4 sm:px-6 md:px-10 py-8 sm:py-12 md:py-20 flex flex-col gap-8 sm:gap-12">
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 sm:gap-8 relative">
            <div className="flex flex-col gap-4 sm:gap-6 max-w-2xl z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#13ec5b]/10 border border-[#13ec5b]/20 w-fit">
                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#13ec5b] animate-pulse" />
                <span className="text-[#13ec5b] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                  Our Portfolio
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter text-white">
                Engineered Success. <br />
                <span className="text-[#13ec5b]">Real Results.</span>
              </h1>

              {/* Description */}
              <p className="text-gray-400 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl">
                We build digital products that define the future. Explore our
                selected works across growth hacking, advisory, and branding in
                the Web3 space.
              </p>
            </div>

            {/* Floating 3D Shape - Hidden on mobile */}
            <div className="hidden md:block absolute -right-10 top-[-60px] w-64 sm:w-80 h-64 sm:h-80 opacity-60 pointer-events-none animate-float">
              <div
                className="w-full h-full bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgYDJ_TNXuygiHZawSllnJYVvlHs0zayD5urpDS8680yFevt2sx1R8Z3ajDKyIc4JRaQYvIoZFyyIbPnlxkw1X8L5keMo0GEJ12OyhrqJIO4Ki27obiY4Bo6JQ2ypjwSkcsesbsWCILI_fRoA2Ob7qYbdmiZcUJPZjJ91gZsT-eBcjXwqJ8G-xaxEucABcgjxn0D_jr-gatxEBas8VmcXdBqp-ahVl6pPQgYqcfFcJvrWc2d9eC2oWa4YFYmV6ujpk3RCc2I67VyM')",
                }}
              />
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 sm:gap-3 py-3 sm:py-4 border-b border-white/5">
            <button
              onClick={() => setActiveFilter("all")}
              className={`group flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeFilter === "all"
                  ? "bg-[#13ec5b] text-black"
                  : "bg-[#112217] border border-white/10 hover:border-[#13ec5b]/50 hover:bg-[#1a3324] text-gray-300 hover:text-white"
              }`}
            >
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
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              <span className="font-bold sm:font-semibold">All Work</span>
            </button>
            <button
              onClick={() => setActiveFilter("growth")}
              className={`group flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeFilter === "growth"
                  ? "bg-[#13ec5b] text-black"
                  : "bg-[#112217] border border-white/10 hover:border-[#13ec5b]/50 hover:bg-[#1a3324] text-gray-300 hover:text-white"
              }`}
            >
              <svg
                className={`w-4 sm:w-5 h-4 sm:h-5 ${
                  activeFilter === "growth"
                    ? "text-black"
                    : "group-hover:text-[#13ec5b] transition-colors"
                }`}
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
              <span>Growth Hacking</span>
            </button>
            <button
              onClick={() => setActiveFilter("advisory")}
              className={`group flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeFilter === "advisory"
                  ? "bg-[#13ec5b] text-black"
                  : "bg-[#112217] border border-white/10 hover:border-[#13ec5b]/50 hover:bg-[#1a3324] text-gray-300 hover:text-white"
              }`}
            >
              <svg
                className={`w-4 sm:w-5 h-4 sm:h-5 ${
                  activeFilter === "advisory"
                    ? "text-black"
                    : "group-hover:text-[#13ec5b] transition-colors"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span>Advisory</span>
            </button>
            <button
              onClick={() => setActiveFilter("branding")}
              className={`group flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeFilter === "branding"
                  ? "bg-[#13ec5b] text-black"
                  : "bg-[#112217] border border-white/10 hover:border-[#13ec5b]/50 hover:bg-[#1a3324] text-gray-300 hover:text-white"
              }`}
            >
              <svg
                className={`w-4 sm:w-5 h-4 sm:h-5 ${
                  activeFilter === "branding"
                    ? "text-black"
                    : "group-hover:text-[#13ec5b] transition-colors"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
              <span>Branding</span>
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group relative flex flex-col h-full rounded-xl sm:rounded-2xl bg-[#112217]/40 border border-white/5 overflow-hidden hover:border-[#13ec5b]/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(19,236,91,0.3)] hover:-translate-y-1"
              >
                {/* Image */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-900 relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10" />
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    style={{ backgroundImage: `url('${project.image}')` }}
                    role="img"
                    aria-label={project.imageAlt}
                  />
                  {/* Category Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20 bg-black/60 backdrop-blur text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-full border border-white/10">
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-4 sm:p-6 gap-3 sm:gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#13ec5b] text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                      {project.client}
                    </p>
                    <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight group-hover:text-[#13ec5b] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <Link
                    href={`/projects/${project.client.toLowerCase().replace(/\s+/g, "-")}`}
                    className="mt-auto pt-3 sm:pt-4 flex items-center text-white text-xs sm:text-sm font-bold group-hover:text-[#13ec5b] transition-colors"
                  >
                    View Case Study{" "}
                    <svg
                      className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform"
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
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <section className="w-full max-w-[960px] mx-auto px-4 sm:px-6 pb-16 sm:pb-20 lg:pb-24 relative z-10 mt-8 sm:mt-12">
          <div className="bg-[rgba(17,34,23,0.6)] backdrop-blur-[12px] border border-white/5 rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-16 flex flex-col items-center text-center gap-4 sm:gap-6 overflow-hidden relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-[#13ec5b]/20 blur-[60px] sm:blur-[100px] rounded-full pointer-events-none" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white relative z-10">
              Ready to scale?
            </h2>
            <p className="text-gray-400 max-w-lg text-sm sm:text-base lg:text-lg relative z-10">
              We only work with a select number of clients to ensure maximum
              impact. See if you qualify for our accelerator program.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4 w-full justify-center relative z-10">
              <Link
                href="/contact"
                className="bg-[#13ec5b] hover:bg-[#13ec5b]/90 text-black h-11 sm:h-12 px-6 sm:px-8 rounded-lg text-sm sm:text-base font-bold transition-transform transform hover:scale-105 shadow-[0_0_20px_rgba(19,236,91,0.4)]"
              >
                Apply Now
              </Link>
              <button className="bg-transparent border border-white/20 hover:border-white text-white h-11 sm:h-12 px-6 sm:px-8 rounded-lg text-sm sm:text-base font-bold transition-colors">
                Book a Call
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-[#23482f] bg-[#020503] py-6 sm:py-8 z-10 relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2 text-white opacity-80">
            <div className="size-4 sm:size-5 text-[#13ec5b]">
              <svg
                className="w-full h-full"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="text-xs sm:text-sm font-semibold">
              Ventora Labs © {new Date().getFullYear()}
            </span>
          </div>
          <div className="flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-gray-400 hover:text-[#13ec5b] text-xs sm:text-sm transition-colors"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-[#13ec5b] text-xs sm:text-sm transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-[#13ec5b] text-xs sm:text-sm transition-colors"
            >
              Instagram
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

