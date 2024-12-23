import { Footer } from '@/components/footer'
import { LogoCloud } from '@/components/logo-cloud'
import { Projects } from '@/components/projects'
import { Testimonial } from '@/components/testimonial'
import { Contact } from '@/components/contact'
import { Services } from '@/components/services'
import { Hero } from '@/components/hero'
import { Industries } from '@/components/industries'
// import { FadeIn } from '@/components/FadeIn'
// import { Button } from '@/components/button'
// import { Container } from '@/components/container'


// Edit this text with elan's copy
export const metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <div className="bg-white py-20">
          <Services />
        </div>
        <div className="bg-lightBlueCustom">
          <Projects />
        </div>
        <LogoCloud />
        <div className="bg-gradient-to-b from-white from-50% to-gray-100">
          <Testimonial />
        </div>
        {/* Background Images Section */}
        <div className="relative bg-lightBlueCustom">         
          <Industries />
          <Contact className="z-10" />
        </div>
        <Footer />
      </main>
    </div>
  )
}
