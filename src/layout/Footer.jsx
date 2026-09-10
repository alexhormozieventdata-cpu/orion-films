// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";


export default function Footer() {
  const navigate = useNavigate();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-black text-white pt-12 pb-6 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* ✅ BRAND */}
        <div onClick={() => navigate("/")} className="cursor-pointer max-w-sm">
          
          <img src={logo} alt="logo" className="w-24 h-auto" />

          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            Capturing timeless wedding stories with cinematic excellence.
          </p>

          {/* ✅ SOCIAL ICONS */}
          <div className="flex gap-4 mt-5">

            <a href="#" className="text-gray-400 hover:text-blue-500 transition">
              <FaFacebookF size={20} />
            </a>

            <a href="#" className="text-gray-400 hover:text-pink-500 transition">
              <FaInstagram size={20} />
            </a>

            <a href="#" className="text-gray-400 hover:text-red-500 transition">
              <FaYoutube size={20} />
            </a>

            <a href="#" className="text-gray-400 hover:text-blue-400 transition">
              <FaLinkedinIn size={20} />
            </a>

            <a href="#" className="text-gray-400 hover:text-yellow-400 transition">
              <FaSnapchatGhost size={20} />
            </a>

            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaTwitter size={20} />
            </a>

          </div>
        </div> {/* ✅ IMPORTANT CLOSE */}

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg mb-3 font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><NavLink to="/" className="hover:text-yellow-400">Home</NavLink></li>
            <li><NavLink to="/portfolio" className="hover:text-yellow-400">Portfolio</NavLink></li>
            <li><NavLink to="/about" className="hover:text-yellow-400">About</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-yellow-400">Contact</NavLink></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg mb-3 font-semibold">Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><NavLink to="/services/wedding" className="hover:text-yellow-400">Wedding</NavLink></li>
            <li><NavLink to="/services/prewedding" className="hover:text-yellow-400">Pre Wedding</NavLink></li>
            <li><NavLink to="/services/candid" className="hover:text-yellow-400">Candid</NavLink></li>
            <li><NavLink to="/services/film" className="hover:text-yellow-400">Films</NavLink></li>
          </ul>
        </div>

        {/* ADDRESS */}
        <div>
          <h3 className="text-lg mb-3 font-semibold">Address</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Orion Film Production</li>
            <li>📍 Telhara, Bihar 801306</li>
            <li>📍 Patna Office, Kankarbagh</li>
            <li>📞 +91 98765 43210</li>
            <li>
              <a href="mailto:orionfilms27@gmail.com">
                ✉️ orionfilms27@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* ✅ BOTTOM */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} <a href="https://orionfilms.co.in/">ORION FILMS.</a>ORION FILMS. All rights reserved.

        <span className="block mt-2 font-semibold">
          Designed By{" "}
          <a href="https://d-vmedia.com" target="_blank">
            DV Media Pvt. Ltd
          </a>
        </span>
      </div>
    </motion.footer>
  );
}