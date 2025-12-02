"use client"

export default function Features() {
  const features = [
    {
      icon: "⏸️",
      title: "Smart Pause Technology",
      description: "Videos pause naturally between scenes, never in the middle of the action!",
      color: "from-blue-500/20 to-blue-600/20",
    },
    {
      icon: "🎬",
      title: "Compatible with All Videos",
      description: "Works with streaming services, YouTube, and all your favorite shows and movies.",
      color: "from-purple-500/20 to-purple-600/20",
    },
    {
      icon: "🍎",
      title: "Healthy Snack Reminders",
      description: "Cute reminders encourage kids to grab a nutritious snack during breaks.",
      color: "from-green-500/20 to-green-600/20",
    },
    {
      icon: "⏱️",
      title: "30-Second Break Timer",
      description: "Perfect length for kids to enjoy a quick snack without missing much.",
      color: "from-orange-500/20 to-orange-600/20",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Parent Dashboard",
      description: "Monitor screen time, snacking habits, and content with easy-to-use controls.",
      color: "from-pink-500/20 to-pink-600/20",
    },
    {
      icon: "🏆",
      title: "Achievement Badges",
      description: "Kids earn fun badges for maintaining healthy eating habits. Gamification fun!",
      color: "from-yellow-500/20 to-yellow-600/20",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 text-center text-balance">
          Amazing <span className="text-secondary">Features</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          BiteTime is packed with features that make healthy eating interactive and fun.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${feature.color} rounded-3xl p-6 border-2 border-border hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer`}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
