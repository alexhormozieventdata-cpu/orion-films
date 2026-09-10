import React from "react";
import { motion } from "framer-motion";
import img from "../assets/optimized/image/DSC02475.webp";

const HomeSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, rotate: -8, x: -60 }}
          whileInView={{ opacity: 1, rotate: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src={img}
              loading="lazy"
              alt="Orion Films Production"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </motion.div>


        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-5"
        >
            <h2 className="text-4xl font-semibold italic">
            Moments. Memories. Magic.
          </h2>
          <p className="text-base sm:text-lg text-gray-700 font-medium">
            We don’t take pictures, we create memories that stay for life.
          </p>

          <div className="space-y-3 text-gray-600 text-sm sm:text-base leading-relaxed">
            <p>
              Orion Films is a creative photography and videography brand known for capturing life’s most meaningful moments with a cinematic touch.
            </p>

            <p>
              We specialize in professional photo and video services, blending creativity, emotion, and storytelling into every frame.
            </p>

            <p>
              We don’t just record moments—we transform them into lasting memories.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-3 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition"
          >
            Explore Our Work
          </motion.button>
        </motion.div>

        {/* RIGHT IMAGE */}
        

      </div>
    </section>
  );
};

export default HomeSection;