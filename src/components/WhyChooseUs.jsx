// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export function WhyChooseUs() {
  const items = [
    
    {
      title: "Experience",
      desc: "Wedding day comes only once and we understand its importance. We have 7+ years experience and have worked with 550+ couples.",
      icon: "🌟",
    },
    {
      title: "Quality",
      desc: "Our work quality speaks for itself. We follow strict quality checks for photographers, cinematographers, and editors.",
      icon: "🎨",
    },
    {
      title: "Support",
      desc: "We provide 16-hour active support. Once you book us, all your photography concerns are handled by our team.",
      icon: "📞",
    },
  ];

  return (
    <div className="w-full py-16 px-6 md:px-12 bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold text-center mb-12"
      >
        Why Choose Us?
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}