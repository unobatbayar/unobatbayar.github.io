export interface Project {
  img: string;
  title: string;
  year: number;
  description: string;
  tools: string;
  url: string;
}

export const projects: Project[] = [
  // {
  //   title: "Konple - Chatroom (Coming soon)",
  //   year: 2025,
  //   description: "Realtime Chat App",
  //   tools: "Swift, SwiftUI, Firebase",
  //   url: "https://unobatbayar.github.io/konple",
  // },
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
      "Metronome with glowing visuals and subtle vibrations.",
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
    title: "Cyberbolt - Endless Runner",
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
