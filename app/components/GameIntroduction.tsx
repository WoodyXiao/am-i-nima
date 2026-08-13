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
          width={424}
          height={238}
          className={styles.gameLogo}
        />
        <div className={styles.introText}>
          <p>{siteContent.intro.firstParagraph}</p>
          <p>{siteContent.intro.secondParagraph}</p>
        </div>
        <div className={styles.introCtas}>
          <div className={styles.introPlayCta}>
            <SteamButton label="Play demo on Steam" href={siteContent.steam.demoUrl} variant="demo" />
          </div>
          <div className={styles.introMobileCtas}>
            <SteamButton label="Play demo on Steam" href={siteContent.steam.demoUrl} variant="demo" />
            <SteamButton label="Wishlist on Steam" href={siteContent.steam.wishlistUrl} variant="wishlist" />
          </div>
        </div>
      </div>
    </section>
  );
}
