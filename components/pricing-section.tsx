"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Check, X, Sparkles } from "lucide-react"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Basic",
    price: "2,999",
    description: "Perfect for simple photoshoots",
    features: [
      { text: "30 Theme setups", included: true },
      { text: "Indoor AC studio", included: true },
      { text: "Costumes provided", included: true },
      { text: "Lighting setup", included: true },
      { text: "Cake provided", included: true },
      { text: "Photographer included", included: false },
    ],
    popular: false,
    gradient: "from-rainbow-sky to-rainbow-lavender",
  },
  {
    name: "Premium",
    price: "5,999",
    description: "Most popular choice for parents",
    features: [
      { text: "30 Themes with costumes", included: true },
      { text: "Photographer included", included: true },
      { text: "Unlimited edited photos", included: true },
      { text: "All raw photos included", included: true },
      { text: "Cake provided", included: true },
      { text: "Premium props access", included: true },
    ],
    popular: true,
    gradient: "from-primary to-rainbow-peach",
  },
  {
    name: "Ultimate",
    price: "9,999",
    description: "Complete cinematic experience",
    features: [
      { text: "30 Themes with costumes", included: true },
      { text: "Photographer included", included: true },
      { text: "Videographer included", included: true },
      { text: "5 min Cinematic Teaser", included: true },
      { text: "Unlimited edited & raw photos", included: true },
      { text: "Cake provided", included: true },
    ],
    popular: false,
    gradient: "from-gold to-rainbow-yellow",
  },
  {
    name: "Newborn Special",
    price: "5,999",
    description: "Perfect for your little one",
    features: [
      { text: "5 Cute Themes lo Baby Photos", included: true },
      { text: "25 Edited HD Pictures, All Raw Footage", included: true },
      { text: "Mom & Dad tho Family Photos FREE", included: true },
      { text: "1 Photo Frame Gift", included: true },
      { text: "Trendy Instagram Reel FREE", included: true },
    ],
    popular: false,
    gradient: "from-rainbow-pink to-rainbow-peach",
  },
  {
    name: "Maternity Shoot",
    price: "6,999",
    description: "Celebrate your journey",
    features: [
      { text: "3 Themes, 3 Outfits, Couple Pics", included: true },
      { text: "20 Edited Photos", included: true },
      { text: "Trendy Instagram Reel FREE", included: true },
      { text: "1 Photo Frame Gift FREE", included: true },
    ],
    popular: false,
    gradient: "from-rainbow-lavender to-rainbow-pink",
  },
]

export function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-rainbow-pink/10 to-rainbow-lavender/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-rainbow-mint/10 to-rainbow-sky/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Pricing
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            Choose Your Perfect{" "}
            <span className="bg-gradient-to-r from-primary via-rainbow-peach to-gold bg-clip-text text-transparent">
              Package
            </span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Transparent pricing with no hidden fees. Every package includes 
            access to our premium studio and themes.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative group ${plan.popular ? "md:-mt-6 md:mb-6" : ""}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
                >
                  <div className="flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-primary to-rainbow-peach text-white text-sm font-medium rounded-full shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </motion.div>
              )}

              <div
                className={`relative h-full p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 ${
                  plan.popular
                    ? "glass border-2 border-primary/30 shadow-2xl shadow-primary/20"
                    : "glass border border-border/50 shadow-xl shadow-foreground/5 hover:shadow-2xl hover:shadow-primary/10"
                }`}
              >
                {/* Gradient Glow for Popular */}
                {plan.popular && (
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-rainbow-peach/10 to-transparent rounded-3xl blur-xl opacity-50" />
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-medium text-foreground">&#8377;</span>
                    <span className={`text-5xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">/-</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      {feature.included ? (
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                          <X className="w-3 h-3 text-muted-foreground" />
                        </div>
                      )}
                      <span
                        className={
                          feature.included
                            ? "text-foreground"
                            : "text-muted-foreground line-through"
                        }
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href="https://wa.me/918498920643"
                  target="_blank"
                  className={`block w-full py-4 text-center font-semibold rounded-xl transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-primary to-rainbow-peach text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
                      : "bg-foreground/5 text-foreground hover:bg-foreground/10"
                  }`}
                >
                  Book This Package
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
