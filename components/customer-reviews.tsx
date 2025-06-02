import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Australia",
    rating: 5,
    text: "Tur sunrise Gunung Bromo benar-benar magis! Pemandu kami sangat berpengetahuan dan pengalamannya melebihi semua harapan. Wawasan lokal membuatnya benar-benar istimewa.",
    image: "/placeholder.svg?height=400&width=600",
    destination: "Gunung Bromo",
  },
  {
    id: 2,
    name: "Marco Rodriguez",
    location: "Spanyol",
    rating: 5,
    text: "Travel Ngawi Surabaya menunjukkan Jawa Timur yang sesungguhnya. Dari air terjun tersembunyi hingga kuliner lokal autentik, setiap momen direncanakan dengan sempurna. Sangat direkomendasikan!",
    image: "/placeholder.svg?height=400&width=600",
    destination: "Tumpak Sewu",
  },
  {
    id: 3,
    name: "Yuki Tanaka",
    location: "Jepang",
    rating: 5,
    text: "Tur warisan budaya di Malang sangat menarik. Semangat pemandu kami terhadap sejarah dan budaya lokal membuat pengalaman tak terlupakan. Layanan profesional dan ramah!",
    image: "/placeholder.svg?height=400&width=600",
    destination: "Warisan Malang",
  },
]

export function CustomerReviews() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-tollway-charcoal mb-4">
            Kata <span className="text-java-green">Wisatawan Kami</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pengalaman nyata dari wisatawan nyata yang menemukan Jawa Timur bersama kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={review.image || "/placeholder.svg"}
                  alt={review.destination}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
              </div>

              {/* Content Overlay */}
              <CardContent className="relative z-10 p-6 text-white h-full flex flex-col justify-between min-h-[400px]">
                <div>
                  <Quote className="h-8 w-8 text-sunset-gold mb-4" />

                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-sunset-gold fill-current" />
                    ))}
                  </div>

                  <p className="text-lg mb-6 leading-relaxed">"{review.text}"</p>
                </div>

                <div>
                  <div className="border-t border-white/20 pt-4">
                    <h4 className="font-semibold text-lg">{review.name}</h4>
                    <p className="text-gray-300">{review.location}</p>
                    <p className="text-sunset-gold text-sm mt-1">{review.destination} Tour</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-java-green">4.9/5</div>
              <div className="text-gray-600">Rating Rata-rata</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-java-green">500+</div>
              <div className="text-gray-600">Pelanggan Puas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-java-green">100%</div>
              <div className="text-gray-600">Tingkat Kepuasan</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-java-green">24/7</div>
              <div className="text-gray-600">Dukungan Tersedia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
