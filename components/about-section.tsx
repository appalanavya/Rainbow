"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Palette, 
  Snowflake, 
  Lightbulb, 
  Crown, 
  Sparkles, 
  Users 
} from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "30+ Theme Setups",
    description: "Diverse creative themes for every occasion",
    gradient: "from-rainbow-pink to-rainbow-peach",
  },
  {
    icon: Snowflake,
    title: "Indoor AC Studio",
    description: "Climate-controlled comfort for your little ones",
    gradient: "from-rainbow-sky to-rainbow-lavender",
  },
  {
    icon: Lightbulb,
    title: "Professional Lighting",
    description: "Studio-grade equipment for perfect shots",
    gradient: "from-rainbow-yellow to-rainbow-peach",
  },
  {
    icon: Crown,
    title: "Luxury Costumes",
    description: "Premium outfits for themed photoshoots",
    gradient: "from-rainbow-lavender to-rainbow-pink",
  },
  {
    icon: Sparkles,
    title: "Creative Concepts",
    description: "Unique ideas tailored to your vision",
    gradient: "from-rainbow-mint to-rainbow-sky",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Skilled photographers who love kids",
    gradient: "from-rainbow-peach to-rainbow-yellow",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-rainbow-pink/10 to-rainbow-lavender/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-rainbow-mint/10 to-rainbow-sky/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
            About Our Studio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            Where Dreams Come to Life Through{" "}
            <span className="bg-gradient-to-r from-primary via-rainbow-peach to-gold bg-clip-text text-transparent">
              Photography
            </span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            At Rainbow Kids Studio, we believe every child deserves to have their 
            magical moments captured in the most beautiful way. Our state-of-the-art 
            studio in Hyderabad combines creativity, professionalism, and a genuine 
            love for children to create stunning photographs you&apos;ll treasure forever.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-8 bg-card rounded-2xl border border-border/50 shadow-lg shadow-foreground/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`relative w-14 h-14 mb-6 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="relative text-muted-foreground">
                  {feature.description}
                </p>

                {/* Corner Decoration */}
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-to-br from-muted/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { value: "1000+", label: "Happy Families" },
            { value: "30+", label: "Theme Setups" },
            { value: "5+", label: "Years Experience" },
            { value: "4.9", label: "Google Rating" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 glass rounded-2xl"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-rainbow-peach bg-clip-text text-transparent"
              >
                {stat.value}
              </motion.div>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
