import React from 'react'
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

const services = [
  {
    title: "Kids Birthday",
    desc: "Capture joyful smiles, playful moments, and cute memories.",
  },
  {
    title: "Adult Parties",
    desc: "Celebrate milestones with stylish and vibrant photography.",
  },
  {
    title: "Theme Shoots",
    desc: "Creative themed birthday shoots with unique setups.",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3",
  "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92",
  "https://images.unsplash.com/photo-1530103862676-de8c9debad1d",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba",
];

const BirthdayPhotography = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Orion Films | Birthday Photography</title>
        <meta name="description" content="Professional birthday photography services capturing your special moments beautifully." />
      </Helmet>

      <section className="bg-gradient-to-br from-amber-300 via-pink-50 to-purple-300 py-20 px-6 md:px-16 overflow-hidden">

        {/* HERO */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Birthday Photography
          </h1>
          <p className="text-gray-600 text-lg">
            Celebrate every birthday with joy, laughter, and timeless memories.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          
          <motion.img
            src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92"
            className="rounded-3xl shadow-xl"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">
              Capture Every Smile
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Birthdays are filled with happiness, surprises, and unforgettable moments.
              We capture every laugh, every hug, and every memory.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From kids’ parties to grand celebrations, we make your special day even more memorable.
            </p>
          </motion.div>
        </div>

        {/* SERVICES */}
        <div className="mb-20">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-gray-800">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GALLERY */}
        <div className="mb-20">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-gray-800">
            Birthday Moments
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {gallery.map((img, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden rounded-2xl group"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={img}
                  className="w-full h-[220px] object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <p className="text-white text-sm">View</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Make Your Birthday Special
          </h2>
          <button
            onClick={() => navigate("/contact")}
            className="bg-amber-500 hover:bg-amber-600 font-bold text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition"
          >
            Book Birthday Shoot
          </button>
        </motion.div>

      </section>
    </>
  )
}

export default BirthdayPhotography;