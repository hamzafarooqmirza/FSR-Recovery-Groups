"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const animatedElements = new Set<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
            animatedElements.delete(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const observeAnimations = (root: ParentNode = document) => {
      root.querySelectorAll(".fade-up:not(.show)").forEach((element) => {
        if (!animatedElements.has(element)) {
          animatedElements.add(element);
          observer.observe(element);
        }
      });
    };

    observeAnimations();

    // The root layout persists during client-side navigation. Watch for streamed
    // route content so newly rendered animation elements are never left hidden.
    const mutationObserver = new MutationObserver(() => observeAnimations());
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
