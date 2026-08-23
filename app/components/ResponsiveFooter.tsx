"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "../page.module.css";

export function ResponsiveFooter({ children }: { children: ReactNode }) {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const updateScale = () => {
      const width = footer.getBoundingClientRect().width;
      const viewportWidth = window.innerWidth;

      if (viewportWidth >= 745) {
        const scale = Math.min(1, width / 1317);
        const offset = (width - 1440 * scale) / 2;
        footer.style.setProperty("--footer-scale", String(scale));
        footer.style.setProperty("--footer-height", `${400 * scale}px`);
        footer.style.setProperty("--footer-offset", `${offset}px`);
      } else if (viewportWidth >= 403) {
        const scale = Math.min(1, width / 744);
        const offset = (width - 744 * scale) / 2;
        footer.style.setProperty("--footer-scale", String(scale));
        footer.style.setProperty("--footer-height", `${488 * scale}px`);
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
