import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/navbar'
import { Projects } from '@/components/projects'
import { Testimonial } from '@/components/testimonial'
import { Contact } from '@/components/contact'
import { Services } from '@/components/services'
import { FadeIn } from '@/components/FadeIn'
import { Hero } from '@/components/hero'
import { Industries } from '@/components/industries'

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
          {/* Background Image #1 */}
          <div
            className="absolute"
            style={{
              top: '200px', // Adjust vertical position
              left: '155px', // Adjust horizontal position
              width: '1000px', // Adjust width
              height: '1000px', // Adjust height
              backgroundImage: 'url(/assets/lines.png)', // Path to image 1
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              zIndex: '', // Send behind content
            }}
          ></div>

          {/* Background Image #2 */}
          <div
            className="absolute"
            style={{
              top: '200px', // Adjust vertical position
              left: '1090px', // Adjust horizontal position
              width: '1000px', // Adjust width
              height: '1000px', // Adjust height
              backgroundImage: 'url(/assets/lines.png)', // Path to image 2
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              zIndex: '', // Send behind content
            }}
          ></div>

          {/* Content */}
          <Industries />
          <Contact />
        </div>

        <Footer />
      </main>
    </div>
  )
}
