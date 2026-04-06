"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Planes de Salud", href: "#planes" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
  { label: "Aviso Legal", href: "/aviso-legal" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-card/95 backdrop-blur-xl border-b border-border shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-lg leading-tight transition-colors duration-300 ${
                scrolled ? "text-foreground" : "text-card"
              }`}>Cania</span>
              <span className={`text-xs leading-tight transition-colors duration-300 ${
                scrolled ? "text-muted-foreground" : "text-card/80"
              }`}>Centro Veterinario</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              item.href.startsWith("#") ? (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                    scrolled ? "text-foreground" : "text-card/90 hover:text-card"
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                    scrolled ? "text-foreground" : "text-card/90 hover:text-card"
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+34928701457" 
              className={`flex items-center gap-2 text-sm transition-colors duration-300 ${
                scrolled ? "text-muted-foreground hover:text-primary" : "text-card/80 hover:text-card"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>928 70 14 57</span>
            </a>
            <Button size="sm" className="font-medium shadow-lg shadow-primary/20" asChild>
              <a href="https://cal.com/aimar-falcon-yhkxig" target="_blank" rel="noopener noreferrer">
                Pedir Cita
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-card"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-card"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <nav className="py-4 flex flex-col gap-4 border-t border-border/50">
            {navItems.map((item) => (
              item.href.startsWith("#") ? (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    scrolled ? "text-foreground" : "text-card"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    scrolled ? "text-foreground" : "text-card"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <a href="tel:+34928701457" className={`flex items-center gap-2 text-sm ${
                scrolled ? "text-muted-foreground" : "text-card/80"
              }`}>
                <Phone className="w-4 h-4" />
                <span>928 70 14 57</span>
              </a>
              <Button size="sm" className="w-fit" asChild>
                <a href="https://cal.com/aimar-falcon-yhkxig" target="_blank" rel="noopener noreferrer">
                  Pedir Cita
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
