"use client"

import { Stethoscope, Syringe, Scissors, Heart, Microscope, FileText, Baby, Scan, Sparkles, ShoppingBag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Stethoscope,
    title: "Medicina General",
    description: "Revisiones completas y diagnósticos precisos para mantener a tu mascota saludable.",
  },
  {
    icon: Syringe,
    title: "Medicina Preventiva",
    description: "Planes de salud, vacunaciones y desparasitaciones para prevenir enfermedades.",
  },
  {
    icon: Baby,
    title: "Reproducción y Pediatría",
    description: "Seguimiento de gestación, cesáreas e inseminación artificial con los mejores cuidados.",
  },
  {
    icon: Heart,
    title: "Dermatología",
    description: "Consultas especializadas, pruebas de alergia y biopsias para problemas de piel.",
  },
  {
    icon: Microscope,
    title: "Laboratorio",
    description: "Análisis de sangre, orina y heces con resultados rápidos y precisos.",
  },
  {
    icon: Scan,
    title: "Diagnóstico por Imagen",
    description: "Radiografías, ecografías abdominales y ecocardiografía de última generación.",
  },
  {
    icon: Scissors,
    title: "Cirugía",
    description: "Esterilizaciones, cirugías abdominales y limpiezas dentales con ultrasonido.",
  },
  {
    icon: FileText,
    title: "Documentación",
    description: "Pasaportes, certificados de salud y documentación oficial para viajes.",
  },
  {
    icon: Sparkles,
    title: "Peluquería",
    description: "Servicio profesional de peluquería canina y felina para su bienestar.",
  },
  {
    icon: ShoppingBag,
    title: "Tienda",
    description: "Alimentación de calidad y accesorios seleccionados para tu mascota.",
  },
]

export function Services() {
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
    <section ref={sectionRef} id="servicios" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className={`text-primary text-sm font-medium tracking-widest uppercase mb-4 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}>
            Nuestros Servicios
          </p>
          <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance ${
            isVisible ? "animate-fade-in-up animation-delay-100" : "opacity-0"
          }`}>
            Todo lo que tu mascota necesita
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg ${
            isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
          }`}>
            Ofrecemos una atención integral con los más altos estándares de calidad 
            para el bienestar de tu compañero.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden border-border bg-card ${
                isVisible ? `animate-fade-in-up` : "opacity-0"
              }`}
              style={{ animationDelay: `${(index % 5) * 100 + 200}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
