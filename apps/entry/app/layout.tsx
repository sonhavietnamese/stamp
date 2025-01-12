import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import ContextProvider from '@/components/context-provider'
import { ReactNode } from 'react'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | Stamp',
    default: 'Stamp',
  },
  description: 'Stamp',
  icons: {
    icon: '/logo.png',
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased`}>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  )
}
