import fs from "fs"
import path from "path"

export interface Example {
  title: string
  description: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  code: string
  filename: string
}

const examplesDir = path.join(process.cwd(), "docs/examples")

// Map filenames to metadata
const exampleMetadata: Record<string, { title: string; description: string; difficulty: Example["difficulty"] }> = {
  "1.program.brc": {
    title: "Hello World",
    description: "The classic first program - basic syntax and comments",
    difficulty: "Beginner",
  },
  "2.conditions.brc": {
    title: "Conditions",
    description: "Working with if/elif/else statements and ternary operators",
    difficulty: "Beginner",
  },
  "3.variables.brc": {
    title: "Variables",
    description: "Variable declarations and types",
    difficulty: "Beginner",
  },
  "4.loops.brc": {
    title: "Loops",
    description: "Iteration with for and while loops",
    difficulty: "Beginner",
  },
  "5.imports.brc": {
    title: "Imports",
    description: "Importing modules and using external code",
    difficulty: "Intermediate",
  },
  "6.functions.brc": {
    title: "Functions",
    description: "Defining and calling functions",
    difficulty: "Intermediate",
  },
  "7.structs.brc": {
    title: "Structs",
    description: "Creating custom data structures",
    difficulty: "Intermediate",
  },
  "8.collections.brc": {
    title: "Collections",
    description: "Working with arrays, maps, and sets",
    difficulty: "Intermediate",
  },
  "9.traits.brc": {
    title: "Traits",
    description: "Defining and implementing traits",
    difficulty: "Advanced",
  },
  "fork.brc": {
    title: "Fork/Join",
    description: "Concurrent programming with fork and join",
    difficulty: "Advanced",
  },
  "memory.brc": {
    title: "Memory Management",
    description: "Understanding memory allocation and deallocation",
    difficulty: "Advanced",
  },
  "network.brc": {
    title: "Network Programming",
    description: "HTTP clients and servers",
    difficulty: "Advanced",
  },
  "pointers.brc": {
    title: "Pointers",
    description: "Working with pointers and references",
    difficulty: "Advanced",
  },
  "simulating.brc": {
    title: "Simulation",
    description: "Building simulations and models",
    difficulty: "Advanced",
  },
  "solve.brc": {
    title: "Problem Solving",
    description: "Algorithmic problem solving patterns",
    difficulty: "Advanced",
  },
  "tests.brc": {
    title: "Testing",
    description: "Writing and running tests",
    difficulty: "Intermediate",
  },
}

export function getAllExamples(): Example[] {
  if (!fs.existsSync(examplesDir)) {
    return []
  }

  const files = fs.readdirSync(examplesDir).filter((file) => file.endsWith(".brc"))

  return files
    .map((filename) => {
      const filePath = path.join(examplesDir, filename)
      const code = fs.readFileSync(filePath, "utf-8")
      const metadata = exampleMetadata[filename] || {
        title: filename.replace(".brc", "").replace(/^\d+\./, ""),
        description: "Code example",
        difficulty: "Beginner" as const,
      }

      return {
        ...metadata,
        code,
        filename,
      }
    })
    .sort((a, b) => {
      // Sort by filename to maintain order
      return a.filename.localeCompare(b.filename)
    })
}

