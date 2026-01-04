"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { docsConfig } from "@/lib/docs-config"
import { Menu, X, ChevronDown } from "lucide-react"

export function DocsMobileNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<string[]>(docsConfig.map((s) => s.slug))

  const toggleSection = (slug: string) => {
    setExpandedSections((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]))
  }

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground bg-muted rounded-md"
      >
        {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        Documentation Menu
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-32 z-40 bg-background/95 backdrop-blur-sm animate-in fade-in duration-200">
          <nav className="container mx-auto px-4 py-6 max-h-[calc(100vh-8rem)] overflow-y-auto">
            {docsConfig.map((section) => (
              <div key={section.slug} className="mb-4">
                <button
                  onClick={() => toggleSection(section.slug)}
                  className="flex items-center justify-between w-full text-left text-sm font-semibold text-foreground mb-2"
                >
                  {section.title}
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform",
                      expandedSections.includes(section.slug) && "rotate-180",
                    )}
                  />
                </button>

                {expandedSections.includes(section.slug) && (
                  <ul className="space-y-1 ml-2">
                    {section.items.map((item) => {
                      const href = `/docs/${section.slug}/${item.slug}`
                      const isActive = pathname === href

                      return (
                        <li key={item.slug}>
                          <Link
                            href={href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "block px-3 py-2 text-sm rounded-md transition-colors",
                              isActive
                                ? "bg-primary text-primary-foreground font-medium"
                                : "text-muted-foreground hover:bg-accent",
                            )}
                          >
                            {item.title}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}
