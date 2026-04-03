"use client"

import { Heart, Shield, Clock, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const reasons = [
  {
    icon: Heart,
    title: "Amor por los animales",
    description: "Cada mascota que entra por nuestra puerta es tratada como si fuera nuestra. Porque entendemos el vínculo especial que compartes con tu compañero.",
  },
  {
    icon: Shield,
    title: "Profesionalidad garantizada",
    description: "Un equipo de veterinarias altamente cualificadas y en constante formación para ofrecerte los mejores diagnósticos y tratamientos.",
  },
  {
    icon: Clock,
    title: "Atención personalizada",
    description: "Nos tomamos el tiempo necesario para conocer a tu mascota y a ti. Cada caso es único y merece una atención dedicada.",
  },
  {
    icon: Users,
    title: "Equipo cercano",
    description: "Más que una clínica, somos una familia. Nuestro equipo te acompañará en cada etapa de la vida de tu mascota.",
  },
]

export function WhyChooseUs() {
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className={`text-primary text-sm font-medium tracking-widest uppercase mb-4 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}>
              Por qué elegirnos
            </p>
            <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight ${
              isVisible ? "animate-fade-in-up animation-delay-100" : "opacity-0"
            }`}>
              Tu tranquilidad es nuestra prioridad
            </h2>
            <p className={`text-lg text-muted-foreground leading-relaxed mb-8 ${
              isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
            }`}>
              Sabemos lo difícil que es ver a tu mascota enferma. Por eso, nos esforzamos 
              cada día para que tanto tú como tu compañero os sintáis en las mejores manos. 
              Porque cuando cuidas de ellos, también cuidas de ti.
            </p>
            <div className={`inline-flex items-center gap-3 text-primary font-medium ${
              isVisible ? "animate-fade-in-up animation-delay-300" : "opacity-0"
            }`}>
              <span className="w-12 h-px bg-primary" />
              <span>Desde 2012 cuidando de tu familia</span>
            </div>
          </div>

          {/* Reasons Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className={`group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 ${
                  isVisible ? `animate-fade-in-up animation-delay-${(index + 2) * 100}` : "opacity-0"
                }`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
