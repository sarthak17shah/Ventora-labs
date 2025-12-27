"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";

interface CaseStudyData {
  title: string;
  subtitle: string;
  category: string;
  description: string;
  heroImage: string;
  stats: {
    label: string;
    value: string;
    change: string;
    icon: string;
  }[];
  challenge: {
    description: string;
    problems: string[];
  };
  solutions: {
    title: string;
    description: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  };
  metrics: {
    before: string;
    after: string;
    reduction: string;
    label: string;
  };
}

// Mock data - in production, this would come from a CMS or API
const caseStudyData: CaseStudyData = {
  title: "SCALING PROJECT ALPHA TO",
  subtitle: "MARKET DOMINANCE",
  category: "Web3 Marketing",
  description:
    "A strategic overhaul delivering 300% ROI in Q1 through precision marketing, data-driven branding, and community mobilization.",
  heroImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBJy9P1qQb5Wynb0daN-REh1AnqblMQIPuXHFGMHiNuRgkbKZYX1ULO5aFM53891ATKqz6uEMp1UHeKdFjUn8D2jUzrbldsQdH-8-ajUTG-vjPXRXB6mOQ3XTafVMdXrvtlBKuEGtkZm3xLdhhYrFWGnW0KdhOc0GjmaKlJc3puoCoEDAU41tUB310T-SmMshWzbmC9E0mKq-To3e-nN9UNBqtjer-EndZyzrrFhMCRRnAkTsWpL3tFlYhVfiS1h65oLT8fiCc8uUU",
  stats: [
    {
      label: "Total ROI",
      value: "300%",
      change: "+300% vs Target",
      icon: "trending_up",
    },
    {
      label: "Impressions",
      value: "1.5M",
      change: "+120% YoY",
      icon: "visibility",
    },
    {
      label: "New Users",
      value: "50k",
      change: "+45% Organic",
      icon: "group_add",
    },
    {
      label: "Conversion",
      value: "4.8%",
      change: "+1.2% Uplift",
      icon: "verified",
    },
  ],
  challenge: {
    description:
      "Project Alpha faced a stagnation point in a saturated market. Despite a superior product, brand visibility was low, and user acquisition costs (CAC) were spiraling out of control. The core community was disengaged, and the messaging lacked the 'futuristic' appeal needed to capture the Web3 audience.",
    problems: [
      "High Customer Acquisition Cost ($150+)",
      "Low Community Engagement Rate (<1%)",
      "Inconsistent Brand Messaging",
      "Poor Social Media Reach",
    ],
  },
  solutions: [
    {
      title: "01. Visual Rebrand",
      description:
        "Overhauled the entire visual identity with 3D assets and dark-mode aesthetics to align with premium tech trends.",
    },
    {
      title: "02. Community Engine",
      description:
        "Implemented a 'Quest' system on Discord, rewarding high-value community actions with exclusive NFTs and roles.",
    },
    {
      title: "03. Influencer Matrix",
      description:
        "Coordinated a simultaneous launch with 50+ micro-influencers to create a 'FOMO' effect across Twitter/X.",
    },
    {
      title: "04. Data Loop",
      description:
        "Set up real-time dashboards to monitor campaign performance and pivot ad spend hourly.",
    },
  ],
  testimonial: {
    quote:
      "Ventora Labs completely transformed our go-to-market strategy. The ROI speaks for itself.",
    author: "Alex Rivera",
    role: "CEO, Project Alpha",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAI-Z34nH_97ZAjMe1Kux3iDEJFQgs6u7Zsg63XWxKYxsscfexDEIVgfH-cUipRMabDW7PZ_QNQFWE-7AYG9Ta2BgUQ9tX4ybbK8PQC8zxiyHMpZ8_EaH_7SkE1ecJPG0fuh6EzgU6Ltc3PnrBkh_Ah_QI3KyH5Obiv5_MD2Uan2TzbVJiU4AfeEvs3sdNV9jKZggcvcdudQQ0NN9RNxDEAIomoc3Lxplf4hvWAZcmQsszNKTsOuMvoQNLJob-MKhj66oGRbpIoe9o",
  },
  metrics: {
    before: "$150",
    after: "$45",
    reduction: "Reduced by 70%",
    label: "Cost Per Acquisition",
  },
};

export default function CaseStudyPage() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("challenge");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["challenge", "solution", "visuals", "results"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Background effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#13ec5b]/10 rounded-full blur-[80px] sm:blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-[#13ec5b]/5 rounded-full blur-[60px] sm:blur-[100px] mix-blend-screen" />
      </div>

      <Header />

      <main className="relative z-10 flex-grow flex flex-col items-center w-full pt-20 sm:pt-24">
        <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 py-4 sm:py-6">
          {/* Breadcrumb */}
          <div className="flex flex-wrap gap-2 py-3 sm:py-4 mb-4 items-center">
            <Link
              href="/"
              className="text-[#92c9a4] hover:text-[#13ec5b] text-xs sm:text-sm font-medium leading-normal"
            >
              Home
            </Link>
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 text-[#92c9a4]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <Link
              href="/projects"
              className="text-[#92c9a4] hover:text-[#13ec5b] text-xs sm:text-sm font-medium leading-normal"
            >
              Case Studies
            </Link>
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 text-[#92c9a4]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-white text-xs sm:text-sm font-medium leading-normal">
              Project Alpha
            </span>
          </div>

          {/* Hero Section */}
          <section className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-end p-6 sm:p-8 md:p-16 mb-12 sm:mb-16 lg:mb-20 bg-[#112217] border border-[#23482f] group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${caseStudyData.heroImage}')` }}
              role="img"
              aria-label="Futuristic neon green abstract data network visualization"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102216] via-[#102216]/80 to-transparent" />
            <div className="relative z-10 w-full max-w-3xl flex flex-col gap-4 sm:gap-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#13ec5b]/30 bg-[#13ec5b]/10 w-fit backdrop-blur-sm">
                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#13ec5b] animate-pulse" />
                <span className="text-[#13ec5b] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                  {caseStudyData.category}
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter">
                {caseStudyData.title}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13ec5b] to-white">
                  {caseStudyData.subtitle}
                </span>
              </h1>

              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                {caseStudyData.description}
              </p>
            </div>
          </section>

          {/* Stats Grid */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16 lg:mb-24 w-full">
            {caseStudyData.stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col gap-1 p-4 sm:p-6 rounded-lg sm:rounded-xl bg-[#1a2e23]/50 border border-[#326744] backdrop-blur-sm hover:border-[#13ec5b]/50 transition-colors group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <svg
                    className="w-4 sm:w-5 h-4 sm:h-5 text-[#13ec5b] group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {stat.icon === "trending_up" && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    )}
                    {stat.icon === "visibility" && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    )}
                    {stat.icon === "group_add" && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    )}
                    {stat.icon === "verified" && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    )}
                  </svg>
                  <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
                <p className="text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                  {stat.value}
                </p>
                <p className="text-[#13ec5b] text-xs sm:text-sm font-medium">
                  {stat.change}
                </p>
              </div>
            ))}
          </section>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mb-12 sm:mb-16 lg:mb-24">
            {/* Sidebar Navigation - Hidden on mobile */}
            <aside className="hidden lg:block lg:col-span-3">
              <nav className="sticky top-32 flex flex-col gap-3 sm:gap-4 border-l border-[#23482f] pl-4 sm:pl-6">
                {[
                  { id: "challenge", label: "01. The Challenge" },
                  { id: "solution", label: "02. The Solution" },
                  { id: "visuals", label: "03. Visual Impact" },
                  { id: "results", label: "04. Results" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left font-medium text-xs sm:text-sm uppercase tracking-wider hover:translate-x-1 transition-transform ${
                      activeSection === item.id
                        ? "text-[#13ec5b]"
                        : "text-gray-500 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-9 flex flex-col gap-12 sm:gap-16 lg:gap-20">
              {/* Challenge Section */}
              <section
                className="scroll-mt-32"
                id="challenge"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <span className="flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-[#1a2e23] border border-[#326744] text-[#13ec5b]">
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
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                    The Challenge
                  </h2>
                </div>
                <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-[#1a2e23]/30 border border-[#23482f] backdrop-blur-sm">
                  <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                    {caseStudyData.challenge.description}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {caseStudyData.challenge.problems.map((problem, index) => (
                      <li key={index} className="flex items-start gap-2 sm:gap-3">
                        <svg
                          className="w-4 sm:w-5 h-4 sm:h-5 text-red-400 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        <span className="text-gray-400 text-xs sm:text-sm">
                          {problem}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Solution Section */}
              <section
                className="scroll-mt-32"
                id="solution"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <span className="flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-[#1a2e23] border border-[#326744] text-[#13ec5b]">
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
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                    The Ventora Solution
                  </h2>
                </div>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                  We deployed a multi-phase strategy focusing on aggressive
                  rebranding, community gamification, and influencer partnerships.
                  Our approach was not just about noise, but about
                  signal—targeted, high-value interactions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {caseStudyData.solutions.map((solution, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-lg sm:rounded-xl bg-[#112217] p-6 sm:p-8 border border-[#23482f] hover:border-[#13ec5b]/50 transition-all duration-300"
                    >
                      <div className="absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 bg-[#13ec5b]/5 rounded-full blur-2xl group-hover:bg-[#13ec5b]/10 transition-colors" />
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[#13ec5b] transition-colors relative z-10">
                        {solution.title}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed relative z-10">
                        {solution.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Visuals Section */}
              <section
                className="scroll-mt-32"
                id="visuals"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <span className="flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-[#1a2e23] border border-[#326744] text-[#13ec5b]">
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
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                    Visual Impact
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 h-[300px] sm:h-[400px] md:h-[500px]">
                  {/* Main Image */}
                  <div className="relative rounded-lg sm:rounded-xl overflow-hidden md:col-span-2 md:row-span-2 group border border-[#23482f]">
                    <img
                      alt="Cyberpunk style dashboard interface displaying growth metrics"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqXnWeiMM-x2Oz01Eixa1iS8xvtJGGavbtOi_SRhSkoCJorRDWvvmJhL38OWvIPRRvt3S9ZG1vrhoFlZgkasWs0VZa0DIUmkIcLFL8CgvaTnv9E9n3jOUkFaYAEnKsJIqJufynDf9U5sM8OlkVqoIyQcxDzhjfYQsOsRzgMheqNcO7XZYK2iru4b7_nOipUNcEB7-RziPD428tDjLKEw7WKrmC-nNW3gFZEPmAw9i4rq87DEfCQDMyITaM5P92mjBfeRmRwXYZROU"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black to-transparent">
                      <p className="text-white font-bold text-base sm:text-lg">
                        New User Interface
                      </p>
                      <p className="text-gray-300 text-xs sm:text-sm">
                        Enhanced engagement through design
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mt-3 sm:mt-4 h-[150px] sm:h-[200px]">
                  <div className="relative rounded-lg sm:rounded-xl overflow-hidden border border-[#23482f] group">
                    <img
                      alt="Abstract 3D metallic shape floating with green lighting"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJAc2-wHHowcLmUCARWKQYOULe-_HBN875CUFh5VpVNMXvSsTcGjavf-XtPj7QZUsvFzZ-irUF_64t5ZaWp5rVgJH9gn6HCOqt4Ws6VXg5G2gfe8tcwo87-pA5cIl1An6RcS1NbI5ajeLy6s_URGWvKpFroUvKWbtAdcOrePA3pjHPqZprxYfkUUrdHGwf1efsZJfZlp2Hd4Dk0yqpxTwWlrB9uZuS8PK6j8KwUK4dAocDIu4m6JD06oEyvNNeOS3IP61kbar_12A"
                    />
                  </div>
                  <div className="relative rounded-lg sm:rounded-xl overflow-hidden border border-[#23482f] group">
                    <img
                      alt="Dark themed mobile application screens showing crypto charts"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9zhjhV53pBEK8xqVABASVPO18XrovoAnPyYiXTF9c3OKECXkgZUs78qFD3iHtHBtLmJBDgnMnxEaXoTquDO5dKOByx3sE7mN0H3ftQ6ScNLPgqz6_BZSqF8ZYALYCi7Cllelj6cSSGoBUBzEIWLLeikj1zaS_DUNzIVexbKoVVEsBWBqN0JFRkHTU1-OVpnipuulrHtXrF6Lc_iXLROQBXJa80ohrxTnMt5eGMTkrWEf2xeqqbCMOTHGejJ7wtKZDGom2Vb2W1Bw"
                    />
                  </div>
                  <div className="relative rounded-lg sm:rounded-xl overflow-hidden border border-[#23482f] group flex items-center justify-center bg-[#1a2e23]">
                    <svg
                      className="w-10 sm:w-12 h-10 sm:h-12 text-[#13ec5b] opacity-50 group-hover:scale-125 transition-transform duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <img
                      alt="Video thumbnail of marketing reel with neon effects"
                      className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7YR-6VsDdDvGLL6TCNPVYXcScDzicFBtYsrCUDWIDXScTexmOj8aRbgmZMmxYpdb5bRPcbkj3fv6hw5q3zFy-xQOtYOsImtPN5gGZ6FfnpwLbgLQQeAwhy7xOsqhbsMVP6AoW-74Rx5LuDWXmVKK8n0mCcuWRVIPihpNw0cQHI2aetcXVYQMux6KgCNUfa-h3kHQpYqwGpYWmxB20HjN6hrGClWuWFy3nwij_QVBN1YqBObHKECQqoIzAxItlD_U_1TbqMiVxJmk"
                    />
                  </div>
                </div>
              </section>

              {/* Results Section */}
              <section
                className="scroll-mt-32"
                id="results"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <span className="flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-[#1a2e23] border border-[#326744] text-[#13ec5b]">
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
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                    Measurable Results
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                  {/* Metrics Card */}
                  <div className="bg-[#102216] border border-[#23482f] p-6 sm:p-8 rounded-xl sm:rounded-2xl flex flex-col justify-between h-full">
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest font-bold mb-2">
                        {caseStudyData.metrics.label}
                      </p>
                      <div className="flex items-baseline gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <span className="text-3xl sm:text-4xl font-bold text-white">
                          {caseStudyData.metrics.after}
                        </span>
                        <span className="text-gray-500 line-through text-base sm:text-lg">
                          {caseStudyData.metrics.before}
                        </span>
                      </div>
                      <div className="w-full bg-[#1a2e23] h-2 rounded-full overflow-hidden mb-2">
                        <div className="bg-[#13ec5b] h-full w-[70%] rounded-full shadow-[0_0_10px_rgba(19,236,91,0.5)]" />
                      </div>
                      <p className="text-[#13ec5b] text-xs sm:text-sm font-medium">
                        {caseStudyData.metrics.reduction}
                      </p>
                    </div>
                    {/* Testimonial */}
                    <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[#23482f]">
                      <p className="text-gray-400 text-xs sm:text-sm mb-2">
                        &quot;{caseStudyData.testimonial.quote}&quot;
                      </p>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-gray-600 overflow-hidden flex-shrink-0">
                          <img
                            alt={caseStudyData.testimonial.author}
                            className="w-full h-full object-cover"
                            src={caseStudyData.testimonial.avatar}
                          />
                        </div>
                        <div>
                          <p className="text-white text-xs sm:text-sm font-bold">
                            {caseStudyData.testimonial.author}
                          </p>
                          <p className="text-gray-500 text-[10px] sm:text-xs uppercase">
                            {caseStudyData.testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Growth Chart */}
                  <div className="bg-[#102216] border border-[#23482f] p-6 sm:p-8 rounded-xl sm:rounded-2xl">
                    <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest font-bold mb-4 sm:mb-6">
                      Growth Trajectory
                    </p>
                    <div className="flex items-end gap-2 h-[150px] sm:h-[200px] w-full mb-3 sm:mb-4">
                      {["Q1", "Q2", "Q3", "Q4"].map((quarter, index) => (
                        <div
                          key={quarter}
                          className={`w-full rounded-t-sm relative group ${
                            index === 3
                              ? "bg-[#13ec5b]/80 h-[80%] shadow-[0_0_15px_rgba(19,236,91,0.3)]"
                              : index === 2
                              ? "bg-[#23482f] h-[55%]"
                              : index === 1
                              ? "bg-[#1a2e23] h-[35%]"
                              : "bg-[#1a2e23] h-[20%]"
                          }`}
                        >
                          <div className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {quarter}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between text-[10px] sm:text-xs text-gray-500 font-medium">
                      <span>Initial Launch</span>
                      <span>Optimization</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* CTA Section */}
          <section className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#13ec5b]/5 border border-[#13ec5b]/20 p-8 sm:p-12 md:p-16 lg:p-24 text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[450px] lg:h-[600px] bg-[#13ec5b]/10 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px]" />
            </div>
            <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter">
                READY TO SCALE <br className="hidden sm:block" /> YOUR VISION?
              </h2>
              <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-xl mx-auto">
                Join the ranks of market leaders. We turn complex challenges into
                dominant market positions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-[#13ec5b] hover:bg-white hover:text-black text-[#112217] text-base sm:text-lg font-bold py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span>Start Your Project</span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
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
                <Link
                  href="/projects"
                  className="flex items-center justify-center gap-2 bg-transparent border border-[#326744] hover:border-[#13ec5b] text-white hover:text-[#13ec5b] text-base sm:text-lg font-bold py-3 px-6 sm:px-8 rounded-lg transition-all duration-300"
                >
                  <span>View More Cases</span>
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="w-full border-t border-[#23482f] bg-[#0d1c13] py-8 sm:py-12 px-4 sm:px-6 md:px-10 mt-12 sm:mt-16 lg:mt-20">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2 text-white opacity-50">
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
              <span className="font-bold tracking-tight text-xs sm:text-sm">
                Ventora Labs © {new Date().getFullYear()}
              </span>
            </div>
            <div className="flex gap-6 sm:gap-8">
              <Link
                href="#"
                className="text-gray-500 hover:text-[#13ec5b] text-xs sm:text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-[#13ec5b] text-xs sm:text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-[#13ec5b] text-xs sm:text-sm transition-colors"
              >
                Twitter / X
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

