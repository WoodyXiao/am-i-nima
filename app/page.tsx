import styles from "./page.module.css";
import { ContactSection } from "./components/ContactSection";
import { GameIntroduction } from "./components/GameIntroduction";
import { HeroVideo } from "./components/HeroVideo";
import { ScreenshotGallery } from "./components/ScreenshotGallery";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { StudioSection } from "./components/StudioSection";

export default function HomePage() {
  return (
    <main id="top" className={styles.pageShell}>
      <SiteHeader />
      <HeroVideo />
      <GameIntroduction />
      <ScreenshotGallery />
      <StudioSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
