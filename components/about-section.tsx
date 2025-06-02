import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Award, MapPin } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-tollway-charcoal mb-6">
              Gerbang Menuju
              <span className="text-java-green"> Jawa Timur Autentik</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Travel Ngawi Surabaya lebih dari sekadar agen perjalanan – kami adalah teman lokal Anda yang bersemangat
              berbagi keindahan autentik dan budaya kaya Jawa Timur. Didirikan oleh para ahli lokal yang mengetahui
              setiap jalur tersembunyi dan rahasia budaya.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Dari candi mistis kerajaan kuno hingga pasar yang ramai di kota modern, kami merancang pengalaman personal
              yang menghubungkan Anda dengan hati dan jiwa Indonesia.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <Heart className="h-6 w-6 text-terracotta" />
                <span className="text-tollway-charcoal">Keahlian Lokal</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-terracotta" />
                <span className="text-tollway-charcoal">Grup Kecil</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-6 w-6 text-terracotta" />
                <span className="text-tollway-charcoal">Pemenang Penghargaan</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-terracotta" />
                <span className="text-tollway-charcoal">Permata Tersembunyi</span>
              </div>
            </div>

            <Button className="bg-java-green hover:bg-java-green/90 text-white">Pelajari Lebih Lanjut</Button>
          </div>

          {/* Video */}
          <div className="relative">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Travel Ngawi Surabaya Introduction"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </CardContent>
            </Card>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-sunset-gold text-tollway-charcoal px-4 py-2 rounded-full font-semibold shadow-lg">
              ⭐ 4.9/5 Rating
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
