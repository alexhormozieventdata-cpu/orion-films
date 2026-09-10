"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import img1 from '../assets/image/A7404425.webp'
import img2 from '../assets/image/A7404436.webp'
import img3 from '../assets/image/DSC00511.webp'
import img4 from '../assets/image/DSC00519.webp'
import img5 from '../assets/image/DSC02499.webp'
import img6 from '../assets/image/DSC03529.webp'
import img7 from '../assets/image/DSC03548.webp'
import img8 from '../assets/image/DSC03567.webp'
import img9 from '../assets/image/pholio.webp'


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
            onClick={() => setSelected(img)}
          >
            <img
              src={img}
              alt="gallery"
              draggable="false"
              className="w-full h-72 object-cover select-none transition duration-500 hover:scale-110"
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
          <motion.img
            src={selected}
            className="max-w-[90%] max-h-[90%] rounded-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            draggable="false"
            loading="eager"
          />
        </div>
      )}
    </div>
  );
}