import { notFound } from "next/navigation"
import { getDocBySlug, getAllDocSlugs } from "@/lib/docs-config"
import { getDocContent } from "@/lib/docs-loader"
import { MarkdownContent } from "@/components/markdown-content"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

// Generate static params for all doc pages
export function generateStaticParams() {
  return getAllDocSlugs().map(({ section, item }) => ({
    section,
    slug: item,
  }))
}

export default async function DocPage({ params }: { params: Promise<{ section: string; slug: string }> }) {
  const { section, slug } = await params
  const doc = getDocBySlug(section, slug)

  if (!doc) {
    notFound()
  }

  // Try to load from MD file, fallback to empty content
  const content = getDocContent(section, slug)

  // Find previous and next pages
  const allSlugs = getAllDocSlugs()
  const currentIndex = allSlugs.findIndex((s) => s.section === section && s.item === slug)
  const prevPage = currentIndex > 0 ? allSlugs[currentIndex - 1] : null
  const nextPage = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null

  const getPrevDoc = () => {
    if (!prevPage) return null
    return getDocBySlug(prevPage.section, prevPage.item)
  }

  const getNextDoc = () => {
    if (!nextPage) return null
    return getDocBySlug(nextPage.section, nextPage.item)
  }

  const prevDoc = getPrevDoc()
  const nextDoc = getNextDoc()

  return (
    <article className="page-transition">
      <header className="mb-8">
        <p className="text-sm text-primary font-medium mb-2">{doc.section.title}</p>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">{doc.item.title}</h1>
        {doc.item.description && <p className="text-lg text-muted-foreground">{doc.item.description}</p>}
      </header>

      {content ? (
        <MarkdownContent content={content.content} />
      ) : (
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            Documentation content coming soon... Create a file at <code className="bg-muted px-1.5 py-0.5 rounded text-sm">docs/content/{section}/{slug}.md</code> to add content.
          </p>
        </div>
      )}

      {/* Navigation */}
      <nav className="mt-12 pt-8 border-t border-border flex justify-between">
        {prevDoc ? (
          <Link
            href={`/docs/${prevPage?.section}/${prevPage?.item}`}
            className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <div>
              <p className="text-xs text-muted-foreground">Previous</p>
              <p className="font-medium">{prevDoc.item.title}</p>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextDoc ? (
          <Link
            href={`/docs/${nextPage?.section}/${nextPage?.item}`}
            className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-right"
          >
            <div>
              <p className="text-xs text-muted-foreground">Next</p>
              <p className="font-medium">{nextDoc.item.title}</p>
            </div>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </article>
  )
}
