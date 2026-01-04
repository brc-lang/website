import fs from "fs"
import path from "path"
import { docsConfig, type DocSection, type DocItem } from "./docs-config"

const docsDir = path.join(process.cwd(), "docs/content")

export interface DocContent {
  content: string
}

/**
 * Get markdown content for a documentation page
 * Looks for a file at docs/content/{section}/{slug}.md
 */
export function getDocContent(sectionSlug: string, itemSlug: string): DocContent | null {
  const filePath = path.join(docsDir, sectionSlug, `${itemSlug}.md`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const content = fs.readFileSync(filePath, "utf-8")

  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/
  const match = content.match(frontmatterRegex)

  if (match) {
    return {
      content: match[2].trim(),
    }
  }

  return {
    content: content.trim(),
  }
}

export function ensureDocsStructure() {
  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir, { recursive: true })
  }

  docsConfig.forEach((section) => {
    const sectionDir = path.join(docsDir, section.slug)
    if (!fs.existsSync(sectionDir)) {
      fs.mkdirSync(sectionDir, { recursive: true })
    }

    section.items.forEach((item) => {
      const filePath = path.join(sectionDir, `${item.slug}.md`)
      if (!fs.existsSync(filePath)) {
        // Create a template file
        const template = `# ${item.title}

${item.description || ""}

## Content

Write your documentation here using Markdown.

\`\`\`
// Optional code example
\`\`\`
`
        fs.writeFileSync(filePath, template)
      }
    })
  })
}

