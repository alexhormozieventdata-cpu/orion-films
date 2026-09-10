import { useState } from "react";
// NOTE: If you don't want external dependency, we replaced masonry with CSS grid
// import Masonry from "react-masonry-css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import img1 from "../assets/portpholio/1.webp";
import img4 from "../assets/portpholio/4.webp";
import img5 from "../assets/portpholio/5.webp";
import img6 from "../assets/portpholio/6.webp";
import img7 from "../assets/portpholio/7.webp";
import img8 from "../assets/portpholio/8.webp";
import img9 from "../assets/portpholio/9.webp";
import img10 from "../assets/portpholio/10.webp";
import img11 from "../assets/portpholio/11.webp";
import img12 from "../assets/portpholio/12.webp";
import img13 from "../assets/portpholio/13.webp";
import img14 from "../assets/portpholio/14.webp";
import img15 from "../assets/portpholio/15.webp";
import img16 from "../assets/portpholio/16.webp";
import img17 from "../assets/portpholio/17.webp";
import img18 from "../assets/portpholio/18.webp";
import img19 from "../assets/portpholio/19.webp";
import img20 from "../assets/portpholio/20.webp";
import img21 from "../assets/portpholio/21.webp";
import img22 from "../assets/portpholio/22.webp";
import img23 from "../assets/portpholio/23.webp";
import img24 from "../assets/portpholio/24.webp";
import img25 from "../assets/portpholio/25.webp";
import img26 from "../assets/portpholio/23_1.webp";

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
  };
});

const breakpointColumns = {
  default: 3,
  1024: 2,
  640: 1,
};

export default function FullGallerySection() {
  const [filter, setFilter] = useState("All");

  const filteredData =
    filter === "All" ? data : data.filter((item) => item.category === filter);

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center gap-4 mb-10">
          {["All", "Pre Wedding", "Wedding","Ceremony"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border ${
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
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full object-cover transition duration-500 group-hover:scale-110"
                   loading="lazy" />
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
