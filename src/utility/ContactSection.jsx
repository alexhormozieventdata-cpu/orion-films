 
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";
import { FaCheckCircle } from "react-icons/fa";

import img from '../assets/optimized/image/DSC08309.webp';

export default function ContactSection() {
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [],
    message: "",
    formType: "Contact Form"
  });

  // input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // checkbox handle
  const handleCheckbox = (service) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const finalData = {
      ...formData,
      service: formData.services.join(", ")
    };

    emailjs.send(
      "service_lj6zzcg",
      "template_fuq2d5p",
      finalData,
      "SQsOgnQW7AX6gIMjH"
    )
    .then(() => {

      // WhatsApp
//       const text = `New Contact Inquiry:
// Name: ${formData.name}
// Phone: ${formData.phone}
// Services: ${formData.services.join(", ")}`;

//       window.open(
//         `https://wa.me/919876543210?text=${encodeURIComponent(text)}`,
//         "_blank"
//       );

      setShowToast(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        services: [],
        message: "",
        formType: "Contact Inquiry"
      });

      setTimeout(() => {
        setShowToast(false);
        setLoading(false);
      }, 3000);

    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
    });
  };


  return (
    <section
      className="relative w-full py-16 sm:py-20 bg-cover bg-center"
      style={{
        backgroundImage:`url(${img})`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white text-center lg:text-left"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Contact Us
          </h2>

          <p className="text-base sm:text-lg mb-3 text-gray-200">
            We would love to hear from you.
          </p>

          <p className="text-sm sm:text-base text-gray-300 max-w-md mx-auto lg:mx-0">
            Fill out the form and our team will get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
        className="backdrop-blur-xl bg-white/10 border border-white/20 
                   rounded-2xl p-5 sm:p-6 lg:p-8 shadow-xl"
      >
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

          {/* Name */}
          <div>
            <label className="text-white text-sm">Your Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              className="w-full mt-1 px-4 h-11 rounded-lg bg-white/20 text-white"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email + Phone */}
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter email"
              className="w-full px-4 h-11 rounded-lg bg-white/20 text-white"
              required
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="text"
              placeholder="Enter phone"
              className="w-full px-4 h-11 rounded-lg bg-white/20 text-white"
              required
            />
          </div>

          {/* Services */}
          <div>
            <label className="text-white text-sm">Services</label>
            <div className="grid sm:grid-cols-2 gap-2 mt-2 text-white text-sm">
              {[
                "Candid Photography",
                "Cinematography",
                "Pre Wedding PhotoShoot",
                "Albums",
                "Wedding Videography",
                "Event Photography",
              ].map((item, i) => (
                <label key={i} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.services.includes(item)}
                    onChange={() => handleCheckbox(item)}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white"
            required
          />

          {/* Button */}
          <button
            disabled={loading}
            className={`w-full h-11 rounded-lg font-semibold transition ${
              loading
                ? "bg-gray-400"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </motion.div>

      {/* Toast */}
      {showToast && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 20, opacity: 1 }}
          className="fixed top-5 left-1/2 -translate-x-1/2 
                     bg-green-500 text-white px-6 py-4 rounded-lg z-[9999]"
        >
          <div className="flex items-center gap-2">
            <FaCheckCircle />
            <span>Message Sent Successfully!</span>
          </div>
          <p className="text-sm">Our team will contact you soon.</p>
        </motion.div>
      )}
      </div>
    </section>
  );
}