import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rainbow Kids Studio | Luxury Kids Photography & Pre-Birthday Shoots in Hyderabad',
  description: 'Capture magical childhood memories at Rainbow Kids Studio. Premium kids photography, pre-birthday shoots, and themed photo sessions in Hyderabad. 30+ theme setups, professional lighting, and luxury costumes.',
  keywords: 'kids photography, pre-birthday shoots, baby photography, Hyderabad, themed photo shoots, cake smash, family portraits',
  generator: 'v0.app',
  openGraph: {
    title: 'Rainbow Kids Studio | Luxury Kids Photography',
    description: 'Premium kids photography and pre-birthday shoots in Hyderabad',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FDF8F5',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable} bg-background`}>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
