"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How does BiteTime know when to pause videos?",
      answer:
        "BiteTime uses AI-powered scene detection to identify natural breaking points in videos. It ensures pauses happen during scene transitions, never during crucial moments, so kids never miss the action!",
    },
    {
      question: "Is BiteTime safe for kids?",
      answer:
        "BiteTime is designed with child safety in mind. Parents control all settings, content permissions, and can monitor their child's activity. We don't collect unnecessary data and follow COPPA compliance.",
    },
    {
      question: "What streaming services does BiteTime work with?",
      answer:
        "BiteTime works with most major streaming platforms including Netflix, Disney+, YouTube, Amazon Prime Video, and many more. If your app streams video, BiteTime can enhance it!",
    },
    {
      question: "Can parents customize the break duration?",
      answer:
        "Yes! While we recommend 30 seconds as the optimal break length, parents can adjust break frequency and duration in the settings to suit their family's needs.",
    },
    {
      question: "Does BiteTime track screen time?",
      answer:
        "Yes, BiteTime provides detailed analytics in the parent dashboard showing watch time, snack breaks taken, and more. Parents can set daily limits and get notifications.",
    },
    {
      question: "How do kids earn achievement badges?",
      answer:
        "Kids earn badges by maintaining healthy habits—taking snacks during breaks, consistent watching patterns, and hitting weekly goals. It's gamified motivation for healthier habits!",
    },
  ]

  return (
    <section id="faq" className="py-20 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 text-center text-balance">
          Frequently Asked <span className="text-accent">Questions</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
          Have questions? We've got answers! Check out our FAQ below.
        </p>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card rounded-2xl border-2 border-border overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted transition-all"
              >
                <h3 className="font-bold text-foreground text-left">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ml-4 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-muted/50 border-t-2 border-border">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Didn't find what you're looking for?</p>
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:shadow-lg transition-all">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}
