import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
// import { MapPin, Clock, Users } from "lucide-react"
import Image from "next/image"

const destinations = [
  {
    id: 1,
    name: "Jogorogo - Ngawi - surabaya (via karangjati)",
    // location: "Taman Nasional Bromo Tengger Semeru",
    // duration: "2 Hari 1 Malam",
    // groupSize: "4-8 Orang",
    price: "Mulai Rp 230.000",
    // image: "/placeholder.svg?height=400&width=600",
    image: "https://i.ibb.co.com/cm83b3m/rute-perjalanan-1.png",
    description: "Pemberangkatan setiap hari, pagi start jogorogo jam 7.00, malam start jogorogo jam 19.00",
  },
  {
    id: 2,
    name: "Jogorogo - madiun - surabaya",
    // location: "Kota Malang",
    // duration: "1 Hari",
    // groupSize: "6-12 Orang",
    price: "Mulai Rp 230.000",
    image: "https://i.ibb.co.com/FLyy19rY/11.jpg?height=1080&width=600",
    description: "Pemberangkatan setiap hari, pagi start jogorogo jam 7.00, malam start jogorogo jam 19.00",
  },
  {
    id: 3,
    name: "Madiun - Surabaya",
    // location: "Kabupaten Lumajang",
    // duration: "1 Hari",
    // groupSize: "4-10 Orang",
    price: "Mulai Rp 200.000",
    image: "https://i.ibb.co.com/bggR3SKL/rute-perjalanan-2.png",
    description: "Pemberangkatan setiap hari, pagi start jogorogo jam 7.00, malam start jogorogo jam 19.00",
    
  },
  {
    id: 4,
    name: "Caruban - Surabaya",
    // location: "Surabaya",
    // duration: "Setengah Hari",
    // groupSize: "8-15 Orang",
    price: "Mulai Rp 200.000",
    image: "https://i.ibb.co.com/21NLQVhG/5.jpg",
    description: "Pemberangkatan setiap hari, pagi start jogorogo jam 7.00, malam start jogorogo jam 19.00",
  },
  {
    id: 5,
    name: "Nganjuk - Surabaya",
    // location: "Surabaya",
    // duration: "Setengah Hari",
    // groupSize: "8-15 Orang",
    price: "Mulai Rp 170.000",
    image: "https://i.ibb.co.com/DS5sv0N/4.jpg",
    description: "Pemberangkatan setiap hari, pagi start jogorogo jam 7.00, malam start jogorogo jam 19.00",
  },
]

export function FeaturedDestinations() {
  return (
    <section className="py-20 bg-cloud-mist" id="fetured-destinations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-tollway-charcoal mb-4">
            Rute <span className="text-java-green">Perjalanan</span> Kami
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Rute perjalanan yang kami sediakan
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {destinations.map((destination) => (
            // <Card key={destination.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Card key={destination.id} className="overflow-hidden">
              <div className="relative">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  width={400}
                  height={1000}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-4 right-4 bg-sunset-gold text-tollway-charcoal px-3 py-1 rounded-full font-semibold">
                  {destination.price}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-tollway-charcoal mb-2">{destination.name}</h3>

                {/* <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{destination.location}</span>
                </div> */}

                <p className="text-gray-600 mb-4">{destination.description}</p>

                {/* <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {destination.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {destination.groupSize}
                  </div>
                </div> */}

                {/* <Button className="w-full bg-java-green hover:bg-java-green/90 text-white">
                  Pelajari Lebih Lanjut
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-java-green text-java-green hover:bg-java-green hover:text-white"
          >
            <a href="#fetured-destinations">Lihat Semua Destinasi</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
