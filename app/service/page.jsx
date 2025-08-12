import React from "react";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Property for Sale",
      desc: "Curated listings, negotiation help, and legal support for buying properties.",
      icon: HomeIcon,
    },
    {
      id: 2,
      title: "Property for Rent",
      desc: "Verified rental listings, lease management, and tenant screening.",
      icon: BuildingIcon,
    },
    {
      id: 3,
      title: "Property Management",
      desc: "End-to-end management: maintenance, rent collection, and inspections.",
      icon: ToolsIcon,
    },
    {
      id: 4,
      title: "Consultation & Paperwork",
      desc: "Valuation, legal paperwork assistance, and documentation guidance.",
      icon: DocumentIcon,
    },
  ];

  const facilities = [
    "Parking",
    "Swimming Pool",
    "Gym & Fitness Center",
    "24/7 Security",
    "Garden / Play Area",
    "Clubhouse",
    "Power Backup",
    "High-speed Wi-Fi",
    "Nearby Public Transport",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Our Services</h1>
            <p className="text-gray-600 mb-8">We help you find, buy, rent and manage properties — plus provide dependable support and facilities for every listing.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((s) => (
                <article key={s.id} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                      <s.icon />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{s.title}</h3>
                      <p className="text-gray-500 text-sm mt-1">{s.desc}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 bg-gradient-to-r from-white/60 to-white/80 p-6 rounded-2xl border border-gray-100 shadow">
              <h2 className="text-lg font-semibold mb-2">Need a personalized plan?</h2>
              <p className="text-gray-600">Contact our experts for a free consultation and property valuation.</p>
              <div className="mt-4 flex gap-3">
                <input className="flex-1 rounded-lg border px-4 py-2" placeholder="Your email or phone" />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Request Call</button>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Facilities included</h3>

              <ul className="grid grid-cols-1 gap-3">
                {facilities.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 p-3 rounded-lg border hover:shadow transition bg-gradient-to-r from-white to-white">
                    <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center text-blue-600 font-semibold">{idx + 1}</div>
                    <div className="flex-1">
                      <div className="font-medium">{f}</div>
                      <div className="text-xs text-gray-500">{facilityDetail(f)}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 text-center">
                <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white shadow">See full facility list</button>
              </div>
            </div>

            <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border">
              <h4 className="font-semibold mb-2">Why choose our services?</h4>
              <ol className="list-decimal pl-5 text-sm text-gray-600">
                <li>Verified listings with photos and documents.</li>
                <li>Transparent pricing and no hidden fees.</li>
                <li>Local support and quick resolution.</li>
              </ol>
            </div>
          </aside>
        </section>

        <section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Frequently asked questions</h3>
            <details className="mb-3">
              <summary className="font-medium cursor-pointer">How do I list my property?</summary>
              <p className="text-gray-600 mt-2">You can list your property using the "Contact Us" button — our team will guide you through the steps.</p>
            </details>
            <details className="mb-3">
              <summary className="font-medium cursor-pointer">Do you offer maintenance?</summary>
              <p className="text-gray-600 mt-2">Yes — property management customers get access to routine maintenance and emergency support.</p>
            </details>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold">Ready to get started?</h3>
              <p className="mt-2 text-sm">Connect with our experts — find the right plan for buying, renting or managing your property.</p>
            </div>
            <div className="mt-4">
              <button className="w-full py-3 rounded-lg bg-white text-indigo-600 font-semibold">Contact Sales</button>
              <button className="w-full mt-3 py-3 rounded-lg bg-white/20 text-white">Book a Visit</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function facilityDetail(name) {
  switch (name) {
    case "Parking":
      return "Secure covered & open parking slots";
    case "Swimming Pool":
      return "Olympic or community pool options";
    case "Gym & Fitness Center":
      return "Equipped gym with trainers available";
    case "24/7 Security":
      return "CCTV and on-site guards";
    case "Garden / Play Area":
      return "Landscaped garden and kids play area";
    case "Clubhouse":
      return "Community events and meetings";
    case "Power Backup":
      return "Stable backup for common areas";
    case "High-speed Wi-Fi":
      return "Shared or dedicated broadband options";
    case "Nearby Public Transport":
      return "Bus and metro within walking distance";
    default:
      return "";
  }
}

function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 10.5L12 4l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10.5z" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 21h18" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 21V10" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 21V4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 21V7" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ToolsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.7 9.3l-6.4 6.4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.2 5.8a3 3 0 1 1 4.2 4.2L14 16.4 7.6 10" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 2v6h6" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
