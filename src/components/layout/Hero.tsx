import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface HeroProps {
  title?: string
  subtitle?: string
  children?: ReactNode
  backgroundImage?: string
  overlay?: boolean
  size?: 'small' | 'medium' | 'large'
  align?: 'left' | 'center'
  className?: string
}

export function Hero({
  title,
  subtitle,
  children,
  backgroundImage,
  overlay = false,
  size = 'large',
  align = 'center',
  className,
}: HeroProps) {
  const sizeClasses = {
    small: 'py-12 md:py-16',
    medium: 'py-16 md:py-24',
    large: 'py-24 md:py-32 lg:py-40',
  }

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
  }

  return (
    <section
      className={cn(
        'relative bg-gradient-to-br from-primary-50 to-secondary-50',
        sizeClasses[size],
        className
      )}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {overlay && backgroundImage && (
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />
      )}
      <div className="relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            'max-w-4xl',
            align === 'center' && 'mx-auto',
            alignClasses[align]
          )}
        >
          {title && (
            <h1
              className={cn(
                'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6',
                overlay && backgroundImage
                  ? 'text-white'
                  : 'text-gray-900'
              )}
            >
              {title}
            </h1>
          )}
          {subtitle && (
            <p
              className={cn(
                'text-lg md:text-xl lg:text-2xl mb-8',
                overlay && backgroundImage
                  ? 'text-gray-200'
                  : 'text-gray-600'
              )}
            >
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}
