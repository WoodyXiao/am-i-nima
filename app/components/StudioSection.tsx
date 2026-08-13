import Image from "next/image";
import styles from "../page.module.css";
import { assetPath, siteContent } from "../content";

export function StudioSection() {
  return (
    <section className={styles.studioSection} aria-labelledby="studio-title">
      <div className={styles.studioBackdrop} aria-hidden="true">
        <Image
          src={assetPath("/assets/images/nima-main-menu.png")}
          alt=""
          fill
          sizes="100vw"
          className={styles.studioBackdropImage}
        />
        <div className={styles.studioBackdropShade} />
      </div>
      <div className={styles.studioContent}>
        <Image
          src={assetPath("/assets/logos/ho-games.png")}
          alt="Ho Games Studio"
          width={349}
          height={226}
          className={styles.studioLogo}
        />
        <div className={styles.studioCopy}>
          <h2 id="studio-title">Ho Games Studio</h2>
          <p>{siteContent.studio.description}</p>
        </div>
      </div>
    </section>
  );
}
