"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Send } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setIsLoading(true)

  //   // Simulate form submission
  //   await new Promise((resolve) => setTimeout(resolve, 2000))

  //   setIsLoading(false)
  //   setIsSubmitted(true)
  // }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const form = e.currentTarget
    const data = new FormData(form)

    const firstName = data.get("firstName")
    const lastName = data.get("lastName")
    const email = data.get("email")
    const phone = data.get("phone")
    const travelType = data.get("travelType")
    const travelDate = data.get("travelDate")
    const message = data.get("message")

    const fullMessage = `
        Halo, saya ingin melakukan reservasi travel.
  Nama: ${firstName} ${lastName}
  Email: ${email}
  Telepon: ${phone || "-"}
  Jenis Layanan: ${travelType || "-"}
  Tanggal Perjalanan: ${travelDate || "-"}
  Catatan:
  ${message}
      `.trim()

    const encodedMessage = encodeURIComponent(fullMessage)

    const waNumber = "6285895162613"
    // const waNumber = "6283890514596"
    window.location.href = `https://wa.me/${waNumber}?text=${encodedMessage}`

    setIsLoading(false)
  }

  if (isSubmitted) {
    return (
      <Card className="border-java-green">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-java-green mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-tollway-charcoal mb-2">Pesan Berhasil Dikirim!</h3>
          <p className="text-gray-600 mb-4">Terima kasih telah menghubungi kami. Kami akan membalas dalam 24 jam.</p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-java-green text-java-green hover:bg-java-green hover:text-white"
          >
            Kirim Pesan Lain
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="firstName" className="text-tollway-charcoal">
            Nama Depan *
          </Label>
          <Input id="firstName" name="firstName" required className="mt-1" placeholder="Masukkan nama depan Anda" />
        </div>
        <div>
          <Label htmlFor="lastName" className="text-tollway-charcoal">
            Nama Belakang *
          </Label>
          <Input id="lastName" name="lastName" required className="mt-1" placeholder="Masukkan nama belakang Anda" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="email" className="text-tollway-charcoal">
            Alamat Email *
          </Label>
          <Input id="email" name="email" type="email" required className="mt-1" placeholder="email.anda@contoh.com" />
        </div>
        <div>
          <Label htmlFor="phone" className="text-tollway-charcoal">
            Nomor Telepon
          </Label>
          <Input id="phone" name="phone" type="tel" className="mt-1" placeholder="+62 123 456 7890" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* <div>
          <Label htmlFor="country" className="text-tollway-charcoal">
            Negara
          </Label>
          <Input id="country" name="country" className="mt-1" placeholder="Negara Anda" />
        </div> */}
        <div>
          <Label htmlFor="travelType" className="text-tollway-charcoal">
            Jenis Layanan
          </Label>
          <Select name="travelType">
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Pilih jenis layanan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="travel">Travel</SelectItem>
              <SelectItem value="carter">Carter / Drop segala jurusan</SelectItem>
              <SelectItem value="rentElfHiace">Sewa elf / hiace</SelectItem>
              <SelectItem value="rentBus">Sewa Bus Pariwisata</SelectItem>
              <SelectItem value="wisata">Biro perjalanan wisata</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="travelDate" className="text-tollway-charcoal">
            Tanggal Perjalanan Diinginkan
          </Label>
          <Input id="travelDate" name="travelDate" type="date" className="mt-1" />
        </div>
      </div>

      <div>
        <Label htmlFor="message" className="text-tollway-charcoal">
          Catatan tambahan *
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          className="mt-1"
          rows={4}
          placeholder="Ceritakan lebih lanjut tentang kebutuhan khusus, atau pertanyaan yang Anda miliki..."
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-java-green hover:bg-java-green/90 text-white py-3 text-lg"
      >
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
            Mengirim Pesan...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Kirim Pesan
          </>
        )}
      </Button>

      <p className="text-sm text-gray-500 text-center">
        * Kolom wajib diisi. Kami menghormati privasi Anda dan tidak akan pernah membagikan informasi Anda.
      </p>
    </form>
  )
}
