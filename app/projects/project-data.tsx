export interface Project {
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
  //   description: "iOS App Realtime Chat App",
  //   tools: "Swift, SwiftUI, Firebase",
  //   url: "https://unobatbayar.github.io/Konple",
  // },
  {
    title: "Progress Clock - A New Way to Experience Time",
    year: 2023,
    description: "iOS App and Widget for time tracking",
    tools: "Swift, SwiftUI, Xcode",
    url: "https://apps.apple.com/us/app/progress-clock/id6446752758",
  },
  {
    title: "Anomalor - Secure, Offline Password Generator",
    year: 2021,
    description:
      "iOS App for creating and managing secure, offline passwords.",
    tools: "Unity, C#",
    url: "https://apps.apple.com/us/app/anomalor/id1534079451",
  },
  {
    title: "Cyberbolt - Endless Runner",
    year: 2020,
    description:
      "3D Mobile Game for iOS and Android",
    tools: "Unity, C#",
    url: "https://apps.apple.com/us/app/cyber-bolt/id1532655861",
  },
  {
    title: "Temperature Converter",
    year: 2018,
    description:
      "Java App that Convert between Celsius, Fahrenheit, Kelvin and Rankine",
    tools: "Java",
    url: "https://github.com/unobatbayar/temperature-converter",
  },
];
