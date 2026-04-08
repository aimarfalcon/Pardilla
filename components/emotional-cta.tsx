"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function EmotionalCta() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/emotional-bg.jpg"
          alt="Mascota feliz con su familia"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/80 to-foreground/70" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className={`text-primary text-sm font-medium tracking-widest uppercase mb-6 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}>
          Tu mascota lo merece
        </p>
        
        <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-card leading-tight mb-8 text-balance ${
          isVisible ? "animate-fade-in-up animation-delay-100" : "opacity-0"
        }`}>
          Ellos nos dan tanto sin pedir nada a cambio. Es hora de devolverles todo ese amor.
        </h2>
        
        <p className={`text-lg sm:text-xl text-card/80 mb-10 max-w-2xl mx-auto leading-relaxed ${
          isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
        }`}>
          En Cania entendemos ese vínculo especial. Por eso cuidamos de ellos como si fueran nuestros.
        </p>
        
        <div className={`flex flex-col sm:flex-row gap-4 justify-center ${
          isVisible ? "animate-fade-in-up animation-delay-300" : "opacity-0"
        }`}>
          <Button 
            size="lg" 
            className="group text-base px-8 py-6 shadow-xl shadow-primary/30"
            asChild
          >
            <a href="tel:+34928701457">
              Pedir Cita
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-base px-8 py-6 bg-card/10 border-card/30 text-card hover:bg-card/20 hover:text-card"
          >
            Llamar: 928 70 14 57
          </Button>
        </div>
      </div>
    </section>
  )
}
