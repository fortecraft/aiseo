import logo from "@/assets/logo.png"
import { cn } from "@/lib/utils"
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex size-10 items-center justify-center rounded-lg border border-white/20",
        className,
      )}
    >
      <img src={logo} className="size-8" />
    </span>
  )
}
