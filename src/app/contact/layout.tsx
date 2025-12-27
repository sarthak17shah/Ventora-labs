import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Ventora Labs",
  description:
    "Get in touch with Ventora Labs. Ready to accelerate your growth? We blend strategy, design, and technology to build brands that dominate the Web3 landscape.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

