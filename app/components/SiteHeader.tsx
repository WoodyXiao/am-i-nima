import Image from "next/image";
import styles from "../page.module.css";
import { assetPath, siteContent } from "../content";

export function SiteHeader() {
  const wishlistUrl = siteContent.steam.wishlistUrl;

  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerGradient} aria-hidden="true" />
      <div className={styles.headerInner}>
        <a className={styles.headerLogoLink} href="#top" aria-label="Ho Games Studio home">
          <Image
            className={styles.headerLogo}
            src={assetPath("/assets/logos/ho-games.png")}
            alt="Ho Games Studio"
            width={104}
            height={67}
            priority
          />
        </a>
        <a className={styles.wishlistLink} href={wishlistUrl} target="_blank" rel="noreferrer">
          Wishlist Now!
        </a>
      </div>
    </header>
  );
}
