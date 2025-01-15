import { DiscordIcon, InstagramIcon, TwitterIcon } from "../utils/icons";

export const NAVBAR_LIST = [
  { name: "Home", link: "#home" },
  { name: "Story", link: "#story" },
  { name: "About", link: "#about" },
  { name: "Roadmap", link: "#roadmap" },
  { name: "Team", link: "#team" },
  { name: "FAQs", link: "#faqs" },
];

export const SOCIAL_LIST = [
  {
    social: <TwitterIcon />,
    link: "https://x.com/i/flow/login",
  },
  {
    social: <InstagramIcon />,
    link: "https://www.instagram.com/",
  },
  {
    social: <DiscordIcon />,
    link: "https://discord.com/",
  },
];
