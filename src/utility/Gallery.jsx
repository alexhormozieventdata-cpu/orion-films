"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import img1 from '../assets/image/A7404425.JPG'
import img2 from '../assets/image/A7404436.JPG'
import img3 from '../assets/image/DSC00511.JPG'
import img4 from '../assets/image/DSC00519.JPG'
import img5 from '../assets/image/DSC02499.JPG'
import img6 from '../assets/image/DSC03529.JPG'
import img7 from '../assets/image/DSC03548.JPG'
import img8 from '../assets/image/DSC03567.JPG'
import img9 from '../assets/image/pholio.jpg'


const images = [
  img1,img2,img3,img4,img5,img6,img7,img8,img9
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-white py-20 px-6">
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
              className="w-full h-72 object-cover transition duration-500 hover:scale-110"
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
          />
        </div>
      )}
    </div>
  );
}