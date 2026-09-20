import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Geist, Geist_Mono, Press_Start_2P, Inter, Roboto } from 'next/font/google'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const pixel = Press_Start_2P({ subsets: ['latin'], weight: '400', variable: '--font-pixel' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-roboto' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'ShikshaOne — Financial clarity for every school',
  description: 'ShikshaOne brings fee collection, parent communication and financial intelligence into one platform.',
  generator: 'v0.app',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} ${pixel.variable} ${inter.variable} ${roboto.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
