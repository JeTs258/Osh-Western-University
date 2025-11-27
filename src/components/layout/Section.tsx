import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface SectionProps {
  children: ReactNode
  title?: string
  subtitle?: string
  spacing?: 'small' | 'medium' | 'large'
  background?: 'white' | 'gray' | 'primary' | 'secondary'
  className?: string
  containerClassName?: string
}

export function Section({
  children,
  title,
  subtitle,
  spacing = 'medium',
  background = 'white',
  className,
  containerClassName,
}: SectionProps) {
  const spacingClasses = {
    small: 'py-8 md:py-12',
    medium: 'py-12 md:py-16 lg:py-20',
    large: 'py-16 md:py-20 lg:py-24',
  }

  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-50',
    secondary: 'bg-secondary-50',
  }

  return (
    <section
      className={cn(
        spacingClasses[spacing],
        backgroundClasses[background],
        className
      )}
    >
      <div
        className={cn(
          'mx-auto max-w-8xl px-4 sm:px-6 lg:px-8',
          containerClassName
        )}
      >
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
