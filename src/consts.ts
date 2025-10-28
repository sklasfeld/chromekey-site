// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Chrome Key Bioinformatics";
export const SITE_DESCRIPTION = "See through the noise to the biology beneath.";

interface SocialLink {
  platform: string;
  url: string;
  label: string;
  icon: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "github",
    url: "https://github.com/sklasfeld",
    label: "Follow Samantha Klasfeld on GitHub",
    icon: "mdi:github",
  },
  {
    platform: "bluesky",
    url: "https://bsky.app/profile/sklasfeld.bsky.social",
    label: "Follow Samantha Klasfeld on Bluesky",
    icon: "bluesky",
  },
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/company/chrome-key-bioinformatics",
    label: "Follow Chrome Key on LinkedIn",
    icon: "mdi:linkedin",
  },
];
