import { ReactNode } from 'react'
import { Header, HeaderProps } from './Header'
import { Footer, FooterProps } from './Footer'

export interface LayoutProps {
  children: ReactNode
  headerProps?: HeaderProps
  footerProps?: FooterProps
}

export function Layout({ children, headerProps, footerProps }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header {...headerProps} />
      <main className="flex-grow">{children}</main>
      <Footer {...footerProps} />
    </div>
  )
}
