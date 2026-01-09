// src/data/caseStudies.js

// Drops in the Bucket
import DITB_THUMB from "../assets/case-studies/drops-in-the-bucket/thumb.jpg";
import DITB_HERO from "../assets/case-studies/drops-in-the-bucket/hero.jpg";
import DITB_SUP_1 from "../assets/case-studies/drops-in-the-bucket/support-1.jpg";
import DITB_SUP_2 from "../assets/case-studies/drops-in-the-bucket/support-2.jpg";

// Voices
import VOICES_THUMB from "../assets/case-studies/voices/thumb.jpg";
import VOICES_HERO from "../assets/case-studies/voices/hero.jpg";
import VOICES_SUP_1 from "../assets/case-studies/voices/support-1.jpg";
import VOICES_SUP_2 from "../assets/case-studies/voices/support-2.jpg";

// Holiday eCards
import ECARDS_THUMB from "../assets/case-studies/holiday-ecards/thumb.jpg";
import ECARDS_HERO from "../assets/case-studies/holiday-ecards/hero.jpg";
import ECARDS_SUP_1 from "../assets/case-studies/holiday-ecards/support-1.jpg";
import ECARDS_SUP_2 from "../assets/case-studies/holiday-ecards/support-2.jpg";

// Finance Department Dashboard
import FIN_THUMB from "../assets/case-studies/finance-department-dashboard/thumb.jpg";
import FIN_HERO from "../assets/case-studies/finance-department-dashboard/hero.jpg";
import FIN_SUP_1 from "../assets/case-studies/finance-department-dashboard/support-1.jpg";
import FIN_SUP_2 from "../assets/case-studies/finance-department-dashboard/support-2.jpg";

export const caseStudies = [
  {
    slug: "drops-in-the-bucket",
    title: "Drops in the Bucket",
    client: "Phoenix Contact, USA",
    year: "2017–2025",
    tags: [
      "Front-End",
      "UX",
      "HTML",
      "CSS",
      "JavaScript",
      "Adobe XD",
      "Design Systems",
      "Legacy Systems",
      "Intranet",
    ],

    summary:
      "A company-wide recognition platform that made it easy and genuinely enjoyable for employees to celebrate each other's work, which quickly became part of everyday workplace culture.",

    hero: {
      eyebrow: "Case Study",
      headline: "Drops in the Bucket",
      subhead:
        "An internal recognition platform built to feel familiar, scale company-wide, and thrive inside a legacy intranet environment.",
    },

    meta: {
      role: "Lead Front-End Developer and UI/UX Designer",
      team: "HR + department stakeholders",
      timeline: "Initial build plus iterative enhancements over years",
      tools:
        "HTML, CSS, JavaScript, legacy intranet environment, employee directory integration, email notification system",
    },

    problem: {
      title: "Problem",
      body: [
        "Employee recognition was inconsistent and not easily visible across the organization.",
        "The solution needed to work inside a proprietary intranet with legacy tooling and constraints.",
        "Adoption depended on the experience being intuitive enough for company-wide use.",
      ],
    },

    goals: {
      title: "Goals",
      items: [
        "Make recognition easy and habit-forming across teams",
        "Reduce onboarding friction with familiar patterns",
        "Design a UI that could scale and evolve inside a legacy system",
      ],
    },

    approach: {
      title: "Approach",
      steps: [
        {
          title: "Stakeholder discovery",
          detail:
            "Partnered with HR and department heads to define the recognition model and success criteria.",
        },
        {
          title: "Wireframes and flow design",
          detail:
            "Mapped feed, profiles, and recognition flows to support both individual and team-based praise.",
        },
        {
          title: "Visual identity and component system",
          detail:
            "Designed the logo, color system, UI components, and a reusable CSS library with style guidance.",
        },
        {
          title: "Build, iterate, and scale",
          detail:
            "Implemented the front end in the intranet environment and improved the product based on feedback and usage.",
        },
      ],
    },

    solution: {
      title: "Solution",
      body: [
        "A social feed-style recognition experience that felt instantly familiar.",
        "Multi-recipient recognition so teams could acknowledge group wins.",
        "Automated email notifications to reinforce engagement and bring people back.",
        "A reusable CSS library and component patterns to keep the UI consistent over time.",
      ],
      highlights: [
        "Social feed pattern for fast adoption",
        "Multi-recipient recognition for teams",
        "Email notifications to boost engagement",
        "Reusable CSS library and style guide",
      ],
    },

    outcome: {
      title: "Outcome",
      metrics: [
        { value: "Used for 8+ years" },
        { value: "Thousands of recognitions exchanged" },
        { value: "Became part of company culture" },
      ],
    },

    reflection: {
      title: "Reflection",
      body: [
        "I would add an analytics dashboard for HR to better understand participation and trends.",
        "I would improve search and filtering to help people find recognitions and peers more easily.",
      ],
    },

    links: {
      live: "",
      repo: "",
    },

    featured: true,

    images: {
      thumbnail: {
        src: DITB_THUMB,
        alt: "Drops in the Bucket thumbnail preview",
      },
      hero: {
        src: DITB_HERO,
        alt: "Drops in the Bucket recognition feed showing a sample post, navigation, and employee praise",
        caption:
          "Representative UI recreated in Figma. Original production system was proprietary to Phoenix Contact.",
      },
      supporting: [
        {
          src: DITB_SUP_1,
          alt: "Layout of the drop post feed, showing thumbnail avatars of employees, names, and the icons for liking and commenting on posts",
        },
        {
          src: DITB_SUP_2,
          alt: "A photo of the Drops in the Bucket site on a tablet device being held by a user",
        },
      ],
    },
  },

  {
    slug: "voices",
    title: "Voices",
    client: "Phoenix Contact, USA (Internal Intranet)",
    year: "2018–2025",
    tags: [
      "Front-End",
      "HTML",
      "CSS",
      "JavaScript",
      "UX",
      "Publishing",
      "Legacy Systems",
      "VBScript",
    ],

    summary:
      "A lightweight publishing system that let HR post employee stories consistently, even without a CMS, and made internal voices easier to share and discover.",

    hero: {
      eyebrow: "Case Study",
      headline: "Voices",
      subhead:
        "A maintainable publishing system built under tight constraints, designed to let employee stories ship consistently without a CMS.",
    },

    meta: {
      role: "End-to-end developer and designer",
      team: "HR stakeholders",
      timeline: "Tight timeline",
      tools: "HTML, CSS, JavaScript, VBScript, include-based publishing system",
    },

    problem: {
      title: "Problem",
      body: [
        "There was no existing CMS to support regular publishing.",
        "The solution needed to work within legacy intranet constraints.",
        "Publishing had to be repeatable without an admin interface.",
      ],
    },

    goals: {
      title: "Goals",
      items: [
        "Enable reliable monthly publishing without a CMS",
        "Keep the workflow simple for non-technical contributors",
        "Prioritize maintainability in a legacy environment",
      ],
    },

    approach: {
      title: "Approach",
      steps: [
        {
          title: "Define goals and content model",
          detail:
            "Aligned with HR on what needed to be published, how often, and what content structure would scale.",
        },
        {
          title: "Define > Build > Review > Refine",
          detail:
            "We structured the work around an Agile, iterative cycle: define the next smallest piece of value, build it, review with stakeholders, then refine based on real feedback.",
        },
        {
          title: "Wireframe and style guide",
          detail:
            "Designed layouts and a consistent visual system to make entries feel cohesive and easy to read.",
        },
        {
          title: "Build the publishing mechanism",
          detail:
            "Implemented an include-based system and a workflow designed around email-to-include publishing.",
        },
        {
          title: "Improve discoverability",
          detail:
            "Added dynamic sorting and standardized entry structure so content stayed easy to navigate over time.",
        },
      ],
    },

    solution: {
      title: "Solution",
      body: [
        "An include-based publishing system that made content updates straightforward without a CMS.",
        "A standardized entry structure so publishing was consistent month-to-month.",
        "Dynamic sorting so the newest stories surfaced automatically.",
        "A style guide that modernized the section while staying compatible with legacy constraints.",
      ],
      highlights: [
        "Email-to-include publishing workflow",
        "Standardized entry structure",
        "Dynamic sorting",
        "Maintainable approach for legacy systems",
      ],
    },

    outcome: {
      title: "Outcome",
      metrics: [
        { value: "Enabled monthly publishing" },
        { value: "Supported cultural initiatives" },
        { value: "Modernized a legacy intranet section" },
      ],
    },

    reflection: {
      title: "Reflection",
      body: [
        "I would build an admin publishing interface to reduce manual steps.",
        "I would add tagging and filtering to help users browse content by theme.",
      ],
    },

    links: {
      live: "",
      repo: "",
    },

    featured: true,

    images: {
      thumbnail: {
        src: VOICES_THUMB,
        alt: "Voices thumbnail preview",
      },
      hero: {
        src: VOICES_HERO,
        alt: "Voices layout showing title and blog post structure with thumbnail, title, author avatar, author name, date, and read more link.",
        caption:
          "Representative UI recreated in Figma. Original implementation lived inside a legacy intranet.",
      },
      supporting: [
        {
          src: VOICES_SUP_1,
          alt: "Layout of blog posts showing consistent structure with title, author, date, thumbnail image, and read more link.",
        },
        {
          src: VOICES_SUP_2,
          alt: "Flow chart of Agile iterative process showing Sprint, Daily Scrum, and other steps.",
        },
      ],
    },
  },

  {
    slug: "holiday-ecards",
    title: "Holiday eCards",
    client: "Phoenix Contact, USA (Internal Intranet)",
    year: "2019–2025",
    tags: [
      "Front-End",
      "HTML",
      "CSS",
      "Javascript",
      "CSS Animations",
      "UX",
      "Design Systems",
      "Legacy Systems",
      "Intranet",
    ],

    summary:
      "A digital eCard experience that replaced physical holiday cards with something faster, more personal, and scalable enough for company-wide use.",

    hero: {
      eyebrow: "Case Study",
      headline: "Holiday eCards",
      subhead:
        "A wizard-style eCard experience designed for bulk sending, personalization, and expansion into new use cases over time.",
    },

    meta: {
      role: "Front-end lead and UI/UX designer",
      team: "Stakeholders (internal)",
      timeline: "Initial launch plus post-launch expansion",
      tools: "HTML, CSS, JavaScript, CSS animations, legacy intranet auth",
    },

    problem: {
      title: "Problem",
      body: [
        "Physical holiday cards did not scale and required time and cost to manage.",
        "Users needed bulk sending with personalization and automatic user recognition.",
        "The platform needed to support multiple card formats and future expansion.",
      ],
    },

    goals: {
      title: "Goals",
      items: [
        "Replace physical cards with a scalable, delightful digital workflow",
        "Support bulk sending while keeping messages personal",
        "Design the system to expand into additional use cases",
      ],
    },

    approach: {
      title: "Approach",
      steps: [
        {
          title: "Define user flows",
          detail:
            "Mapped a clear flow from selecting a card to personalizing and sending to one or many recipients.",
        },
        {
          title: "Design UI and components",
          detail:
            "Designed UI patterns that felt simple for everyone while handling complexity under the hood.",
        },
        {
          title: "Build the front end and card templates",
          detail:
            "Implemented the app and created themed card pages using flexible templates.",
        },
        {
          title: "Expand post-launch",
          detail:
            "Iterated and expanded the platform to support additional scenarios beyond the initial holiday use case.",
        },
      ],
    },

    solution: {
      title: "Solution",
      body: [
        "A wizard-style flow that guided users step-by-step through sending cards.",
        "An admin tracking dashboard to monitor activity and usage.",
        "Flexible card templates and formats designed for expansion.",
      ],
      highlights: [
        "Wizard-style user flow",
        "Admin tracking dashboard",
        "Flexible templates for expansion",
      ],
    },

    outcome: {
      title: "Outcome",
      metrics: [
        { value: "Reduced costs and effort" },
        { value: "Supported bulk sending at scale" },
        { value: "Expanded into additional use cases" },
      ],
    },

    reflection: {
      title: "Reflection",
      body: [
        "I would add message templates to speed sending while preserving personalization.",
        "I would improve recipient management for power users sending large batches.",
      ],
    },

    links: {
      live: "",
      repo: "",
    },

    featured: false,

    images: {
      thumbnail: {
        src: ECARDS_THUMB,
        alt: "Holiday eCards thumbnail preview",
      },
      hero: {
        src: ECARDS_HERO,
        alt: "Holiday eCards example of a holiday card with festive design and personalized message",
        caption:
          "Representative UI recreated in Figma. Original implementation lived inside a legacy intranet.",
      },
      supporting: [
        {
          src: ECARDS_SUP_1,
          alt: "Interface of the eCards card selection and personalization flow showing various card options",
        },
        {
          src: ECARDS_SUP_2,
          alt: "Example of an eCard with animated elements and personalized message",
        },
      ],
    },
  },

  {
    slug: "finance-department-dashboard",
    title: "Finance Department Dashboard",
    client: "Phoenix Contact, USA (Internal Intranet)",
    year: "2020–2025",
    tags: [
      "UX",
      "Front-End",
      "HTML",
      "CSS",
      "JavaScript",
      "VBScript",
      "Information Architecture",
      "Legacy Systems",
    ],

    summary:
      "A centralized dashboard that replaced a fragmented finance intranet with a clearer, task-first experience built around how people actually work.",

    hero: {
      eyebrow: "Case Study",
      headline: "Finance Department Dashboard",
      subhead:
        "A widget-based intranet dashboard that replaced fragmentation with clarity, consistency, and reusable patterns.",
    },

    meta: {
      role: "UX designer and developer",
      team: "Finance stakeholders",
      timeline: "Iterative stakeholder-driven rollout",
      tools: "HTML, CSS, JavaScript, VBScript",
    },

    problem: {
      title: "Problem",
      body: [
        "Finance resources were fragmented across multiple pages and formats.",
        "The intranet environment could not rely on third-party widgets.",
        "The solution needed to support multiple content types within legacy constraints.",
      ],
    },

    goals: {
      title: "Goals",
      items: [
        "Centralize key resources and frequent tasks",
        "Create reusable patterns that can scale to other departments",
        "Make the experience consistent and easy to navigate",
      ],
    },

    approach: {
      title: "Approach",
      steps: [
        {
          title: "Content audit",
          detail:
            "Reviewed existing content, identified duplication, and mapped what users needed most often.",
        },
        {
          title: "Wireframes and widget system",
          detail:
            "Designed a modular dashboard layout with widget patterns that could support varied content.",
        },
        {
          title: "Implementation in a legacy environment",
          detail:
            "Built the dashboard with consistent components while respecting intranet limitations.",
        },
        {
          title: "Stakeholder iteration",
          detail:
            "Refined prioritization and layout based on feedback from finance stakeholders.",
        },
      ],
    },

    solution: {
      title: "Solution",
      body: [
        "A modular, widget-based dashboard that consolidated finance resources in one place.",
        "Component patterns designed for reuse and consistency.",
        "Prioritized frequent tasks to reduce time spent searching and clicking through pages.",
      ],
      highlights: [
        "Modular widgets",
        "Consistent component patterns",
        "Task-first prioritization",
      ],
    },

    outcome: {
      title: "Outcome",
      metrics: [
        { value: "Simplified navigation" },
        { value: "Centralized resources" },
        { value: "Reusable dashboard pattern" },
      ],
    },

    reflection: {
      title: "Reflection",
      body: [
        "I would add personalization so users could pin or reorder widgets based on what they use most.",
        "I would add usage analytics to validate what content is actually getting used.",
      ],
    },

    links: {
      live: "",
      repo: "",
    },

    featured: false,

    images: {
      thumbnail: {
        src: FIN_THUMB,
        alt: "Finance Department Dashboard thumbnail preview",
      },
      hero: {
        src: FIN_HERO,
        alt: "Finance Department Dashboard showing widget-based layout and quick actions tools",
        caption:
          "Representative UI recreated in Figma. Original implementation lived inside a legacy intranet.",
      },
    },
  },
];

export function getCaseStudy(slug) {
  return caseStudies.find((cs) => cs.slug === slug);
}
