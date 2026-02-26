import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lizzo Cleaning | Professional Cleaning Services",
  description:
    "Professional residential and commercial cleaning services. Trusted cleaners, flexible scheduling, transparent pricing.",
  generator: "cloudgenz",
  icons: {
    icon: [
      {
        url: "/Logo-Navbar.jpeg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/Logo-Navbar.jpeg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/Logo-Navbar.jpeg",
        type: "image/svg+xml",
      },
    ],
    apple: "/Logo-Navbar.jpeg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
