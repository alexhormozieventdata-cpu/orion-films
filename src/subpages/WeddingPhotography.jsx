import React from 'react'
import { Helmet } from 'react-helmet-async'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';

import img from '../assets/image/DSC02514.webp'
import img1 from '../assets/image/A7404425.webp'

const images = [
  "https://images.unsplash.com/photo-1519741497674-611481863552",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf",
  "https://images.unsplash.com/photo-1509927083803-4bd519298ac4",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
  "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92",
  "https://images.unsplash.com/photo-1519741497674-611481863552",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf",
  "https://images.unsplash.com/photo-1509927083803-4bd519298ac4",
];

const WeddingPhotography = () => {

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
    


    <section className="bg-black text-white overflow-hidden">

      {/* HERO */}
      <div className="relative h-[90vh] flex items-center justify-center text-center">
        <img
          src={img}
          className="absolute w-full h-full object-cover opacity-80"
          loading="eager"
          alt='Orion Films Production'
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 to-black"></div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Your Love, Our Lens
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto mb-6">
            We capture emotions, not just images — turning your wedding into a timeless story.
          </p>
          <button onClick={() => navigate("/contact")} className="bg-amber-500 font-bold px-8 py-3 rounded-full hover:scale-105 transition">
            Book Now
          </button>
        </motion.div>
      </div>

      {/* ABOUT */}
      <div className="py-20 px-6 md:px-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          src={img1}
          loading="lazy"
          alt='Orion Films Production'
          className="rounded-3xl"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
        />

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            We Tell Your Story 
          </h2>
          <p className="text-gray-400 mb-4">
            Every wedding is filled with once-in-a-lifetime emotions — laughter, tears, joy, and love.
          </p>
          <p className="text-gray-400">
            Our photography captures these fleeting moments and turns them into memories you’ll cherish forever.
          </p>
        </motion.div>
      </div>

      {/* SERVICES */}
      <div className="py-20 px-6 md:px-16 bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-center text-4xl font-bold mb-12">
          Our Services 
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {["Pre Wedding", "Wedding Shoot", "Candid Moments"].map((item, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-3">{item}</h3>
              <p className="text-gray-400">
                Professional and creative photography tailored to your unique love story.
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* GALLERY */}
      {/* <div className="py-20 px-6 md:px-16">
        <h2 className="text-center text-4xl font-bold mb-12">
          Wedding Stories 
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <img src={img} className="w-full h-[300px] object-cover"  loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div> */}

      {/* STATS */}
      <div className="py-20 bg-gray-900 text-center">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { num: "500+", label: "Weddings Covered" },
            { num: "1000+", label: "Happy Clients" },
            { num: "10+", label: "Years Experience" },
            { num: "50+", label: "Awards Won" },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-3xl font-bold text-amber-400">{item.num}</h3>
              <p className="text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIAL */}
      <div className="py-20 px-6 md:px-16">
        <h2 className="text-center text-4xl font-bold mb-10">
          What Clients Say 
        </h2>

        <motion.div
          className="max-w-3xl mx-auto text-center bg-white/10 p-8 rounded-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <p className="text-gray-300 mb-4">
            “Absolutely amazing work! Every photo tells a story. We relive our wedding day every time we see our album.”
          </p>
          <h4 className="font-semibold text-amber-400">— Happy Couple</h4>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="text-center py-20 bg-gradient-to-r from-amber-500 to-pink-400">
        <h2 className="text-4xl font-bold mb-4">
          Let’s Capture Your Big Day 
        </h2>
        <button onClick={() => navigate("/contact")} className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
          Contact Now
        </button>
      </div>

    </section>
    </>
  )
}

export default WeddingPhotography