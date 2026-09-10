import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

let lenis; // 👈 GLOBAL

export default function SmoothScrollWrapper({ children }) {
  useEffect(() => {
    // ❌ const lenis hatao
    lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: true,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
}

export { lenis };