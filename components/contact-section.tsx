"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Phone, Clock, Navigation, MessageCircle, Car } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-rainbow-mint/10 to-rainbow-sky/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-rainbow-pink/10 to-rainbow-lavender/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Visit Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            Find Our{" "}
            <span className="bg-gradient-to-r from-primary via-rainbow-peach to-gold bg-clip-text text-transparent">
              Studio
            </span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Visit our premium studio in Hyderabad and experience the magic in person.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-8 lg:p-10 shadow-xl"
          >
            <h3 className="font-serif text-2xl font-bold text-foreground mb-8">
              Contact Information
            </h3>

            {/* Address */}
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-rainbow-peach flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Address</p>
                <p className="text-muted-foreground leading-relaxed">
                  Prashanti hills, Badangpet Rd, Nandi Hills,<br />
                  Prashanthi Hills, Meerpet,<br />
                  Hyderabad, Almasguda,<br />
                  Telangana 500097
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rainbow-sky to-rainbow-lavender flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Phone</p>
                <p className="text-muted-foreground">
                  <a href="tel:+918498920643" className="hover:text-primary transition-colors">
                    +91 77022 61384
                  </a>
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rainbow-mint to-rainbow-sky flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Hours</p>
                <p className="text-muted-foreground">
                  Open Daily: 9 AM – 10 PM
                </p>
              </div>
            </div>

            {/* Travel Badge */}
            <div className="flex items-center gap-2 px-4 py-3 bg-muted rounded-xl mb-8">
              <Car className="w-5 h-5 text-primary" />
              <span className="text-sm text-foreground">
                Only <strong>52 mins</strong> away from city center
              </span>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link
                href="tel:+918498920643"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary to-rainbow-peach text-white font-medium rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </Link>
              <Link
                href="https://wa.me/918498920643"
                target="_blank"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] text-white font-medium rounded-xl hover:shadow-lg hover:shadow-[#25D366]/30 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Link>
              <Link
                href="https://maps.google.com/?q=Prashanti+hills+Badangpet+Rd+Nandi+Hills+Hyderabad"
                target="_blank"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-foreground/10 text-foreground font-medium rounded-xl hover:bg-foreground/20 transition-all duration-300"
              >
                <Navigation className="w-4 h-4" />
                Directions
              </Link>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-xl h-[400px] lg:h-auto"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.7!2d78.5!3d17.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDE4JzAwLjAiTiA3OMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rainbow Kids Studio Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
            {/* Map Overlay */}
            <div className="absolute inset-0 pointer-events-none border-4 border-white/50 rounded-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
