// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ IMPORT
import { lazy } from "react";
import img from '../assets/image/DSC02483.JPG'

export default function WeddingHero() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full m-0 p-0 flex items-center justify-center overflow-hidden min-h-[calc(100vh-70px)]">

      {/* 🎥 Background Video */}
      <img src={img}
    
      className="absolute top-0 left-0 w-full h-full object-cover block"
      loading='lazy'
      alt="Orion Films Production"
      ></img>
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        
        <source src="/videos/wedding.mp4" type="video/mp4" />
      </video> */}

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80"></div>

      {/* ✨ Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Capture Your <span className="text-yellow-400">Dream Wedding</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-8"
        >
          Cinematic storytelling for couples who want their moments to live forever.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >

          {/* ✅ View Gallery */}
          <button
            onClick={() => navigate("/portfolio")}
            className="px-8 h-12 bg-yellow-500 text-black rounded-full 
                       flex items-center justify-center font-semibold
                       hover:bg-yellow-400 transition-all duration-300 
                       hover:scale-105 shadow-lg"
          >
            View Gallery
          </button>

          {/* ✅ Contact Us FIXED */}
          <button
            onClick={() => navigate("/contact")}
            className="px-8 h-12 border border-white text-white rounded-full 
                       flex items-center justify-center font-semibold
                       hover:bg-white hover:text-black transition-all duration-300 
                       hover:scale-105"
          >
            Contact Us
          </button>

        </motion.div>
      </div>

      {/* 👇 Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          repeatType: "reverse",
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm"
      >
        ↓ Scroll
      </motion.div>
    </section>
  );
}