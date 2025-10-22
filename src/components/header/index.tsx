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

export function Header() {
  return (
    <header className="sticky inset-0 z-100 box-border flex w-full flex-row items-center justify-center border-y-[1px] border-white/20 bg-black/70 px-0 py-4 backdrop-blur-lg sm:border-y-0 md:px-5">
      <Navigation items={ITEMS} />
    </header>
  )
}
