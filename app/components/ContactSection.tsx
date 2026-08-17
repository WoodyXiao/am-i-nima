import Image from "next/image";
import styles from "../page.module.css";
import { assetPath, siteContent } from "../content";

function SafeExternalLink({ label, url, className = "" }: { label: string; url: string; className?: string }) {
  return <a className={className} href={url} target="_blank" rel="noreferrer">{label}</a>;
}

export function ContactSection() {
  return (
    <section className={styles.contactSection} aria-labelledby="contact-title">
      <div className={styles.awards} aria-label="Awards and selections">
        <Image src={assetPath("/assets/awards/indiecade-2025.png")} alt="IndieCade 2025 official selection" width={214} height={214} className={styles.indiecadeBadge} />
        <Image src={assetPath("/assets/awards/wings-sxsw-2025-finalist.png")} alt="WINGS at SXSW 2025 finalist" width={330} height={179} className={styles.wingsBadge} />
      </div>
      <div className={styles.contactContent}>
        <h2 id="contact-title" className={styles.visuallyHidden}>Contact and social links</h2>
        <p className={styles.contactPrompt}>Email us at:</p>
        <a className={styles.emailLink} href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a>
        <p className={styles.socialPrompt}>Join us on:</p>
        <nav className={styles.socialLinks} aria-label="Social links">
          {siteContent.socials.map((social) => (
            <SafeExternalLink key={social.label} label={social.label} url={social.url} className={styles.socialLink} />
          ))}
        </nav>
      </div>
    </section>
  );
}
