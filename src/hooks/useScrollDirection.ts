// src/hooks/useScrollDirection.ts
import { useEffect, useState } from "react";

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection) setScrollDirection(direction);
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
      // console.warn("Scroll Direction:", direction); // Debugging line
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, [scrollDirection]);

  return scrollDirection;
};
