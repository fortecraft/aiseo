import star from "@/assets/star.png"
import { Button } from "@/components/button"
import { cn } from "@/lib/utils"

function MiniOrbit({
  className,
}: Pick<React.ComponentProps<"span">, "className">) {
  return (
    <span className={cn("absolute size-5", className)}>
      <span className="absolute box-border size-5 rounded-full border border-white">
        <Satellite className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </span>
    </span>
  )
}

function Satellite({
  className,
}: Pick<React.ComponentProps<"span">, "className">) {
  return (
    <span className={cn("absolute size-2 rounded-full bg-white", className)} />
  )
}

export function Hero() {
  return (
    <section
      className="bg-moving relative flex h-123 items-center overflow-hidden mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] bg-repeat xl:h-200"
      style={{
        backgroundImage: `url(${star})`,
      }}
    >
      {/** Purple Space */}
      <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_50%,rgba(140,69,255,0.5)_14.61%,rgba(14,0,36,0.5)_78.12%,rgba(0,0,0,0)_100%)]" />
      <div className="container">
        {/** Planet */}
        <div className="absolute top-1/2 left-1/2 box-border size-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-[radial-gradient(38.28%_38.28%_at_21.68%_17.19%,_#FFFFFF_0%,_#B894FF_37.7%,_#180042_100%)] shadow-[-20px_-20px_80px_rgba(255,255,255,0.1),_-20px_-20px_50px_rgba(255,255,255,0.5),_0px_0px_50px_#8C45FF] md:size-96" />
        {/** Orbit 1 */}
        <div className="rotate-orbit-60 absolute top-1/2 left-1/2 box-border size-90 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white bg-transparent opacity-15 md:size-145">
          {/** Satellite 1 */}
          <MiniOrbit className="top-[calc(50%-20px/2+10px)] -right-2.5" />
          {/** Satellite 2 */}
          <Satellite className="top-[-4px] left-[calc(50%-8px/2)]" />
          {/** Satellite 3 */}
          <Satellite className="top-[calc(50%-8px/2)] left-[-4px]" />
        </div>
        {/** Orbit 2 */}
        <div className="absolute top-1/2 left-1/2 box-border size-117 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white bg-transparent opacity-15 md:size-195" />

        {/** Orbit 3 */}
        <div className="rotate-orbit-120 absolute top-1/2 left-1/2 box-border size-155 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white bg-transparent opacity-15 md:size-245">
          {/** Satellite 1 */}
          <MiniOrbit className="top-[-10px] left-[calc(50%-20px/2)]" />
          {/** Satellite 2 */}
          <Satellite className="top-[calc(50%-8px/2)] right-[-4px]" />
          {/** Satellite 3 */}
          <Satellite className="top-[calc(50%-8px/2)] left-[-4px]" />
        </div>

        <div className="relative top-9 left-1/2 flex h-max w-90 -translate-x-1/2 flex-col gap-y-4 md:top-10 md:w-145">
          <h1 className="bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(74,32,138,0.5))] bg-clip-text text-center text-8xl leading-none font-semibold tracking-tighter text-transparent md:text-[168px]">
            AI SEO
          </h1>
          <span className="px-8 text-center text-lg leading-7 tracking-tight text-white/70 md:px-0 md:text-xl">
            Elevate your site's visibility effortlessly with AI, where smart
            technology meets user-friendly SEO tools.
          </span>
          <div className="text-center">
            <Button>Join waitlist</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
