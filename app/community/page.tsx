import { CrumbButton } from "@/components/crumb-button"
import { MessageCircle, Github, Twitter, Users, BookOpen, Heart, Star, GitFork } from "lucide-react"

const communityLinks = [
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Discord",
    description: "Join our server to chat with other developers and get help.",
    link: "https://discord.gg/GfNeKaFRrG",
    buttonText: "Join Discord",
  },
  {
    icon: <Github className="w-6 h-6" />,
    title: "GitHub",
    description: "Contribute to BreadCrumbs, report issues, and browse the source code.",
    link: "https://github.com/Bre4dGC/bread-crumbs",
    buttonText: "View Repository",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Telegram",
    description: "Join for the latest news, updates, and community highlights.",
    link: "https://t.me/compsysci",
    buttonText: "Join Telegram",
  },
]

const stats = [
  { icon: <Star className="w-5 h-5" />, value: "29", label: "GitHub Stars" },
  { icon: <GitFork className="w-5 h-5" />, value: "0", label: "Forks" },
  { icon: <Users className="w-5 h-5" />, value: "100+", label: "Community Members" },
  { icon: <Heart className="w-5 h-5" />, value: "5+", label: "Contributors" },
]

export default function CommunityPage() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">Join Our Community</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            BreadCrumbs is built by a passionate community of developers. Connect, learn, and contribute together.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-2 text-primary mb-2">{stat.icon}</div>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-center mb-12">Connect With Us</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {communityLinks.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 border border-border text-center hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                <CrumbButton href={item.link} variant="outline" className="text-sm">
                  {item.buttonText}
                </CrumbButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contributing CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary/10 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Want to Contribute?</h2>
            <p className="text-muted-foreground mb-6 text-pretty">
              We welcome contributions of all kinds. Check out our contribution guide to get started.
            </p>
            <CrumbButton href="/docs/getting-started/introduction" variant="primary">
              Read Contribution Guide
            </CrumbButton>
          </div>
        </div>
      </section>
    </div>
  )
}
