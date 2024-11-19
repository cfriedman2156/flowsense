import { Heading, Subheading } from '@/components/text'
import { FadeIn } from './FadeIn';


export function Help() {
    return (
        <div className="">
            <div className="mx-auto max-w-2xl lg:max-w-7xl">
                <FadeIn>
                    <Heading as="h3" className="mt-2 max-w-3xl font-semibold">
                        How we can help you
                    </Heading>
                </FadeIn>
                {/* Container for the grid */}
                <FadeIn className="mt-10 grid gap-4 sm:mt-10 lg:grid-cols-3">

                    {/* First Pair */}
                    <div>
                        {/* Performance Card */}
                        <div className="relative mb-4">
                            <div className="absolute inset-px rounded-lg bg-white"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                                <div className="px-8 py-6">
                                    <p className="mt-2 text-3xl font-medium tracking-tight text-gray-950 max-lg:text-center">AI Solutions</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    Utilize the power of artificial intelligence to overcome your unique business challenges. For impactful results, our enterprise software engineering company employs a full range of capabilities—from AI consulting and development to machine learning, deep learning, NLP, computer vision, generative AI, and intelligent process automation.
                                    </p>
                                </div>
                                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-4">
                                    {/* <img
                                        className="w-full max-lg:max-w-xs"
                                        src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                                        alt=""
                                    /> */}
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                        </div>

                        {/* Security Card */}
                        <div className="relative">
                            <div className="absolute inset-px rounded-lg bg-white"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                                <div className="px-8 py-6">
                                    <p className="mt-2 text-3xl font-medium tracking-tight text-gray-950 max-lg:text-center">Data and Analytics</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    Transform your data into a powerful asset that fuels decision-making at all levels. From data governance and management to advanced analytics and data science, ITRex empowers your business—not just IT—to take full control and leverage its data effectively.
                                    </p>
                                </div>
                                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-4">
                                    {/* <img
                                        className="w-full max-lg:max-w-xs"
                                        src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                                        alt=""
                                    /> */}
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                        </div>
                    </div>

                    {/* Second Pair */}
                    <div>
                        {/* Performance Card */}
                        <div className="relative mb-4">
                            <div className="absolute inset-px rounded-lg bg-white"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                                <div className="px-8 py-6">
                                    <p className="mt-2 text-3xl font-medium tracking-tight text-gray-950 max-lg:text-center">IoT & Embedded Systems</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    Drive innovation with connected devices and embedded systems that expand your capabilities. Our expertise spans from IoT solution development to firmware engineering and HMI design, integrating intelligent hardware seamlessly into your business model.
                                    </p>
                                </div>
                                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-4">
                                    {/* <img
                                        className="w-full max-lg:max-w-xs"
                                        src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                                        alt=""
                                    /> */}
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                        </div>

                        {/* Security Card */}
                        <div className="relative">
                            <div className="absolute inset-px rounded-lg bg-white"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                                <div className="px-8 py-6">
                                    <p className="mt-2 text-3xl font-medium tracking-tight text-gray-950 max-lg:text-center">Cloud & Modernization Services</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    Accelerate your digital journey with cloud solutions and legacy modernization services. From seamless cloud migration to DevOps, ITRex optimizes operations for speed, scalability, and cost-efficiency. Our end-to-end services ensure that your IT infrastructure is resilient, secure, and future-ready.
                                    </p>
                                </div>
                                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-4">
                                    {/* <img
                                        className="w-full max-lg:max-w-xs"
                                        src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                                        alt=""
                                    /> */}
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                        </div>
                    </div>

                    {/* Third Pair */}
                    <div>
                        {/* Performance Card */}
                        <div className="relative mb-4">
                            <div className="absolute inset-px rounded-lg bg-white"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                                <div className="px-8 py-6">
                                    <p className="mt-2 text-3xl font-medium tracking-tight text-gray-950 max-lg:text-center">Software Engineering</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    Create high-performance software that is tailored to your enterprise requirements. Whether you require full project support or a specific skillset, we cover all areas—from business analysis, UX/UI design, quality assurance to development and post-launch support—across web, mobile, desktop, cloud, and embedded platforms.
                                    </p>
                                </div>
                                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-4">
                                    {/* <img
                                        className="w-full max-lg:max-w-xs"
                                        src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                                        alt=""
                                    /> */}
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                        </div>

                        {/* Security Card */}
                        <div className="relative">
                            <div className="absolute inset-px rounded-lg bg-white"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                                <div className="px-8 py-6">
                                    <p className="mt-2 text-3xl font-medium tracking-tight text-gray-950 max-lg:text-center">Innovation Consulting</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    Restructure your business with strategic guidance. Our team is here to make every step easier, from IT audits, idea validation, and strategy planning to process optimization, all while aligning each initiative with your specific goals.
                                    </p>
                                </div>
                                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-4">
                                    {/* <img
                                        className="w-full max-lg:max-w-xs"
                                        src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                                        alt=""
                                    /> */}
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                        </div>
                    </div>

                </FadeIn>
            </div>
        </div>
    );
}
