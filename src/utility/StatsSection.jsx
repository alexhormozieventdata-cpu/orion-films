import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { lazy } from "react";

import img from '../assets/image/DSC08309.JPG'

const Counter = ({ end, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-left">
      <h3 className="text-3xl font-bold">
        {count}
        {suffix}
      </h3>
    </div>
  );
};

const stats = [
  {
    value: 75,
    suffix: "+",
    title: "Cities Travelled",
    desc: "Spread across the globe.",
  },
  {
    value: 1000,
    suffix: "+",
    title: "Happy Couples",
    desc: "From diverse cultures and regions.",
  },
  {
    value: 1,
    suffix: "M+",
    title: "Photos Delivered",
    desc: "Captured life-defining moments.",
  },
  {
    value: 850,
    suffix: "+",
    title: "Videos Produced",
    desc: "A tribute to love & companionship.",
  },
];

export default function StatsSection() {
  return (
    <div className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-semibold mb-10 italic">
            Nurtured to perfection
          </h2>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                className="space-y-2"
                whileHover={{ x: 6 }}
              >
                <Counter end={item.value} suffix={item.suffix} />

                <h4 className="font-semibold text-lg">
                  {item.title}
                </h4>

                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={img}
            className="rounded-2xl shadow-lg object-cover w-full h-120"
            loading={lazy}
            alt="Orion Films Poduction"
          />
        </motion.div>
      </div>
    </div>
  );
}