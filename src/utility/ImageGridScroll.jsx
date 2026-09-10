"use client";
import { motion } from "framer-motion";

const images = [
  { src: "/img1.webp", x: 300, y: 150 },
  { src: "/img2.webp", x: 200, y: 150 },
  { src: "/img3.webp", x: 0, y: 250 },
  { src: "/img4.webp", x: -200, y: 150 },
  { src: "/img5.webp", x: -320, y: 150 },
  { src: "/img6.webp", x: 320, y: 0 },
  { src: "/img7.webp", x: 200, y: 0 },
  { src: "/img8.webp", x: -200, y: 0 },
];

export default function ImageGridScroll() {
  return (
    <div className="relative h-[200vh] bg-black">
      
      {/* Sticky Section */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
        {/* Grid Container */}
        <div className="relative w-[600px] h-[600px]">

          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img.src}
              className="absolute w-28 h-28 object-cover rounded-xl"
              
              initial={{
                opacity: 0,
                scale: 0.5,
                x: img.x,
                y: img.y,
              }}
              
              whileInView={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
              }}

              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: "easeOut",
              }}
              
              viewport={{ once: true }}
             loading="lazy" />
          ))}

          {/* Main Center Image */}
          <motion.img
            src="/main.webp"
            className="absolute w-40 h-40 object-cover rounded-2xl z-10"
            initial={{ scale: 2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
           loading="lazy" />

        </div>
      </div>
    </div>
  );
}