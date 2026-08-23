"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Gallery.module.css";
import { assetPath, siteContent } from "../content";

export function ScreenshotGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const screenshots = siteContent.gallery;
  const hasMultiple = screenshots.length > 1;

  const move = useCallback(
    (direction: number) => {
      setActiveIndex((current) => (current + direction + screenshots.length) % screenshots.length);
    },
    [screenshots.length],
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!hasMultiple) return;
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hasMultiple, move]);

  useEffect(() => {
    thumbnailRefs.current[activeIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeIndex]);

  const active = screenshots[activeIndex] ?? screenshots[0];
  const previous = screenshots[(activeIndex - 1 + screenshots.length) % screenshots.length] ?? active;
  const next = screenshots[(activeIndex + 1) % screenshots.length] ?? active;

  return (
    <section className={styles.gallerySection} aria-labelledby="gallery-title">
      <h2 id="gallery-title" className={styles.visuallyHidden}>Screenshots</h2>
      <div
        className={styles.galleryCarousel}
        role="region"
        aria-roledescription="carousel"
        aria-label="Am I Nima? game images"
      >
        <div className={styles.galleryStage}>
          <div className={`${styles.mirrorFrame} ${styles.mirrorLeft}`} aria-hidden="true">
            <span className={styles.mirrorImageClip}>
              <Image src={assetPath(previous.src)} alt="" fill sizes="220px" className={styles.mirrorImageLeft} />
            </span>
            <span className={`${styles.previewShade} ${styles.previewShadeLeft}`} />
          </div>
          <div className={styles.galleryMainFrame} aria-live="polite">
            <Image
              src={assetPath(active.src)}
              alt={active.alt}
              fill
              priority
              quality={100}
              sizes="(max-width: 767px) calc(100vw - 36px), (max-width: 1199px) calc(100vw - 32px), 1040px"
              className={styles.galleryImage}
            />
          </div>
          <div className={`${styles.mirrorFrame} ${styles.mirrorRight}`} aria-hidden="true">
            <span className={styles.mirrorImageClip}>
              <Image src={assetPath(next.src)} alt="" fill sizes="220px" className={styles.mirrorImageRight} />
            </span>
            <span className={`${styles.previewShade} ${styles.previewShadeRight}`} />
          </div>
          {hasMultiple && (
            <>
              <button
                className={`${styles.galleryArrow} ${styles.galleryArrowLeft}`}
                type="button"
                onClick={() => move(-1)}
                aria-label="Previous game image"
              >
                <Image
                  src={assetPath("/assets/borders/arrow-left.svg")}
                  alt=""
                  fill
                  sizes="45px"
                  className={styles.galleryArrowIcon}
                />
              </button>
              <button
                className={`${styles.galleryArrow} ${styles.galleryArrowRight}`}
                type="button"
                onClick={() => move(1)}
                aria-label="Next game image"
              >
                <Image
                  src={assetPath("/assets/borders/arrow-right.svg")}
                  alt=""
                  fill
                  sizes="45px"
                  className={`${styles.galleryArrowIcon} ${styles.galleryArrowIconRight}`}
                />
              </button>
            </>
          )}
        </div>
        <div className={styles.galleryThumbnails} role="list" aria-label="Game image thumbnails">
          {screenshots.map((screenshot, index) => (
            <button
              className={`${styles.thumbnail} ${index === activeIndex ? styles.thumbnailActive : ""}`}
              key={screenshot.src}
              type="button"
              ref={(element) => {
                thumbnailRefs.current[index] = element;
              }}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show game image ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
            >
              <Image src={assetPath(screenshot.src)} alt="" fill quality={90} sizes="106px" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
