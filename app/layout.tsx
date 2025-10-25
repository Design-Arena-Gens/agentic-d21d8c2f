import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dream Finds Company - Digital Marketing Excellence',
  description: 'Transform your brand with innovative digital marketing solutions. Expert services in SEO, social media, content marketing, and more.',
  keywords: 'digital marketing, SEO, social media marketing, content marketing, branding',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
