"use client"

import { useState, useEffect, useRef } from "react"
import { MapPin, Phone, Clock, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    content: "C. Raimundo Lulio, 19\n35213 Telde, Las Palmas",
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "928 70 14 57",
  },
  {
    icon: Clock,
    title: "Horario",
    content: "Lun: 14:00–20:00\nMar-Vie: 10:00–16:00\nSáb: 10:00–14:00",
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar el mensaje")
      }

      setIsSubmitted(true)
      setFormData({ name: "", email: "", phone: "", message: "" })

      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar el mensaje")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section ref={sectionRef} id="contacto" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className={`text-primary text-sm font-medium tracking-widest uppercase mb-4 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}>
            Contacto
          </p>
          <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance ${
            isVisible ? "animate-fade-in-up animation-delay-100" : "opacity-0"
          }`}>
            Estamos aquí para ayudarte
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg ${
            isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
          }`}>
            Tienes alguna pregunta o quieres pedir cita? Contacta con nosotros 
            y te responderemos lo antes posible.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className={`lg:col-span-2 space-y-6 ${
            isVisible ? "animate-fade-in-up animation-delay-300" : "opacity-0"
          }`}>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardContent className="p-5">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground text-sm whitespace-pre-line leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map */}
            <div className="h-[250px] bg-muted rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.8!2d-15.4194!3d27.9944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc40a3c32d99cb27%3A0x3f8e4d8b8c8c8c8c!2sC.%20Raimundo%20Lulio%2C%2019%2C%2035213%20Telde%2C%20Las%20Palmas!5e0!3m2!1ses!2ses!4v1710000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Centro Veterinario Cania"
              />
            </div>
          </div>

          {/* Contact Form */}
          <Card className={`lg:col-span-3 border-border bg-card ${
            isVisible ? "animate-fade-in-up animation-delay-400" : "opacity-0"
          }`}>
            <CardContent className="p-8 lg:p-10">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Envíanos un mensaje
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Tu nombre *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12 bg-secondary/50 border-border"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Tu email *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12 bg-secondary/50 border-border"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Tu teléfono (opcional)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 bg-secondary/50 border-border"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tu mensaje *"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="resize-none bg-secondary/50 border-border"
                  />
                </div>
                {error && (
                  <p className="text-destructive text-sm text-center">{error}</p>
                )}
                <Button 
                  type="submit" 
                  className="w-full h-12 text-base shadow-lg shadow-primary/20"
                  disabled={isSubmitted || isLoading}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="mr-2 w-4 h-4" />
                      Mensaje Enviado
                    </>
                  ) : isLoading ? (
                    <>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
