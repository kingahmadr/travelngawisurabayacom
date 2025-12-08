import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube} from "lucide-react"

import { InstagramIcon, FacebookIcon, TiktokIcon } from "@/components/icons/SocialIcons"

export function Footer() {
  return (
    <footer className="bg-tollway-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left items-start">


          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-8 w-8 text-java-green" />
              <span className="font-bold text-xl">Travel Ngawi Surabaya</span>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Mitra terpercaya Anda untuk pengalaman perjalanan travel yang aman, nyaman dan terpercaya.
            </p>

            <div className="flex space-x-4 pt-2">
              <a target="_blank" href="https://www.facebook.com/share/14Qdpbud6iM/" rel="noopener noreferrer">
                <FacebookIcon className="h-6 w-6 text-gray-300 hover:text-java-green" />
              </a>
              <a target="_blank" href="https://www.instagram.com/ctr_tourandtravel/" rel="noopener noreferrer">
                <InstagramIcon className="h-6 w-6 text-gray-300 hover:text-java-green" />
              </a>
              <a target="_blank" href="https://www.tiktok.com/@ctrtourntravel?is_from_webapp=1&sender_device=pc" rel="noopener noreferrer">
                <TiktokIcon className="h-6 w-6 text-gray-300 hover:text-java-green" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-left ml-24 max-sm:ml-0">
            <h3 className="font-semibold text-lg">Tautan Cepat</h3>
            <ul className="space-y-2 text-gray-300 leading-relaxed">
              <li><Link href="/about" className="hover:text-java-green">Tentang Kami</Link></li>
              <li><Link href="/gallery" className="hover:text-java-green">Galeri</Link></li>
              <li><Link href="/contact" className="hover:text-java-green">Hubungi Kami</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-left max-w-sm">
            <h3 className="font-semibold text-lg">Informasi Kontak</h3>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-java-green mt-1" />
                <div className="leading-relaxed text-gray-300">
                  <p>Jl. Raya Kedunggalar, Dawung Rejo, Dawung</p>
                  <p>Kec. Jogorogo, Kabupaten Ngawi, Jawa Timur 63262</p>
                </div>
              </div>

              {/* <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-java-green" />
                <p className="text-gray-300">+62 123 456 7890</p>
              </div> */}

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-java-green" />
                <p className="text-gray-300">info@travelngawisurabaya.com</p>
              </div>

              <div className="leading-relaxed text-gray-300 space-y-1 pt-2">
                <p>Pemberangkatan setiap hari</p>
                <p>Pagi start Jogorogo jam 7.00</p>
                <p>Malam start Jogorogo jam 19.00</p>
                {/* <span className="text-java-green font-semibold block pt-1">Dukungan Darurat 24/7</span> */}
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-8 text-center">
          <p className="text-gray-300 leading-relaxed">
            © {new Date().getFullYear()} Travel Ngawi Surabaya. Semua hak dilindungi.
            <Link href="/privacy" className="hover:text-java-green ml-1">Kebijakan Privasi</Link> |
            <Link href="/terms" className="hover:text-java-green ml-1">Syarat Layanan</Link>
          </p>
        </div>

      </div>
    </footer>
  )
}

