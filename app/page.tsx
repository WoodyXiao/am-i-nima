import styles from "./page.module.css";
import { GameIntroduction } from "./components/introduction/GameIntroduction";
import { HeroVideo } from "./components/hero/HeroVideo";
import { ScreenshotGallery } from "./components/gallery/ScreenshotGallery";
import { SiteFooter } from "./components/footer/SiteFooter";
import { SiteHeader } from "./components/header/SiteHeader";
import { StudioSection } from "./components/studio/StudioSection";

export default function HomePage() {
  return (
    <main id="top" className={styles.pageShell}>
      <SiteHeader />
      <HeroVideo />
      <GameIntroduction />
      <ScreenshotGallery />
      <div className={styles.studioFooterGroup}>
        <StudioSection />
        <SiteFooter />
      </div>
    </main>
  );
}
