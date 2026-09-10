// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function BookingModal({ onClose }) {
  const [showToast, setShowToast] = useState(false);
const [loading, setLoading] = useState(false);

  // ✅ FIXED STATE
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    service: "",
    message: "",
    formType: "Booking Inquiry",
  });

  // ESC close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Submit (Email + WhatsApp)
  const handleSubmit = (e) => {
  e.preventDefault();

  setLoading(true); // ✅ start loading

  emailjs
    .send(
      "service_lj6zzcg",
      "template_fuq2d5p",
      formData,
      "SQsOgnQW7AX6gIMjH"
    )
    .then(() => {

      // ✅ WhatsApp
      const text = `New Booking:
Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Date: ${formData.date}`;

      // window.open(
      //   `https://wa.me/919876543210?text=${encodeURIComponent(text)}`,
      //   "_blank"
      // );

      // ✅ Show Toast
      setShowToast(true);

      // ✅ Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        service: "",
        message: "",
        formType: "Booking Inquiry",
      });

      // ✅ Delay close
      setTimeout(() => {
        setShowToast(false);
        setLoading(false);
        onClose();
      }, 3000); // 3 sec proper UX

    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
      alert("Failed to send booking");
    });
};

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-lg"
      >
        {/* Modal */}
        <motion.form
          onClick={(e) => e.stopPropagation()}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="w-full max-w-2xl bg-white/10 backdrop-blur-xl 
                     p-6 sm:p-8 rounded-2xl shadow-xl space-y-5 relative text-white"
        >
          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 text-xl hover:text-yellow-400"
          >
            ✕
          </button>

          <h2 className="text-2xl sm:text-3xl text-center font-semibold">
            Book Your Shoot
          </h2>

          <input
            name="name"
            value={formData.name}
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="input"
          />

          <input
            name="email"
            type="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            required
            className="input"
          />

          <input
            name="phone"
            value={formData.phone}
            placeholder="Phone"
            onChange={handleChange}
            required
            className="input"
          />

          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="input"
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="input"
          >
            <option value="">Select Service</option>
            <option>Videography </option>
            <option>Photography </option>
            <option>Wedding Videography</option>
            <option>Pre-Wedding Shoots</option>
            <option>Candid Photography</option>
            <option>Film Shoots</option>
          </select>

          <textarea
            name="message"
            value={formData.message}
            placeholder="Message..."
            onChange={handleChange}
            className="input"
          />

          <button
  disabled={loading}
  className={`w-full py-3 rounded-full font-semibold transition 
    ${loading 
      ? "bg-gray-400 cursor-not-allowed" 
      : "bg-yellow-500 hover:bg-yellow-400 text-black"}`}
>
  {loading ? "Booking..." : "Book Now"}
</button>
        </motion.form>
      </div>

      {/* Toast */}
      {showToast && (
  <motion.div
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 20, opacity: 1 }}
    transition={{ duration: 0.4 }}
    className="fixed top-5 left-1/2 -translate-x-1/2 
               bg-gradient-to-r from-green-500 to-emerald-600 
               text-white px-6 py-4 rounded-xl shadow-xl 
               flex flex-col items-center gap-1 z-[999999]"
  >
    <div className="flex items-center gap-2 text-lg">
      <FaCheckCircle />
      <span className="font-semibold">Booking Confirmed!</span>
    </div>

    <p className="text-sm opacity-90 text-center">
      Our team will contact you shortly to confirm your booking.
    </p>
  </motion.div>
)}
    </>
  );
}