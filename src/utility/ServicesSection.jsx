import { motion } from "framer-motion";

const services = [
  {
    title: "Photography",
    description:
      "Candid photography (natural candid shots of bride-groom & family) & traditional photography (full event coverage).",
  },
  {
    title: "Videography",
    description:
      "Cinematography (artistic storytelling moments) & traditional videography (complete event coverage).",
  },
  {
    title: "Photobooks & Albums",
    description:
      "Handcrafted custom-designed wedding photo books and albums for every taste.",
  },
  {
    title: "Post-production",
    description:
      "Editing services including cinematic teasers, short films & traditional videos.",
  },
];

export default function ServicesSection() {
  return (
    <>
    
       <div className="container mx-auto px-4 sm:px-6 lg:px-6">
               <motion.h2
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="text-3xl md:text-5xl font-bold text-center mb-4 mt-10"
             >
               Our Services
             </motion.h2>
             </div>

    <div className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
            whileHover={{ y: -8 }}
          >
            {/* Title */}
            <h4 className="text-xl font-semibold mb-3 relative inline-block">
              {service.title}
              <span className="block h-[2px] w-0 bg-black mt-2 transition-all duration-300 group-hover:w-full"></span>
            </h4>

            {/* Divider */}
            <div className="h-[1px] w-full bg-gray-200 my-4"></div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
}