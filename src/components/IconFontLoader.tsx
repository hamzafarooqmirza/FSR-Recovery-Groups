"use client";

import { useEffect } from "react";

const FONT_AWESOME_HREF = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";

/**
 * Loads the Font Awesome stylesheet after hydration instead of as a
 * render-blocking <link> in <head>, so first paint isn't gated on a
 * third-party CDN request.
 */
export function IconFontLoader() {
  useEffect(() => {
    if (document.querySelector(`link[rel="stylesheet"][href="${FONT_AWESOME_HREF}"]`)) return;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = FONT_AWESOME_HREF;
    document.head.appendChild(link);
  }, []);

  return null;
}
