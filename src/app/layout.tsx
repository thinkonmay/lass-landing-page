import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './grid.css'
import './globals.css'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Popup from '../components/popup/popup'

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
       id="root"
      >
      <Header/>
        {children}
      <Footer></Footer>
      <Popup></Popup>
      </body>
    </html>
  )
}
