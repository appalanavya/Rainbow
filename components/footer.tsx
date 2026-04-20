"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Instagram, 
  Facebook, 
  Youtube,
  MapPin, 
  Phone, 
  Mail,
  Heart
} from "lucide-react"
import { Logo } from "./logo"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#pricing", label: "Pricing" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
]

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-foreground text-white overflow-hidden">
      {/* Top Gradient Border */}
      <div className="h-1 bg-gradient-to-r from-rainbow-pink via-rainbow-peach via-rainbow-yellow via-rainbow-mint via-rainbow-sky to-rainbow-lavender" />

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <Logo variant="full" theme="dark" />
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              Creating magical childhood memories through premium photography in Hyderabad.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-primary hover:to-rainbow-peach transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rainbow-peach mt-0.5 flex-shrink-0" />
                <span className="text-white/70">
                  Prashanti hills, Badangpet Rd,<br />
                  Meerpet, Hyderabad 500097
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-rainbow-peach flex-shrink-0" />
                <a href="tel:+917702261384" className="text-white/70 hover:text-white transition-colors">
                  +91 77022 61384
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-rainbow-peach flex-shrink-0" />
                <a href="mailto:info@rainbowkidsstudio.com" className="text-white/70 hover:text-white transition-colors">
                  info@rainbowkidsstudio.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold text-lg mb-6">Working Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between text-white/70">
                <span>Monday - Sunday</span>
                <span>9 AM - 10 PM</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-xl">
              <p className="text-sm text-white/60">
                Book your session today and create unforgettable memories!
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-white/60 text-sm">
              &copy; {currentYear} Rainbow Kids Studio. All rights reserved.
            </p>
            <div className="flex flex-col items-center gap-1">
              <p className="text-white/60 text-sm flex items-center gap-1">
                Designed with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> by{" "}
                <span className="text-white">Navya</span> |{" "}
                <span className="text-rainbow-peach">ProjectGene Tech Solutions</span>
              </p>
              <p className="text-white/50 text-xs">
                For More Websites Contact:{" "}
                <a href="tel:+917989292123" className="text-rainbow-peach hover:text-white transition-colors">
                  7989292123
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
