import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/configs/reown'
import '@/styles/globals.css'

const recoleta = localFont({
  src: '../fonts/recoleta.ttf',
  variable: '--font-recoleta',
})

const satoshi = localFont({
  src: '../fonts/satoshi.otf',
  variable: '--font-satoshi',
})

export const metadata: Metadata = {
  title: 'Portal | Stamp',
  description: 'Stamp',
  icons: {
    icon: '/logo.png',
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: JSX.Element
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${satoshi.variable} ${recoleta.variable} font-satoshi antialiased`}>{children}</body>
    </html>
  )
}
