"use client"

import { Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

export function HealthPlans() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="planes" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className={`w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-8 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}>
          <Shield className="w-10 h-10 text-primary" />
        </div>

        {/* Header */}
        <p className={`text-primary text-sm font-medium tracking-widest uppercase mb-4 ${
          isVisible ? "animate-fade-in-up animation-delay-100" : "opacity-0"
        }`}>
          Seguros para Mascotas
        </p>
        <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance ${
          isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
        }`}>
          Protege a tu mejor amigo
        </h2>
        <p className={`text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg mb-10 ${
          isVisible ? "animate-fade-in-up animation-delay-300" : "opacity-0"
        }`}>
          La tranquilidad de saber que tu mascota estara protegida ante cualquier 
          imprevisto. Calcula el mejor seguro adaptado a sus necesidades.
        </p>

        {/* CTA Button */}
        <div className={`${isVisible ? "animate-fade-in-up animation-delay-400" : "opacity-0"}`}>
          <Button 
            size="lg" 
            className="group text-base px-10 py-7 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300"
            asChild
          >
            <a 
              href="https://www.mascotaasegurada.com/DsPet/Pages/LP.html?clon=cirvetsalud&sub=3714" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Simular Seguro
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        {/* Trust indicators */}
        <p className={`text-sm text-muted-foreground mt-8 ${
          isVisible ? "animate-fade-in-up animation-delay-500" : "opacity-0"
        }`}>
          Simulacion sin compromiso. Encuentra el plan perfecto para tu mascota.
        </p>
      </div>
    </section>
  )
}
