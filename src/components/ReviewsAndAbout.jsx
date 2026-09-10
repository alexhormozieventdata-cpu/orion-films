import { motion } from "framer-motion";

import img from '../assets/image/UserIcon.png';

const reviews = [
  {
    name: "Rahul Sharma",
    role: "Groom",
    image: img,
    review:
      "Absolutely amazing experience! The team captured every emotion perfectly. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Verma",
    role: "Bride",
    image: img,
    review:
      "Our wedding film felt like a movie! Loved the cinematic touch and professionalism.",
    rating: 5,
  },
  {
    name: "Amit Singh",
    role: "Client",
    image: img,
    review:
      "Very creative team. They captured moments we didn’t even notice. Worth every penny!",
    rating: 5,
  },
];

export function ReviewsAndAbout() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden 
bg-linear-to-br from-amber-600 via-gray-900 to-black text-white">

      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-5xl font-bold">
          What Our Clients Say
        </h2>
        <p className="text-gray-400 mt-2">
          Real stories from real weddings
        </p>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-6 w-max px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {[...reviews, ...reviews].map((item, i) => (
            <div
              key={i}
              className="min-w-[280px] sm:min-w-[320px] bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/10"
            >
              {/* Top */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-400">{item.role}</p>
                </div>
              </div>

              {/* Review */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                "{item.review}"
              </p>

              {/* Stars */}
              <div className="flex text-yellow-400">
                {"★★★★★".slice(0, item.rating)}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient Fade */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent"></div>
      </div>
    </section>
  );
}