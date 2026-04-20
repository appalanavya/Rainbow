"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const themes = [
  {
    title: "Royal Prince Theme",
    image: "/images/themes/royal-prince.jpg",
    description: "Regal elegance for your little prince",
  },
  {
    title: "Floral Garden Theme",
    image: "/images/themes/floral-garden.jpg",
    description: "Blooming beauty in every shot",
  },
  {
    title: "Traditional Theme",
    image: "/images/themes/traditional.jpg",
    description: "Cultural heritage meets modern photography",
  },
  {
    title: "Krishna Theme",
    image: "/images/themes/krishna.jpg",
    description: "Divine grace and playful charm",
  },
  {
    title: "Cake Smash Theme",
    image: "/images/themes/cake-smash.jpg",
    description: "Sweet celebrations captured forever",
  },
  {
    title: "Vintage Cart Theme",
    image: "/images/themes/vintage-cart.jpg",
    description: "Nostalgic charm with timeless appeal",
  },
  {
    title: "Moon & Stars Theme",
    image: "/images/themes/moon-stars.jpg",
    description: "Celestial dreams come to life",
  },
  {
    title: "Jungle Safari Theme",
    image: "/images/themes/jungle-safari.jpg",
    description: "Wild adventures for little explorers",
  },
]

export function ThemesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-gradient-to-br from-rainbow-peach/20 to-rainbow-yellow/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-br from-rainbow-lavender/20 to-rainbow-pink/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Our Themes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            Explore Our Beautiful{" "}
            <span className="bg-gradient-to-r from-primary via-rainbow-peach to-gold bg-clip-text text-transparent">
              Shoot Themes
            </span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Choose from our curated collection of stunning themes, each designed 
            to create magical memories that will last a lifetime.
          </p>
        </motion.div>

        {/* Themes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg shadow-foreground/10 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                {/* Image */}
                <Image
                  src={theme.image}
                  alt={theme.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-xl font-serif font-semibold text-white mb-1">
                      {theme.title}
                    </h3>
                    <p className="text-white/70 text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      {theme.description}
                    </p>
                  </motion.div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/30 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Can&apos;t find what you&apos;re looking for?{" "}
            <a
              href="https://wa.me/918498920643"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              Contact us
            </a>{" "}
            for custom themes!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
