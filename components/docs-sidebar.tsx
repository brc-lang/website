"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { docsConfig } from "@/lib/docs-config"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function DocsSidebar() {
  const pathname = usePathname()
  const [expandedSections, setExpandedSections] = useState<string[]>(
    docsConfig.map((s) => s.slug), // All expanded by default
  )

  const toggleSection = (slug: string) => {
    setExpandedSections((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]))
  }

  return (
    <aside className="w-64 shrink-0 border-r border-border bg-sidebar hidden lg:block">
      <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto p-4">
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-sidebar-border">
          <img src="/images/image-2025-12-24-01-58-31.png" alt="BreadCrumbs" className="w-8 h-8" />
          <span className="font-serif font-bold text-sidebar-foreground">BreadCrumbs</span>
        </div>

        <nav className="space-y-4">
          {docsConfig.map((section) => (
            <div key={section.slug}>
              <button
                onClick={() => toggleSection(section.slug)}
                className="flex items-center justify-between w-full text-left text-sm font-semibold text-sidebar-foreground mb-2 hover:text-sidebar-primary transition-colors"
              >
                {section.title}
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    expandedSections.includes(section.slug) && "rotate-180",
                  )}
                />
              </button>

              {expandedSections.includes(section.slug) && (
                <ul className="space-y-1 animate-in slide-in-from-top-2 duration-200">
                  {section.items.map((item) => {
                    const href = `/docs/${section.slug}/${item.slug}`
                    const isActive = pathname === href

                    return (
                      <li key={item.slug}>
                        <Link
                          href={href}
                          className={cn(
                            "block px-3 py-2 text-sm rounded-md transition-all duration-200",
                            isActive
                              ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium"
                              : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
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
    </aside>
  )
}
