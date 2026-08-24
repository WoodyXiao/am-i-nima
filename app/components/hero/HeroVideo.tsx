import Image from "next/image";
import styles from "./HeroVideo.module.css";
import { assetPath, siteContent } from "../../content";

export function HeroVideo() {
  const videoSrc = siteContent.videoSrc;
  const videoUrl = siteContent.videoUrl;

  return (
    <section className={styles.videoViewport} aria-label="Am I Nima trailer">
      {videoSrc ? (
        <div className={styles.videoMedia}>
          <video
            autoPlay
            muted
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
    </section>
  );
}
