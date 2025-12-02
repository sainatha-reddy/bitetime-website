"use client"

import { ChevronDown } from "lucide-react"

export default function Hero() {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about")
    aboutSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex flex-col items-center justify-center px-4 bg-gradient-to-b from-background via-secondary/20 to-background"
    >
      <div className="max-w-4xl mx-auto text-center animate-bounce-in">
        {/* Main Visual */}
        <div className="mb-8 animate-float">
          <div className="text-8xl md:text-9xl drop-shadow-lg">🎬🍽️</div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-black text-foreground mb-4 leading-tight text-balance">
          Watch. <span className="text-primary">Eat</span>.
          <br />
          Grow Healthy.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          BiteTime makes healthy eating fun! 🍎 The app pauses your videos for quick snack breaks, turning entertainment
          into a healthy habit.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95">
            Download Now
          </button>
          <button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-bold text-lg hover:shadow-lg transition-all border-2 border-secondary">
            Learn More
          </button>
        </div>

        {/* Features Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
          <div className="bg-card rounded-2xl p-4 border-2 border-border">
            <div className="text-4xl mb-2">⏸️</div>
            <p className="font-bold text-sm">Smart Pauses</p>
            <p className="text-xs text-muted-foreground">30-second breaks</p>
          </div>
          <div className="bg-card rounded-2xl p-4 border-2 border-border">
            <div className="text-4xl mb-2">🎬</div>
            <p className="font-bold text-sm">All Videos</p>
            <p className="text-xs text-muted-foreground">Your favorite content</p>
          </div>
          <div className="bg-card rounded-2xl p-4 border-2 border-border">
            <div className="text-4xl mb-2">😊</div>
            <p className="font-bold text-sm">Fun & Healthy</p>
            <p className="text-xs text-muted-foreground">Parents love it!</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  )
}
