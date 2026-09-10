import { useState } from "react";

import img from '../assets/image/DSC08309.webp';
export function BeforeAfter() {
  const [pos, setPos] = useState(50);

  return (
    <section className="py-20 px-6 bg-gray-900 text-white text-center">
      <h2 className="text-4xl mb-10 font-bold">Before / After </h2>

      <div
        className="relative w-full max-w-3xl mx-auto h-[400px]"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setPos(((e.clientX - rect.left) / rect.width) * 100);
        }}
      >
        <img
          src={img}
          className="absolute w-full h-full object-cover rounded-2xl"
         loading="lazy" />

        <div
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${pos}%` }}
        >
          <img
            src="https://images.unsplash.com/photo-1520854221256-17451cc331bf"
            className="w-full h-full object-cover rounded-2xl"
           loading="lazy" />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 h-full w-[3px] bg-white"
          style={{ left: `${pos}%` }}
        />
      </div>
    </section>
  );
}