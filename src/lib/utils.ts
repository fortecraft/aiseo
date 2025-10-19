import { clsx, type ClassValue } from "clsx"
import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const oklch2hex = (value: string): string | null => {
  const el = document.createElement("div")
  el.style.color = value
  document.body.appendChild(el)

  const rgb = getComputedStyle(el).color
  document.body.removeChild(el)

  const match = rgb.match(/rgba?\((\d+), (\d+), (\d+)/)
  if (!match) return null

  const [r, g, b] = match.slice(1).map(Number)

  return (
    "#" +
    [r, g, b]
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase()
  )
}

const breakpoints = {
  "2xl": "(min-width: 1536px)",
  lg: "(min-width: 1024px)",
  md: "(min-width: 768px)",
  sm: "(min-width: 640px)",
  xl: "(min-width: 1280px)",
}

type BreakpointMatches = {
  [K in keyof typeof breakpoints]: boolean
}

export function useBreakpoints() {
  const [matches, setMatches] = useState<BreakpointMatches>(() => {
    const init: any = {}
    for (const key in breakpoints) {
      init[key] = false
    }
    return init
  })

  useEffect(() => {
    if (typeof window === "undefined") return

    const mqls: Record<string, MediaQueryList> = {}
    const update = () => {
      const newMatches: any = {}
      for (const key in breakpoints) {
        newMatches[key] = mqls[key].matches
      }
      setMatches(newMatches)
    }

    for (const key in breakpoints) {
      const query = breakpoints[key as keyof typeof breakpoints]
      const mql = window.matchMedia(query)
      mqls[key] = mql
      mql.addEventListener("change", update)
    }

    update()

    return () => {
      for (const key in mqls) {
        mqls[key].removeEventListener("change", update)
      }
    }
  }, [])

  return matches
}
