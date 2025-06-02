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
                        Jl. Raya Ngawi-Surabaya No. 123
                        <br />
                        Ngawi, East Java 63219
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
                        Utama: +62 123 456 7890
                        <br />
                        WhatsApp: +62 987 654 3210
                        <br />
                        Darurat: +62 555 123 4567
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
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
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-java-green mt-1" />
                    <div>
                      <h3 className="font-semibold text-tollway-charcoal mb-2">Jam Operasional</h3>
                      <p className="text-gray-600">
                        Senin - Jumat: 08:00 - 18:00
                        <br />
                        Sabtu: 09:00 - 16:00
                        <br />
                        Minggu: 10:00 - 14:00
                        <br />
                        <span className="text-java-green">Dukungan Darurat 24/7</span>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.123456789!2d111.123456!3d-7.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDcnMjQuNCJTIDExMcKwMDcnMjQuNCJF!5e0!3m2!1sen!2sid!4v1234567890"
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
