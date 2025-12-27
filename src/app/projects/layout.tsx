import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies - Ventora Labs",
  description:
    "We build digital products that define the future. Explore our selected works across growth hacking, advisory, and branding in the Web3 space.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

