import Image from "next/image";
import styles from "./Header.module.css";
import { assetPath, siteContent } from "../content";

export function SiteHeader() {
  const wishlistUrl = siteContent.steam.wishlistUrl;

  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerGradient} aria-hidden="true" />
      <div className={styles.headerInner}>
        <a className={styles.headerLogoLink} href="#top" aria-label="Am I Nima? home">
          <Image
            className={styles.headerLogo}
            src={assetPath("/assets/logos/am-i-nima-logo.png")}
            alt="Am I Nima?"
            width={106}
            height={60}
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
