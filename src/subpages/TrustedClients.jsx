import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import img1 from '../assets/image/abhi.webp';
import img2 from '../assets/image/santu.webp';
import img3 from '../assets/image/images.webp';


const teamMembers = [
  { name: "Santu Kumar", role: "Photographer & Director", image: img2 },
  { name: "Pintu Kumar", role: "Cinematographer", image: img3},
  { name: "Mantu Kumar", role: "Editor", image: img3 },
  { name: "Abhikash Kumar", role: "Drone Pilot", image: img1 },
  { name: "Amarjeet Kumar", role: "Videographer", image: img3 },
  { name: "Sintu Kumar", role: "Photographer", image: img3 },
  { name: "Rajiv Kumar", role: "Photographer", image: img3 },
  { name: "Monu Kumar", role: "Videographer", image: img3 },
  { name: "Anurag Kumar", role: "Drone Pilot", image: img3 },
];

const TrustedClients = () => {
  return (
    <section className="py-16 bg-black text-white overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold">Meet Our Team</h2>
        <p className="text-gray-400 mt-2">Individually, we are one drop. Together, we are an ocean</p>
      </div>

      {/* Infinite Track */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }} 
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {/* Double content for seamless loop */}
          {[...teamMembers, ...teamMembers].map((member, i) => (
            <div
              key={i}
              className="min-w-45 md:min-w-55 bg-white/10 backdrop-blur-lg rounded-2xl p-5 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full object-cover mb-3 border-2 border-amber-500"
               loading="lazy" />
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default TrustedClients;