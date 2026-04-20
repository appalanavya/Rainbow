"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, MessageCircle, ChevronUp, X } from "lucide-react"
import Link from "next/link"

export function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isCtaExpanded, setIsCtaExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* Floating Action Buttons (Desktop) */}
      <div className="fixed bottom-8 right-8 z-40 hidden md:flex flex-col gap-3">
        {/* WhatsApp Button */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
        >
          <Link
            href="https://wa.me/918498920643"
            target="_blank"
            className="group flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 hover:-translate-y-1"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-6 h-6 text-white" />
            {/* Tooltip */}
            <span className="absolute right-full mr-3 px-3 py-1.5 bg-foreground text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Chat on WhatsApp
            </span>
          </Link>
        </motion.div>

        {/* Call Button */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.3 }}
        >
          <Link
            href="tel:+918498920643"
            className="group flex items-center justify-center w-14 h-14 bg-gradient-to-r from-primary to-rainbow-peach rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1"
            aria-label="Call Us"
          >
            <Phone className="w-6 h-6 text-white" />
            {/* Tooltip */}
            <span className="absolute right-full mr-3 px-3 py-1.5 bg-foreground text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Call Us
            </span>
          </Link>
        </motion.div>

        {/* Back to Top */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={scrollToTop}
              className="flex items-center justify-center w-14 h-14 bg-foreground/90 rounded-full shadow-lg hover:bg-foreground transition-all duration-300 hover:-translate-y-1"
              aria-label="Back to top"
            >
              <ChevronUp className="w-6 h-6 text-white" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <AnimatePresence>
          {isCtaExpanded ? (
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              className="bg-foreground/95 backdrop-blur-lg p-4 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-medium">Book Your Session</span>
                <button
                  onClick={() => setIsCtaExpanded(false)}
                  className="p-1.5 text-white/60 hover:text-white"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex gap-3">
                <Link
                  href="https://wa.me/918498920643"
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white font-medium rounded-xl"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Link>
                <Link
                  href="tel:+918498920643"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-primary to-rainbow-peach text-white font-medium rounded-xl"
                >
                  <Phone className="w-5 h-5" />
                  Call
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              className="bg-gradient-to-r from-primary to-rainbow-peach p-4 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold">Book Now</p>
                  <p className="text-white/80 text-sm">Starting at Rs.2,999</p>
                </div>
                <div className="flex gap-2">
                  <Link
                    href="https://wa.me/918498920643"
                    target="_blank"
                    className="flex items-center justify-center w-12 h-12 bg-[#25D366] rounded-full"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5 text-white" />
                  </Link>
                  <Link
                    href="tel:+918498920643"
                    className="flex items-center justify-center w-12 h-12 bg-white rounded-full"
                    aria-label="Call"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Back to Top - Above CTA */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-4 z-30 md:hidden flex items-center justify-center w-12 h-12 bg-foreground/90 rounded-full shadow-lg"
            aria-label="Back to top"
          >
            <ChevronUp className="w-5 h-5 text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
