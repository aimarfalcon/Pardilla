import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, User } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Blog | Centro Veterinario Cania",
  description: "Consejos, novedades, casos clínicos y toda la información para el cuidado de tu mascota. Blog del Centro Veterinario Cania en Telde, Gran Canaria.",
  openGraph: {
    title: "Blog | Centro Veterinario Cania",
    description: "Consejos, novedades y casos clínicos para el cuidado de tu mascota.",
    type: "website",
    locale: "es_ES",
  },
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-foreground overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
              Noticias y Casos Clínicos
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-card leading-tight mb-6 text-balance">
              Nuestro Blog
            </h1>
            <p className="text-lg sm:text-xl text-card/80 max-w-2xl mx-auto leading-relaxed">
              Consejos, novedades y toda la información para el cuidado de tu mascota
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.slug}
                  className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* CTA */}
                    <Button variant="ghost" className="group/btn p-0 h-auto font-medium text-primary hover:text-primary/80 hover:bg-transparent" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        Leer más
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
              ¿Tienes alguna pregunta sobre tu mascota?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nuestro equipo de veterinarios está aquí para ayudarte. No dudes en contactarnos.
            </p>
            <Button size="lg" className="shadow-lg shadow-primary/20" asChild>
              <a href="tel:+34928701457">
                Contactar
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
