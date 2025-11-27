import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Osh-Western University - Empowering minds, shaping futures",
  description:
    "Osh-Western University is a leading institution of higher education offering world-class programs and fostering innovation for tomorrow's leaders.",
  keywords: ["university", "education", "higher education", "Osh-Western", "academic programs"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
