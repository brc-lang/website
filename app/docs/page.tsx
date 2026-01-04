import { redirect } from "next/navigation"

export default function DocsPage() {
  // Redirect to the first doc page
  redirect("/docs/getting-started/introduction")
}
