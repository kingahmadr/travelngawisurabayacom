import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, icons } from "lucide-react"
import Image from "next/image"
import { title } from "process"

const reviews = [
  {
    id: 1,
    title: "Armada yang nyaman",
    text: "Kami menggunakan armada yang nyaman untuk mengantarkan Anda sampai ke tujuan.",
    // image: "/placeholder.svg?height=400&width=600",
    image: "/bg-white-img.jpg",
    icons: "https://i.ibb.co.com/C3mhkD8c/car-wash-300x300.png",
  },
  {
    id: 2,
    title: "Sopir yang berpengalaman",
    text: "Sopir yang sangat berpengalaman dan memiliki keramahan yang luar biasa dalam melayani pelanggan.",
    icons: "https://i.ibb.co.com/twmvDXk4/driver-300x300.png",
    image: "/bg-white-img.jpg",
  },
  {
    id: 3,
    title: "Ketepatan Waktu",
    text: "Kami selalu mengutamakan ketepatan waktu dalam setiap perjalanan Anda.",
    image: "/bg-white-img.jpg",
    icons: "https://i.ibb.co.com/TqM5vnyL/back-in-time-300x300.png"
  },
  {
    id: 4,
    title: "Maksimal 5 Penumpang",
    text: "Kenyamanan penumpang dalam perjalanan adalah prioritas kami dengan maksimal 5 penumpang setiap perjalanan",
    image: "/bg-white-img.jpg",
    icons: "https://i.ibb.co.com/4gWB6XtG/seat-300x300.png"
  },
]

export function OurAdvantages() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-tollway-charcoal mb-4">
            Mengapa Harus Memilih <span className="text-java-green"> CTR Tour & Travel? </span>
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pengalaman nyata dari wisatawan nyata yang menemukan Jawa Timur bersama kami
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-s-3xl" >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={review.image || "/placeholder.svg"}
                  alt={review.image || "/placeholder.svg"}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
              </div>

              {/* Content Overlay */}
              <CardContent className="relative z-10 p-6 text-white h-full flex flex-col min-h-[400px]">
                <div className="flex flex-col items-center">
                  {/* <Quote className="h-8 w-8 text-sunset-gold mb-4" /> */}
                  <Image
                    src={review.icons || "/placeholder.svg"}
                    alt={review.icons || "/placeholder.svg"}
                    width={80}
                    height={80}
                    className="rounded-full border-2 border-white bg-white p-2"
                  />
                  {/* <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-sunset-gold fill-current" />
                      ))}
                      </div> */}
                  {/* <p className="text-lg leading-relaxed">"{review.text}"</p> */}
                </div>
                <div>
                  <div className="border-t border-white/20 pt-4 mt-3">
                    <h4 className="font-semibold text-lg text-sunset-gold ">{review.title}</h4>
                    <p className="text-lg leading-relaxed mt-1">{review.text}</p>
                    {/* <h4 className="font-semibold text-lg">{review.name}</h4>
                    <p className="text-gray-300">{review.location}</p>
                    <p className="text-sunset-gold text-sm mt-1">{review.destination} Tour</p> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        {/* <div className="mt-16 text-center">
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
        </div> */}
      </div>
    </section>
  )
}
