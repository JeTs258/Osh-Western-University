import type { Metadata } from 'next'
import './globals.css'
import { Layout } from '@/components/layout'
import { defaultHeaderConfig, defaultFooterConfig } from '@/config/layout.config'

export const metadata: Metadata = {
  title: 'University Portal',
  description: 'Welcome to University Portal - Excellence in Education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout
          headerProps={defaultHeaderConfig}
          footerProps={defaultFooterConfig}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
