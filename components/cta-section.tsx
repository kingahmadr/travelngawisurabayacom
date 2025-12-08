import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-java-green to-java-green/80 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Kami juga melayani jasa
        </h2>

        {/* Services List */}
        <ul className="text-xl text-green-100 space-y-2 list-disc list-inside mx-auto max-w-md text-left">
          <li>Carter / drop segala jurusan</li>
          <li>Sewa elf / hiace</li>
          <li>Sewa bus pariwisata</li>
          <li>Biro perjalanan wisata</li>
        </ul>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/6285895162613?text=Saya%20tertarik%20untuk%20reservasi%20travel"
            target="_blank"
            rel="noopener noreferrer"
          >

            <Button
              size="lg"
              className="bg-sunset-gold hover:bg-sunset-gold/90 text-tollway-charcoal px-8 py-4 text-lg font-semibold flex items-center"
              >
              Reservasi Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>

          <Button
            variant="outline"
            size="lg"
            className="border-white text-white max-sm:bg-white max-sm:text-java-green hover:bg-white hover:text-java-green px-8 py-4 text-lg"
          >

            <a
            href="https://wa.me/6285895162613?text=Saya%ingin%konsultasi%terkait%layanan"
            target="_blank"
            rel="noopener noreferrer"
          >Konsultasi Gratis</a>
            
          </Button>
        </div>

        {/* Contact Information */}
        {/* <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-green-100 text-lg">
          <div className="flex items-center">
            <Phone className="h-5 w-5 mr-2" />
            <span>+62 123 456 7890</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-5 w-5 mr-2" />
            <span>info@travelngawisurabaya.com</span>
          </div>
        </div> */}
        
      </div>
    </section>
  )
}
