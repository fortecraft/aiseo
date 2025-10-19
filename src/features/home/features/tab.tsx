import { cn } from "@/lib/utils"

import type { items } from "./utils"

type Props = (typeof items)[number]

export function Tab(
  props: Props & { selected?: boolean } & Pick<
      React.ComponentProps<"div">,
      "onClick"
    >,
) {
  return (
    <div
      className={cn(
        "relative flex flex-1 cursor-pointer rounded-xl border border-white/20 p-2.5 select-none",
        props.selected && "bounce-click",
      )}
      onClick={props.onClick}
    >
      {props.selected && (
        <div className="border-glow absolute inset-0 -m-px rounded-xl border border-[#A369FF] [--glow-duration:5s] xl:[--glow-duration:2s]" />
      )}
      <div className="flex flex-row items-center gap-x-2.5">
        <span className="relative size-12 rounded-xl border border-white/20">
          <props.icon
            className={cn(
              "absolute top-1/2 left-1/2 size-5 -translate-x-1/2 -translate-y-1/2 transition-all duration-200",
              props.selected ? "text-[#8C44FF]" : "text-white",
            )}
          />
        </span>
        {props.label}
        {props.isNew && (
          <span className="rounded-full bg-[#8C44FF] px-2 py-0.5 text-xs font-semibold text-black">
            new
          </span>
        )}
      </div>
    </div>
  )
}
