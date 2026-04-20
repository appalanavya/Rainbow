import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ThemesSection } from "@/components/themes-section"
import { GallerySection } from "@/components/gallery-section"
import { PricingSection } from "@/components/pricing-section"
import { SpecialOfferSection } from "@/components/special-offer-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ContactSection } from "@/components/contact-section"
import { BookingCtaSection } from "@/components/booking-cta-section"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

export default function HomePage() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ThemesSection />
      <GallerySection />
      <PricingSection />
      <SpecialOfferSection />
      <ReviewsSection />
      <ContactSection />
      <BookingCtaSection />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
