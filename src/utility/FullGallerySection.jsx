import { useState } from "react";
import { motion } from "framer-motion";
// NOTE: If you don't want external dependency, we replaced masonry with CSS grid
// import Masonry from "react-masonry-css";

import img1 from "../assets/optimized/portpholio/1.webp";
import img4 from "../assets/optimized/portpholio/4.webp";
import img5 from "../assets/optimized/portpholio/5.webp";
import img6 from "../assets/optimized/portpholio/6.webp";
import img7 from "../assets/optimized/portpholio/7.webp";
import img8 from "../assets/optimized/portpholio/8.webp";
import img9 from "../assets/optimized/portpholio/9.webp";
import img10 from "../assets/optimized/portpholio/10.webp";
import img11 from "../assets/optimized/portpholio/11.webp";
import img12 from "../assets/optimized/portpholio/12.webp";
import img13 from "../assets/optimized/portpholio/13.webp";
import img14 from "../assets/optimized/portpholio/14.webp";
import img15 from "../assets/optimized/portpholio/15.webp";
import img16 from "../assets/optimized/portpholio/16.webp";
import img17 from "../assets/optimized/portpholio/17.webp";
import img18 from "../assets/optimized/portpholio/18.webp";
import img19 from "../assets/optimized/portpholio/19.webp";
import img20 from "../assets/optimized/portpholio/20.webp";
import img21 from "../assets/optimized/portpholio/21.webp";
import img22 from "../assets/optimized/portpholio/22.webp";
import img23 from "../assets/optimized/portpholio/23.webp";
import img24 from "../assets/optimized/portpholio/24.webp";
import img25 from "../assets/optimized/portpholio/25.webp";
import img26 from "../assets/optimized/portpholio/23_1.webp";

const images = [
  img1, img4, img5,
  img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15,
  img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25,
  img26,
];

const data = images.map((img, index) => {
  let category = "Pre Wedding";

  if (index >= 9 && index < 18) category = "Wedding";
  if (index >= 18) category = "Ceremony";

  return {
    category,
    image: img,
    keepTopVisible: index >= 3 && index <= 5,
  };
});

export default function FullGallerySection() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredData =
    filter === "All" ? data : data.filter((item) => item.category === filter);

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 px-2">
          {["All", "Pre Wedding", "Wedding","Ceremony"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 sm:px-4 py-2 text-sm sm:text-base whitespace-nowrap rounded-full border ${
                filter === cat ? "bg-purple-600 text-white" : "border-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover transition duration-500 group-hover:scale-110 ${
                      item.keepTopVisible ? "object-top" : "object-center"
                    }`}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
                </div>

                <h3 className="mt-3 text-lg font-semibold group-hover:text-purple-400">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Full-size portfolio image"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 text-3xl leading-none text-white"
            aria-label="Close full-size image"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <img
            src={selectedImage}
            alt="Full-size portfolio"
            className="max-h-[90vh] max-w-full rounded-lg object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

      <style>
        {` 
          .animate-marquee {
            display: inline-block;
            animation: marquee 10s linear infinite;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
}
