import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FeaturedDestinations } from "@/components/featured-destinations"
import { CustomerReviews } from "@/components/customer-reviews"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturedDestinations />
      <CustomerReviews />
      <CTASection />
    </div>
  )
}
