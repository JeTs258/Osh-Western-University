import React from "react";
import Link from "next/link";

export interface FooterLink {
  href: string;
  label: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  sections?: FooterSection[];
  copyrightText?: string;
}

export function Footer({
  sections = [
    {
      title: "Quick Links",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/programs", label: "Programs" },
        { href: "/admissions", label: "Admissions" },
        { href: "/contact", label: "Contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "/library", label: "Library" },
        { href: "/student-portal", label: "Student Portal" },
        { href: "/faculty", label: "Faculty" },
        { href: "/research", label: "Research" },
      ],
    },
    {
      title: "Connect",
      links: [
        { href: "/events", label: "Events" },
        { href: "/news", label: "News" },
        { href: "/careers", label: "Careers" },
        { href: "/support", label: "Support" },
      ],
    },
  ],
  copyrightText = `© ${new Date().getFullYear()} Osh-Western University. All rights reserved.`,
}: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-osh-secondary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm">{copyrightText}</p>
        </div>
      </div>
    </footer>
  );
}
