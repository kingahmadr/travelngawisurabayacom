import { HeroSection } from "@/components/hero-section"
// import { AboutSection } from "@/components/about-section"
import { FeaturedDestinations } from "@/components/featured-destinations"
import { OurAdvantages } from "@/components/our-advantages"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      {/* <AboutSection /> */}
      <FeaturedDestinations />
      <OurAdvantages />
      <CTASection />
    </div>
  )
}
