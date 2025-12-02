"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/10">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 text-center text-balance">
          Get in <span className="text-secondary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
          Have questions? We'd love to hear from you! Reach out anytime.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="bg-card rounded-2xl p-6 border-2 border-border text-center">
            <div className="text-4xl mb-3">📧</div>
            <p className="font-bold text-foreground mb-1">Email</p>
            <p className="text-sm text-muted-foreground">hello@bitetime.app</p>
          </div>
          <div className="bg-card rounded-2xl p-6 border-2 border-border text-center">
            <div className="text-4xl mb-3">📱</div>
            <p className="font-bold text-foreground mb-1">Phone</p>
            <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
          </div>
          <div className="bg-card rounded-2xl p-6 border-2 border-border text-center">
            <div className="text-4xl mb-3">📍</div>
            <p className="font-bold text-foreground mb-1">Location</p>
            <p className="text-sm text-muted-foreground">San Francisco, CA</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 border-2 border-border">
          <div className="mb-6">
            <label htmlFor="name" className="block font-bold text-foreground mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-muted rounded-xl border-2 border-border focus:border-primary outline-none transition-all"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block font-bold text-foreground mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
              className="w-full px-4 py-3 bg-muted rounded-xl border-2 border-border focus:border-primary outline-none transition-all"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block font-bold text-foreground mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us what you think about BiteTime!"
              rows={5}
              className="w-full px-4 py-3 bg-muted rounded-xl border-2 border-border focus:border-primary outline-none transition-all resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:shadow-lg transition-all transform hover:scale-105 active:scale-95"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </section>
  )
}
