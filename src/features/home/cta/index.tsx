import { motion, useMotionTemplate } from "motion/react"
import { useRef } from "react"

import grid from "@/assets/gridline.png"
import star from "@/assets/star.png"
import { Button } from "@/components/button"

import { useMousePosition } from "./hooks"
export function CTA() {
  const ref = useRef<HTMLDivElement | null>(null)
  const position = useMousePosition(ref)
  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${position.x}px ${position.y}px,black 0%,transparent 100%)`

  return (
    <section className="py-20 md:py-24">
      <div className="container rounded-lg border border-white/15 px-0">
        <div
          className="bg-moving relative flex items-center justify-center bg-repeat py-20 md:py-24"
          style={{
            backgroundImage: `url(${star})`,
          }}
        >
          <motion.div
            ref={ref}
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-repeat bg-blend-overlay"
            style={{
              backgroundImage: `url(${grid})`,
              maskImage,
            }}
          />
          <div className="z-10 flex max-w-[375px] flex-col items-center gap-y-5 text-center">
            <h1 className="text-5xl font-medium tracking-tighter md:text-6xl">
              AI-driven SEO for everyone.
            </h1>
            <p className="text-lg tracking-tight">
              Achieve clear, impactful results without the complexity.
            </p>
            <Button>Join waitlist</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
