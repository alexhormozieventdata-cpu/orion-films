import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const phoneNumber = "919534990353"; // apna number
  const message = "Hi Orian Films, I need Your services";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group">

  {/* Ripple */}
  <span className="absolute inline-flex h-14 w-14 rounded-full bg-green-400 opacity-75 animate-ping"></span>

  {/* Tooltip */}
  <div className="absolute right-16 bottom-4 bg-green-600 text-white font-bold text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition">
    Chat with us
  </div>

  {/* Button */}
  <button
    onClick={handleClick}
    className="relative h-14 w-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center animate-bounce transition cursor-pointer"
  >
    <FaWhatsapp size={28} />
  </button>
</div>
  );
};

export default WhatsappButton;