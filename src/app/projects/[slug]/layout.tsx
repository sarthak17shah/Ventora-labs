import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study - Ventora Labs",
  description:
    "Explore detailed case studies of our successful projects. See how we've helped clients achieve remarkable growth and market dominance.",
};

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

