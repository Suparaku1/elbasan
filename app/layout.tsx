import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Space_Grotesk, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ElbasanChat } from "@/components/elbasan-chat"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Elbasan - Tradita Takohet me Inovacionin",
  description: "Zbuloni trashëgiminë kulturore dhe të ardhmen teknologjike të Elbasanit.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sq" className="dark">
      <body
        className={`${playfair.variable} ${spaceGrotesk.variable} ${inter.variable} font-sans bg-black text-white antialiased selection:bg-red-500 selection:text-white min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <ElbasanChat />
      </body>
    </html>
  )
}
