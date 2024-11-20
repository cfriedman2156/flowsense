
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/navbar'
import { Projects } from '@/components/projects'
import { Testimonial } from '@/components/testimonial'
import { Contact } from '@/components/contact'
import { Help } from '@/components/help'
import { FadeIn } from '@/components/FadeIn'

// Edit this text with elan's copy
export const metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar/>
        <FadeIn className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-24 md:pt-16">
          <h1 className="font-semibold text-balance text-4xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-6xl/[0.8] md:text-8xl/[0.8]">
            Data Solutions for Business Growth
          </h1>
          <p className="mt-8  text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
          At Flow Sense Solutions, we specialize in crafting data strategies that align with your business goals. By integrating advanced analytics and automation, we empower your business to make informed decisions, optimize processes, and drive sustainable growth.
          Let us help you harness the power of data to drive your business forward.
          </p>
          <p className="mt-4 text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
          Let us help you harness the power of data to drive your business forward.
          </p>
          {/* <img sizes="318px" srcset="https://framerusercontent.com/images/jiShuCRZ269qv4rRSn5yILdnVDM.png?scale-down-to=512 512w,https://framerusercontent.com/images/jiShuCRZ269qv4rRSn5yILdnVDM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/jiShuCRZ269qv4rRSn5yILdnVDM.png 1083w" src="https://framerusercontent.com/images/jiShuCRZ269qv4rRSn5yILdnVDM.png" alt="graph" ></img> */}
          <div className="mt-24 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#">Get started</Button>
            {/* <Button variant="secondary" href="/pricing">
              See pricing
            </Button> */}
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}


export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
          <LogoCloud />
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-28">
          <Help />
        </div>
        <div className="bg-gradient-to-b from-gray-100 from-50% to-white">
          <Projects />
        </div>
        <div className="bg-gradient-to-b from-white from-50% to-gray-100">
          <Testimonial />
        </div> 
      <Contact />
      <Footer />
      </main>
    </div>
  )
}
