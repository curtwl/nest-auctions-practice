import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthProvider from '@/context/AuthProvider'
import Nav from '../components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chingu Auction Website',
  description: 'worlds greatest auction site - hopefully',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

    <html lang='en'>
      <body className={inter.className}>
          <Nav />
          {children}
      </body>
    </html>
  )
}
