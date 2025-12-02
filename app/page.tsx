"use client"

import Navigation from "@/components/navigation"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Features from "@/components/sections/features"
import HowItWorks from "@/components/sections/how-it-works"
import Mission from "@/components/sections/mission"
import Contact from "@/components/sections/contact"
import FAQ from "@/components/sections/faq"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Mission />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  )
}
