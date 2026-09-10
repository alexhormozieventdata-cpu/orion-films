import { motion } from "framer-motion";

export default function MarqueeText() {
  return (
    <section className="w-full overflow-hidden bg-transparent py-6">
      
      <div className="relative flex whitespace-nowrap">
        
        {/* ORIGINAL */}
        <motion.div
          className="flex gap-16 text-5xl md:text-6xl font-semibold text-gray-200"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
        >
          <span>Contact us</span>
          <span>Contact us</span>
          <span>Contact us</span>
          <span>Contact us</span>
        </motion.div>

        {/* COPY (for seamless loop) */}
        <motion.div
          className="flex gap-16 text-5xl md:text-6xl font-semibold text-gray-200 absolute left-full top-0"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
        >
          <span>Contact us</span>
          <span>Contact us</span>
          <span>Contact us</span>
          <span>Contact us</span>
        </motion.div>

      </div>
    </section>
  );
}