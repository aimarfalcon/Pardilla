"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 12, suffix: "+", label: "Años de experiencia" },
  { value: 5000, suffix: "+", label: "Mascotas atendidas" },
  { value: 6, suffix: "", label: "Veterinarias especialistas" },
  { value: 4.8, suffix: "", label: "Valoración en Google" },
]

function AnimatedCounter({ value, suffix, duration = 2000 }: { value: number, suffix: string, duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const steps = 60
    const increment = value / steps
    const stepDuration = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Number.isInteger(value) ? Math.floor(current) : parseFloat(current.toFixed(1)))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible, value, duration])

  return (
    <span ref={ref}>
      {Number.isInteger(value) ? count.toLocaleString('es-ES') : count}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="relative py-20 bg-card">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group"
            >
              <div className="inline-flex flex-col items-center">
                <span className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-2 tabular-nums">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-sm sm:text-base text-muted-foreground font-medium">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}
