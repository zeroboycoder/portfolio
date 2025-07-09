import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pyae Sone Khant Dev',
  description: 'Resourceful and detail-oriented Backend Web Developer with over 3 years of experience building scalable backend systems, RESTful and GraphQL APIs, and real-time solutions.',
  generator: 'Pyae Sone Khant Dev',
  icons: {
    icon: 'favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
