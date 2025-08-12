// app/blog/page.jsx
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "5 Tips for a Better Facility Experience",
    excerpt: "Discover how to make the most of our services with these five practical tips...",
    date: "August 10, 2025",
    category: "Facilities",
    image: "/assets/Blog1.jpg",
  },
  {
    id: 2,
    title: "Why Quality Services Matter",
    excerpt: "A deep dive into the importance of quality in customer experience...",
    date: "July 28, 2025",
    category: "Customer Care",
    image: "/assets/Blog2.jpeg",
  },
  {
    id: 3,
    title: "Our Upcoming New Facilities",
    excerpt: "Here's a sneak peek at the facilities we are introducing next month...",
    date: "July 15, 2025",
    category: "Updates",
    image: "/assets/Blog3.jpg",
  },
];

export default function BlogPage() {
  return (
    <section className="bg-gray-50 min-h-screen px-6 py-12">
      <div className="text-center mb-20 mt-5">
        <h1 className="text-4xl font-bold text-gray-800">Our Blog</h1>
        <p className="mt-3 text-gray-600">Latest updates, tips, and insights from our team</p>
      </div>

      
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-primary font-semibold">{post.category}</p>
              <h2 className="text-lg font-bold mt-1">{post.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{post.excerpt}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-400 text-xs">{post.date}</span>
                <a
                  href="#"
                  className="text-primary font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
