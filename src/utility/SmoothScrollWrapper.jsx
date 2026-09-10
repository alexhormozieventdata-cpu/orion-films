import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { setLenis } from "./lenisInstance";

export default function SmoothScrollWrapper({ children }) {
  useEffect(() => {
    const instance = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      syncTouch: true,
      touchInertiaMultiplier: 35,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });

    setLenis(instance);

    let animationFrame;

    function raf(time) {
      instance.raf(time);
      animationFrame = requestAnimationFrame(raf);
    }

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return children;
}
