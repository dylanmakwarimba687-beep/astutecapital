import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AstuteCapital - AI-Powered Trading Platform",
  description:
    "Professional trading platform with AI-powered signals, advanced analytics, and institutional-grade market intelligence",
  keywords: "trading, AI signals, market analysis, portfolio management, financial technology",
  authors: [{ name: "AstuteCapital" }],
  creator: "AstuteCapital",
  publisher: "AstuteCapital",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#10b981",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://astutecapital.com",
    title: "AstuteCapital - AI-Powered Trading Platform",
    description: "Professional trading platform with AI-powered signals and advanced market analytics",
    siteName: "AstuteCapital",
  },
  twitter: {
    card: "summary_large_image",
    title: "AstuteCapital - AI-Powered Trading Platform",
    description: "Professional trading platform with AI-powered signals and advanced market analytics",
    creator: "@astutecapital",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
