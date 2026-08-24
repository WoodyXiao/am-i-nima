"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./Footer.module.css";
import { BREAKPOINTS, FOOTER_REFERENCE } from "./constants";

export function ResponsiveFooter({ children }: { children: ReactNode }) {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const updateScale = () => {
      const width = footer.getBoundingClientRect().width;
      const viewportWidth = window.innerWidth;

      if (viewportWidth >= BREAKPOINTS.desktopMin) {
        const scale = Math.min(1, width / FOOTER_REFERENCE.desktopContentWidth);
        const offset = (width - FOOTER_REFERENCE.desktopCanvasWidth * scale) / 2;
        footer.style.setProperty("--footer-scale", String(scale));
        footer.style.setProperty("--footer-height", `${FOOTER_REFERENCE.desktopHeight * scale}px`);
        footer.style.setProperty("--footer-offset", `${offset}px`);
      } else if (viewportWidth >= BREAKPOINTS.tabletMin) {
        const scale = Math.min(1, width / FOOTER_REFERENCE.tabletCanvasWidth);
        const offset = (width - FOOTER_REFERENCE.tabletCanvasWidth * scale) / 2;
        footer.style.setProperty("--footer-scale", String(scale));
        footer.style.setProperty("--footer-height", `${FOOTER_REFERENCE.tabletHeight * scale}px`);
        footer.style.setProperty("--footer-offset", `${offset}px`);
      } else {
        footer.style.removeProperty("--footer-scale");
        footer.style.removeProperty("--footer-height");
        footer.style.removeProperty("--footer-offset");
      }
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className={styles.footerViewport}>
      <div className={styles.footerScale}>{children}</div>
    </footer>
  );
}
