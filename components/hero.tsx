"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-vet.jpg"
          alt="Veterinario cuidando de una mascota con cariño"
          fill
          className="object-cover scale-105"
          priority
        />
        {/* Premium overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-2xl">
          <p className={`text-primary text-sm font-medium tracking-widest uppercase mb-6 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}>
            Centro Veterinario Premium en Telde
          </p>
          
          <h1 className={`font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-card leading-[1.1] mb-8 text-balance ${
            isVisible ? "animate-fade-in-up animation-delay-100" : "opacity-0"
          }`}>
            Cuidamos de quienes forman tu familia
          </h1>
          
          <p className={`text-lg sm:text-xl text-card/85 mb-10 leading-relaxed max-w-xl ${
            isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
          }`}>
            Porque sabemos lo importante que es tu mascota para ti, le damos todo 
            el cariño y la atención profesional que merece.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 ${
            isVisible ? "animate-fade-in-up animation-delay-300" : "opacity-0"
          }`}>
            <Button 
              size="lg" 
              className="group text-base px-8 py-6 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300"
              asChild
            >
              <a href="tel:+34928701457">
                Pedir Cita
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-card/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-card/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
