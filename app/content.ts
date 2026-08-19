export type ExternalLink = string | null;

const temporaryLink = "about:blank";

export const siteContent = {
  title: "Am I Nima?",
  description:
    "Am I Nima puts you in control of Nima's fractured mind. Explore a dark narrative puzzle game from Ho Games Studio.",
  videoSrc: "/videos/home-video.mp4",
  videoUrl: null as ExternalLink,
  steam: {
    demoUrl: temporaryLink,
    wishlistUrl: temporaryLink,
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
    { label: "Steam", url: temporaryLink },
    { label: "Discord", url: temporaryLink },
    { label: "YouTube", url: temporaryLink },
    { label: "Instagram", url: temporaryLink },
    { label: "Tumblr", url: temporaryLink },
    { label: "X", url: temporaryLink },
    { label: "Bluesky", url: temporaryLink },
    { label: "TikTok", url: temporaryLink },
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
