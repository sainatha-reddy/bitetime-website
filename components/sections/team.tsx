export default function Team() {
  const teamMembers = [
    {
      name: "Emma Rodriguez",
      role: "CEO & Co-Founder",
      emoji: "👩‍💼",
      bio: "Former pediatrician with a passion for tech innovation in health.",
    },
    {
      name: "Alex Chen",
      role: "CTO & Co-Founder",
      emoji: "👨‍💻",
      bio: "App developer specializing in family-friendly tech solutions.",
    },
    {
      name: "Maya Patel",
      role: "Head of Design",
      emoji: "🎨",
      bio: "UX/UI expert creating delightful experiences for kids.",
    },
    {
      name: "James Wilson",
      role: "Nutrition Advisor",
      emoji: "🥗",
      bio: "Registered Dietitian dedicated to child wellness.",
    },
  ]

  return (
    <section id="team" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 text-center text-balance">
          Meet the <span className="text-primary">Team</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Our passionate team combines expertise in tech, health, and design to make BiteTime amazing.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border-2 border-border hover:shadow-lg transition-all text-center"
            >
              <div className="text-6xl mb-4">{member.emoji}</div>
              <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-sm font-semibold text-primary mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Interested in joining our team? We're always looking for passionate people!
          </p>
          <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-bold hover:shadow-lg transition-all">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  )
}
