import { CrumbButton } from "@/components/crumb-button"
import { getAllExamples } from "@/lib/examples-loader"

function getDifficultyColor(difficulty: string) {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
    case "Advanced":
      return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export default function ExamplesPage() {
  const examples = getAllExamples()

  return (
    <div className="page-transition">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">Code Examples</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Learn BreadCrumbs through practical examples. From beginner to advanced, find code snippets for common
              tasks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {examples.map((example, index) => (
              <div
                key={index}
                className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="p-4 border-b border-border">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">{example.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(example.difficulty)}`}>
                      {example.difficulty}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{example.description}</p>
                </div>
                <div className="relative">
                  <pre className="p-4 overflow-x-auto text-sm font-mono bg-muted/30 max-h-64">
                    <code>{example.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <CrumbButton href="/docs" variant="primary">
              View Full Documentation
            </CrumbButton>
          </div>
        </div>
      </section>
    </div>
  )
}
