import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

import { cn } from "@/lib/utils"

export function Menu({ isFooter, items }: MenuProps) {
  const [idx, setIndex] = useState<number | null>(null)

  return (
    <div
      className={cn(
        "inline-flex min-h-max flex-col items-start gap-x-2 transition-all duration-300 md:static md:z-0 md:translate-y-0 md:scale-y-100 md:flex-row md:items-center md:opacity-100",
        isFooter
          ? ""
          : "absolute inset-0 top-16 z-[-1] translate-y-[-80%] scale-y-75 opacity-0 group-focus-within:translate-y-0 group-focus-within:scale-y-100 group-focus-within:opacity-100",
      )}
      onMouseLeave={() => setIndex(null)}
    >
      <AnimatePresence>
        {items.map((item, i) => (
          <a
            key={item.label}
            className={cn(
              "relative w-full cursor-pointer px-3 py-2 text-sm text-white/70 transition-colors duration-300 select-none [text-shadow:0_1px_2px_rgba(0,0,0)] md:w-max",
              i === idx && "text-white",
            )}
            onMouseEnter={() => setIndex(i)}
          >
            {item.label}
            {i === idx && (
              <motion.span
                className="from-primary/60 to-primary/10 md:from-primary/10 md:to-primary/60 absolute inset-0 z-[-1] rounded-none bg-gradient-to-r shadow-[0px_0px_12px_#8c45ff] content-[''] sm:rounded-lg md:bg-gradient-to-b"
                layoutId="hovered"
                initial={false}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { delay: 0.2, duration: 0.15 },
                }}
              >
                <div className="absolute inset-0">
                  <div className="absolute inset-0 rounded-none border border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)] sm:rounded-lg"></div>
                  <div className="absolute inset-0 rounded-none border border-white/40 [mask-image:linear-gradient(to_top,black,transparent)] sm:rounded-lg"></div>
                  <div className="absolute inset-0 rounded-none shadow-[0_0_10px_rgb(140,69,255,0.7)_inset] sm:rounded-lg"></div>
                </div>
              </motion.span>
            )}
          </a>
        ))}
      </AnimatePresence>
    </div>
  )
}

export type MenuProps = {
  items: Array<{ label: string; href: string }>
  isFooter?: boolean
}
