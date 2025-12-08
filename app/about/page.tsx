import type { Metadata } from "next"
import Image from "next/image"
// import { Card, CardContent } from "@/components/ui/card"
// import { Users, Award, Heart, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Tentang Kami - Travel Ngawi Surabaya",
  description:
    "Pelajari tentang cerita, misi, dan komitmen Travel Ngawi Surabaya dalam menyediakan pengalaman perjalanan Jawa Timur yang autentik.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* <section className="relative h-96 flex items-center justify-center"> */}
      <section className="relative h-[400px] md:h-[450px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://i.ibb.co.com/r2VMkqjK/background-about-us.png"
            alt="Story behind Travel Ngawi Surabaya"
            fill
            className="object-cover object-bottom"
            // sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Cerita Kami</h1>
          <p className="text-xl">Penduduk lokal yang bersemangat berbagi keindahan Jawa Timur</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-tollway-charcoal mb-6">
              Lahir dari <span className="text-java-green">Semangat Lokal</span>
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl leading-relaxed mb-6">
              CTR Tour and Travel adalah layanan Travel Ngawi-Surabaya yg didirikan sejak 2020 sampai saat ini. 
              CTR Tour and Travel selalu mengutamakan pelayanan dan membuat pelanggan merasa aman dan nyaman ketika bepergian Ngawi-Surabaya atau rute sebaliknya, dengan rute yg di lewati yaitu start jogorogo, Ngawi, Karangjati, Caruban, Nganjuk, Jombang, Mojokerto, Sidoarjo dan Surabaya.
              Kami juga melayani rute ngawi-magetan-madiun-surabaya.

            </p>

            <div className="text-lg leading-relaxed mb-6">
              Selain Travel Ngawi-Surabaya/Surabaya Ngawi CTR Tour and Travel juga menyediakan pelayanan: 
              <ol type="1" className="list-disc list-inside">
                <li>Charter mobil pribadi (calya, Sigra, Xenia, Avanza, Innova)</li>
                <li>L300 12 Seat dilengkapi dengan AC</li>
                <li>Hiace, 14 Seat untuk sensasi perjalanan mewah anda</li>
                <li>Elf long 19 seat, Elf giga 21 seat </li>
                <li>Medium Bus 35 seat & 40 seat</li>
                <li>Big Bus 50 seat</li>
              </ol>
            </div>

            <p className="text-lg leading-relaxed mb-8">
               Apabila kalian yang ingin berwisata tapi malas untuk memikirkan tujuan, jadwal dll.
               CTR Tour and Travel juga menyediakan layanan EO (Event Organizer).
               Jadi kita yang cari semua mulai dari Tujuan/Destinasi, Armada, Jadwal, Rundown acara, tempat istirahat, tempat makan, tempat oleh-olehnya :)
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      {/* <section className="py-20 bg-cloud-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tollway-charcoal mb-4">
              <span className="text-java-green">Misi & Nilai</span> Kami
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-terracotta mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-tollway-charcoal mb-3">Pengalaman Autentik</h3>
                <p className="text-gray-600">
                  Kami percaya untuk menunjukkan Jawa Timur yang sesungguhnya, bukan hanya atraksi wisata.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-terracotta mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-tollway-charcoal mb-3">Komunitas Utama</h3>
                <p className="text-gray-600">Mendukung komunitas lokal dan melestarikan warisan budaya.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Globe className="h-12 w-12 text-terracotta mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-tollway-charcoal mb-3">Wisata Berkelanjutan</h3>
                <p className="text-gray-600">Melindungi lingkungan untuk generasi mendatang.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-terracotta mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-tollway-charcoal mb-3">Keunggulan</h3>
                <p className="text-gray-600">Memberikan layanan luar biasa dan kenangan tak terlupakan.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Team Video */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-tollway-charcoal mb-8">
            Kenali <span className="text-java-green">Tim</span> Kami
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Kenali penduduk lokal yang bersemangat yang membuat petualangan Jawa Timur Anda menjadi mungkin
          </p>

          <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Meet Our Team - Travel Ngawi Surabaya"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section> */}
    </div>
  )
}
