import Image from "next/image";
import type { CSSProperties } from "react";
import styles from "./Footer.module.css";
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
        <Image src={assetPath("/assets/awards/BitsummitNomination.png")} alt="BitSummit award nominee" width={123} height={123} className={styles.bitsummitBadge} />
      </div>
      <div className={styles.contactContent}>
        <h2 id="contact-title" className={styles.visuallyHidden}>Contact and social links</h2>
        <p className={styles.emailUs}>Email us at</p>
        <p className={styles.followUs}>Follow us on</p>
        <a className={styles.emailLink} href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a>
        <SafeExternalLink
          label="Get Press Kit"
          url={siteContent.contact.pressKitUrl}
          className={styles.pressKitLink}
        />
        <nav className={styles.socialLinks} aria-label="Social links">
          {siteContent.socials.map((social) => (
            <a
              key={social.label}
              className={styles.socialLink}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              title={social.label}
            >
              <span
                aria-hidden="true"
                className={styles.socialIcon}
                style={{ "--social-icon": `url("${assetPath(social.icon)}")` } as CSSProperties}
              />
              <span className={styles.socialLabel}>{social.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
