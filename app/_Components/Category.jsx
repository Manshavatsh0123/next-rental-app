import { Button } from '@/components/ui/button'
import { Bath, BedDouble, CarTaxiFront, CookingPot, Facebook, Fence, FilePenLine, Handshake, HomeIcon, HousePlus, Instagram, Lightbulb, MoveRight, Send, Twitter, WavesLadder } from 'lucide-react'
import React from 'react'

const Category = () => {
    return (
        <div className="container mt-12 px-3 mb-12 mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">

                {/* Left Section */}
                <div className="relative group transition-all duration-300 ease-in-out mx-auto">
                    <img
                        src="/assets/next-door2.webp"
                        alt="Home"
                        width={450}
                        height={550}
                        className="object-cover rounded-t-full rounded-b-sm px-4 drop-shadow-lg"
                    />

                    <div className="absolute -left-16 top-64 w-56 space-y-3 bg-white/20 p-4 rounded-2xl backdrop-blur-lg border border-white/30 shadow-lg">
                        {[
                            { icon: Twitter, label: "Twitter" },
                            { icon: Send, label: "Telegram" },
                            { icon: Facebook, label: "Facebook" },
                            { icon: Instagram, label: "Instagram" }
                        ].map(({ icon: Icon, label }, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-2.5 p-2.5 bg-white/90 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:scale-[1.02] hover:bg-gradient-to-r hover:from-primary hover:to-blue-500 hover:text-white transition-all duration-300 group cursor-pointer"
                            >
                                <Icon
                                    size={26}
                                    className="bg-primary text-white p-1.5 rounded-md group-hover:bg-white group-hover:text-primary transition-all duration-300"
                                />
                                <h1 className="text-gray-800 text-xs font-semibold group-hover:text-white transition-all duration-300">
                                    {label}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Content */}
                <div>
                    <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-lg border-0 border-white/30 shadow-lg mb-10">

                        <div className="grid grid-cols-3 gap-3 mb-3">
                            <div className="p-4 bg-gray-100 text-center rounded-lg shadow-md transition-all duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-white">
                                <CookingPot size={28} className="mx-auto mb-2 text-gray-700 hover:text-white" />
                                <h1 className="text-sm">Airsafe Kitchen</h1>
                            </div>
                            <div className="p-4 bg-gray-100 text-center rounded-lg shadow-md transition-all duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-white">
                                <Lightbulb size={28} className="mx-auto mb-2 text-gray-700 hover:text-white" />
                                <h1 className="text-sm">Lighting Management</h1>
                            </div>
                            <div className="p-4 bg-gray-100 text-center rounded-lg shadow-md transition-all duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-white">
                                <WavesLadder size={28} className="mx-auto mb-2 text-gray-700 hover:text-white" />
                                <h1 className="text-sm">Swimming Pool</h1>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            <div className="p-4 bg-gray-100 text-center rounded-lg shadow-md transition-all duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-white">
                                <BedDouble size={28} className="mx-auto mb-2 text-gray-700 hover:text-white" />
                                <h1 className="text-sm">Bedroom Comfortable</h1>
                            </div>
                            <div className="p-4 bg-gray-100 text-center rounded-lg shadow-md transition-all duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-white">
                                <Bath size={28} className="mx-auto mb-2 text-gray-700 hover:text-white" />
                                <h1 className="text-sm">Bathroom Comfortable</h1>
                            </div>
                            <div className="p-4 bg-gray-100 text-center rounded-lg shadow-md transition-all duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-white">
                                <Fence size={28} className="mx-auto mb-2 text-gray-700 hover:text-white" />
                                <h1 className="text-sm">Garden Safety</h1>
                            </div>
                        </div>
                    </div>

                    <form className="w-full mt-8" action="#" method="post">
                        <label htmlFor="property-search" className="sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    className="w-5 h-5 text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-4.35-4.35M16.65 11a5.65 5.65 0 11-11.3 0 5.65 5.65 0 0111.3 0z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="property-search"
                                className="block w-full p-3 pl-9 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter location, property type..."
                                required
                            />
                            <button
                                type="submit"
                                className="text-white absolute right-2 bottom-2 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Category