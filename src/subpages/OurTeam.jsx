// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useRef } from "react";

const team = [
  {
    name: "Rahul Sharma",
    role: "Lead Photographer",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
  },
  {
    name: "Amit Verma",
    role: "Cinematographer",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    name: "Priya Singh",
    role: "Editor",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Neha Kapoor",
    role: "Creative Director",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
];

export default function OurTeam() {
  return (
    <section className="bg-white text-black py-16 px-4">
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold">Meet Our Team</h2>
        <p className="text-gray-400 mt-2">
          Passionate creators behind your memories
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {team.map((member, i) => (
          <TiltCard key={i} member={member} />
        ))}
      </div>
    </section>
  );
}

/* 🔥 3D TILT CARD COMPONENT */
function TiltCard({ member }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateX = ((y - midY) / midY) * 10;
    const rotateY = ((x - midX) / midX) * 10;

    card.style.transform = `
      perspective(1000px)
      rotateX(${-rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative rounded-2xl overflow-hidden shadow-xl 
                 transition-transform duration-200 will-change-transform"
    >
      {/* Image */}
      <img
        src={member.img}
        alt={member.name}
        className="w-full h-[320px] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-5">
        <h3 className="text-lg font-semibold">{member.name}</h3>
        <p className="text-sm text-gray-300">{member.role}</p>
      </div>
    </motion.div>
  );
}