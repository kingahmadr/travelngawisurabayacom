import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Hubungi Kami - Travel Ngawi Surabaya",
  description:
    "Hubungi Travel Ngawi Surabaya. Kontak ahli perjalanan kami untuk merencanakan petualangan Jawa Timur yang sempurna.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cloud-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-tollway-charcoal mb-4">
            Hubungi <span className="text-java-green">Kami</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Siap memulai petualangan Jawa Timur Anda? Hubungi ahli perjalanan kami dan mari rencanakan perjalanan
            sempurna Anda bersama-sama.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-java-green mt-1" />
                    <div>
                      <h3 className="font-semibold text-tollway-charcoal mb-2">Alamat Kantor</h3>
                      <p className="text-gray-600">
                        Jl. Raya Kedunggalar, Dawung Rejo
                        <br />
                        Kec. Jogorogo, Kabupaten Ngawi, Jawa Timur 63262
                        <br />
                        Indonesia
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-java-green mt-1" />
                    <div>
                      <h3 className="font-semibold text-tollway-charcoal mb-2">Nomor Telepon</h3>
                      <p className="text-gray-600">
                        Utama: +62 8589 5162 613
                        <br />
                        WhatsApp: +62 8589 5162 613
                        <br />
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-java-green mt-1" />
                    <div>
                      <h3 className="font-semibold text-tollway-charcoal mb-2">Alamat Email</h3>
                      <p className="text-gray-600">
                        Umum: info@travelngawisurabaya.com
                        <br />
                        Pemesanan: booking@travelngawisurabaya.com
                        <br />
                        Dukungan: support@travelngawisurabaya.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card> */}

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-java-green mt-1" />
                    <div>
                      <h3 className="font-semibold text-tollway-charcoal mb-2">Jam Operasional</h3>
                      <p className="text-gray-600">
                        Setiap hari
                        <br />
                        Pagi start Jogorogo jam 7.00
                        <br />
                        Malam start Jogorogo jam 19.00
                        <br />
                        {/* <span className="text-java-green">Dukungan Darurat 24/7</span> */}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-tollway-charcoal mb-6">Kirim Pesan kepada Kami</h2>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <Card>
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3955.576333695164!2d111.2582932!3d-7.5119319!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79f3e9ed83987f%3A0xa9f518892020c210!2sCTR%20Tour%20And%20Travel!5e0!3m2!1sen!2sid!4v1765159779089!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Travel Ngawi Surabaya Office Location"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
