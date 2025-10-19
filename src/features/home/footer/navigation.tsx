import { Instagram } from "@/components/icon/instagram"
import { X } from "@/components/icon/x"
import { Youtube } from "@/components/icon/youtube"
import { Logo } from "@/components/logo"
import { Menu, type MenuProps } from "@/components/menu"

export function Navigation({ items }: MenuProps) {
  const icons = [X, Instagram, Youtube]

  return (
    <div className="z-100 flex h-max w-full flex-col items-start justify-between gap-y-8 rounded-none px-5 sm:h-15 sm:px-2.5 md:justify-start xl:flex-row xl:items-center">
      <div className="relative flex items-center gap-x-2">
        <Logo className="border-0" />
        <span className="text-sm leading-5 font-medium text-white">
          AI Startup Landing Page
        </span>
      </div>
      <div className="flex flex-row-reverse md:flex-1 md:flex-row">
        <nav tabIndex={0} className="group flex flex-1 flex-row justify-center">
          <Menu items={items} isFooter />
        </nav>
      </div>
      <div className="flex flex-row gap-x-5">
        {icons.map((Icon) => (
          <span className="flex size-6 items-center justify-center text-white/40 transition-colors duration-200 hover:text-white">
            <Icon />
          </span>
        ))}
      </div>
    </div>
  )
}
