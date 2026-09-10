import React from "react";
import { Helmet } from "react-helmet-async";
 
import { motion } from "framer-motion";
import Gallery from "../utility/Gallery";
import FullGallerySection from "../utility/FullGallerySection";

const Portfolio = () => {
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>
          Orion Films | Best Wedding Videography & Photography in Bihar &
          Jharkhand
        </title>

        <meta
          name="description"
          content="Orion Films is a professional wedding photography and cinematic videography company in Bihar & Jharkhand. We specialize in wedding films, pre-wedding shoots, candid photography, and event coverage. Book your dream wedding shoot today!"
        />

        <meta
          name="keywords"
          content="wedding photographer Bihar, wedding videographer Jharkhand, pre wedding shoot Bihar, cinematic wedding film India, candid photography Bihar, best wedding photographer Patna, wedding shoot Jharkhand, Orion Films"
        />

        {/* Open Graph (Facebook / WhatsApp) */}
        <meta
          property="og:title"
          content="Orion Films | Wedding Photography & Videography Experts"
        />

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

      {/* ------------------------- */}

      <section className="relative w-full min-h-[40vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-100 tracking-wide">
            Portfolio
          </h1>

          {/* Underline effect */}
          <div className="mt-4 flex justify-center">
            <div className="w-20 h-[2px] bg-white/70 rounded-full" />
          </div>
        </motion.div>
      </section>
      <FullGallerySection />
      <Gallery />
    </>
  );
};

export default Portfolio;
