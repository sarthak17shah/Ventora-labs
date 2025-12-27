"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-background-dark/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background-dark/60">
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <div className="size-7 sm:size-8 text-primary flex items-center justify-center bg-white/5 rounded-lg border border-white/10 p-1 sm:p-1.5 shadow-[0_0_15px_rgba(0,224,142,0.2)]">
            <svg
              className="w-full h-full"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="text-white text-lg sm:text-xl font-display font-bold tracking-tight">
            Ventora Labs
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className="text-text-muted hover:text-primary transition-colors text-sm font-medium"
          >
            Home
          </Link>

          {/* About Us Dropdown */}
          <div
            className="group relative"
            onMouseEnter={() => setOpenDropdown("about")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              className="flex items-center gap-1 text-text-muted hover:text-primary transition-colors text-sm font-medium cursor-pointer"
            >
              About Us
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  openDropdown === "about" ? "-rotate-180" : ""
                }`}
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
            </button>
            {openDropdown === "about" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[900px] max-w-[95vw] bg-[#0A0C0A] border border-white/10 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl z-50">
                <div className="grid grid-cols-2 gap-0">
                  {/* Left Column - WHAT WE DO */}
                  <div className="p-6 border-r border-white/5">
                    <h3 className="text-primary text-xs font-bold uppercase tracking-widest mb-4">
                      WHAT WE DO
                    </h3>
                    <div className="space-y-3">
                      <Link
                        href="/services"
                        className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary group-hover/item:border-primary transition-colors">
                          <svg
                            className="w-5 h-5 text-primary group-hover/item:text-black transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-bold text-sm mb-0.5 group-hover/item:text-primary transition-colors">
                            Services
                          </h4>
                          <p className="text-gray-400 text-xs leading-snug">
                            Discover our innovative solutions tailored to your
                            needs.
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/about#expertise"
                        className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary group-hover/item:border-primary transition-colors">
                          <svg
                            className="w-5 h-5 text-primary group-hover/item:text-black transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-bold text-sm mb-0.5 group-hover/item:text-primary transition-colors">
                            Expertise
                          </h4>
                          <p className="text-gray-400 text-xs leading-snug">
                            Explore our core strengths in blockchain and Web3.
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/about#incubation"
                        className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary group-hover/item:border-primary transition-colors">
                          <svg
                            className="w-5 h-5 text-primary group-hover/item:text-black transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-bold text-sm mb-0.5 group-hover/item:text-primary transition-colors">
                            Incubation
                          </h4>
                          <p className="text-gray-400 text-xs leading-snug">
                            Learn how we nurture startups into thriving
                            businesses.
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column - COMPANY */}
                  <div className="p-6">
                    <h3 className="text-primary text-xs font-bold uppercase tracking-widest mb-4">
                      COMPANY
                    </h3>
                    <div className="space-y-3">
                      <Link
                        href="/about#achievements"
                        className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary group-hover/item:border-primary transition-colors">
                          <svg
                            className="w-5 h-5 text-primary group-hover/item:text-black transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                            />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-bold text-sm mb-0.5 group-hover/item:text-primary transition-colors">
                            Achievements
                          </h4>
                          <p className="text-gray-400 text-xs leading-snug">
                            Highlighting our milestones, successes, and impact
                            metrics.
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/about#knowledge"
                        className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary group-hover/item:border-primary transition-colors">
                          <svg
                            className="w-5 h-5 text-primary group-hover/item:text-black transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-bold text-sm mb-0.5 group-hover/item:text-primary transition-colors">
                            Knowledge Base
                          </h4>
                          <p className="text-gray-400 text-xs leading-snug">
                            Access insights, resources, and thought leadership
                            content.
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Projects Dropdown */}
          <div
            className="group relative"
            onMouseEnter={() => setOpenDropdown("projects")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              className={`flex items-center gap-1 transition-colors text-sm font-medium cursor-pointer ${
                pathname?.startsWith("/projects")
                  ? "text-primary"
                  : "text-text-muted hover:text-primary"
              }`}
            >
              Projects
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  openDropdown === "projects" ? "-rotate-180" : ""
                }`}
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
            </button>
            {pathname?.startsWith("/projects") && (
              <div className="absolute -bottom-7 left-0 w-full h-[2px] bg-primary shadow-[0_0_10px_rgba(0,224,142,0.8)]" />
            )}
            {openDropdown === "projects" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[900px] max-w-[95vw] bg-[#0A0C0A] border border-white/10 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl z-50">
                <div className="grid grid-cols-2 gap-0">
                  {/* Left Column - WHAT WE DO */}
                  <div className="p-6 border-r border-white/5">
                    <h3 className="text-primary text-xs font-bold uppercase tracking-widest mb-4">
                      WHAT WE DO
                    </h3>
                    <div className="space-y-3">
                      <Link
                        href="/projects?filter=growth"
                        className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary group-hover/item:border-primary transition-colors">
                          <svg
                            className="w-5 h-5 text-primary group-hover/item:text-black transition-colors"
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
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-bold text-sm mb-0.5 group-hover/item:text-primary transition-colors">
                            Growth Hacking
                          </h4>
                          <p className="text-gray-400 text-xs leading-snug">
                            Rapid user acquisition and viral growth strategies.
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/projects?filter=advisory"
                        className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary group-hover/item:border-primary transition-colors">
                          <svg
                            className="w-5 h-5 text-primary group-hover/item:text-black transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-bold text-sm mb-0.5 group-hover/item:text-primary transition-colors">
                            Advisory
                          </h4>
                          <p className="text-gray-400 text-xs leading-snug">
                            Strategic consulting for Web3 and tech companies.
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/projects?filter=branding"
                        className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary group-hover/item:border-primary transition-colors">
                          <svg
                            className="w-5 h-5 text-primary group-hover/item:text-black transition-colors"
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
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-bold text-sm mb-0.5 group-hover/item:text-primary transition-colors">
                            Branding
                          </h4>
                          <p className="text-gray-400 text-xs leading-snug">
                            Complete visual identity and design systems.
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column - COMPANY */}
                  <div className="p-6">
                    <h3 className="text-primary text-xs font-bold uppercase tracking-widest mb-4">
                      COMPANY
                    </h3>
                    <div className="space-y-3">
                      <Link
                        href="/projects"
                        className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary group-hover/item:border-primary transition-colors">
                          <svg
                            className="w-5 h-5 text-primary group-hover/item:text-black transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-bold text-sm mb-0.5 group-hover/item:text-primary transition-colors">
                            All Case Studies
                          </h4>
                          <p className="text-gray-400 text-xs leading-snug">
                            Browse our complete portfolio of successful projects.
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/projects#results"
                        className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary group-hover/item:border-primary transition-colors">
                          <svg
                            className="w-5 h-5 text-primary group-hover/item:text-black transition-colors"
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
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-bold text-sm mb-0.5 group-hover/item:text-primary transition-colors">
                            Results & Metrics
                          </h4>
                          <p className="text-gray-400 text-xs leading-snug">
                            See the measurable impact of our work.
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Our Show Dropdown */}
          <div
            className="group relative"
            onMouseEnter={() => setOpenDropdown("show")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1 text-text-muted hover:text-primary transition-colors text-sm font-medium cursor-pointer">
              Our Show
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  openDropdown === "show" ? "-rotate-180" : ""
                }`}
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
            </button>
            {openDropdown === "show" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[900px] max-w-[95vw] bg-[#0A0C0A] border border-white/10 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl z-50">
                <div className="grid grid-cols-2 gap-0">
                  {/* Left Column - WHAT WE DO */}
                  <div className="p-6 border-r border-white/5">
                    <h3 className="text-primary text-xs font-bold uppercase tracking-widest mb-4">
                      WHAT WE DO
                    </h3>
                    <div className="space-y-3">
                      <Link
                        href="/show#podcast"
                        className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary group-hover/item:border-primary transition-colors">
                          <svg
                            className="w-5 h-5 text-primary group-hover/item:text-black transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-bold text-sm mb-0.5 group-hover/item:text-primary transition-colors">
                            Podcast
                          </h4>
                          <p className="text-gray-400 text-xs leading-snug">
                            Listen to industry insights and founder stories.
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/show#videos"
                        className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary group-hover/item:border-primary transition-colors">
                          <svg
                            className="w-5 h-5 text-primary group-hover/item:text-black transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-bold text-sm mb-0.5 group-hover/item:text-primary transition-colors">
                            Video Content
                          </h4>
                          <p className="text-gray-400 text-xs leading-snug">
                            Watch our latest videos and tutorials.
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/show#events"
                        className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary group-hover/item:border-primary transition-colors">
                          <svg
                            className="w-5 h-5 text-primary group-hover/item:text-black transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-bold text-sm mb-0.5 group-hover/item:text-primary transition-colors">
                            Events
                          </h4>
                          <p className="text-gray-400 text-xs leading-snug">
                            Join us at conferences and networking events.
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column - COMPANY */}
                  <div className="p-6">
                    <h3 className="text-primary text-xs font-bold uppercase tracking-widest mb-4">
                      COMPANY
                    </h3>
                    <div className="space-y-3">
                      <Link
                        href="/show#blog"
                        className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary group-hover/item:border-primary transition-colors">
                          <svg
                            className="w-5 h-5 text-primary group-hover/item:text-black transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-bold text-sm mb-0.5 group-hover/item:text-primary transition-colors">
                            Blog & Articles
                          </h4>
                          <p className="text-gray-400 text-xs leading-snug">
                            Read our latest thoughts and industry analysis.
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/show#newsletter"
                        className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary group-hover/item:border-primary transition-colors">
                          <svg
                            className="w-5 h-5 text-primary group-hover/item:text-black transition-colors"
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
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-bold text-sm mb-0.5 group-hover/item:text-primary transition-colors">
                            Newsletter
                          </h4>
                          <p className="text-gray-400 text-xs leading-snug">
                            Subscribe for weekly insights and updates.
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="text-primary font-bold hover:text-primary-hover transition-colors text-sm font-medium"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="hidden lg:flex group relative px-6 py-2.5 bg-white text-black font-display font-bold text-sm rounded-full overflow-hidden transition-all hover:bg-primary hover:text-black hover:shadow-[0_0_20px_rgba(0,224,142,0.4)]">
            <span className="relative z-10">Start Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/5 bg-background-dark/95 backdrop-blur-xl">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            <Link
              href="/"
              className="text-white hover:text-primary transition-colors text-base font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-primary transition-colors text-base font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/projects"
              className="text-white hover:text-primary transition-colors text-base font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/show"
              className="text-white hover:text-primary transition-colors text-base font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Show
            </Link>
            <Link
              href="/contact"
              className="text-primary font-bold hover:text-primary-hover transition-colors text-base font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <button className="w-full mt-2 px-6 py-3 bg-primary text-black font-display font-bold text-sm rounded-full">
              Start Project
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

