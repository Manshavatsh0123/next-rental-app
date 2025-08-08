import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import React from 'react'

const About = () => {
    return (
        <div className="container mt-10 px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">

                {/* Left Section */}
                <div className="relative group transition-all duration-300 ease-in-out mx-auto">
                    <img
                        src="/assets/home-door1.jpg"
                        alt="Home"
                        width={500}
                        height={600}
                        className="object-cover rounded-t-full rounded-b-sm px-6"
                    />

                    
                    <div className="absolute top-28 left-82 group-hover:scale-105 transition-transform duration-300">
                        <div className="bg-gray-100/50 rounded-xl p-1 shadow-md w-[168px]">
                            <div className="w-40 bg-gradient-to-r from-primary to-blue-500 border-4 border-white shadow-lg rounded-xl p-4">
                                <h1 className="text-xl text-center text-white font-semibold tracking-wide">
                                    Super Sale$
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content Section */}
                <div>
                    
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 mb-6">
                        Get More Than Just the <span className="text-blue-600">Home</span> Next Door
                    </h1>

                    
                    <p className="text-sm text-gray-500 max-w-md mb-7">
                        Explore dream properties with powerful search tools and expert guidance.
                        Whether buying, upgrading, or investing — we make it smooth and stress-free.
                        Get personalized picks, live market updates, and full support from start to finish.
                        Your perfect home is just a few clicks away.
                    </p>

                    
                    <div className="flex flex-wrap gap-6">
                        
                        <div className="flex flex-col items-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 gap-3 p-4 rounded-t-full shadow-lg w-fit hover:shadow-xl transition-shadow duration-300">
                            <div className="w-26 h-24 overflow-hidden rounded-t-full rounded-b-sm">
                                <img
                                    src="/assets/Outside1.jpg"
                                    alt="Rent a Home"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-sm text-gray-800 font-semibold">Rent A Home</p>
                            <Button className="flex items-center gap-2 text-sm">
                                Search Now
                                <MoveRight size={15} />
                            </Button>
                        </div>

                        
                        <div className="flex flex-col items-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 gap-3 p-4 rounded-t-full shadow-lg w-fit hover:shadow-xl transition-shadow duration-300">
                            <div className="w-26 h-24 overflow-hidden rounded-t-full rounded-b-sm">
                                <img
                                    src="/assets/Outside2.jpg"
                                    alt="Buy a Home"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-sm text-gray-800 font-semibold">Buy A Home</p>
                            <Button className="flex items-center gap-2 text-sm">
                                Search Now
                                <MoveRight size={15} />
                            </Button>
                        </div>

                        
                        <div className="flex flex-col items-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 gap-3 p-4 rounded-t-full shadow-lg w-fit hover:shadow-xl transition-shadow duration-300">
                            <div className="w-26 h-24 overflow-hidden rounded-t-full rounded-b-sm">
                                <img
                                    src="/assets/Outside3.jpg"
                                    alt="Sell a Home"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-sm text-gray-800 font-semibold">Sell A Home</p>
                            <Button className="flex items-center gap-2 text-sm">
                                Search Now
                                <MoveRight size={15} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About