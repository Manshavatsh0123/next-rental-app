import { BadgeDollarSign, CarTaxiFront, FilePenLine, Handshake, HomeIcon, HousePlus, Image } from 'lucide-react'
import React from 'react'

const About1 = () => {
    return (
        <div className="container mx-auto px-4 py-12 mt-11 mb-5">
            <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-12">

                {/* Left Section */}
                <div className="flex flex-col items-start justify-center px-4 py-12 max-w-lg">

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 mb-6">
                        Sell for <span className="text-blue-600">More</span> Than the Home
                        <span className="text-blue-600"> Next Door</span>
                    </h1>

                    <p className="text-base text-gray-600 max-w-md mb-10 leading-relaxed">
                        Unlock your property’s full value with our powerful search tools, real-time market insights,
                        and expert guidance. From listing to closing, we make selling faster, easier, and more rewarding.
                    </p>

                    <div className="inline-block items-center mb-12">


                        <div className="flex flex-row items-start mb-8 group">
                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-500 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:bg-blue-600">
                                <BadgeDollarSign className="w-7 h-7 text-white transition-transform duration-300 group-hover:rotate-12" />
                            </div>
                            <div className="ml-5 text-left">
                                <p className="text-lg font-semibold text-gray-900">
                                    The ability to identify market-entry
                                </p>
                                <p className="text-sm text-gray-500 leading-snug">
                                    Every property is vetted to ensure genuine opportunities.
                                </p>
                            </div>
                        </div>


                        <div className="flex flex-row items-start mb-8 group">
                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-500 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:bg-blue-600">
                                <Handshake className="w-7 h-7 text-white transition-transform duration-300 group-hover:rotate-12" />
                            </div>
                            <div className="ml-5 text-left">
                                <p className="text-lg font-semibold text-gray-900">
                                    Seamless and transparent negotiations
                                </p>
                                <p className="text-sm text-gray-500 leading-snug">
                                    We ensure fair deals with complete clarity for all parties involved.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Right Section */}
                <div className="relative group transition-all duration-300 ease-in-out mx-auto w-fit">
                    <img
                        src="/assets/apartment.jpg"
                        alt="Home"
                        className="w-[380px] h-[480px] object-cover rounded-t-full rounded-b-sm px-8 drop-shadow-lg max-w-full"
                    />

                    <div className="absolute top-20 -left-5 group-hover:scale-105 transition-transform duration-300">
                        <div className="bg-gray-100/50 rounded-xl p-1 shadow-md w-[130px]">
                            <div className="w-32 bg-gradient-to-r from-primary to-blue-500 border-4 border-white shadow-lg rounded-xl p-2">
                                <h1 className="text-base text-center text-white font-semibold tracking-wide">
                                    Super Sale$
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default About1