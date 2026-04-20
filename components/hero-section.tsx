"use client"

import { motion } from "framer-motion"
import { Phone, Images, ChevronDown, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Rainbow Kids Studio"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
        {/* Blur Overlay */}
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* Floating Decorative Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-rainbow-pink/30 to-rainbow-peach/30 blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-40 right-20 w-40 h-40 rounded-full bg-gradient-to-br from-rainbow-lavender/30 to-rainbow-sky/30 blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-40 left-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-rainbow-mint/30 to-rainbow-yellow/30 blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-20 right-1/3 w-36 h-36 rounded-full bg-gradient-to-br from-rainbow-peach/30 to-rainbow-pink/30 blur-2xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <div className="glass-dark px-5 py-2.5 rounded-full flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm text-white/90 font-medium">
                Trusted by 1000+ Happy Parents
              </span>
              <Sparkles className="w-4 h-4 text-gold" />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight text-balance"
          >
            Capturing Magical{" "}
            <span className="bg-gradient-to-r from-rainbow-pink via-rainbow-peach to-rainbow-yellow bg-clip-text text-transparent">
              Childhood Memories
            </span>{" "}
            Forever
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Luxury Kids Photography & Pre-Birthday Shoot Studio in Hyderabad
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="https://wa.me/918498920643"
              target="_blank"
              className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-rainbow-peach text-white font-semibold rounded-full overflow-hidden shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Book Now on WhatsApp
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-rainbow-peach to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
            <Link
              href="#gallery"
              className="group w-full sm:w-auto px-8 py-4 glass-dark text-white font-semibold rounded-full border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Images className="w-5 h-5" />
              View Gallery
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
