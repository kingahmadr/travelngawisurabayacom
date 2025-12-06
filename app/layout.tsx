import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Travel Ngawi Surabaya - Pengalaman Perjalanan Jawa Timur Autentik",
  description:
    "Temukan keindahan Jawa Timur bersama Travel Ngawi Surabaya. Tur berpemandu ahli, pengalaman autentik, dan petualangan tak terlupakan di jantung budaya Indonesia.",
  keywords:
    "wisata Jawa Timur, tur Ngawi, agen perjalanan Surabaya, wisata Indonesia, tur berpemandu, pengalaman budaya",
  authors: [{ name: "Travel Ngawi Surabaya" }],
  openGraph: {
    title: "Travel Ngawi Surabaya - Pengalaman Perjalanan Jawa Timur Autentik",
    description: "Temukan keindahan Jawa Timur dengan tur berpemandu ahli dan pengalaman budaya autentik.",
    url: "https://travelngawisurabaya.com",
    siteName: "Travel Ngawi Surabaya",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-cloud-mist text-tollway-charcoal`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
