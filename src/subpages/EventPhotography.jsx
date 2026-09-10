import React from 'react'
import { Helmet } from 'react-helmet-async'
 
import { motion } from 'framer-motion'
import { NetflixSlider } from '../utility/NetflixSlider'
import { useNavigate } from 'react-router-dom';

const events = [
  {
    title: "Corporate Events ",
    desc: "Professional coverage for conferences, seminars, and business meets.",
  },
  {
    title: "Birthday Parties ",
    desc: "Capture fun, laughter, and unforgettable party moments.",
  },
  {
    title: "Concerts & Shows ",
    desc: "High-energy shots that reflect the vibe of live performances.",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1511578314322-379afb476865",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
];

const EventPhotography = () => {
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
    
    
    
    

    <section className="bg-linear-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-6 md:px-16 overflow-hidden">

      {/* HERO */}
      <motion.div
        className="text-center max-w-4xl mx-auto mb-16"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Event Photography 
        </h1>
        <p className="text-gray-400 text-lg">
          From corporate gatherings to grand celebrations — we capture every moment with perfection.
        </p>
      </motion.div>

      {/* CONTENT */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        
        <motion.img
          src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678"
          className="rounded-3xl shadow-2xl"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
         loading="lazy" />

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Capture Every Celebration 
          </h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Events are filled with energy, emotions, and unforgettable moments. Our expert photographers ensure every highlight is beautifully captured.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Whether it's a corporate function or a personal celebration, we bring your events to life through stunning visuals.
          </p>
        </motion.div>
      </div>

      {/* SERVICES */}
      <div className="mb-20">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          Our Event Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl hover:scale-105 transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
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
          Event Highlights 
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {gallery.map((img, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-2xl group"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={img}
                className="w-full h-[220px] object-cover group-hover:scale-110 transition duration-500"
               loading="lazy" />

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white text-sm">View Moment</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div className="py-16 bg-black text-center">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { num: "300+", label: "Events Covered" },
            { num: "150+", label: "Corporate Clients" },
            { num: "5000+", label: "Photos Delivered" },
            { num: "100%", label: "Client Satisfaction" },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-3xl font-bold text-amber-400">{item.num}</h3>
              <p className="text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Make Your Event Unforgettable 
        </h2>
        <button onClick={() => navigate("/contact")} className="bg-amber-500 hover:bg-amber-600 px-8 py-3 rounded-full shadow-lg hover:scale-105 transition">
          Book Event Shoot
        </button>
      </motion.div>

    </section>

    </>
  )
}

export default EventPhotography