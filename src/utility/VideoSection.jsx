"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const videos = [
  {
    id: "1PBVPvfM2lw",
    thumbnail:
      "https://www.candidshutters.com/maintenance/wp-content/uploads/2024/06/best-wedding-photographer-indian-wedding-films.webp",
    title: "Wedding Film",
  },
  {
    id: "dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800",
    title: "Pre Wedding",
  },
  {
    id: "3JZ_D3ELwOQ",
    thumbnail:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
    title: "Couple Story",
  },
];

export default function VideoCards() {
  const [active, setActive] = useState(null);

  return (
    <div className="bg-black py-20 px-6">
      <h2 className="text-white text-3xl text-center mb-12 font-bold">
        Our Films
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {videos.map((video, i) => (
          <motion.div
            key={i}
            className="relative rounded-2xl overflow-hidden cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            onClick={() => setActive(video)}
          >
            {/* Background Image */}
            <img
              src={video.thumbnail}
              className="w-full h-80 object-cover"
             loading="lazy" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />

            {/* Glass Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              
              {/* Play Button */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-lg border border-white/30 mb-4">
                ▶
              </div>

              <h3 className="text-lg font-semibold">{video.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Video */}
      {active && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setActive(null)}
        >
          <motion.div
            className="w-[90%] max-w-4xl aspect-video"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <iframe
              className="w-full h-full rounded-xl"
              src={`https://www.youtube.com/embed/${active.id}?autoplay=1`}
              allow="autoplay"
              allowFullScreen
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}