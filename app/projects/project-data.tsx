export interface Project {
  img: string;
  title: string;
  year: number | string; // Can be a single year (2020) or a range ("2019-2021")
  description: string;
  tools: string;
  url: string;
}

// Work projects - apps/software worked on during career/employment
export const workProjects: Project[] = [
  {
    img: "/images/metrica.png",
    title: "Metrica",
    year: "2025",
    description: "Work metrics collection and visualization service for Yamaha Corporation internal use.",
    tools: "TypeScript, Next.js, FastAPI, Python, Docker, PostgreSQL, alembic, SQLAlchemy",
    url: "#",
  },
  {
    img: "/images/montage_m.png",
    title: "Expanded Softsynth Plugin for MONTAGE M",
    year: "2023-2024",
    description: "Expanded Softsynth Plugin (E.S.P.) replicates the MONTAGE M in your favorite Digital Workstation (DAW).",
    tools: "C++, JUCE, Visual Studio, Xcode",
    url: "https://usa.yamaha.com/products/music_production/apps/esp_montagem/index.html",
  },
  {
    img: "/images/recnshare.webp",
    title: "Rec'n'Share",
    year: 2023,
    description: "Rec'n'Share allows you to record audio and video along with songs from your music library and then share your performances with the world",
    tools: "SwiftUI, Swift, Objective-C, Xcode, Kotlin",
    url: "https://apps.apple.com/us/app/recnshare/id1162569825",
  },
  {
    img: "/images/seqtrak.webp",
    title: "SEQTRAK",
    year: "2021-2023",
    description: "The dedicated app for Music Production Studio SEQTRAK, providing a more intuitive and visual way to control the device.",
    tools: "Unity 3D, C#, Android, Windows, macOS, Xcode, Visual Studio Code",
    url: "https://apps.apple.com/us/app/seqtrak/id1544687021",
  },
  {
    img: "/images/simple.webp",
    title: "Simple.mn",
    year: "2019-2021",
    description: "Simple App offers financial convenience for customers, saving time, money, and energy through innovative technology and intelligent solutions.",
    tools: "Java, Android Studio, Spring Boot",
    url: "https://play.google.com/store/apps/details?id=mn.mllc.ashid&gl=MN",
  },
];


export const personalProjects: Project[] = [
  {
    img: "/images/progress_clock.webp",
    title: "Progress Clock - A New Way to Experience Time",
    year: 2023,
    description: "iOS App and Widget for time tracking",
    tools: "Swift, SwiftUI, Xcode",
    url: "https://apps.apple.com/us/app/progress-clock/id6446752758",
  },
  {
    img: "/images/metronome_glow.webp",
    title: "Metronome Glow",
    year: 2021,
    description:
      "Metronome App with glowing visuals and subtle vibrations.",
    tools: "Unity, C#",
    url: "https://apps.apple.com/us/app/metronome-glow/id1556841242",
  },
  {
    img: "/images/anomalor.webp",
    title: "Anomalor - Secure, Offline Password Generator",
    year: 2021,
    description:
      "iOS App for creating and managing secure, offline passwords.",
    tools: "Unity, C#",
    url: "https://apps.apple.com/us/app/anomalor/id1534079451",
  },
  {
    img: "/images/cyberbolt.webp",
    title: "Cyber Bolt - Arcade Game",
    year: 2020,
    description:
      "3D Mobile Game for iOS and Android",
    tools: "Unity, C#",
    url: "https://apps.apple.com/us/app/cyber-bolt/id1532655861",
  },
  {
    img: "/images/facemash.png",
    title: "Facemash ",
    year: 2019,
    description:
      "Recreating Facemash shown in The Social Network (2010)",
    tools: "PHP, MySQL, UIKit",
    url: "https://github.com/unobatbayar/facemash",
  },
  {
    img: "/images/morse_code.png",
    title: "Morse Code Translator ",
    year: 2019,
    description:
      "Convert text (A-Z 0-9) to Morse code, and back to text",
    tools: "Java",
    url: "https://github.com/unobatbayar/morse-code-translator",
  },
  {
    img: "/images/temperature.png",
    title: "Temperature Converter",
    year: 2018,
    description:
      "Convert between Celsius, Fahrenheit, Kelvin and Rankine",
    tools: "Java",
    url: "https://github.com/unobatbayar/temperature-converter",
  },
];