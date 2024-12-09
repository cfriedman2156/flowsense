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
                    {/* Image */}
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