"use client"

import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    name: "María García",
    pet: "Luna, Golden Retriever",
    text: "Desde que conocimos Cania, Luna siempre sale feliz de sus visitas. El trato es excepcional, te explican todo con paciencia y se nota que aman lo que hacen. No cambiaríamos de veterinario por nada.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    pet: "Michi, Gato Persa",
    text: "Llevamos 8 años confiando en el equipo de Cania. Han cuidado de Michi desde cachorro y ahora que es mayor, su atención es todavía más especial. Profesionalidad y cariño en cada visita.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    pet: "Rocky, Bulldog Francés",
    text: "Rocky tuvo que operarse de urgencia y el equipo de Cania fue increíble. Nos mantuvieron informados en todo momento y el postoperatorio fue perfecto. Eternamente agradecidos.",
    rating: 5,
  },
  {
    name: "Pedro Hernández",
    pet: "Max, Pastor Alemán",
    text: "Lo que más valoro es que nunca te intentan vender nada que no necesites. Son honestos, cercanos y muy profesionales. Max siempre recibe el mejor cuidado.",
    rating: 5,
  },
  {
    name: "Laura Pérez",
    pet: "Cleo, Gata Común",
    text: "Encontré a Cleo abandonada y en Cania la atendieron de inmediato. Hoy está sana y feliz gracias a ellos. Su compromiso con los animales es admirable.",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className={`text-primary text-sm font-medium tracking-widest uppercase mb-4 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}>
            Testimonios
          </p>
          <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance ${
            isVisible ? "animate-fade-in-up animation-delay-100" : "opacity-0"
          }`}>
            Lo que dicen de nosotros
          </h2>
          <div className={`flex items-center justify-center gap-3 mb-4 ${
            isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
          }`}>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-foreground font-semibold text-lg">4,8</span>
            <span className="text-muted-foreground">(342 reseñas en Google)</span>
          </div>
        </div>

        {/* Carousel */}
        <div className={`relative ${isVisible ? "animate-fade-in-up animation-delay-300" : "opacity-0"}`}>
          <div className="flex items-center gap-4 lg:gap-8">
            {/* Prev button */}
            <Button
              variant="outline"
              size="icon"
              className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-full border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Cards container */}
            <div className="flex-1 overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <Card className="border-border bg-card">
                      <CardContent className="p-8 lg:p-10">
                        <Quote className="w-10 h-10 text-primary/20 mb-6" />
                        
                        {/* Stars */}
                        <div className="flex gap-1 mb-6">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                          ))}
                        </div>
                        
                        {/* Quote */}
                        <p className="text-foreground text-lg lg:text-xl leading-relaxed mb-8 italic">
                          {`"${testimonial.text}"`}
                        </p>
                        
                        {/* Author */}
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-primary font-serif font-bold text-xl">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">
                              {testimonial.name}
                            </p>
                            <p className="text-muted-foreground text-sm">
                              {testimonial.pet}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Next button */}
            <Button
              variant="outline"
              size="icon"
              className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-full border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={nextTestimonial}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Mobile navigation */}
          <div className="flex justify-center gap-3 mt-6 sm:hidden">
            <Button
              variant="outline"
              size="icon"
              className="w-10 h-10 rounded-full"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-10 h-10 rounded-full"
              onClick={nextTestimonial}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-8 bg-primary" 
                    : "bg-border hover:bg-primary/50"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
