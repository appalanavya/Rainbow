import fs from 'fs'
import path from 'path'
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

function getGalleryImages() {
  const galleryDir = path.join(process.cwd(), 'public', 'images', 'gallery')
  const themesDir = path.join(process.cwd(), 'public', 'images', 'themes')
  
  let images: any[] = []
  let idCounter = 1

  // Helper to read directory
  const readDir = (dir: string, baseDir: string, defaultCategory: string) => {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir)
      files.forEach(file => {
        if (file.match(/\.(jpg|jpeg|png|webp|avif)$/i)) {
          // Try to guess category from filename or use default
          let category = defaultCategory
          if (file.includes('baby')) category = 'baby'
          else if (file.includes('pre-birthday')) category = 'pre-birthday'
          else if (file.includes('family')) category = 'family'
          else if (file.includes('maternity')) category = 'maternity'
          else if (file.includes('cake-smash')) category = 'pre-birthday'
          else if (file.includes('royal')) category = 'pre-birthday'
          else if (file.includes('floral')) category = 'baby'
          else if (file.includes('traditional')) category = 'family'
          
          images.push({
            id: idCounter++,
            src: `${baseDir}/${file}`,
            category: category,
            alt: file.replace(/\.[^/.]+$/, "").split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
          })
        }
      })
    }
  }

  readDir(galleryDir, '/images/gallery', 'all')
  readDir(themesDir, '/images/themes', 'all')

  return images
}

export default function HomePage() {
  const galleryImages = getGalleryImages()

  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ThemesSection />
      <GallerySection initialImages={galleryImages} />
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
