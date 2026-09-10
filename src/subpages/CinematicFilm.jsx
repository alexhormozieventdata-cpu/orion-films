import React from 'react'
 
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import img from '../assets/optimized/image/Cinematic-upright.webp'
import video from '../assets/image/cinemitic.mp4';




const CinematicFilm = () => {
  const [play, setPlay] = useState(false);
  const navigate = useNavigate();
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
    
    {/* ---------------------------------- */}

 


    <section className="bg-black text-white overflow-hidden">

      {/* HERO VIDEO */}
      <div className="relative h-[90vh] flex items-center justify-center text-center">

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute w-full h-full object-cover opacity-100"
          ><source src={video} type="video/mp4" /></video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/10 to-black"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Cinematic Wedding Films 
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto mb-6">
            Not just videos — we create emotional cinematic experiences that
            feel like your own love movie.
          </p>

        </motion.div>
      </div>

      {/* VIDEO MODAL */}
      {play && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
          onClick={() => setPlay(false)}
        >
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            controls
            autoPlay
            className="w-[90%] md:w-[70%] rounded-2xl"
          />
        </div>
      )}

      {/* STORY SECTION */}
      <div className="py-20 px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center">

        <motion.img
          src={img}
          loading="lazy"
          alt='Orion Films Production'
          className="rounded-3xl shadow-2xl"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
        />

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Your Love, Like a Movie
          </h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Every wedding has a story — and we turn it into a cinematic film
            filled with emotions, drama, and beauty.
          </p>
          <p className="text-gray-400 leading-relaxed">
            From slow-motion moments to emotional vows, every frame feels like a
            scene from a movie.
          </p>
        </motion.div>
      </div>

      {/* FEATURES */}
      <div className="py-20 px-6 md:px-16 bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-center text-4xl font-bold mb-12">
          Why Cinematic Films?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Movie Style Editing ",
              desc: "High-end editing with music, color grading & storytelling.",
            },
            {
              title: "Emotional Story ",
              desc: "We capture your journey — not just the event.",
            },
            {
              title: "4K Quality ",
              desc: "Ultra HD videos that look stunning on every screen.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl hover:scale-105 transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-20 bg-gradient-to-r from-amber-500 to-pink-400">
        <h2 className="text-4xl font-bold mb-4">
          Let’s Turn Your Wedding Into a Film 
        </h2>
        <button onClick={() => navigate("/contact")} className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
          Book Cinematic Shoot
        </button>
      </div>

    </section>


    

    </>
  )
}

export default CinematicFilm