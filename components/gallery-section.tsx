"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const categories = [
  { id: "all", label: "All" },
  { id: "pre-birthday", label: "Pre Birthday Shoots" },
  { id: "baby", label: "Baby Shoots" },
  { id: "family", label: "Family Shoots" },
  { id: "maternity", label: "Maternity Shoots" },
]

// Gallery images - easily replaceable
const galleryImages = [
  { id: 1, src: "/images/gallery/pre-birthday-1.jpg", category: "pre-birthday", alt: "Pre Birthday Shoot" },
  { id: 2, src: "/images/gallery/baby-1.jpg", category: "baby", alt: "Baby Shoot" },
  { id: 3, src: "/images/gallery/family-1.jpg", category: "family", alt: "Family Shoot" },
  { id: 4, src: "/images/gallery/maternity-1.jpg", category: "maternity", alt: "Maternity Shoot" },
  { id: 5, src: "/images/themes/royal-prince.jpg", category: "pre-birthday", alt: "Royal Prince Theme" },
  { id: 6, src: "/images/themes/floral-garden.jpg", category: "baby", alt: "Floral Garden Theme" },
  { id: 7, src: "/images/themes/krishna.jpg", category: "pre-birthday", alt: "Krishna Theme" },
  { id: 8, src: "/images/themes/cake-smash.jpg", category: "pre-birthday", alt: "Cake Smash Theme" },
  { id: 9, src: "/images/themes/moon-stars.jpg", category: "baby", alt: "Moon Stars Theme" },
  { id: 10, src: "/images/themes/jungle-safari.jpg", category: "baby", alt: "Jungle Safari Theme" },
  { id: 11, src: "/images/themes/traditional.jpg", category: "family", alt: "Traditional Theme" },
  { id: 12, src: "/images/themes/vintage-cart.jpg", category: "baby", alt: "Vintage Cart Theme" },
]

export function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  const currentImageIndex = selectedImage !== null
    ? filteredImages.findIndex((img) => img.id === selectedImage)
    : -1

  const handlePrevious = () => {
    if (currentImageIndex > 0) {
      setSelectedImage(filteredImages[currentImageIndex - 1].id)
    }
  }

  const handleNext = () => {
    if (currentImageIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentImageIndex + 1].id)
    }
  }

  return (
    <section id="gallery" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-gradient-to-br from-rainbow-sky/10 to-rainbow-mint/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-gradient-to-br from-rainbow-pink/10 to-rainbow-peach/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Our Gallery
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            Precious Moments{" "}
            <span className="bg-gradient-to-r from-primary via-rainbow-peach to-gold bg-clip-text text-transparent">
              Captured Forever
            </span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Browse through our collection of beautiful photographs and see the 
            magic we create at Rainbow Kids Studio.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-primary to-rainbow-peach text-white shadow-lg shadow-primary/25"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group relative cursor-pointer ${
                  index % 5 === 0 ? "row-span-2" : ""
                }`}
                onClick={() => setSelectedImage(image.id)}
              >
                <div
                  className={`relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 ${
                    index % 5 === 0 ? "aspect-[3/5]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* View Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation */}
            {currentImageIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrevious()
                }}
                className="absolute left-4 lg:left-8 p-2 text-white/80 hover:text-white transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-10 h-10" />
              </button>
            )}
            {currentImageIndex < filteredImages.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleNext()
                }}
                className="absolute right-4 lg:right-8 p-2 text-white/80 hover:text-white transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-10 h-10" />
              </button>
            )}

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[85vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {filteredImages.find((img) => img.id === selectedImage) && (
                <Image
                  src={filteredImages.find((img) => img.id === selectedImage)!.src}
                  alt={filteredImages.find((img) => img.id === selectedImage)!.alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
