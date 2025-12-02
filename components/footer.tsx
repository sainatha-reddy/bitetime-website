import { Github, Mail, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <div className="text-2xl">🍴</div>
              <span className="ml-2 font-bold text-lg">BiteTime</span>
            </div>
            <p className="text-sm text-primary-foreground/80">Making healthy eating fun through smart technology.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#features" className="hover:text-primary-foreground transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-primary-foreground transition">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#about" className="hover:text-primary-foreground transition">
                  About
                </a>
              </li>
              <li>
                <a href="#mission" className="hover:text-primary-foreground transition">
                  Mission
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-primary-foreground transition">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="/privacy" className="hover:text-primary-foreground transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-primary-foreground transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/80 mb-4 md:mb-0">
            © 2025 BiteTime. All rights reserved. Making healthy eating fun!
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#" className="hover:text-secondary transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-secondary transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-secondary transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-secondary transition">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
