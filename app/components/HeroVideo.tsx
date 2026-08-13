import Image from "next/image";
import styles from "../page.module.css";
import { assetPath, siteContent } from "../content";

export function HeroVideo() {
  const videoUrl = siteContent.videoUrl;

  return (
    <section className={styles.videoViewport} aria-label="Am I Nima trailer">
      {videoUrl ? (
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
