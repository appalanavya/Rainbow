"use client"

import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  variant?: "full" | "icon" | "text"
  theme?: "light" | "dark"
}

export function Logo({ className, variant = "full", theme = "light" }: LogoProps) {
  const textColor = theme === "light" ? "#2D2926" : "#FDFBF9"
  const goldColor = "#C9A962"
  const goldLight = "#E8D5A3"
  
  // Pastel rainbow gradient colors
  const rainbowColors = {
    pink: "#F5C6D6",
    peach: "#FAD9C1",
    yellow: "#FEF0C3",
    mint: "#C8E6D5",
    sky: "#C1DCE8",
    lavender: "#D8C8E8"
  }

  if (variant === "icon") {
    return (
      <svg
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-10 w-10", className)}
      >
        <defs>
          <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={rainbowColors.pink} />
            <stop offset="20%" stopColor={rainbowColors.peach} />
            <stop offset="40%" stopColor={rainbowColors.yellow} />
            <stop offset="60%" stopColor={rainbowColors.mint} />
            <stop offset="80%" stopColor={rainbowColors.sky} />
            <stop offset="100%" stopColor={rainbowColors.lavender} />
          </linearGradient>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={goldLight} />
            <stop offset="50%" stopColor={goldColor} />
            <stop offset="100%" stopColor={goldLight} />
          </linearGradient>
        </defs>
        
        {/* Outer ring with rainbow gradient */}
        <circle cx="30" cy="30" r="28" stroke="url(#rainbowGradient)" strokeWidth="2.5" fill="none" />
        
        {/* Inner gold ring */}
        <circle cx="30" cy="30" r="22" stroke="url(#goldGradient)" strokeWidth="1.5" fill="none" />
        
        {/* Camera lens aperture blades - stylized */}
        <path
          d="M30 12 L34 20 L30 18 L26 20 Z"
          fill="url(#goldGradient)"
          opacity="0.8"
        />
        <path
          d="M48 30 L40 34 L42 30 L40 26 Z"
          fill="url(#goldGradient)"
          opacity="0.8"
        />
        <path
          d="M30 48 L26 40 L30 42 L34 40 Z"
          fill="url(#goldGradient)"
          opacity="0.8"
        />
        <path
          d="M12 30 L20 26 L18 30 L20 34 Z"
          fill="url(#goldGradient)"
          opacity="0.8"
        />
        
        {/* Center lens */}
        <circle cx="30" cy="30" r="10" fill="url(#rainbowGradient)" opacity="0.3" />
        <circle cx="30" cy="30" r="6" stroke="url(#goldGradient)" strokeWidth="1" fill="none" />
        
        {/* Sparkle accents */}
        <circle cx="42" cy="18" r="1.5" fill={goldColor} />
        <circle cx="45" cy="15" r="0.8" fill={goldLight} />
        <circle cx="18" cy="42" r="1" fill={goldColor} />
      </svg>
    )
  }

  if (variant === "text") {
    return (
      <div className={cn("flex flex-col items-center", className)}>
        <span 
          className="font-serif text-2xl font-semibold tracking-wide"
          style={{ color: textColor }}
        >
          Rainbow Kids
        </span>
        <span 
          className="text-xs tracking-[0.3em] uppercase"
          style={{ color: goldColor }}
        >
          Studio
        </span>
      </div>
    )
  }

  // Full logo with icon + text
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Logo variant="icon" theme={theme} className="h-12 w-12" />
      <div className="flex flex-col">
        <span 
          className="font-serif text-xl font-semibold tracking-wide leading-tight"
          style={{ color: textColor }}
        >
          Rainbow Kids
        </span>
        <span 
          className="text-[10px] tracking-[0.25em] uppercase"
          style={{ color: goldColor }}
        >
          Studio
        </span>
      </div>
    </div>
  )
}

export function LogoMark({ className }: { className?: string }) {
  return <Logo variant="icon" className={className} />
}
