import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Projects } from '@/components/projects'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
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

// function FeatureSection() {
//   return (
//     <div className="overflow-hidden">
//       <Container className="pb-24">
//         <Heading as="h2" className="max-w-3xl">
//           A snapshot of your entire sales pipeline.
//         </Heading>
//         <Screenshot
//           width={1216}
//           height={768}
//           src="/screenshots/app.png"
//           className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
//         />
//       </Container>
//     </div>
//   )
// }

function BentoSection() {
  return (
    <Container>
      {/* <Subheading>Sales</Subheading> */}
      <Heading as="h3" className="mt-2 max-w-3xl">
        How we can help you
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          title="AI Solutions"
          description="Utilize the power of artificial intelligence to overcome your unique business challenges. For impactful results, our enterprise software engineering company employs a full range of capabilities—from AI consulting and development to machine learning, deep learning, NLP, computer vision, generative AI, and intelligent process automation."
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-2 lg:rounded-tl-4xl"
        />
        <BentoCard
          title="Data and Analytics"
          description="Transform your data into a powerful asset that fuels decision-making at all levels. From data governance and management to advanced analytics and data science, ITRex empowers your business—not just IT—to take full control and leverage its data effectively."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-2 "
        />
        <BentoCard
          title="IoT & embedded systems"
          description="Drive innovation with connected devices and embedded systems that expand your capabilities. Our expertise spans from IoT solution development to firmware engineering and HMI design, integrating intelligent hardware seamlessly into your business model."
          graphic={
            <div className="flex size-full pl-10 pt-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl lg:rounded-tr-4xl"
        />
        <BentoCard
          title="Cloud & modernization services"
          description="Accelerate your digital journey with cloud solutions and legacy modernization services. From seamless cloud migration to DevOps, ITRex optimizes operations for speed, scalability, and cost-efficiency. Our end-to-end services ensure that your IT infrastructure is resilient, secure, and future-ready."
          graphic={<LogoCluster />}
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          title="Software engineering"
          description="Create high-performance software that is tailored to your enterprise requirements. Whether you require full project support or a specific skillset, we cover all areas—from business analysis, UX/UI design, quality assurance to development and post-launch support—across web, mobile, desktop, cloud, and embedded platforms."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2"
        />
        <BentoCard
          title="Innovation consulting"
          description="Restructure your business with strategic guidance. Our team is here to make every step easier, from IT audits, idea validation, and strategy planning to process optimization, all while aligning each initiative with your specific goals."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Outreach</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Customer outreach has never been easier.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Networking"
            title="Sell at the speed of light"
            description="Our RadiantAI chat assistants analyze the sentiment of your conversations in real time, ensuring you're always one step ahead."
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Integrations"
            title="Meet leads where they are"
            description="With thousands of integrations, no one will be able to escape your cold outreach."
            graphic={<LogoTimeline />}
            // `!overflow-visible` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 !overflow-visible lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Meetings"
            title="Smart call scheduling"
            description="Automatically insert intro calls into your leads' calendars without their consent."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Engagement"
            title="Become a thought leader"
            description="RadiantAI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-28">
          {/* <FeatureSection /> */}
          {/* <BentoSection /> */}
          <Help />
        </div>
        {/* <DarkBentoSection /> */}
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
