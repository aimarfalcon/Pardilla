import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

const footerLinks = {
  servicios: [
    { label: "Medicina General", href: "#servicios" },
    { label: "Medicina Preventiva", href: "#servicios" },
    { label: "Cirugía", href: "#servicios" },
    { label: "Peluquería", href: "#servicios" },
  ],
  empresa: [
    { label: "Sobre Nosotros", href: "#equipo" },
    { label: "Nuestro Equipo", href: "#equipo" },
    { label: "Planes de Salud", href: "#planes" },
    { label: "Contacto", href: "#contacto" },
  ],
  legal: [
    { label: "Aviso Legal", href: "#" },
    { label: "Política de Privacidad", href: "#" },
    { label: "Cookies", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/cania.veterinarios/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/cania.vet/", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-xl">C</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-tight">Cania</span>
                <span className="text-sm opacity-70 leading-tight">Centro Veterinario</span>
              </div>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed max-w-sm mb-6">
              Tu clínica veterinaria de confianza en Telde desde 2012. 
              Cuidamos de tus mascotas con el amor y profesionalismo que merecen.
            </p>
            <div className="space-y-2 mb-6">
              <p className="text-sm opacity-70">
                C. Raimundo Lulio, 19, 35213 Telde, Las Palmas
              </p>
              <p className="text-sm opacity-70">
                Tel: 928 70 14 57
              </p>
            </div>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-5 tracking-wide">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-5 tracking-wide">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-5 tracking-wide">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Centro Veterinario Cania. Todos los derechos reservados.
          </p>
          <p className="text-sm opacity-60">
            Hecho con amor en Gran Canaria
          </p>
        </div>
      </div>
    </footer>
  )
}
