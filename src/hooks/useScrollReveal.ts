// src/hooks/useScrollReveal.ts
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export const useScrollReveal = (selectors: string[], options?: scrollReveal.ScrollRevealObjectOptions) => {
  useEffect(() => {
    if (!selectors.length) return;

    selectors.forEach((selector) => {
      ScrollReveal().reveal(selector, {
        reset: true,
        distance: "60px",
        duration: 2000,
        delay: 200,
        ...options,
      });
    });
  }, [selectors, options]);
};
