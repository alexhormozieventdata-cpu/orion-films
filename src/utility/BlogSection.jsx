import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    title: "Top 10 Wedding Photographers in India",
    desc: "Discover the best candid photographers for your big day.",
    image:
      "https://www.candidshutters.com/maintenance/wp-content/uploads/2023/09/best-wedding-photographers-new-york-USA-1.webp",
  },
  {
    id: 2,
    title: "Best Wedding Venues in Delhi NCR",
    desc: "Explore luxurious and budget-friendly wedding venues.",
    image:
      "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?q=80&w=1200",
  },
  {
    id: 3,
    title: "Destination Wedding Guide 2025",
    desc: "Plan your dream destination wedding with ease.",
    image:
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=1200",
  },
];

export default function BlogSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black py-20 px-6">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Latest Blogs
          </h2>
          <p className="text-gray-300 mt-4">
            Stories, tips & inspiration for your wedding journey
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative rounded-2xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[320px] object-cover transition duration-500 hover:scale-110"
                 loading="lazy" />
              </div>

              {/* Overlay */}
              <div className="absolute bottom-0 w-full p-6 bg-black/50 backdrop-blur-md">
                <h3 className="text-white text-xl font-semibold">
                  {blog.title}
                </h3>
                <p className="text-gray-300 text-sm mt-2">{blog.desc}</p>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
