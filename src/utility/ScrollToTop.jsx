import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { lenis } from "./SmoothScrollWrapper";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true }); // 🔥 main fix
    }
  }, [pathname]);

  return null;
}