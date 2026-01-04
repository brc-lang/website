import type React from "react"
import { DocsSidebar } from "@/components/docs-sidebar"
import { DocsMobileNav } from "@/components/docs-mobile-nav"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <DocsSidebar />
      <div className="flex-1 min-w-0">
        <div className="container mx-auto px-4 py-6 lg:px-8 lg:py-8">
          <div className="mb-6 lg:hidden">
            <DocsMobileNav />
          </div>
          <div className="max-w-4xl">{children}</div>
        </div>
      </div>
    </div>
  )
}
