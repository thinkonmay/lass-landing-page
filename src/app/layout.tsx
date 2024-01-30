import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './grid.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thinkmay',
  description: 'Thinkmay Landingp Page',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"
          className={inter.className}
    >
      <body 
      >{children}</body>
    </html>
  )
}
