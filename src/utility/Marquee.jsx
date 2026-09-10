import { motion } from "framer-motion";

const Marquee = ({ text = "Services", speed = 20 }) => {
  return (
    <div className="w-full overflow-hidden bg-black py-6">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {/* Original */}
        <span className="text-white text-4xl font-semibold mx-8">
          {text}
        </span>

        {/* Duplicate for seamless loop */}
        <span className="text-white text-4xl font-semibold mx-8">
          {text}
        </span>
      </motion.div>
    </div>
  );
};

export default Marquee;