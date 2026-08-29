"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./HeroVideo.module.css";
import { assetPath, siteContent } from "../../content";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoSrc = siteContent.videoSrc;
  const videoUrl = siteContent.videoUrl;

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);

    if (video.paused) {
      void video.play().catch(() => undefined);
    }
  };

  return (
    <section className={styles.videoViewport} aria-label="Am I Nima trailer">
      {videoSrc ? (
        <div className={styles.videoMedia}>
          <video
            ref={videoRef}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="auto"
            poster={assetPath("/assets/images/nima-mirror.png")}
            aria-label="Am I Nima official trailer"
          >
            <source src={assetPath(videoSrc)} type="video/mp4" />
          </video>
        </div>
      ) : videoUrl ? (
        <div className={styles.videoMedia}>
          <iframe
            src={videoUrl}
            title="Am I Nima official trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      ) : (
        <div className={styles.videoFallback}>
          <Image
            src={assetPath("/assets/images/nima-mirror.png")}
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.videoFallbackImage}
          />
          <div className={styles.videoFallbackShade} aria-hidden="true" />
        </div>
      )}
      {videoSrc && (
        <button
          className={styles.soundToggle}
          type="button"
          onClick={toggleSound}
          aria-label={isMuted ? "Unmute trailer" : "Mute trailer"}
          aria-pressed={!isMuted}
          title={isMuted ? "Turn sound on" : "Turn sound off"}
        >
          {isMuted ? (
            <svg className={styles.soundIcon} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 9v6h4l5 4V5L8 9H4Z" />
              <path d="m17 9 4 4m0-4-4 4" />
            </svg>
          ) : (
            <svg className={styles.soundIcon} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 9v6h4l5 4V5L8 9H4Z" />
              <path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" />
            </svg>
          )}
        </button>
      )}
    </section>
  );
}
