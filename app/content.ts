export type ExternalLink = string | null;

export const siteContent = {
  title: "Am I Nima?",
  description:
    "Am I Nima puts you in control of Nima's fractured mind. Explore a dark narrative puzzle game from Ho Games Studio.",
  videoSrc: "/videos/home-video.mp4",
  videoUrl: null as ExternalLink,
  steam: {
    demoUrl: null as ExternalLink,
    wishlistUrl: null as ExternalLink,
  },
  intro: {
    firstParagraph: "Am I Nima puts you in control of Nima’s fractured mind.",
    secondParagraph:
      "Trapped by your mother in a dimly lit basement, you must pass her tests and navigate once-familiar rooms if you want to escape.",
  },
  studio: {
    description:
      "Vancouver-based indie game studio founded in 2024 by Jeremy and Alvin Ho. Our focus is on creating games that combine unique and innovative gameplay with stories that reflect our personal experiences and cultural identity.",
  },
  contact: {
    email: "ho.games.studio@gmail.com",
  },
  socials: [
    { label: "Steam", url: null as ExternalLink },
    { label: "Discord", url: null as ExternalLink },
    { label: "YouTube", url: null as ExternalLink },
    { label: "Instagram", url: null as ExternalLink },
    { label: "Tumblr", url: null as ExternalLink },
    { label: "X", url: null as ExternalLink },
    { label: "Bluesky", url: null as ExternalLink },
    { label: "TikTok", url: null as ExternalLink },
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
