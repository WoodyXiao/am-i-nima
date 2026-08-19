import Image from "next/image";
import styles from "../page.module.css";
import { assetPath, siteContent } from "../content";
import { SteamButton } from "./SteamButton";

export function GameIntroduction() {
  return (
    <section className={styles.introduction} aria-labelledby="game-title">
      <div className={styles.introductionArt} aria-hidden="true">
        <Image
          src={assetPath("/assets/images/nima-key-art-background.png")}
          alt=""
          fill
          sizes="100vw"
          className={styles.introductionArtImage}
        />
      </div>
      <div className={styles.introductionCopy}>
        <Image
          id="game-title"
          src={assetPath("/assets/logos/am-i-nima-logo.png")}
          alt="Am I Nima?"
          width={536}
          height={301}
          className={styles.gameLogo}
        />
        <p className={styles.releaseDate}>Coming October 8th, 2026</p>
        <div className={styles.introText}>
          <p>{siteContent.intro.description}</p>
        </div>
        <div className={styles.introCtas}>
          <SteamButton label="Play demo" href={siteContent.steam.demoUrl} variant="demo" />
          <SteamButton label="Wishlist" href={siteContent.steam.wishlistUrl} variant="wishlist" />
        </div>
      </div>
    </section>
  );
}
