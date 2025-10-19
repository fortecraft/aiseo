import { Navigation } from "./navigation"

const ITEMS = [
  {
    href: "#",
    label: "Features",
  },
  {
    href: "#",
    label: "Developers",
  },
  {
    href: "#",
    label: "Pricing",
  },
  {
    href: "#",
    label: "Changelog",
  },
]

export function Footer() {
  return (
    <footer className="container box-border flex w-full items-center px-0 py-4">
      <Navigation items={ITEMS} />
    </footer>
  )
}
