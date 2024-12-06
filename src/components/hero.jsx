import { Container } from "./container";
import { FadeIn } from "./FadeIn";
import { Button } from "./button";
import { Navbar } from "./navbar";
import Image from "next/image";


export function Hero() {
    return (
        <div className="bg-darkBlueCustom from-blue-900 to-black text-white">
            <div className="container mx-auto px-20 py-10">
                <Navbar />
                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row items-center pt-16 lg:items-start lg:space-x-10">
                    {/* Text Content */}
                    <div className="text-left max-w-lg">
                        <h1 className="text-5xl md:text-6xl">
                            <span className="text-blue-400 font-semibold">Data Solutions</span> for Business Growth
                        </h1>
                        <p className="mt-8 ">
                            At FlowSense Solutions, we specialize in crafting data strategies that align with your business goals.
                            By integrating advanced analytics and automation, we empower your business to make informed decisions,
                            optimize processes, and drive sustainable growth.
                        </p>
                        <div className="mt-14 mb-24">
                            <a
                                href="#contact"
                                className="bg-blue-600 px-6 py-3 rounded text-sm font-semibold hover:bg-blue-500"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>

                    {/* Visualization */}
                    <div className="-mt-16 ml-10 w-full lg:w-1/2 flex justify-center">
                        <Image
                            src="/assets/hero2.png"
                            alt="FlowSense Logo"
                            width={550}
                            height={550}
                            className="object-contain mx-3"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}





// ***  OLD HERO PAGE BEFORE REDESIGN  ***
// function Hero() {
//   return (
//     <div className="relative">
//       <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
//       <Container className="relative">
//         <Navbar/>
//         <FadeIn className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-24 md:pt-16">
//           <h1 className="font-semibold text-balance text-4xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-6xl/[0.8] md:text-8xl/[0.8]">
//             Data Solutions for Business Growth
//           </h1>
//           <p className="mt-8  text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
//           At Flow Sense Solutions, we specialize in crafting data strategies that align with your business goals. By integrating advanced analytics and automation, we empower your business to make informed decisions, optimize processes, and drive sustainable growth.
//           Let us help you harness the power of data to drive your business forward.
//           </p>
//           <p className="mt-4 text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
//           Let us help you harness the power of data to drive your business forward.
//           </p>
//           {/* <img sizes="318px" srcset="https://framerusercontent.com/images/jiShuCRZ269qv4rRSn5yILdnVDM.png?scale-down-to=512 512w,https://framerusercontent.com/images/jiShuCRZ269qv4rRSn5yILdnVDM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/jiShuCRZ269qv4rRSn5yILdnVDM.png 1083w" src="https://framerusercontent.com/images/jiShuCRZ269qv4rRSn5yILdnVDM.png" alt="graph" ></img> */}
//           <div className="mt-24 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
//             <Button href="#">Get started</Button>
//             {/* <Button variant="secondary" href="/pricing">
//               See pricing
//             </Button> */}
//           </div>
//         </FadeIn>
//       </Container>
//     </div>
//   )
// }