import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const statsData = [
  { value: 16, suffix: "+", label: "Years of Excellence!" },
  { value: 6000, suffix: "+", label: "Unforgettable Events Captured!" },
  { value: 25, suffix: "+", label: "Prestigious Awards for Excellence!" },
  { value: 100, suffix: "+", label: "Dedicated Team Members" },
  { value: 1, suffix: "", label: "Dream" },
];

function Counter({ end, duration = 2 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);

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
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export default function StatsSec() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center">
        
        {statsData.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="flex flex-col items-center"
          >
            {/* Number */}
            <div className="text-3xl md:text-4xl font-bold text-amber-300">
              <Counter end={stat.value} />
              {stat.suffix}
            </div>

            {/* Label */}
            <p className="text-black mt-2 text-sm md:text-base">
              {stat.label}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}