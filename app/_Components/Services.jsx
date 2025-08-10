import { CreditCard, Send } from 'lucide-react'
import React from 'react'

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-11  mb-12">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 mb-3">Take The <span className="text-blue-600">First</span> Step</h1>
      <p className="text-gray-600 text-sm mt-2">
        Select Your Goal And We'll Help You Achieve It
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {[
          { title: "Service 1", img: "/assets/ab3.jpg" },
          { title: "Service 2", img: "/assets/ab2.jpg" },
          { title: "Service 3", img: "/assets/ab1.png" },
        ].map((card, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <img
              src={card.img}
              alt={card.title}
              className="object-cover w-full h-40 rounded-lg shadow-sm"
            />


            <div className="flex items-center space-x-2 mt-4">
              <div className="flex -space-x-2">
                {["/assets/team1.jpg", "/assets/team2.jpg", "/assets/team3.jpg"].map(
                  (avatar, j) => (
                    <img
                      key={j}
                      src={avatar}
                      alt={`User ${j + 1}`}
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  )
                )}
              </div>
              <span className="text-gray-700 font-medium text-sm">
                2K+ People Visited
              </span>
              <button className="ml-auto bg-primary text-white px-3 py-1.5 rounded-full text-sm hover:bg-primary/80 transition">
                View
              </button>
            </div>


            <div className="grid grid-cols-2 gap-3 pt-4">
              {[
                { icon: Send, title: "Send Money", desc: "Take Acc to Acc" },
                { icon: CreditCard, title: "Pay The Bill", desc: "Budget On Rent" },
              ].map((action, k) => (
                <div
                  key={k}
                  className="p-2 rounded-lg bg-gray-100 text-center flex flex-col items-center space-y-1 shadow-sm hover:shadow-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-white transition-all duration-300 cursor-pointer"
                >
                  <action.icon
                    size={26}
                    className="text-white bg-primary p-1 rounded-full transition-all duration-300 hover:bg-white hover:text-primary"
                  />
                  <h1 className="mt-1 font-semibold text-xs">{action.title}</h1>
                  <p className="text-[10px] opacity-70">{action.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Services