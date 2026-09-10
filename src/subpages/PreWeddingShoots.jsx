import React from 'react'
import { Helmet } from 'react-helmet-async'
 
import { motion } from 'framer-motion'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import img from '../assets/optimized/image/prewedding.webp'

const testimonials = [
  {
    name: "Rahul & Priya",
    text: "Absolutely magical! Every moment was captured perfectly.",
  },
  {
    name: "Amit & Sneha",
    text: "Best decision ever! The photos look like a movie.",
  },
  {
    name: "Karan & Neha",
    text: "Highly professional and super creative team!",
  },
];

const themes = [
  {
    title: "Beach Romance 🌊",
    desc: "Soft waves, golden sunsets, and timeless love captured beautifully.",
  },
  {
    title: "Royal Palace 👑",
    desc: "Feel like a king and queen with luxurious royal-themed shoots.",
  },
  {
    title: "Nature Love 🌿",
    desc: "Green landscapes and dreamy outdoor vibes for natural moments.",
  },
];

const images = [
  "https://images.unsplash.com/photo-1529636798458-92182e662485",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
  "https://images.unsplash.com/photo-1509927083803-4bd519298ac4",
];

const PreWeddingShoots = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);



  return (

    <>

    <Helmet>
            {/* Primary SEO */}
            <title>Orion Films | Best Wedding Videography & Photography in Bihar & Jharkhand</title>
          
            <meta
              name="description"
              content="Orion Films is a professional wedding photography and cinematic videography company in Bihar & Jharkhand. We specialize in wedding films, pre-wedding shoots, candid photography, and event coverage. Book your dream wedding shoot today!"
            />
          
            <meta
              name="keywords"
              content="wedding photographer Bihar, wedding videographer Jharkhand, pre wedding shoot Bihar, cinematic wedding film India, candid photography Bihar, best wedding photographer Patna, wedding shoot Jharkhand, Orion Films"
            />
          
            {/* Open Graph (Facebook / WhatsApp) */}
            <meta property="og:title" content="Orion Films | Wedding Photography & Videography Experts" />
            
            <meta
              property="og:description"
              content="Capture your special moments with Orion Films – expert wedding photographers & cinematic videographers serving Bihar & Jharkhand."
            />
          
            <meta property="og:image" content="/logo.webp" />
            <meta property="og:type" content="website" />
          
            {/* Twitter SEO */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Orion Films Wedding Photography" />
            <meta
              name="twitter:description"
              content="Premium wedding photography & cinematic films in Bihar & Jharkhand."
            />
            <meta name="twitter:image" content="/logo.webp" />
          
            {/* Local SEO */}
            <meta name="geo.region" content="IN-BR" />
            <meta name="geo.placename" content="Bihar, Jharkhand" />
              </Helmet>
    
    
    
    {/* ---------------- */}

    <section className="bg-linear-to-br from-amber-500 via-pink to-purple-100 py-20 px-6 md:px-16 overflow-hidden">

      {/* HERO */}
      <motion.div
        className="text-center max-w-4xl mx-auto mb-16"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Pre-Wedding Shoots 
        </h1>
        <p className="text-gray-600 text-lg">
          Celebrate your love story before the big day with magical and cinematic moments.
        </p>
      </motion.div>

      {/* CONTENT */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <motion.img
          src={img}
          loading='lazy'
          alt='Orion Films Production'
          className="rounded-3xl shadow-xl"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
        />

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            A Beautiful Beginning 
          </h2>
          <p className="text-gray-600 mb-4">
            Pre-wedding shoots are the perfect way to capture your chemistry, emotions,
            and bond in a relaxed and romantic environment.
          </p>
          <p className="text-gray-600">
            From dreamy locations to creative concepts, we make your love story unforgettable.
          </p>
        </motion.div>
      </div>

      {/* THEMES */}
      <div className="mb-20">
        <h2 className="text-center text-3xl font-bold mb-10 text-gray-800">
          Popular Themes 
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {themes.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* GALLERY */}
      <div className="mb-20">
        <h2 className="text-center text-3xl font-bold mb-10 text-gray-800">
          Pre-Wedding Moments 
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={img}
                className="w-full h-[300px] object-cover hover:scale-110 transition duration-500"
               loading="lazy" />
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
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Let’s Create Your Love Story 
        </h2>
        <button onClick={() => navigate("/contact")} className="bg-amber-500 hover:bg-amber-600 font-bold text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition">
          Book Pre-Wedding Shoot
        </button>
      </motion.div>

    </section>

    <section className="py-20 px-6 md:px-16 bg-linear-to-br from-amber-500 to-pink-400 text-white">

      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold">
          What Our Couples Say 
        </h2>
      </motion.div>

      <div className="max-w-2xl mx-auto relative h-[200px] flex items-center justify-center">
        {testimonials.map((item, i) => (
          i === index && (
            <motion.div
              key={i}
              className="absolute text-center px-6"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg md:text-xl mb-4">
                “{item.text}”
              </p>
              <h4 className="font-semibold text-xl">
                — {item.name}
              </h4>
            </motion.div>
          )
        ))}
      </div>
    </section>

    </>
  )
}

export default PreWeddingShoots