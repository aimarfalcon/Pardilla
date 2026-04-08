import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, User, ArrowRight } from "lucide-react"
import { blogPosts, getBlogPost, getAllBlogSlugs } from "@/lib/blog-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  
  if (!post) {
    return {
      title: "Artículo no encontrado | Centro Veterinario Cania",
    }
  }

  return {
    title: `${post.title} | Blog Centro Veterinario Cania`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      locale: "es_ES",
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  // Get related posts (excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.slug !== slug)
    .slice(0, 3)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 bg-foreground overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back button */}
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-card/70 hover:text-card transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al Blog
            </Link>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-card/70 mb-4">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-card leading-tight text-balance">
              {post.title}
            </h1>
          </div>
        </section>

        {/* Featured Image */}
        <section className="relative -mt-8 z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12 lg:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-li:text-muted-foreground">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  // Bold heading
                  return (
                    <h3 key={index} className="text-xl font-bold mt-8 mb-4 text-foreground">
                      {paragraph.replace(/\*\*/g, '')}
                    </h3>
                  )
                } else if (paragraph.startsWith('**')) {
                  // Paragraph starting with bold
                  const parts = paragraph.split('**')
                  return (
                    <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                      {parts.map((part, i) => 
                        i % 2 === 1 ? <strong key={i} className="text-foreground">{part}</strong> : part
                      )}
                    </p>
                  )
                } else if (paragraph.startsWith('- ')) {
                  // List items
                  const items = paragraph.split('\n').filter(item => item.startsWith('- '))
                  return (
                    <ul key={index} className="list-disc pl-6 mb-4 space-y-2">
                      {items.map((item, i) => (
                        <li key={i} className="text-muted-foreground">
                          {item.replace('- ', '')}
                        </li>
                      ))}
                    </ul>
                  )
                } else {
                  // Regular paragraph
                  return (
                    <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  )
                }
              })}
            </div>

            {/* Author CTA */}
            <div className="mt-12 p-6 bg-muted/50 rounded-2xl border border-border">
              <p className="text-sm text-muted-foreground mb-2">Artículo escrito por</p>
              <p className="font-serif text-lg font-bold text-foreground mb-4">{post.author}</p>
              <p className="text-muted-foreground text-sm mb-4">
                ¿Tienes dudas sobre este tema? Nuestro equipo de veterinarios está aquí para ayudarte.
              </p>
              <Button size="sm" asChild>
                <a href="tel:+34928701457">
                  Contactar
                </a>
              </Button>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-12 lg:py-16 bg-muted/30 border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
                Otros artículos que te pueden interesar
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link 
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-muted-foreground mb-2">{relatedPost.date}</p>
                      <h3 className="font-serif font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-10">
                <Button variant="outline" size="lg" asChild>
                  <Link href="/blog">
                    Ver todos los artículos
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
