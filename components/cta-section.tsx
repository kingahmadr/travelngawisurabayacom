import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-java-green to-java-green/80 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Siap untuk Petualangan Jawa Timur Anda?</h2>
        <p className="text-xl mb-8 text-green-100">
          Biarkan kami menciptakan perjalanan tak terlupakan yang disesuaikan khusus untuk Anda. Hubungi ahli perjalanan
          kami hari ini dan mulai merencanakan trip impian Anda.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            size="lg"
            className="bg-sunset-gold hover:bg-sunset-gold/90 text-tollway-charcoal px-8 py-4 text-lg font-semibold"
          >
            Pesan Trip Anda Sekarang
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-java-green px-8 py-4 text-lg"
          >
            Konsultasi Gratis
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-green-100">
          <div className="flex items-center">
            <Phone className="h-5 w-5 mr-2" />
            <span>+62 123 456 7890</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-5 w-5 mr-2" />
            <span>info@travelngawisurabaya.com</span>
          </div>
        </div>
      </div>
    </section>
  )
}
