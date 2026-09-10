// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import img from '../assets/image/DSC02475.JPG'

import {
  FaCheckCircle,
  FaUsers,
  FaShieldAlt,
  FaClock,
  FaCamera,
  FaHandshake,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaShieldAlt />,
    title: "Trusted Brand",
    desc: "6+ years of credibility and trust in wedding photography.",
  },
  {
    icon: <FaCamera />,
    title: "Creative + Professional",
    desc: "Perfect blend of artistic creativity and professionalism.",
  },
  {
    icon: <FaUsers />,
    title: "In-house Team",
    desc: "Experienced full-time crew, no freelancers.",
  },
  {
    icon: <FaClock />,
    title: "Transparent Process",
    desc: "Clear timelines, communication, and delivery commitments.",
  },
  {
    icon: <FaCheckCircle />,
    title: "No Outsourcing",
    desc: "Everything handled internally including post-production.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Data Safety",
    desc: "Strong backups ensure your memories are always secure.",
  },
  {
    icon: <FaHandshake />,
    title: "Customer Centric",
    desc: "We prioritize your experience and satisfaction.",
  },
];

export default function WhyHireUs() {
  return (
    <div
      className="relative py-20 px-6 md:px-12 bg-cover bg-center"
      style={{
        backgroundImage:`url(${img})`
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-14 text-center text-white">
          <h2 className="text-4xl font-semibold italic">
            Why Hire Us?
          </h2>
          <p className="text-gray-200 mt-3">
            Crafted with passion, delivered with perfection
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-6 rounded-2xl border border-white/20 
                         bg-white/10 backdrop-blur-lg 
                         shadow-lg hover:shadow-2xl 
                         transition duration-300 text-white"
            >
              {/* Icon */}
              <div className="text-2xl mb-4">
                {item.icon}
              </div>

              {/* Title */}
              <h4 className="text-lg font-semibold mb-2">
                {item.title}
              </h4>

              {/* Divider */}
              <div className="h-[2px] w-10 bg-white/60 mb-3 group-hover:w-16 transition-all"></div>

              {/* Description */}
              <p className="text-sm text-gray-200 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}