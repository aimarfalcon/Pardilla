"use client"

import { useEffect, useRef, useState } from "react"
import { Stethoscope, Heart } from "lucide-react"

const veterinarios = [
  {
    name: "Melania Santana",
    specialties: ["Reproduccion y Obstetricia"],
  },
  {
    name: "Carla Moreno",
    specialties: ["Ecografia", "Dermatologia", "Neonatologia y Pediatria"],
  },
  {
    name: "Sabrina Unger",
    specialties: ["Medicina interna", "Urgencias", "Oftalmologia"],
  },
  {
    name: "Yanira Aleman",
    specialties: ["Medicina preventiva", "Planes de salud"],
  },

  {
    name: "Carla Gutierrez",
    specialties: ["Medicina General", "Ecografia"],
  },
  {
    name: "Dacil Aleman",
    specialties: ["Cirugia", "Reproduccion y neonatologia", "Planes de Salud"],
  },
]

const auxiliares = [
  {
    name: "Arantxa Garcia",
    specialties: ["ATV", "Laboratorio", "Community Manager"],
  },
  {
    name: "Ohara Medina",
    specialties: ["ATV", "Laboratorio"],
  },
  {
    name: "Abigail Chango",
    specialties: ["Recepcionista"],
  },
  {
    name: "Loida Pleguezuelos",
    specialties: ["ATV", "Planes de salud"],
  },
  {
    name: "Yesenia Rojas",
    specialties: ["ATV de quirofano"],
  },
  {
    name: "Alicia Torres",
    specialties: ["Peluqueria"],
  },
]

export function Team() {
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
    <section ref={sectionRef} id="equipo" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className={`text-primary text-sm font-medium tracking-widest uppercase mb-4 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}>
            Nuestro Equipo
          </p>
          <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance ${
            isVisible ? "animate-fade-in-up animation-delay-100" : "opacity-0"
          }`}>
            Profesionales que aman lo que hacen
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg ${
            isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
          }`}>
            Un equipo de profesionales apasionadas y en constante formacion, 
            comprometidas con el bienestar de tu mascota.
          </p>
        </div>

        {/* Veterinarios */}
        <div className={`mb-16 ${isVisible ? "animate-fade-in-up animation-delay-300" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-foreground">Veterinarias</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {veterinarios.map((member, index) => (
              <div 
                key={index}
                className="group bg-card rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary font-serif text-xl font-semibold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {member.name}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {member.specialties.map((specialty, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Auxiliares */}
        <div className={`${isVisible ? "animate-fade-in-up animation-delay-400" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-foreground">Equipo de Apoyo</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {auxiliares.map((member, index) => (
              <div 
                key={index}
                className="group bg-card rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <span className="text-primary font-serif text-xl font-semibold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {member.name}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {member.specialties.map((specialty, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team summary */}
        <div className={`mt-16 text-center max-w-3xl mx-auto ${
          isVisible ? "animate-fade-in-up animation-delay-500" : "opacity-0"
        }`}>
          <p className="text-muted-foreground leading-relaxed">
            Nuestro equipo de <span className="text-foreground font-medium">6 veterinarias</span> y{" "}
            <span className="text-foreground font-medium">6 profesionales de apoyo</span> trabajan 
            juntas como una familia, comprometidas con ofrecer el mejor cuidado a tu mascota.
          </p>
        </div>
      </div>
    </section>
  )
}
