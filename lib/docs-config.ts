export interface DocSection {
  title: string
  slug: string
  items: DocItem[]
}

export interface DocItem {
  title: string
  slug: string
  description?: string
}

// Configuration for documentation sidebar 
export const docsConfig: DocSection[] = [
  {
    title: "Getting Started",
    slug: "getting-started",
    items: [
      { title: "Introduction", slug: "introduction", description: "Welcome to BreadCrumbs" },
      { title: "Installation", slug: "installation", description: "How to install BreadCrumbs" },
      { title: "Quick Start", slug: "quick-start", description: "Your first BreadCrumbs program" },
    ],
  },
  {
    title: "Language Basics",
    slug: "basics",
    items: [
      { title: "Variables", slug: "variables", description: "Working with variables" },
      { title: "Data Types", slug: "data-types", description: "Built-in data types" },
      { title: "Operators", slug: "operators", description: "Operators and expressions" },
      { title: "Control Flow", slug: "control-flow", description: "Conditionals and loops" },
    ],
  },
  {
    title: "Functions",
    slug: "functions",
    items: [
      { title: "Defining Functions", slug: "defining-functions", description: "How to define functions" },
      { title: "Parameters", slug: "parameters", description: "Function parameters and arguments" },
      { title: "Return Values", slug: "return-values", description: "Returning values from functions" },
      { title: "Closures", slug: "closures", description: "Anonymous functions and closures" },
    ],
  },
  {
    title: "Advanced",
    slug: "advanced",
    items: [
      { title: "Structs", slug: "structs", description: "Custom data structures" },
      { title: "Traits", slug: "traits", description: "Shared behavior" },
      { title: "Generics", slug: "generics", description: "Generic programming" },
      { title: "Error Handling", slug: "error-handling", description: "Handling errors gracefully" },
    ],
  },
  {
    title: "Tools",
    slug: "tools",
    items: [
      { title: "CLI", slug: "cli", description: "Command line interface" },
      { title: "Package Manager", slug: "package-manager", description: "Managing dependencies" },
      { title: "Debugging", slug: "debugging", description: "Debugging your code" },
    ],
  },
]

export function getDocBySlug(sectionSlug: string, itemSlug: string) {
  const section = docsConfig.find((s) => s.slug === sectionSlug)
  if (!section) return null
  const item = section.items.find((i) => i.slug === itemSlug)
  if (!item) return null
  return { section, item }
}

export function getAllDocSlugs() {
  const slugs: { section: string; item: string }[] = []
  docsConfig.forEach((section) => {
    section.items.forEach((item) => {
      slugs.push({ section: section.slug, item: item.slug })
    })
  })
  return slugs
}
