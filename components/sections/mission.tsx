export default function Mission() {
  return (
    <section id="mission" className="py-20 px-4 bg-gradient-to-r from-accent/20 via-background to-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-3xl p-8 md:p-12 border-3 border-accent">
          <div className="text-center">
            <div className="text-7xl mb-6">🌟</div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 text-balance">
              Our <span className="text-accent">Mission</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
              Our mission is to make wellness accessible, engaging, and sustainable for everyone. By combining clean design, meaningful features, and evidence-informed approaches, we create digital experiences that empower individuals to live healthier every day.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
              At Omved Creations, technology is more than functionality—it's a pathway to positive change. We're committed to crafting solutions that help people feel better, live more intentionally, and build habits that last.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-primary/20 rounded-2xl p-6 border-2 border-primary">
                <div className="text-4xl mb-3">💪</div>
                <h3 className="font-bold text-foreground mb-2">Stronger Kids</h3>
                <p className="text-sm text-muted-foreground">
                  Building a healthier generation through smart, fun technology.
                </p>
              </div>
              <div className="bg-secondary/20 rounded-2xl p-6 border-2 border-secondary">
                <div className="text-4xl mb-3">👨‍👩‍👧</div>
                <h3 className="font-bold text-foreground mb-2">Happy Families</h3>
                <p className="text-sm text-muted-foreground">
                  Giving parents peace of mind and kids joyful entertainment time.
                </p>
              </div>
              <div className="bg-accent/20 rounded-2xl p-6 border-2 border-accent">
                <div className="text-4xl mb-3">🌍</div>
                <h3 className="font-bold text-foreground mb-2">Better World</h3>
                <p className="text-sm text-muted-foreground">
                  Creating positive change in how kids develop healthy habits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
