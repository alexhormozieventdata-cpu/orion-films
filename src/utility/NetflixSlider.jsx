import { motion } from "framer-motion";

const videos = [
  {
    title: "Royal Wedding",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552",
  },
  {
    title: "Beach Love Story",
    thumbnail: "https://images.unsplash.com/photo-1509927083803-4bd519298ac4",
  },
  {
    title: "Candid Moments",
    thumbnail: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
  },
];

export function NetflixSlider() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <h2 className="text-3xl font-bold mb-6">Cinematic Films 🎬</h2>

      <div className="flex gap-5 overflow-x-auto scrollbar-hide">
        {videos.map((item, i) => (
          <motion.div
            key={i}
            className="min-w-[250px] md:min-w-[300px] relative rounded-xl overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            <img
              src={item.thumbnail}
              className="w-full h-[180px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition">
              <p className="text-lg">▶ Play</p>
            </div>

            <p className="mt-2 text-sm">{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}