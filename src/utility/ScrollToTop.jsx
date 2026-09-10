import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getLenis } from "./lenisInstance";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true }); // 🔥 main fix
    }
  }, [pathname]);

  return null;
}