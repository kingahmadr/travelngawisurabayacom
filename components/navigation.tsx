"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, MapPin } from "lucide-react"
import { DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuItem
 } from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <MapPin className="h-8 w-8 text-java-green" />
              <span className="font-bold text-xl text-tollway-charcoal">Travel Ngawi Surabaya</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-tollway-charcoal hover:text-java-green transition-colors">
              Beranda
            </Link>
            <Link href="/about" className="text-tollway-charcoal hover:text-java-green transition-colors">
              Tentang Kami
            </Link>
            {/* <DropdownMenu >
                <DropdownMenuTrigger>
                  <span className="text-tollway-charcoal hover:text-java-green transition-colors cursor-pointer">
                    Layanan
                  </span>
                </DropdownMenuTrigger>

                <DropdownMenuPortal>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link href="/services/charter" className="w-full">
                        Sewa Mobil Charter
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/services/shuttle" className="w-full">
                        Shuttle Travel
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenuPortal>

            </DropdownMenu> */}
               
            <Link href="/gallery" className="text-tollway-charcoal hover:text-java-green transition-colors">
              Galeri
            </Link>
            <Link href="/contact" className="text-tollway-charcoal hover:text-java-green transition-colors">
              Kontak
            </Link>
            <Button className="bg-java-green hover:bg-java-green/90 text-white">Pesan Sekarang</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-tollway-charcoal hover:text-java-green">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/"
                className="block px-3 py-2 text-tollway-charcoal hover:text-java-green"
                onClick={() => setIsOpen(false)}
              >
                Beranda
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-tollway-charcoal hover:text-java-green"
                onClick={() => setIsOpen(false)}
              >
                Tentang Kami
              </Link>
              {/* <Link
                href="/services"
                className="block px-3 py-2 text-tollway-charcoal hover:text-java-green"
                onClick={() => setIsOpen(false)}
              >
                Layanan
              </Link> */}
              <Link
                href="/gallery"
                className="block px-3 py-2 text-tollway-charcoal hover:text-java-green"
                onClick={() => setIsOpen(false)}
              >
                Galeri
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-tollway-charcoal hover:text-java-green"
                onClick={() => setIsOpen(false)}
              >
                Kontak
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full bg-java-green hover:bg-java-green/90 text-white">Pesan Sekarang</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
