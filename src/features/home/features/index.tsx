import { motion } from "motion/react"
import { useState } from "react"

import product from "@/assets/product.png"

import { Tab } from "./tab"
import { items } from "./utils"

const initial = items[0]

export function Features() {
  const [index, setIndex] = useState(0)
  const selected = items[index]

  return (
    <section className="py-20 md:py-24">
      <div className="container text-center">
        <h1 className="text-5xl font-medium tracking-tighter md:text-6xl">
          Elevate your SEO efforts.
        </h1>
        <p className="mx-auto pt-5 text-lg leading-7 tracking-tight text-white/70 sm:text-xl sm:leading-6 md:max-w-2xl">
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>
        <div className="flex flex-col gap-3 pt-10 xl:flex-row">
          {items.map((item, i) => (
            <Tab
              key={item.label}
              {...{
                ...item,
                onClick: () => setIndex(i),
                selected: index === i,
              }}
            />
          ))}
        </div>
        <motion.div
          initial={{
            "--size": initial.size,
            "--x": "0%",
            "--y": initial.y,
          }}
          className="mt-3 flex aspect-video rounded-xl border border-white/20 bg-size-[var(--size)_auto] bg-position-[var(--x)_var(--y)] p-2.5"
          style={{
            backgroundImage: `url(${product})`,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          animate={{
            "--size": ["80%", selected.size],
            "--x": selected.x,
            "--y": selected.y,
          }}
        />
      </div>
    </section>
  )
}
