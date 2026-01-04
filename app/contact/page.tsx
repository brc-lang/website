"use client"

import type React from "react"
import { useState } from "react"
import { CrumbButton } from "@/components/crumb-button"
import { Mail, MapPin, MessageSquare, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("sending")
    // Simulate form submission
    setTimeout(() => {
      setFormState("sent")
    }, 1500)
  }

  return (
    <div className="page-transition">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">Get in Touch</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Have a question, feedback, or just want to say hello? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border border-border">
                <Mail className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold mb-1">Main Developer</h3>
                <p className="text-sm text-muted-foreground mb-2">For general inquiries</p>
                <a href="mailto:hello@breadcrumbs.dev" className="text-sm text-primary hover:underline">
                t.me/GSbread
                </a>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <MessageSquare className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold mb-1">Discord</h3>
                <p className="text-sm text-muted-foreground mb-2">For quick questions</p>
                <a href="https://discord.gg/GfNeKaFRrG" className="text-sm text-primary hover:underline">
                  Join our Discord server
                </a>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <MapPin className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-sm text-muted-foreground">We&apos;re a remote-first team spread across the globe.</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
                {formState === "sent" ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="font-serif text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We&apos;ll get back to you soon.
                    </p>
                    <CrumbButton onClick={() => setFormState("idle")} variant="outline">
                      Send Another Message
                    </CrumbButton>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      >
                        <option value="">Select a topic</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="feedback">Feedback</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <CrumbButton
                      variant="primary"
                      className={`w-full ${formState === "sending" ? "opacity-70 cursor-not-allowed" : ""}`}
                    >
                      {formState === "sending" ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 inline-block mr-2" />
                          Send Message
                        </>
                      )}
                    </CrumbButton>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Is BreadCrumbs free to use?",
                a: "Yes! BreadCrumbs is completely free and open-source under the MIT license.",
              },
              {
                q: "What platforms does BreadCrumbs support?",
                a: "BreadCrumbs runs on Windows, macOS, and Linux. We also have experimental support for WebAssembly.",
              },
              {
                q: "How can I contribute to BreadCrumbs?",
                a: "We welcome contributions! Check out our GitHub repository and read the contribution guide to get started.",
              },
              {
                q: "Where can I get help with BreadCrumbs?",
                a: "Join our Discord server for real-time help, or post questions on our GitHub Discussions page.",
              },
            ].map((faq, index) => (
              <details key={index} className="bg-card rounded-lg border border-border group">
                <summary className="px-6 py-4 cursor-pointer font-medium list-none flex items-center justify-between hover:bg-accent/50 transition-colors rounded-lg">
                  {faq.q}
                  <span className="text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-4 text-muted-foreground">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
