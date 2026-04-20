"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Hyderabad",
    rating: 5,
    text: "Absolutely wonderful experience! The team was so patient with my toddler and captured the most beautiful moments. The themes are gorgeous and the final photos exceeded our expectations.",
    avatar: "/images/gallery/family-1.jpg",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Secunderabad",
    rating: 5,
    text: "We celebrated our son's pre-birthday here and it was magical! The Krishna theme setup was breathtaking. Highly recommend Rainbow Kids Studio to all parents.",
    avatar: "/images/gallery/baby-1.jpg",
  },
  {
    id: 3,
    name: "Ananya Reddy",
    location: "Meerpet",
    rating: 5,
    text: "The best investment we made for our daughter's first birthday. The quality of photos, costumes, and props are top-notch. The staff made our baby feel so comfortable.",
    avatar: "/images/gallery/pre-birthday-1.jpg",
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Badangpet",
    rating: 5,
    text: "Professional service, amazing creativity, and wonderful results. Our family photoshoot was a fantastic experience. Will definitely come back for future occasions!",
    avatar: "/images/gallery/maternity-1.jpg",
  },
  {
    id: 5,
    name: "Deepa Krishnan",
    location: "Almasguda",
    rating: 5,
    text: "From booking to final delivery, everything was smooth. The cake smash photos are adorable! Thank you Rainbow Kids Studio for these precious memories.",
    avatar: "/images/themes/cake-smash.jpg",
  },
]

export function ReviewsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  return (
    <section id="reviews" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-br from-rainbow-lavender/15 to-rainbow-pink/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-br from-rainbow-peach/15 to-rainbow-yellow/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            What Parents{" "}
            <span className="bg-gradient-to-r from-primary via-rainbow-peach to-gold bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          
          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 inline-flex items-center gap-3 px-6 py-3 glass rounded-full"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-lg font-semibold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">Rated by Happy Parents</span>
          </motion.div>
        </motion.div>

        {/* Reviews Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main Review Card */}
          <div className="relative glass rounded-3xl p-8 lg:p-12 shadow-xl">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 lg:top-8 lg:right-8">
              <Quote className="w-12 h-12 text-primary/20" />
            </div>

            {/* Review Content */}
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Avatar */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0"
              >
                <div className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src={reviews[currentIndex].avatar}
                    alt={reviews[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Text Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Stars */}
                <div className="flex items-center justify-center lg:justify-start gap-1 mb-4">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Review Text */}
                <motion.p
                  key={`text-${currentIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg lg:text-xl text-foreground leading-relaxed mb-6"
                >
                  &ldquo;{reviews[currentIndex].text}&rdquo;
                </motion.p>

                {/* Author */}
                <motion.div
                  key={`author-${currentIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p className="font-semibold text-foreground">
                    {reviews[currentIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {reviews[currentIndex].location}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrevious}
              className="p-3 rounded-full bg-card border border-border hover:bg-muted transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-gradient-to-r from-primary to-rainbow-peach"
                      : "bg-muted hover:bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-card border border-border hover:bg-muted transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
