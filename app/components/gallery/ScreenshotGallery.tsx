"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Gallery.module.css";
import { assetPath, siteContent } from "../../content";

type GallerySide = "left" | "right";

type GalleryPreviewProps = {
  side: GallerySide;
  src: string;
};

function GalleryPreview({ side, src }: GalleryPreviewProps) {
  const isLeft = side === "left";

  return (
    <div
      className={`${styles.mirrorFrame} ${isLeft ? styles.mirrorLeft : styles.mirrorRight}`}
      aria-hidden="true"
    >
      <span className={styles.mirrorImageClip}>
        <Image
          src={assetPath(src)}
          alt=""
          fill
          sizes="220px"
          className={isLeft ? styles.mirrorImageLeft : styles.mirrorImageRight}
        />
      </span>
      <span className={`${styles.previewShade} ${isLeft ? styles.previewShadeLeft : styles.previewShadeRight}`} />
    </div>
  );
}

type GalleryArrowProps = {
  side: GallerySide;
  onClick: () => void;
};

function GalleryArrow({ side, onClick }: GalleryArrowProps) {
  const isLeft = side === "left";

  return (
    <button
      className={`${styles.galleryArrow} ${isLeft ? styles.galleryArrowLeft : styles.galleryArrowRight}`}
      type="button"
      onClick={onClick}
      aria-label={isLeft ? "Previous game image" : "Next game image"}
    >
      <Image
        src={assetPath(`/assets/borders/arrow-${side}.svg`)}
        alt=""
        fill
        sizes="45px"
        className={isLeft ? styles.galleryArrowIcon : `${styles.galleryArrowIcon} ${styles.galleryArrowIconRight}`}
      />
    </button>
  );
}

export function ScreenshotGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
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
    const thumbnails = thumbnailsRef.current;
    const activeThumbnail = thumbnailRefs.current[activeIndex];
    if (!thumbnails || !activeThumbnail) return;

    const thumbnailsRect = thumbnails.getBoundingClientRect();
    const thumbnailRect = activeThumbnail.getBoundingClientRect();
    const left = thumbnails.scrollLeft
      + thumbnailRect.left
      - thumbnailsRect.left
      - (thumbnails.clientWidth - thumbnailRect.width) / 2;

    thumbnails.scrollTo({
      left,
      behavior: "smooth",
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
          <GalleryPreview side="left" src={previous.src} />
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
          <GalleryPreview side="right" src={next.src} />
          {hasMultiple && (
            <>
              <GalleryArrow side="left" onClick={() => move(-1)} />
              <GalleryArrow side="right" onClick={() => move(1)} />
            </>
          )}
        </div>
        <div ref={thumbnailsRef} className={styles.galleryThumbnails} role="list" aria-label="Game image thumbnails">
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
