"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Gift, Sparkles } from "lucide-react"
import Link from "next/link"

export function SpecialOfferSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-rainbow-peach to-rainbow-yellow" />
          
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }} />
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-10 left-10 w-24 h-24 rounded-full bg-white/20 blur-2xl"
          />
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white/20 blur-2xl"
          />

          {/* Content */}
          <div className="relative px-8 py-12 lg:px-16 lg:py-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
                >
                  <Gift className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">Special Offer</span>
                  <Sparkles className="w-4 h-4 text-white" />
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4"
                >
                  FREE Cake Provided!
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl text-white/90"
                >
                  Starting at just{" "}
                  <span className="font-bold text-2xl">&#8377;2,999/-</span>
                </motion.p>
              </div>

              {/* Right Content - CTA */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Link
                  href="https://wa.me/918498920643"
                  target="_blank"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <span>Claim Your Offer</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
