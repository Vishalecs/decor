import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Playfair_Display, Inter, Lora, Great_Vibes } from 'next/font/google'
import { AuthProvider } from '@/lib/auth-context'
import { BookingProvider } from '@/lib/booking-context'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
})
const interFont = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})
const loraFont = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})
const greatVibes = Great_Vibes({
  variable: '--font-great-vibes',
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: {
    default: 'DECOR - Event Decoration & Celebration Booking',
    template: '%s | DECOR',
  },
  description: 'Premium event decoration services for birthdays, weddings, anniversaries, and celebrations in India. Book luxury event decor with DECOR.',
  keywords: ['event decoration', 'birthday decoration', 'wedding decoration', 'celebration booking', 'party decoration'],
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://decor-events.com',
    title: 'DECOR - Premium Event Decoration Services',
    description: 'Design Dreams Beautifully. Book premium event decoration for every celebration.',
    images: [
      {
        url: 'https://decor-events.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DECOR - Premium Event Decoration',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DECOR - Premium Event Decoration Services',
    description: 'Design Dreams Beautifully. Book premium event decoration for every celebration.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf7f5' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0f0f' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${interFont.variable} ${loraFont.variable} ${greatVibes.variable} bg-background`}
    >
      <body className="font-body antialiased bg-background text-foreground">
        <AuthProvider>
          <BookingProvider>
            {children}
          </BookingProvider>
        </AuthProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
