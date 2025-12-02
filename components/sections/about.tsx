export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 text-center text-balance">
          About <span className="text-primary">BiteTime</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          We believe kids should enjoy entertainment and healthy habits together.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Problem */}
          <div className="animate-slide-in-right">
            <div className="bg-secondary/30 rounded-3xl p-8 border-2 border-secondary">
              <div className="text-6xl mb-4">😕</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">The Problem</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Kids love watching videos, but often forget to eat healthy snacks. Parents struggle to balance screen
                time with nutrition.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-3 text-lg">📱</span>
                  <span>Too much uninterrupted screen time</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-lg">🍔</span>
                  <span>Unhealthy snacking habits</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-lg">⏰</span>
                  <span>No natural break times</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Solution */}
          <div className="animate-slide-in-right" style={{ animationDelay: "0.1s" }}>
            <div className="bg-primary/20 rounded-3xl p-8 border-2 border-primary">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">The Solution</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                BiteTime intelligently pauses videos at natural points, prompting kids to eat a snack during the
                break—making healthy eating part of the entertainment!
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-3 text-lg">✅</span>
                  <span>Perfect pause timing between scenes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-lg">✅</span>
                  <span>Encourages healthy snacking</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-lg">✅</span>
                  <span>Parents stay in control</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
