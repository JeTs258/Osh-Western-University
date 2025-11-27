import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface GridProps {
  children: ReactNode
  cols?: {
    mobile?: 1 | 2
    tablet?: 2 | 3 | 4
    desktop?: 2 | 3 | 4 | 5 | 6
  }
  gap?: 'small' | 'medium' | 'large'
  className?: string
}

export function Grid({
  children,
  cols = { mobile: 1, tablet: 2, desktop: 3 },
  gap = 'medium',
  className,
}: GridProps) {
  const mobileColClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
  }

  const tabletColClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }

  const desktopColClasses = {
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
    5: 'lg:grid-cols-5',
    6: 'lg:grid-cols-6',
  }

  const gapClasses = {
    small: 'gap-4',
    medium: 'gap-6 md:gap-8',
    large: 'gap-8 md:gap-12',
  }

  return (
    <div
      className={cn(
        'grid',
        mobileColClasses[cols.mobile || 1],
        cols.tablet && tabletColClasses[cols.tablet],
        cols.desktop && desktopColClasses[cols.desktop],
        gapClasses[gap],
        className
      )}
    >
      {children}
    </div>
  )
}

export interface GridItemProps {
  children: ReactNode
  span?: {
    mobile?: 1 | 2
    tablet?: 1 | 2 | 3 | 4
    desktop?: 1 | 2 | 3 | 4 | 5 | 6
  }
  className?: string
}

export function GridItem({ children, span, className }: GridItemProps) {
  const mobileSpanClasses = {
    1: 'col-span-1',
    2: 'col-span-2',
  }

  const tabletSpanClasses = {
    1: 'md:col-span-1',
    2: 'md:col-span-2',
    3: 'md:col-span-3',
    4: 'md:col-span-4',
  }

  const desktopSpanClasses = {
    1: 'lg:col-span-1',
    2: 'lg:col-span-2',
    3: 'lg:col-span-3',
    4: 'lg:col-span-4',
    5: 'lg:col-span-5',
    6: 'lg:col-span-6',
  }

  return (
    <div
      className={cn(
        span?.mobile && mobileSpanClasses[span.mobile],
        span?.tablet && tabletSpanClasses[span.tablet],
        span?.desktop && desktopSpanClasses[span.desktop],
        className
      )}
    >
      {children}
    </div>
  )
}
