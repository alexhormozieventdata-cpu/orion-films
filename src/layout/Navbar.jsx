import { useEffect, useRef, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/optimized/logo.webp";
import { getLenis } from "../utility/lenisInstance";

export default function Navbar({ setOpenModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const navRef = useRef(null);

  const handleCloseAll = () => {
    setIsOpen(false);
    setServiceOpen(false);
  };

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const lenis = getLenis();

    if (isOpen) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
      lenis?.start();
    }

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
      getLenis()?.start();
    };
  }, [isOpen]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
        handleCloseAll();
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [isOpen]);

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
    <Motion.nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md text-white border-b border-white/10"
    >
      
      {/* NAVBAR CONTENT */}
      <div className="relative w-full px-4 sm:px-6 md:px-10 py-3 flex justify-between items-center">

        {/* LOGO */}
        <NavLink
          to="/"
          onClick={handleCloseAll}
          aria-label="Orion Films home"
          className="group relative flex items-center justify-center px-2 py-1"
        >
          <span
            aria-hidden="true"
            className="absolute inset-x-[-1.5rem] inset-y-0 rounded-full bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-70 blur-xl transition duration-500 group-hover:via-white/65 group-hover:opacity-100"
          />
          <span
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-yellow-300/90 to-transparent opacity-80"
          />
          <img
            src={logo}
            alt="Logo"
            className="relative z-10 h-12 sm:h-14 md:h-16 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.35)] transition duration-500 group-hover:drop-shadow-[0_0_16px_rgba(255,255,255,0.7)]"
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
                <Motion.div
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
                </Motion.div>
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
          <Motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 w-full max-h-[calc(100vh-5rem)] overflow-y-auto bg-black/95 backdrop-blur-lg px-6 py-6 z-50"
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

          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.nav>
  );
}