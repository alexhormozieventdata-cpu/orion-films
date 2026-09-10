import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { lazy } from "react";

import img1 from '../assets/image/DSC00511.JPG';
import img2 from '../assets/image/AboutDSC02483.JPG';
import img3 from '../assets/image/DSC03567.JPG';
import img4 from '../assets/image/DSC03548.JPG';


const images = [
    img2
]

export default function HeroSlider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000); // 5 sec like Elementor

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden">

            {/* BACKGROUND SLIDES */}
            <AnimatePresence>
                <motion.div
                    key={index}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src={images[index]}
                        alt="slide"
                        loading={lazy}
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto h-full flex items-end pb-16 px-6 md:px-12">

                <div className="grid lg:grid-cols-2 w-full gap-8 items-end">

                    {/* LEFT TEXT */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white max-w-xl"
                    >
                        <h4 className="text-lg italic mb-2">
                            Consistently ranked amongst
                        </h4>

                        <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
                            The best wedding photographers in India since 2020.
                        </h2>

                        <p className="mt-4 text-sm text-gray-200">
                            Captured over 1000 weddings All India. Based in Patna, Bihar & Jharkhand,
                            spreading happiness globally.
                        </p>

                        <button className="mt-6 px-6 py-3 text-black font-bold bg-white rounded-full hover:bg-amber-400 hover:text-white">
                            View Portfolio
                        </button>
                    </motion.div>



                    {/* RIGHT RATING */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-white text-center lg:text-right"
                    >
                        <p className="mb-2 text-sm">4.7 on Google</p>

                        <div className="text-2xl">
                            ★ ★ ★ ★ ☆
                        </div>
                    </motion.div>

                </div>



                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, i) => (
                        <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${i === index ? "bg-white" : "bg-white/40"
                                }`}
                        />
                    ))}
                </div>

            </div>

        </div>
    );
}