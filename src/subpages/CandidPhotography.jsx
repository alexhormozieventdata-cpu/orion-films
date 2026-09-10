import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { BeforeAfter } from "../utility/BeforeAfter";
import { FaceFocus } from "../utility/FaceFocus";
import { InstagramReel } from "../utility/InstagramReel";
import { useNavigate } from "react-router-dom";
import img from "../assets/image/DSC00519.webp";

const candidImages = [
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
  "https://images.unsplash.com/photo-1509927083803-4bd519298ac4",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf",
];

const CandidPhotography = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Orion Films | Candid Photography</title>
        <meta
          name="description"
          content="Professional candid photography capturing real emotions and natural moments."
        />
      </Helmet>

      {/* ✅ FIXED: overflow हटाया */}
      <section className="bg-linear-to-br from-black via-gray-900 to-black text-white py-20 px-6 md:px-16">

        {/* HERO */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Candid Photography
          </h1>
          <p className="text-gray-400 text-lg">
            Because the best moments are the ones you never pose for.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          
          <motion.img
            src={img}
            loading="lazy" // ✅ FIXED
            alt="Orion Films Production"
            className="rounded-3xl shadow-2xl"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Real Moments, Real Emotions
            </h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Candid photography captures genuine emotions — laughter, tears,
              joy, and everything in between.
            </p>
            <p className="text-gray-400 leading-relaxed">
              No poses. No pressure. Just real, beautiful moments that tell your story.
            </p>
          </motion.div>
        </div>

        {/* FEATURES */}
        <div className="mb-20">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
            Why Choose Candid?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Natural Expressions",
                desc: "We capture genuine smiles without staged poses.",
              },
              {
                title: "Storytelling Shots",
                desc: "Every photo becomes part of your story.",
              },
              {
                title: "Unforgettable Memories",
                desc: "Moments you'll cherish forever.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl hover:scale-105 transition"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GALLERY */}
        <div className="mb-20">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
            Candid Moments
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {candidImages.map((img, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden rounded-2xl group"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={img}
                  loading="lazy"
                  className="w-full h-[220px] object-cover group-hover:scale-110 transition duration-500"
                  alt="Candid"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
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
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Capture Your Real Story
          </h2>

          <button
            onClick={() => navigate("/contact")}
            className="bg-amber-500 hover:bg-amber-600 px-8 py-3 rounded-full shadow-lg hover:scale-105 transition"
          >
            Book Candid Shoot
          </button>
        </motion.div>
      </section>

      {/* Extra Sections */}
      <FaceFocus />
    </>
  );
};

export default CandidPhotography;