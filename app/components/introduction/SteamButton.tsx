import Image from "next/image";
import styles from "./Introduction.module.css";
import { assetPath } from "../../content";

type SteamButtonProps = {
  label: string;
  href: string;
  variant: "demo" | "wishlist";
};

export function SteamButton({ label, href, variant }: SteamButtonProps) {
  const content = (
    <>
      <span>{label}</span>
      <Image
        src={assetPath("/assets/icons/steam.png")}
        alt=""
        width={31}
        height={31}
        className={styles.steamIcon}
      />
    </>
  );

  const className = `${styles.steamButton} ${variant === "wishlist" ? styles.steamButtonWishlist : styles.steamButtonDemo}`;

  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {variant === "wishlist" ? (
        <svg className={styles.steamButtonBorder} viewBox="0 0 235 79" aria-hidden="true">
          <path
            className={styles.steamButtonFill}
            d="M3.5614 8.63965L210.561 2.63965L231.409 47.6396L195.307 73.6396L23.9004 69.6396L3.5614 8.63965Z"
          />
          <path
            d="M211.737 2.09473L232.585 47.0947L233.034 48.0654L232.166 48.6914L196.064 74.6914L195.712 74.9453L195.277 74.9346L23.87 70.9346L22.9598 70.9141L22.6718 70.0498L2.33191 9.0498L1.78113 7.39551L3.52429 7.34473L210.524 1.34473L211.378 1.31934L211.737 2.09473Z"
            fill="none"
            stroke="#E5E7E6"
            strokeWidth="2.59127"
          />
        </svg>
      ) : (
        <svg className={styles.steamButtonBorder} viewBox="0 0 234 84" aria-hidden="true">
          <path
            className={styles.steamButtonFill}
            d="M21.0312 2.71655L230.79 15.3463V58.7084L197.29 78.1382L3.29028 75.1382L21.0312 2.71655Z"
          />
          <path
            d="M232.086 59.4548L231.441 59.8289L197.941 79.2585L197.629 79.4392L197.27 79.4333L3.26978 76.4333L1.64478 76.4089L2.03149 74.8298L19.7727 2.40796L20.0295 1.35815L21.1086 1.42358L230.868 14.0535L232.086 14.1267V59.4548Z"
            fill="none"
            stroke="#E5E7E6"
            strokeWidth="2.59127"
          />
        </svg>
      )}
      {content}
    </a>
  );
}
