import { motion } from "framer-motion";

export default function ContactHeader() {
  return (
    <section className="relative w-full min-h-[35vh] sm:min-h-[40vh] md:min-h-[50vh] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 md:bg-black/60 backdrop-blur-[2px]" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center px-4 sm:px-6"
      >
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                     font-bold text-white tracking-wide leading-tight"
        >
          CONTACT US
        </h1>

        {/* Subtitle (NEW - pro touch) */}
        <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-gray-300">
          Let’s connect and create something beautiful together
        </p>

        {/* Underline */}
        <div className="mt-4 flex justify-center">
          <div className="w-12 sm:w-16 md:w-20 h-[2px] bg-white/70 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}