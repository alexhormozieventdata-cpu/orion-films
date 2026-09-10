import { motion } from "framer-motion";

export function StatsSection() {
  return (
    <div className="w-full py-16 px-6 md:px-12 bg-white">
      <div className="grid md:grid-cols-3 gap-10 items-center max-w-6xl mx-auto">

        {/* Left Counters */}
        <div>
          <div className="mb-8">
            <p className="text-gray-500 mb-2">Cities Travelled</p>
            <Counter end={60} suffix="+" />
          </div>

          <div>
            <p className="text-gray-500 mb-2">Photos Delivered</p>
            <Counter end={1} suffix="M+" />
          </div>
        </div>

        {/* Middle Counters */}
        <div>
          <div className="mb-8">
            <p className="text-gray-500 mb-2">Happy Couples</p>
            <Counter end={550} suffix="+" />
          </div>

          <div>
            <p className="text-gray-500 mb-2">Videos Produced</p>
            <Counter end={850} suffix="+" />
          </div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://weddingpur.com/wp-content/uploads/2023/12/Engagement-Photoshoot-by-weddingpur-683x1024.jpg"
            alt="Engagement"
            className="rounded-2xl shadow-lg w-full"
          />
        </motion.div>
      </div>
    </div>
  );
}
