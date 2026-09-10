import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.webp";

export default function Navbar({ setOpenModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const location = useLocation();

  // ✅ AUTO CLOSE ON ROUTE CHANGE
  useEffect(() => {
    setIsOpen(false);
    setServiceOpen(false);
  }, [location]);

  const handleCloseAll = () => {
    setIsOpen(false);
    setServiceOpen(false);
  };

  const home = [{ name: "Home", path: "/" }];

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "Wedding Photography", path: "/services/wedding" },
    { name: "Pre-Wedding Shoots", path: "/services/prewedding" },
    { name: "Candid Photography", path: "/services/candid" },
    { name: "Cinematic Film", path: "/services/film" },
    { name: "Event Photography", path: "/services/event" },
    { name: "Birthday Photography", path: "/services/birthday" },
  ];

  return (
    <motion.nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md text-white border-b border-white/10">
      
      {/* NAVBAR CONTENT */}
      <div className="relative w-full px-4 sm:px-6 md:px-10 py-3 flex justify-between items-center">

        {/* LOGO */}
        <NavLink to="/" onClick={handleCloseAll}>
          <img
            src={logo}
            alt="Logo"
            className="h-12 sm:h-14 md:h-16 w-auto object-contain"
           loading="lazy" />
        </NavLink>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">

          {home.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              onClick={handleCloseAll}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 border-b-2 border-yellow-400"
                  : "hover:text-yellow-400"
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* SERVICES */}
          <div className="relative">
            <button
              onClick={() => setServiceOpen(!serviceOpen)}
              className="flex items-center gap-1 hover:text-yellow-400"
            >
              Services <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {serviceOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-10 left-0 bg-black rounded-xl shadow-lg p-4 space-y-2 w-56"
                >
                  {services.map((s, i) => (
                    <NavLink
                      key={i}
                      to={s.path}
                      onClick={handleCloseAll}
                      className="block hover:text-yellow-400"
                    >
                      {s.name}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              onClick={handleCloseAll}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 border-b-2 border-yellow-400"
                  : "hover:text-yellow-400"
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* CTA */}
          <button
            onClick={() => {
              setOpenModal(true);
              handleCloseAll();
            }}
            className="bg-yellow-500 px-5 h-10 rounded-full hover:bg-yellow-400 transition"
          >
            Book Now
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg px-6 py-6 z-50"
          >
            
            {home.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                onClick={handleCloseAll}
                className="block py-2 border-b border-gray-800"
              >
                {link.name}
              </NavLink>
            ))}

            <p className="mt-4 text-gray-400 text-sm">Services</p>
            {services.map((s, i) => (
              <NavLink
                key={i}
                to={s.path}
                onClick={handleCloseAll}
                className="block pl-3 py-1 text-gray-300"
              >
                {s.name}
              </NavLink>
            ))}

            {navLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                onClick={handleCloseAll}
                className="block py-2 border-b border-gray-800"
              >
                {link.name}
              </NavLink>
            ))}

            <button
              onClick={() => {
                setOpenModal(true);
                handleCloseAll();
              }}
              className="mt-5 w-full bg-yellow-500 text-black py-3 rounded-full"
            >
              Book Now 💍
            </button>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}