 
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";

export default function ContactMapSection() {
  const { setOpenModal } = useOutletContext();
  return (
    <section className="bg-gray-100 py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full h-87.5 md:h-112.5 rounded-2xl overflow-hidden shadow-lg border-2 border-amber-400"
        >

          <iframe
          title="location"
          className="w-full h-full " 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.3462130233597!2d85.1838584!3d25.2252615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2bf26625b6635%3A0x74e47befb0e840ca!2sOrion%20Films!5e0!3m2!1sen!2sin!4v1776514020474!5m2!1sen!2sin"></iframe>
          
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Get in Touch
          </h2>

          <div className="space-y-5 text-gray-600">

            {/* Address */}
            <div className="flex items-start gap-4 group">
              <FaMapMarkerAlt className="text-yellow-500 mt-1 group-hover:scale-110 transition" />
              <div>
                <h4 className="font-semibold text-gray-800">Address</h4>
                <p className="font-bold text-amber-400 text-shadow-amber-600">Orion Film Production</p>
                <p><span className="font-bold">Address:  </span>  Near Durga Sthan, Telhara, Bihar 801306</p>
                <p><span className="font-bold">Patna Office :  </span>Ashok Nagar , kankarbagh, patna 80020</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 group">
              <FaPhoneAlt className="text-yellow-500 group-hover:scale-110 transition" />
              <div>
  <a href="tel:+919876543210" className="hover:text-yellow-500 block">
    +91 98765 43210
  </a>
  <a href="tel:+919534990353" className="hover:text-yellow-500 block">
    +91 95349 90353
  </a>
</div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 group">
              <FaEnvelope className="text-yellow-500 group-hover:scale-110 transition" />
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p className="hover:text-yellow-500 cursor-pointer">
                  <a href="mailto:orionfilms27@gmail.com?subject=Booking Inquiry&body=Hi, I want to book a shoot">orionfilms27@gmail.com</a></p>
              </div>
            </div>

          </div>

          {/* CTA Button */}
          <button 
           onClick={() => setOpenModal(true)}
        className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 
                   text-black font-semibold py-3 rounded-lg transition 
                   flex items-center justify-center"
          >
            Book Your Shoot
            
          </button>
        </motion.div>

      </div>
    </section>
  );
}