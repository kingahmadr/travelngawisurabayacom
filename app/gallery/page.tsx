import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import GalleryPhoto from "@/components/gallery-photo"

export const metadata: Metadata = {
  title: "Hubungi Kami - Travel Ngawi Surabaya",
  description:
    "Hubungi Travel Ngawi Surabaya. Kontak ahli perjalanan kami untuk merencanakan petualangan Jawa Timur yang sempurna.",
}

export default function GalleryPage() {
    const travelPhotos = [
        {
            id: '1',
            src: 'https://i.ibb.co.com/YB7rmsdB/12.jpg', 
            alt: 'Three cars on the garage',
            width: 1200,
            height: 800
        },
        {
            id: '2',
            src: 'https://i.ibb.co.com/yc2dDMxv/10.jpg',
            alt: 'Elves and Hi-Ace',
            width: 800,
            height: 800
        },
        {
            id: '3',
            src: 'https://i.ibb.co.com/BHpjYg65/9.jpg',
            alt: 'Calya and Sigra',
            width: 800,
            height: 800 
        },
        {
            id: '4',
            src: 'https://i.ibb.co.com/v6N558nB/7.jpg',
            alt: 'Kijang Innova',
            width: 800,
            height: 600
        },
        {
            id: '5',
            src: 'https://i.ibb.co.com/rR1CJYML/1.jpg',
            alt: 'White car Avanza and Red car Calya',
            width: 1200,
            height: 600
        },
        {
            id: '6',
            src: 'https://i.ibb.co.com/PvQbnXjq/5.jpg',
            alt: 'Grey Sigra',
            width: 1000,
            height: 600
        }
    ];
  return (
    <div className="min-h-screen bg-cloud-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-tollway-charcoal mb-4">
            Most <span className="text-java-green">Popular Photo</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">

          {/* Gallery Photo */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <GalleryPhoto photos={travelPhotos} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
