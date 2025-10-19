import { CTA } from "./cta"
import { Features } from "./features"
import { Footer } from "./footer"
import { Hero } from "./hero"
import { LogoTicker } from "./logo-ticker"
import { Testimonial } from "./testimonial"

export function Home() {
  return (
    <>
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonial />
      <CTA />
      <Footer />
    </>
  )
}
