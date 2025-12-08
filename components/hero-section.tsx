import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          // src="/placeholder.svg?height=1080&width=1920"
          src="https://i.ibb.co.com/5gSS3d0j/11.jpg?height=1080&width=1920"
          alt="Beautiful East Java landscape with lush green mountains and traditional villages"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          CTR
          <span className="text-sunset-gold"> Tour and</span>
          <br />
          Travel
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Selalu menemani perjalan anda dengan layanan terbaik dan pengalaman tak terlupakan di setiap destinasi.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/6285895162613?text=Saya%20tertarik%20untuk%20reservasi%20travel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-java-green hover:bg-java-green/90 text-white px-8 py-4 text-lg">
              Mulai Perjalanan Anda
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>

          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-tollway-charcoal px-8 py-4 text-lg"
          >
            <Play className="mr-2 h-5 w-5" />
            <a target="_blank" href="https://www.tiktok.com/@ctrtourntravel?is_from_webapp=1&sender_device=pc" rel="noopener noreferrer">
              Tonton Cerita Kami
            </a>
          </Button>
        </div>

        {/* Floating Stats */}
        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-sunset-gold">500+</div>
            <div className="text-sm text-gray-300">Wisatawan Bahagia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sunset-gold">50+</div>
            <div className="text-sm text-gray-300">Destinasi</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sunset-gold">5</div>
            <div className="text-sm text-gray-300">Tahun Pengalaman</div>
          </div>
        </div> */}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
