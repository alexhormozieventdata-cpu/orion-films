import { motion } from "framer-motion";

export function FaceFocus() {
  return (
    <section className="py-20 px-6 bg-black text-white text-center">
      <h2 className="text-4xl mb-10 font-bold">Focus on Emotions</h2>

      <motion.div
        className="relative max-w-xl mx-auto overflow-hidden rounded-3xl"
        whileHover={{ scale: 1.05 }}
      >
        <img
          src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486"
          className="w-full h-[400px] object-cover transition duration-500 hover:scale-125"
         loading="lazy" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
          <p className="text-lg">Pure Love & Real Emotion</p>
        </div>
      </motion.div>
    </section>
  );
}