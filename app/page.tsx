import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Services } from "@/components/services"
import { HealthPlans } from "@/components/health-plans"
import { Team } from "@/components/team"
import { Testimonials } from "@/components/testimonials"
import { EmotionalCta } from "@/components/emotional-cta"
import { FinalCta } from "@/components/final-cta"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <WhyChooseUs />
      <Services />
      <HealthPlans />
      <Team />
      <Testimonials />
      <EmotionalCta />
      <Contact />
      <FinalCta />
      <Footer />
    </main>
  )
}
