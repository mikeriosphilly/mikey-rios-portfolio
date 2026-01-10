// src/data/projects.js
import tableWhisperThumb from "../assets/projects/tablewhisper/thumb.jpg";
import queerantineThumb from "../assets/projects/queerantine/thumb.jpg";
import combattrackerThumb from "../assets/projects/combattracker/thumb.jpg";
import flashkioskThumb from "../assets/projects/flashkiosk/thumb.jpg";

/*
  ------------------------------------------------------------
  Project links guide (keep this as your future reference)
  ------------------------------------------------------------

  Each project can optionally include `links: []`.

  - Use 0 links when it's not ready:
      links: []
    This will show a "Coming soon" pill on the card.

  - Use 1 link when there is only one meaningful destination:
      links: [{ label: "Read article", href: "https://...", kind: "primary" }]

  - Use 2 links when you have a main action + a secondary:
      links: [
        { label: "Live demo", href: "https://...", kind: "primary" },
        { label: "Repo", href: "https://github.com/...", kind: "secondary" },
      ]

  Recommended labels:
    "Live demo" | "Repo" | "Read article" | "Case study" | "View design"

  Recommended kinds:
    kind: "primary"   // the main CTA
    kind: "secondary" // optional second CTA
*/

export const projects = [
  {
    title: "Queerantine",
    type: "Community Resource Platform",
    goal: "Direct financial support for LGBTQ+ performers and service industry workers during COVID-19",
    description: [
      "Queerantine was a community-driven virtual tip jar directory created during COVID lockdowns to support LGBTQ+ performance artists and service industry workers whose income depended on tips.",
      "The platform allowed people to find and directly tip drag artists, burlesque performers, bartenders, and other workers via Venmo, Cash App, or PayPal while venues were closed.",
      "Over its lifetime, Queerantine listed 300+ performers across six cities and received over 300,000 unique visitors.",
    ],
    stack: [
      "UI/UX Design",
      "Content Strategy",
      "Information Architecture",
      "Data Curation",
      "Community Outreach",
    ],
    status: "Archived",
    thumbnail: queerantineThumb,
    links: [
      {
        label: "Archived site (2020)",
        href: "https://web.archive.org/web/20200919090810/https://queerantine.me/",
        kind: "primary",
      },
      {
        label: "Press coverage",
        href: "https://epgn.com/2020/04/15/virtual-tip-jar-for-queer-performers-service-industry-professionals-expands-reach/",
        kind: "secondary",
      },
    ],
  },
  {
    title: "TableWhisper",
    type: "Real-time Web Application",
    goal: 'Enhancing table immersion via secret "handouts"',
    description:
      "A lightweight web app for the most delicate part of a D&D session: secrets. DMs can instantly invite players and beam private lore, images, or public announcements with scroll-unrolling animations. Everything is ephemeral, so when the session ends, the data disappears.",
    stack: [
      "React",
      "Tailwind CSS",
      "Socket.io",
      "Framer Motion",
      "Node.js",
      "Express",
      "WebSockets",
    ],
    status: "In development",
    thumbnail: tableWhisperThumb,

    // No links yet -> ProjectCard will show "Coming soon"
    links: [],
  },
  {
    title: "Combat Tracker",
    type: "Light-weight Web Application",
    goal: "Keep track of hits and misses during tabletop RPG combat encounters",
    description:
      "A simple, no-frills combat tracker for tabletop RPGs like Dungeons & Dragons. Quickly count hits and misses during combat, and reset the counters for long rests.",
    stack: ["JavaScript", "CSS", "HTML"],
    status: "Deployed",
    thumbnail: combattrackerThumb,

    // No links yet -> ProjectCard will show "Coming soon"
    links: [
      {
        label: "GitHub Repo",
        href: "https://mikeriosphilly.github.io/CombatTracker/",
        kind: "primary",
      },
    ],
  },
  {
    title: "Flash Kiosk",
    type: "Mobile Application",
    goal: "Make live registration and check-ins at photography events quick and easy",
    description:
      "Flash Kiosk is a mobile app that streamlines the registration and check-in process at photography events. Attendees can quickly sign up and check in on the host's tablet device, reducing wait times and improving the overall experience.",
    stack: ["Figma", "SwiftUI", "iOS Development"],
    status: "In development",
    thumbnail: flashkioskThumb,

    // No links yet -> ProjectCard will show "Coming soon"
    links: [],
  },
];
