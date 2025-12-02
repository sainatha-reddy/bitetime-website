export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: "📱",
      title: "Download & Install",
      description: "Get BiteTime from the App Store or Google Play in seconds.",
    },
    {
      number: "2",
      icon: "⚙️",
      title: "Set Your Preferences",
      description: "Parents choose favorite shows, snack types, and break frequency.",
    },
    {
      number: "3",
      icon: "🎬",
      title: "Start Watching",
      description: "Kids enjoy their favorite videos with BiteTime running.",
    },
    {
      number: "4",
      icon: "⏸️",
      title: "Smart Pause Happens",
      description: "Video pauses at a natural scene break - never mid-action!",
    },
    {
      number: "5",
      icon: "🍽️",
      title: "Snack Break Time",
      description: "Kids grab a healthy snack and play a quick game during the 30-second pause.",
    },
    {
      number: "6",
      icon: "▶️",
      title: "Resume & Enjoy",
      description: "After the break, the video automatically resumes. Repeat and repeat!",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 text-center text-balance">
          How It <span className="text-accent">Works</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Six simple steps to healthier, smarter entertainment for kids.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="bg-card rounded-2xl p-6 border-3 border-primary h-full">
                {/* Number Badge */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-black text-lg border-3 border-card">
                  {step.number}
                </div>

                <div className="text-5xl mb-4 mt-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Connector Line (hidden on small screens, shown on md+) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-1 bg-primary/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
