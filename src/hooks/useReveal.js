"use client";
import { useEffect } from "react";

/**
 * useReveal
 * Attaches an IntersectionObserver to all elements with class "reveal".
 * Adds "visible" when they enter the viewport, triggering CSS transitions
 * defined in globals.css.
 *
 * @param {string} selector  - CSS selector to watch (default ".reveal")
 * @param {object} options   - IntersectionObserver options
 */
export function useReveal(
  selector = ".reveal",
  options = { threshold: 0.1, rootMargin: "0px 0px -48px 0px" },
) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, options]);
}
