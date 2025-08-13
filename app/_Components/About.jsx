import { Button } from '@/components/ui/button'
import { Home, HomeIcon, MoveRight } from 'lucide-react'
import React from 'react'

const About = () => {
    return (
        <div className="container mx-auto mt-16 px-4 mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">

                {/* Left Section */}
                <div className="relative group transition-all duration-300 ease-in-out mx-auto">
                    <img
                        src="/assets/home-door1.jpg"
                        alt="Home"
                        width={500}
                        height={600}
                        className="object-cover rounded-t-full rounded-b-sm px-6 drop-shadow-lg"
                    />

                    
                    <div className="absolute top-24 left-[65%] group-hover:scale-105 transition-transform duration-300">
                        <div className="bg-gray-100/50 rounded-xl p-1 shadow-md w-[168px]">
                            <div className="w-40 bg-gradient-to-r from-primary to-blue-500 border-4 border-white shadow-lg rounded-xl p-4">
                                <h1 className="text-xl text-center text-white font-semibold tracking-wide">
                                    Super Sale$
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 mb-6">
                        Get More Than Just the <span className="text-blue-600">Home</span> Next Door
                    </h1>

                    <p className="text-base text-gray-600 max-w-lg mb-10 leading-relaxed">
                        Explore dream properties with powerful search tools and expert guidance.
                        Whether buying, upgrading, or investing — we make it smooth and stress-free.
                        Get personalized picks, live market updates, and full support from start to finish.
                        Your perfect home is just a few clicks away.
                    </p>

                    <div className="flex flex-wrap gap-6">
                        {[
                            { img: "/assets/Outside1.jpg", title: "Rent A Home" },
                            { img: "/assets/Outside2.jpg", title: "Buy A Home" },
                            { img: "/assets/Outside3.jpg", title: "Sell A Home" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 gap-3 p-4 rounded-t-full shadow-lg w-fit hover:shadow-xl transition-shadow duration-300 relative"
                            >
                                <div className="w-28 h-24 overflow-hidden rounded-t-full rounded-b-sm">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-base text-gray-800 font-semibold">{item.title}</p>
                                <Button className="flex items-center gap-2 text-sm border-2 border-white">
                                    Search Now
                                    <MoveRight size={15} />
                                </Button>


                                <div className="absolute -top-3 right-1 group-hover:scale-105 transition-transform duration-300">
                                    <div className="bg-gray-100/50 rounded-xl p-1 shadow-md">
                                        <div className="bg-gradient-to-r from-primary to-blue-500 border-2 border-white shadow-lg rounded-xl p-2">
                                            <HomeIcon className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>


    )
}

export default About