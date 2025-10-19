import { cn } from "@/lib/utils"

import type { items } from "./utils"

type Props = (typeof items)[number]

export function Testimoni(props: Props) {
  return (
    <div
      className={cn(
        "flex h-49 w-80 shrink-0 flex-col gap-y-5 rounded-xl border border-white/15 bg-[linear-gradient(249.44deg,rgba(140,69,255,0.3)_0%,#000000_100%)] p-3 text-left md:h-60 md:w-112 md:p-10",
      )}
    >
      <div className="text-lg leading-8 tracking-tight text-white md:text-2xl">
        {props.testimoni}
      </div>
      <div className="flex flex-row gap-x-3">
        <div className="relative size-11">
          <img
            src={props.img}
            className="absolute inset-0 rounded-md grayscale"
          />
          <div className="absolute inset-0 bg-[#8C45FF] mix-blend-soft-light" />
        </div>
        <div className="flex flex-col">
          <span className="text-base leading-6">{props.name}</span>
          <span className="text-sm leading-5">{props.label}</span>
        </div>
      </div>
    </div>
  )
}
