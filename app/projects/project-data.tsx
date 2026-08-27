import type { TechName } from "../components/tech-icons";

export interface Project {
  title: string;
  year: number | string;
  description: string;
  tools: readonly TechName[];
  url: string;
  thumbnail: string;
  /** Client / contract work (vs employment or own product) */
  freelance?: boolean;
}

export const workProjects: Project[] = [
  {
    title: "Munkhada Careers",
    year: 2026,
    description:
      "Careers site for Munkhada LLC (Toyota dealer in Mongolia). Job listings and applications.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://careers.munkhada.mn/",
    thumbnail: "/projects/munkhada-careers.jpg",
    freelance: true,
  },
  {
    title: "Nora Store Mongolia",
    year: 2026,
    description:
      "Ecommerce shop for Korean and Japanese daily goods in Mongolia. Cart and Ulaanbaatar delivery.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://noramongolia.shop/",
    thumbnail: "/projects/nora-store.jpg",
    freelance: true,
  },
  {
    title: "Odin Mindmap",
    year: 2026,
    description:
      "Mindmap workspace with network, dashboard, timeline, and portfolio views.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://odin-mindmap.vercel.app/mindmap",
    thumbnail: "/projects/odin-mindmap.jpg",
  },
  {
    title: "Expanded Softsynth Plugin for MONTAGE M",
    year: "2024-2024",
    description:
      "VST plugin that brings the MONTAGE M synthesizer into a DAW.",
    tools: ["C++", "JUCE", "Visual Studio", "Xcode"],
    url: "https://usa.yamaha.com/products/music_production/apps/esp_montagem/index.html",
    thumbnail: "/projects/esp-montage.jpg",
  },
  {
    title: "Rec'n'Share",
    year: "2023-2023",
    description:
      "Record audio and video with songs from your library, then share performances.",
    tools: ["SwiftUI", "Swift", "Objective-C", "Xcode", "Kotlin"],
    url: "https://apps.apple.com/us/app/recnshare/id1162569825",
    thumbnail: "/projects/recnshare.jpg",
  },
  {
    title: "SEQTRAK",
    year: "2021-2023",
    description:
      "Companion app for the SEQTRAK music production studio. Visual control of the hardware.",
    tools: [
      "Unity 3D",
      "C#",
      "Android",
      "Windows",
      "macOS",
      "Xcode",
      "Visual Studio Code",
    ],
    url: "https://apps.apple.com/us/app/seqtrak/id1544687021",
    thumbnail: "/projects/seqtrak.jpg",
  },
  {
    title: "Simple.mn",
    year: "2019-2021",
    description:
      "Fintech app for payments and everyday banking in Mongolia.",
    tools: ["Java", "Android Studio", "Spring Boot"],
    url: "https://play.google.com/store/apps/details?id=mn.mllc.ashid&gl=MN",
    thumbnail: "/projects/simple-mn.jpg",
  },
];

export const personalProjects: Project[] = [
  {
    title: "Scanly - Scan food & beauty barcodes",
    year: 2026,
    description:
      "Barcode scanner for food and beauty products. Health score (0-100), ingredients, additives, and price estimates. Built for Mongolia.",
    tools: ["Flutter"],
    url: "https://www.scanly.mn/",
    thumbnail: "/projects/scanly.jpg",
  },
  {
    title: "Konple - Chat With The World!",
    year: 2025,
    description:
      "Real-time chat with rooms and join/leave notifications.",
    tools: ["Node.js", "Socket.io"],
    url: "https://www.konple.com",
    thumbnail: "/projects/konple.jpg",
  },
  {
    title: "Progress Clock - A New Way to Experience Time",
    year: 2023,
    description: "iOS app and widget for time tracking.",
    tools: ["Swift", "SwiftUI", "Xcode"],
    url: "https://apps.apple.com/us/app/progress-clock/id6446752758",
    thumbnail: "/projects/progress-clock.jpg",
  },
  {
    title: "Cyber Bolt - Arcade Game",
    year: 2020,
    description: "3D arcade game for iOS and Android.",
    tools: ["Unity", "C#"],
    url: "https://apps.apple.com/us/app/cyber-bolt/id1532655861",
    thumbnail: "/projects/cyber-bolt.jpg",
  },
  {
    title: "Anomalor - Secure, Offline Password Generator",
    year: 2021,
    description:
      "Offline password generator for iOS.",
    tools: ["Unity", "C#"],
    url: "https://apps.apple.com/us/app/anomalor/id1534079451",
    thumbnail: "/projects/anomalor.jpg",
  },
];
