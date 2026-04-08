"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, MapPin } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function FinalCta() {
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}>
          Tu mascota merece los mejores cuidados
        </h2>
        
        <p className={`text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed ${
          isVisible ? "animate-fade-in-up animation-delay-100" : "opacity-0"
        }`}>
          Pide tu cita hoy y descubre por qué más de 5.000 familias confían en nosotros 
          para el cuidado de sus compañeros.
        </p>
        
        <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 ${
          isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
        }`}>
          <Button 
            size="lg" 
            variant="secondary"
            className="group text-base px-8 py-6 bg-card text-foreground hover:bg-card/90 shadow-xl"
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
            className="text-base px-8 py-6 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
          >
            <Phone className="mr-2 w-5 h-5" />
            928 70 14 57
          </Button>
        </div>
        
        <div className={`flex items-center justify-center gap-2 text-primary-foreground/70 ${
          isVisible ? "animate-fade-in-up animation-delay-300" : "opacity-0"
        }`}>
          <MapPin className="w-4 h-4" />
          <span className="text-sm">C. Raimundo Lulio, 19 - 35213 Telde, Gran Canaria</span>
        </div>
      </div>
    </section>
  )
}
