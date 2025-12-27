import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Ventora Labs",
  description:
    "We are a collective of strategists and engineers redefining digital marketing. Ventora Labs bridges the gap between Web2 stability and Web3 innovation.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

