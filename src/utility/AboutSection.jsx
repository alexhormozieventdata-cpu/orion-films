import { motion } from "framer-motion";

import img from '../assets/optimized/image/DSC02475.webp';

export default function AboutSection() {
  return (
    <div className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, rotate: -4, x: -50 }}
          whileInView={{ opacity: 1, rotate: -4, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src={img}
              loading="lazy"
              alt="Orion Films Production"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-semibold italic">
            Orion Films Production
          </h2>

          <p className="text-lg text-gray-700 font-medium">
            Artistic Story Telling Celebrating YOU!
          </p>

          <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
            <p>
              Welcome to Orion Films Production, where we infuse magic into your wedding
              memories—turning them into timeless tales of love and companionship.
            </p>

            <p>
              We are an award-winning premium wedding photography and films brand,
              known for our artistic, professional, and customer-centric approach.
            </p>

            <p>
              We exist to showcase the most beautiful and heartfelt stories of your
              life in their true magnificence.
            </p>
          </div>

          {/* CTA Button */}
          <button className="mt-4 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Explore Our Work
          </button>
        </motion.div>
      </div>
    </div>
  );
}