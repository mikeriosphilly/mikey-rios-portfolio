// src/data/projects.js

import tableWhisperThumb from "../assets/projects/tablewhisper/thumb.jpg";

export const projects = [
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
    links: {
      project: "#",
    },
  },
];
