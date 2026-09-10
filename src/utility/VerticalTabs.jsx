import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    title: "About Us",
    content: (
      <>
        <p>
          <strong>Established in 2020,</strong> we began as a premium boutique
          wedding photography & films venture telling modern love stories.
        </p>
        <p>
          A team of passionate creatives capturing love, laughter, and
          togetherness across cultures.
        </p>
        <p>
          Over <strong>1000+ weddings worldwide</strong> in the last decade.
        </p>
      </>
    ),
  },
  {
    title: "Our Style",
    content: (
      <>
        <p>
          Photography is about preserving moments for a lifetime with authenticity.
        </p>
        <p>
          We focus on <strong>natural expressions</strong>, artistic angles, and
          timeless storytelling.
        </p>
        <p>
          It’s not just about moments—but <strong>how they are captured</strong>.
        </p>
      </>
    ),
  },
  {
    title: "Why Hire Us?",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>6+ years trusted brand</li>
        <li>Creative + professional approach</li>
        <li>Experienced in-house team</li>
        <li>Transparent workflow</li>
        <li>No outsourcing</li>
        <li>Strong data backups</li>
        <li>Customer-first mindset</li>
      </ul>
    ),
  },
  {
    title: "Pricing",
    content: (
      <>
        <p>
          Every wedding is unique, so we offer customized packages.
        </p>
        <p>
          Packages typically <strong>start from ₹20,000/day</strong> depending
          on services required.
        </p>
      </>
    ),
  },
];

export default function VerticalTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        
        {/* LEFT TABS */}
        <div className="flex flex-col space-y-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`text-left text-lg font-medium relative group ${
                activeTab === index ? "text-black" : "text-gray-400"
              }`}
            >
              {tab.title}

              {/* Animated underline */}
              <span
                className={`block h-[2px] mt-1 transition-all duration-300 ${
                  activeTab === index
                    ? "w-full bg-black"
                    : "w-0 bg-black group-hover:w-full"
                }`}
              ></span>
            </button>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:col-span-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="text-gray-600 space-y-4 text-sm leading-relaxed"
            >
              {tabs[activeTab].content}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}