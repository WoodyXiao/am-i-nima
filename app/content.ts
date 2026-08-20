export type ExternalLink = string | null;

const temporaryLink = "about:blank";
const steamLink = "https://store.steampowered.com/app/3224600/Am_I_Nima/";
const discordLink = "https://discord.gg/6Pf5E3GEG";
const twitterLink = "https://x.com/HO_games_studio";
const blueskyLink = "https://bsky.app/profile/ho-games-studio.bsky.social";
const instagramLink = "https://www.instagram.com/ho.games/";
const tumblrLink = "https://www.tumblr.com/ho-games";
const tiktokLink = "https://www.tiktok.com/@ho_games_studio";
const youtubeLink = "https://www.youtube.com/@HO-games-studio";

export const siteContent = {
  title: "Am I Nima?",
  description:
    "Am I Nima puts you in control of Nima's fractured mind. Explore a dark narrative puzzle game from Ho Games Studio.",
  videoSrc: "/videos/home-video.mp4",
  videoUrl: null as ExternalLink,
  steam: {
    demoUrl: steamLink,
    wishlistUrl: steamLink,
  },
  intro: {
    description:
      "Am I Nima is a psychological-horror game where you must convince your mom that you really are her daughter. Combine words together in your brain and use them to talk. Get her to trust you.",
  },
  studio: {
    description:
      "Vancouver-based indie game studio founded in 2024 by Jeremy and Alvin Ho. Our focus is on creating games that combine unique and innovative gameplay with stories that reflect our personal experiences and cultural identity.",
  },
  contact: {
    email: "ho.games.studio@gmail.com",
    pressKitUrl: temporaryLink,
  },
  socials: [
    { label: "Steam", url: steamLink, icon: "/assets/icons/steam.svg", iconWidth: 79, iconHeight: 80 },
    { label: "Discord", url: discordLink, icon: "/assets/icons/discord.svg", iconWidth: 110, iconHeight: 80 },
    { label: "YouTube", url: youtubeLink, icon: "/assets/icons/youtube.svg", iconWidth: 114, iconHeight: 80 },
    { label: "Instagram", url: instagramLink, icon: "/assets/icons/instagram.svg", iconWidth: 80, iconHeight: 80 },
    { label: "Tumblr", url: tumblrLink, icon: "/assets/icons/tumblr-icon.svg", iconWidth: 46, iconHeight: 80 },
    { label: "X", url: twitterLink, icon: "/assets/icons/x.svg", iconWidth: 88, iconHeight: 80 },
    { label: "Bluesky", url: blueskyLink, icon: "/assets/icons/bluesky.svg", iconWidth: 83, iconHeight: 81 },
    { label: "TikTok", url: tiktokLink, icon: "/assets/icons/tiktok-logo.svg", iconWidth: 69, iconHeight: 80 },
  ],
  gallery: [
    {
      src: "/screenshots/nima-screenshot-01.png",
      alt: "Nima confronts her mother in a dark room in Am I Nima?",
    },
    {
      src: "/assets/images/nima-main-menu.png",
      alt: "The Am I Nima? main menu over a dark red silhouette of Nima.",
    },
    {
      src: "/assets/images/nima-key-art-background.png",
      alt: "A dark illustrated bathroom scene from Am I Nima?.",
    },
  ],
} as const;

export const assetPath = (path: string) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${basePath}${path}`;
};
