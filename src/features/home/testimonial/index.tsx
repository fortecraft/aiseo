import { Testimoni } from "./testimoni"
import { items } from "./utils"
export function Testimonial() {
  return (
    <section className="py-20 md:py-24">
      <div className="container text-center">
        <h1 className="text-6xl font-medium tracking-tighter text-white">
          Beyond Expectations.
        </h1>
        <p className="mx-auto pt-5 text-center text-xl leading-6 tracking-tight text-white/70 md:max-w-2xl">
          Our revolutionary AI SEO tools have transformed our clients'
          strategies.
        </p>
        <div className="flex flex-row gap-3 pt-10">
          <div className="flex flex-row gap-x-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent_0%,black_20%,black_80%,transparent_100%)] pt-10 pl-7.5">
            <div className="marquee flex shrink-0 flex-row justify-around gap-x-5 [--marquee-direction:reverse] [--marquee-duration:30s] [--marquee-gap:20px]">
              {items.map((item) => (
                <Testimoni key={item.label} {...item} />
              ))}
            </div>
            <div className="marquee flex shrink-0 flex-row justify-around gap-x-5 [--marquee-direction:reverse] [--marquee-duration:30s] [--marquee-gap:20px]">
              {items.map((item) => (
                <Testimoni key={item.label} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
