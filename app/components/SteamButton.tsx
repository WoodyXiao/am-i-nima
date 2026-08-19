import Image from "next/image";
import styles from "../page.module.css";
import { assetPath } from "../content";

type SteamButtonProps = {
  label: string;
  href: string;
  variant: "demo" | "wishlist";
};

export function SteamButton({ label, href, variant }: SteamButtonProps) {
  const border = variant === "wishlist"
    ? { src: "/assets/borders/wishlist.svg", width: 235, height: 79 }
    : { src: "/assets/borders/play-demo.svg", width: 234, height: 84 };

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
      <Image
        src={assetPath(border.src)}
        alt=""
        width={border.width}
        height={border.height}
        className={styles.steamButtonBorder}
        aria-hidden="true"
      />
      {content}
    </a>
  );
}
