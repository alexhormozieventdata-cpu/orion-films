import { useState } from "react";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
  "https://images.unsplash.com/photo-1509927083803-4bd519298ac4",
];

export function LightboxGallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-20 px-6 bg-black text-white">
      <h2 className="text-center text-4xl mb-10 font-bold">Gallery 📸</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            onClick={() => setSelected(img)}
            className="cursor-pointer rounded-xl h-[250px] w-full object-cover"
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <img src={selected} className="max-h-[90%] rounded-2xl"  loading="lazy" />
        </div>
      )}
    </section>
  );
}