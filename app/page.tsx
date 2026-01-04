import type React from "react"
import { basePath } from "@/lib/utils"
import { CrumbButton } from "@/components/crumb-button"
import { Code, Zap, Users, BookOpen, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="mb-8 animate-in fade-in zoom-in duration-500">
              <img
                src={`${basePath}/images/logo.png`}
                alt="BreadCrumbs Logo"
                width={160}
                height={160}
                className="w-32 h-32 md:w-40 md:h-40 mx-auto"
              />
            </div>

            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 text-balance">
              Bread Crumbs
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 text-pretty">
              A modern programming language for enthusiasts
            </p>

            <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <CrumbButton href="/docs" variant="primary">
                Get Started
              </CrumbButton>
              <CrumbButton href="/examples" variant="secondary">
                Download
              </CrumbButton>
            </div>
          </div>
        </div>

        {/* Decorative crumbs */}
        <div className="absolute bottom-10 left-1/4 w-3 h-3 bg-primary/30 rounded-full animate-bounce" />
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-primary/20 rounded-full animate-bounce delay-100" />
        <div className="absolute bottom-16 right-1/4 w-4 h-4 bg-primary/25 rounded-full animate-bounce delay-200" />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Why BreadCrumbs?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Code className="w-6 h-6" />}
              title="Clean Syntax"
              description="Write expressive code with a syntax that feels natural and easy to read."
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="Fast Performance"
              description="Compiled to native code for blazing fast execution speeds."
            />
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="Great Community"
              description="Join thousands of developers building amazing projects together."
            />
            <FeatureCard
              icon={<BookOpen className="w-6 h-6" />}
              title="Rich Documentation"
              description="Comprehensive guides and examples to help you get started quickly."
            />
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-balance">Simple & Expressive</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                BreadCrumbs combines the best features of modern programming languages into a clean, consistent syntax
                that makes coding a joy.
              </p>
              <CrumbButton href="/examples" variant="outline" className="group">
                See More Examples
                <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </CrumbButton>
            </div>

            <div className="code-block">
              <div className="bg-accent/50 px-4 py-2 border-b border-border flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-destructive/60" />
                <span className="w-3 h-3 rounded-full bg-chart-4/60" />
                <span className="w-3 h-3 rounded-full bg-chart-3/60" />
                <span className="ml-2 text-sm text-muted-foreground font-mono">hello.brc</span>
              </div>
              <pre className="p-4 overflow-x-auto text-sm font-mono">
                <code>{`// Hello World in BreadCrumbs
fn main() {
    let greeting = "Hello, World!"
    print(greeting)
    
    // Simple loop
    for i in 0..5 {
        print("Count: {i}")
    }
}

// Define a struct
struct Baker {
    name: String,
    specialty: String,
}

impl Baker {
    fn bake(&self) -> String {
        "{self.name} bakes {self.specialty}"
    }
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Start Baking?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Join the BreadCrumbs community and start building amazing applications today.
          </p>
          <CrumbButton href="/docs" variant="primary">
            Get Started Now
          </CrumbButton>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}
