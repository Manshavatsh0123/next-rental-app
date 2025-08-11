import React from 'react'

const Page = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          About <span className="text-primary">Ozalams</span>
        </h1>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
          At Ozalams, we’re dedicated to helping you find your dream home quickly,
          easily, and confidently. Our platform offers verified listings, trusted partnerships,
          and expert support to make your property journey smooth and stress-free.
        </p>
      </section>


      <section className="bg-gradient-to-b from-[#f0f3fc] to-white px-4 py-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-gray-900 mb-8 text-center">
          Our Amazing <span className="text-primary">Team</span>
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
          {[
            {
              name: "Mansha Vatsh",
              role: "Frontend Developer",
              image: "/assets/Mansha01.jpg",
              primaryAction: "View Profile",
              secondaryAction: "Contact",
            },
            {
              name: "Arjun Mehta",
              role: "UX/UI Designer",
              image: "/assets/Arjun.jpg",
              primaryAction: "View Profile",
              secondaryAction: "Contact",
            },
            {
              name: "Priya Sharma",
              role: "Project Manager",
              image: "/assets/priya.jpeg",
              primaryAction: "View Profile",
              secondaryAction: "Contact",
            },
            {
              name: "Rahul Verma",
              role: "Backend Engineer",
              image: "/assets/Rahul.jpeg",
              primaryAction: "View Profile",
              secondaryAction: "Contact",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
            >
             
              <div className="flex justify-end px-4 pt-4">
                <button 
                  className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 
                       focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                  type="button"
                >
                  
                </button>
              </div>

              
              <div className="flex flex-col items-center pb-10">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover"
                  src={member.image}
                  alt={member.name}
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {member.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {member.role}
                </span>

                <div className="flex mt-4 md:mt-6">
                  <a
                    href="https://www.linkedin.com/in/mansha-vatsh88/"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white 
                         bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                         dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {member.primaryAction}
                  </a>
                  <a
                    href="#"
                    className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white 
                         rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 
                         focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 
                         dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    {member.secondaryAction}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Why Choose <span className="text-blue-600">Us?</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {[
            {
              title: "Trusted Partners",
              desc: "We work only with verified and reliable property owners.",
            },
            {
              title: "Verified Listings",
              desc: "Every property is thoroughly verified before going live.",
            },
            {
              title: "24/7 Support",
              desc: "Our support team is always ready to assist you.",
            },
            {
              title: "Best Deals",
              desc: "We bring you exclusive offers and competitive rental prices.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-3 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-primary to-[#f0f3fc] text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Ready to Find Your Perfect Home?</h2>
        <p className="mt-3 text-white/90">
          Start browsing now and make your dream home a reality with Ozalams.
        </p>
        <button className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-100 transition duration-300">
          Get Started
        </button>
      </section>
    </div>

  );
}


export default Page