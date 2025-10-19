import { useMotionValue } from "motion/react"
import { useEffect, type RefObject } from "react"

export const useMousePosition = (ref: RefObject<HTMLElement | null>) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      if (!ref.current) {
        return
      }
      const { left, top } = ref.current.getBoundingClientRect()
      x.set(event.x - left)
      y.set(event.y - top)
    }
    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [x, y, ref])

  return { x, y }
}
