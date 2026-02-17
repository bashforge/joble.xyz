import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Joble Jose",
  DESCRIPTION: "Joble's personal website",
  EMAIL: "jo@joble.xyz",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Joble's personal website",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const ARCHIVE: Metadata = {
  TITLE: "Archive",
  DESCRIPTION: "The origin story and current status.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X",
    HREF: "https://x.com/joblejose?s=21",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/bashforge",
  },
  {
    NAME: "Website",
    HREF: "https://joble.xyz",
  },
];
