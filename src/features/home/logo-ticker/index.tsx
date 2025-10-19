import acme from "@/assets/acme.png"
import apex from "@/assets/apex.png"
import celestial from "@/assets/celestial.png"
import echo from "@/assets/echo.png"
import pulse from "@/assets/pulse.png"
import quantum from "@/assets/quantrum.png"

export function LogoTicker() {
  const items = [acme, pulse, echo, celestial, apex, quantum]

  return (
    <section className="flex justify-center py-20 md:py-24">
      <div className="container flex h-12 min-w-0 flex-row gap-x-2.5 md:h-6 md:max-w-182 xl:max-w-260">
        <span className="flex max-w-39 min-w-39 items-center text-white md:max-w-62 md:min-w-62">
          Trusted by tops innovative teams
        </span>

        <div className="flex gap-x-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent_0%,black_20%,black_80%,transparent_100%)]">
          <div className="marquee flex shrink-0 flex-row justify-around gap-x-14 [--marquee-direction:reverse] [--marquee-duration:30s] [--marquee-gap:56px]">
            {items.map((item) => (
              <img className="h-full" src={item} key={`${item}`} />
            ))}
          </div>
          <div className="marquee flex shrink-0 flex-row justify-around gap-x-14 [--marquee-direction:reverse] [--marquee-duration:30s] [--marquee-gap:56px]">
            {items.map((item) => (
              <img className="h-full" src={item} key={`${item}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
