import React, { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
        el.classList.add("in-view");
      });
      return;
    }

    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            const delayAttr = el.getAttribute("data-delay");
            const delay = delayAttr ? Number(delayAttr) : 0;
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add("in-view");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => observer.observe(el));

    // also observe newly added elements (optional)
    const mo = new MutationObserver(() => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.__observed)").forEach((el) => {
        el.classList.add("__observed");
        observer.observe(el);
      });
    });
    mo.observe(document.documentElement, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}