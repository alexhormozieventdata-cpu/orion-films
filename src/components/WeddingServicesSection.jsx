import React from "react";
 
import { motion } from "framer-motion";
import weddingImage from "../assets/optimized/image/wedding.webp";
import preWeddingImage from "../assets/optimized/image/prewedding.webp";
import candidImage from "../assets/optimized/image/DSC03548.webp";
import cinematicImage from "../assets/optimized/image/Cinematic-upright.webp";

const WeddingServicesSection = () => {
  const servicesData = [
    {
      id: 1,
      title: "Destination Wedding Photography",
      description:
        "Make your destination wedding unforgettable with cinematic storytelling and breathtaking visuals.",
      image: weddingImage,
    },
    {
      id: 2,
      title: "Candid Wedding Photography",
      description:
        "Capturing real emotions, natural moments, and genuine expressions that tell your true story.",
      image: candidImage,
    },
    {
      id: 3,
      title: "Wedding Cinematography",
      description:
        "Your wedding turned into a cinematic masterpiece filled with emotions and timeless memories.",
      image: cinematicImage,
    },
    {
      id: 4,
      title: "Pre-Wedding Shoots",
      description:
        "Capture your love story before the big day with creative and romantic pre-wedding shoots.",
      image: preWeddingImage,
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-6"
        >
          Our Wedding Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-12"
        >
          Every wedding is unique, and we craft each story with creativity,
          emotions, and cinematic excellence.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl border border-white/10 hover:scale-105 transition duration-300"
            >
              
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                <motion.a
                  href="/portfolio"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-5 py-2 bg-pink-500 rounded-full text-sm hover:bg-pink-600 transition"
                >
                  Explore
                </motion.a>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WeddingServicesSection;