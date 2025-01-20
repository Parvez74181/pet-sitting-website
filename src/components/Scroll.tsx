"use client";
import { useEffect } from "react";
import Lenis from "lenis";

const Scroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // smoothness
      smoothWheel: true, // enable smooth scrolling with mouse wheel
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
};

export default Scroll;
