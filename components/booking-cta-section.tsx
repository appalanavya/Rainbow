"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Phone, MessageCircle, Calendar } from "lucide-react"
import Link from "next/link"

export function BookingCtaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/95 to-foreground" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-10 w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-rainbow-peach/20 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-gradient-to-br from-rainbow-lavender/20 to-rainbow-sky/20 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8"
          >
            <Calendar className="w-4 h-4 text-rainbow-peach" />
            <span className="text-white/80 text-sm">Limited Slots Available This Week</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 text-balance"
          >
            Book Your Baby&apos;s{" "}
            <span className="bg-gradient-to-r from-rainbow-pink via-rainbow-peach to-rainbow-yellow bg-clip-text text-transparent">
              Magical Shoot
            </span>{" "}
            Today
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-white/70 mb-10 max-w-2xl mx-auto"
          >
            Don&apos;t miss the opportunity to capture these precious moments. 
            Contact us now to reserve your spot at Rainbow Kids Studio.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="https://wa.me/918498920643"
              target="_blank"
              className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Booking
            </Link>
            <Link
              href="tel:+918498920643"
              className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white text-foreground font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
