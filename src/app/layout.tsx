import './globals.css'
import type { Metadata } from 'next'
import { Lexend_Deca } from 'next/font/google'

const lexend = Lexend_Deca ({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Click Car Buyer',
  description: 'Click Car Buyer variant website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lexend.className}>{children}</body>
    </html>
  )
}
