"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import img1 from '../assets/optimized/image/A7404425.webp'
import img2 from '../assets/optimized/image/A7404436.webp'
import img3 from '../assets/optimized/image/DSC00511.webp'
import img4 from '../assets/optimized/image/DSC00519.webp'
import img5 from '../assets/optimized/image/DSC02499.webp'
import img6 from '../assets/optimized/image/DSC03529.webp'
import img7 from '../assets/optimized/image/DSC03548.webp'
import img8 from '../assets/optimized/image/DSC03567.webp'
import img9 from '../assets/optimized/image/pholio.webp'


const images = [
  img1,img2,img3,img4,img5,img6,img7,img8,img9
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-white py-20 px-6 touch-pan-y">
      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="overflow-hidden rounded-xl cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() =>
              setSelected({
                src: img,
                isRotated: i >= 3 && i <= 5,
              })
            }
          >
            <img
              src={img}
              alt="gallery"
              draggable="false"
              className="w-full h-72 object-cover object-center select-none transition duration-500 hover:scale-110"
              style={
                i >= 3 && i <= 5
                  ? { transform: "rotate(-90deg) scale(1.15)" }
                  : undefined
              }
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className={`flex max-h-[90vh] max-w-[90vw] items-center justify-center ${
              selected.isRotated ? "rotate-[-90deg]" : ""
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <motion.img
              src={selected.src}
              className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              draggable="false"
              loading="eager"
            />
          </div>
        </div>
      )}
    </div>
  );
}