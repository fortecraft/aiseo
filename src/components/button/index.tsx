import { cn } from "@/lib/utils"

export function Button({
  children,
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      type="button"
      className={cn(
        "relative inline-flex shrink-0 items-center rounded-lg bg-gradient-to-b from-[#190D2E] to-[#4A208A] px-3 py-2 text-sm text-white shadow-[0px_0px_12px_#8C45FF] transition-all hover:brightness-125",
        className,
      )}
      {...props}
    >
      {children}
      <div className="absolute inset-0">
        <div className="absolute inset-0 rounded-lg border border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="absolute inset-0 rounded-lg border border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
        <div className="absolute inset-0 rounded-lg shadow-[0_0_10px_rgb(140,69,255,0.7)_inset]"></div>
      </div>
    </button>
  )
}
