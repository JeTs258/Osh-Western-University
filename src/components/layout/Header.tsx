'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export interface MenuItem {
  label: string
  href: string
  children?: MenuItem[]
}

export interface HeaderProps {
  logo?: {
    src?: string
    alt?: string
    text?: string
  }
  primaryMenu?: MenuItem[]
  secondaryMenu?: MenuItem[]
  ctaButtons?: Array<{
    label: string
    href: string
    variant?: 'primary' | 'secondary'
  }>
  sticky?: boolean
}

export function Header({
  logo = { text: 'University Portal', alt: 'University Logo' },
  primaryMenu = [],
  secondaryMenu = [],
  ctaButtons = [],
  sticky = true,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header
      className={cn(
        'bg-white border-b border-gray-200 z-30',
        sticky && 'sticky top-0'
      )}
    >
      <nav className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              {logo.src ? (
                <Image
                  src={logo.src}
                  alt={logo.alt || 'Logo'}
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
              ) : (
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 bg-primary-600 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold text-lg">U</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900">
                    {logo.text}
                  </span>
                </div>
              )}
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {primaryMenu.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <>
                    <button className="text-gray-700 hover:text-primary-600 font-medium text-sm transition-colors">
                      {item.label}
                      <svg
                        className="inline ml-1 h-4 w-4"
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
                    {openDropdown === item.label && (
                      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-primary-600 font-medium text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            {secondaryMenu.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-primary-600 text-sm transition-colors"
              >
                {item.label}
              </Link>
            ))}
            {ctaButtons.map((button) => (
              <Link
                key={button.label}
                href={button.href}
                className={cn(
                  'px-4 py-2 rounded-md text-sm font-medium transition-colors',
                  button.variant === 'primary'
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                )}
              >
                {button.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="h-6 w-6"
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

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-1">
              {primaryMenu.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.label ? null : item.label
                          )
                        }
                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-600 font-medium"
                      >
                        {item.label}
                        <svg
                          className={cn(
                            'inline ml-1 h-4 w-4 transition-transform',
                            openDropdown === item.label && 'rotate-180'
                          )}
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
                      {openDropdown === item.label && (
                        <div className="pl-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-600"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-600 font-medium"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-1">
              {secondaryMenu.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-primary-600"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 px-4 space-y-2">
              {ctaButtons.map((button) => (
                <Link
                  key={button.label}
                  href={button.href}
                  className={cn(
                    'block px-4 py-2 rounded-md text-sm font-medium text-center transition-colors',
                    button.variant === 'primary'
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  )}
                >
                  {button.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
