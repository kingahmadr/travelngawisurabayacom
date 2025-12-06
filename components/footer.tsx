import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-tollway-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-8 w-8 text-java-green" />
              <span className="font-bold text-xl">Travel Ngawi Surabaya</span>
            </div>
            <p className="text-gray-300 mb-4">
              Mitra terpercaya Anda untuk pengalaman perjalanan Jawa Timur yang autentik. Temukan permata tersembunyi
              dan ciptakan kenangan tak terlupakan.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-300 hover:text-java-green cursor-pointer" />
              <Instagram className="h-6 w-6 text-gray-300 hover:text-java-green cursor-pointer" />
              <Twitter className="h-6 w-6 text-gray-300 hover:text-java-green cursor-pointer" />
              <Youtube className="h-6 w-6 text-gray-300 hover:text-java-green cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-java-green">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-java-green">
                  Layanan Kami
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-java-green">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-java-green">
                  Hubungi Kami
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-java-green">
                  Blog Perjalanan
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Destinasi Populer</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/destinations/bromo" className="text-gray-300 hover:text-java-green">
                  Gunung Bromo
                </Link>
              </li>
              <li>
                <Link href="/destinations/malang" className="text-gray-300 hover:text-java-green">
                  Warisan Malang
                </Link>
              </li>
              <li>
                <Link href="/destinations/tumpak-sewu" className="text-gray-300 hover:text-java-green">
                  Tumpak Sewu
                </Link>
              </li>
              <li>
                <Link href="/destinations/surabaya" className="text-gray-300 hover:text-java-green">
                  Kota Surabaya
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-gray-300 hover:text-java-green">
                  Lihat Semua
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Informasi Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-java-green mt-1" />
                <div>
                  <p className="text-gray-300">Jl. Raya Ngawi-Surabaya No. 123</p>
                  <p className="text-gray-300">Ngawi, East Java 63219</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-java-green" />
                <p className="text-gray-300">+62 123 456 7890</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-java-green" />
                <p className="text-gray-300">info@travelngawisurabaya.com</p>
              </div>
              <p className="text-gray-300">Senin - Jumat: 08:00 - 18:00</p>
              <p className="text-gray-300">Sabtu: 09:00 - 16:00</p>
              <p className="text-gray-300">Minggu: 10:00 - 14:00</p>
              <span className="text-java-green">Dukungan Darurat 24/7</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Travel Ngawi Surabaya. Semua hak dilindungi. |
            <Link href="/privacy" className="hover:text-java-green ml-1">
              Kebijakan Privasi
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-java-green ml-1">
              Syarat Layanan
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
