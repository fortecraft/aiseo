import { cn } from "@/lib/utils"

import { Button } from "../button"
import { Menu as Icon } from "../icon/menu"
import { Logo } from "../logo"
import { Menu, type MenuProps } from "../menu"

export function Navigation({
  className,
  items,
}: MenuProps & { className?: string }) {
  return (
    <div
      className={cn(
        "z-100 flex h-max w-full flex-row items-center justify-between rounded-none border-0 border-white/20 px-5 sm:h-15 sm:rounded-lg sm:border sm:px-2.5 md:w-2xl md:max-w-2xl md:justify-start",
        className,
      )}
    >
      <div className="relative flex flex-1 md:flex-0">
        <Logo />
      </div>
      <div className="flex flex-row-reverse md:flex-1 md:flex-row">
        <nav tabIndex={0} className="group flex flex-1 flex-row justify-center">
          <Menu items={items} />
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center text-white md:hidden"
          >
            <Icon className="size-8" />
          </button>
        </nav>
        <Button>Join waitlist</Button>
      </div>
    </div>
  )
}
