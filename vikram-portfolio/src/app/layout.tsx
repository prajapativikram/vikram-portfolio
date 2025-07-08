import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SocialLinks } from "@/components/social-links"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vikram - Portfolio",
  description: "Computer Science & Engineering Student | Full-Stack Developer | AI/ML Enthusiast",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SocialLinks />
      </body>
    </html>
  )
}
