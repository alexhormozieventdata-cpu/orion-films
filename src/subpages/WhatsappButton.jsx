import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const phoneNumber = "919534990353"; // apna number
  const message = "Hi Orian Films, I need Your services";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleCall = () => {
    window.location.href = `tel:+${phoneNumber}`;
  };

  return (
    <div className="fixed bottom-20 right-6 z-50 flex items-center gap-3 sm:bottom-8">

      <div className="relative group">
        <span className="absolute inline-flex h-14 w-14 rounded-full bg-green-400 opacity-75 animate-ping"></span>

        <span className="pointer-events-none absolute right-16 bottom-4 whitespace-nowrap rounded bg-green-600 px-3 py-1 text-sm font-bold text-white opacity-0 transition group-hover:opacity-100">
          Chat with us
        </span>

        <button
          type="button"
          onClick={handleClick}
          aria-label="Chat with us on WhatsApp"
          className="relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:bg-green-600"
        >
          <FaWhatsapp size={28} />
        </button>
      </div>

      <div className="relative group">
        <span className="pointer-events-none absolute right-16 bottom-4 whitespace-nowrap rounded bg-black px-3 py-1 text-sm font-bold text-white opacity-0 transition group-hover:opacity-100">
          Call us
        </span>

        <button
          type="button"
          onClick={handleCall}
          aria-label="Call Orion Films"
          className="relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-yellow-500 text-black shadow-2xl transition hover:bg-yellow-400"
        >
          <FaPhoneAlt size={22} />
        </button>
      </div>
    </div>
  );
};

export default WhatsappButton;