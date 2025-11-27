import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export interface FooterLink {
  label: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface SocialLink {
  name: string
  href: string
  icon: React.ReactNode
}

export interface FooterProps {
  sections?: FooterSection[]
  contactInfo?: {
    address?: string
    phone?: string
    email?: string
  }
  socialLinks?: SocialLink[]
  complianceText?: string
  logo?: {
    src?: string
    alt?: string
    text?: string
  }
  className?: string
}

export function Footer({
  sections = [],
  contactInfo,
  socialLinks = [],
  complianceText,
  logo = { text: 'University Portal' },
  className,
}: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={cn('bg-gray-900 text-gray-300', className)}>
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              {logo.src ? (
                <Image
                  src={logo.src}
                  alt={logo.alt || 'Logo'}
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
              ) : (
                <>
                  <div className="h-8 w-8 bg-primary-500 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold text-lg">U</span>
                  </div>
                  <span className="text-xl font-bold text-white">
                    {logo.text}
                  </span>
                </>
              )}
            </Link>
            {contactInfo && (
              <div className="space-y-2 text-sm">
                {contactInfo.address && (
                  <p className="flex items-start space-x-2">
                    <svg
                      className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{contactInfo.address}</span>
                  </p>
                )}
                {contactInfo.phone && (
                  <p className="flex items-center space-x-2">
                    <svg
                      className="h-5 w-5 text-gray-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="hover:text-white transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </p>
                )}
                {contactInfo.email && (
                  <p className="flex items-center space-x-2">
                    <svg
                      className="h-5 w-5 text-gray-400 flex-shrink-0"
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
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="hover:text-white transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </p>
                )}
              </div>
            )}
            {socialLinks.length > 0 && (
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            )}
          </div>

          {sections.map((section) => (
            <div key={section.title} className="lg:col-span-2">
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm">
            <p>
              © {currentYear} {logo.text}. All rights reserved.
            </p>
            {complianceText && (
              <p className="mt-4 md:mt-0 text-gray-400">{complianceText}</p>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
