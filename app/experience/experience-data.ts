export interface SkillGroup {
  label: string;
  items: string[];
}

export interface WorkItem {
  id: string;
  name: string;
  position: string;
  url?: string;
  startDate: string;
  endDate: string | null;
  isWorkingHere: boolean;
  years?: string;
  bullets: {
    text: string;
    links?: { label: string; href: string }[];
  }[];
}

export interface EducationItem {
  id: string;
  institution: string;
  url?: string;
  studyType: string;
  area: string;
  startDate: string;
  endDate: string;
}

export interface VolunteerItem {
  id: string;
  organization: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string;
}

export const experienceBasics = {
  name: "Usukhbayar Batbayar",
  label: "Software Engineer",
  location: "Ulaanbaatar, Mongolia",
  totalExp: "7 years",
  summary:
    "Software engineer spanning mobile, frontend, and backend. Picks up new stacks quickly and ships across product teams.",
  objective:
    "To use my technical skills to build efficient, scalable solutions while sharing knowledge and helping others grow in a collaborative team environment.",
  profiles: [
    {
      network: "LeetCode",
      url: "https://leetcode.com/u/xi76ibaw2m/",
    },
  ] as {
    network: string;
    url?: string;
    username?: string;
  }[],
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["C#", "Java", "C++", "Python", "TypeScript", "SQL", "Swift"],
  },
  {
    label: "Frameworks",
    items: ["Next.js", "FastAPI", "SwiftUI"],
  },
  {
    label: "Technologies",
    items: ["Algorithms", "Data Structures", "Mobile", "Web", "Backend", "ORM"],
  },
  {
    label: "Databases",
    items: ["Firebase", "PostgreSQL"],
  },
  {
    label: "Practices",
    items: [
      "Component-based architecture",
      "Agile methodology",
      "Design patterns",
      "Test-driven development",
      "MVC",
    ],
  },
  {
    label: "Tools",
    items: ["Cursor", "Xcode", "Unity 3D", "Docker", "Android Studio"],
  },
];

export const workExperience: WorkItem[] = [
  {
    id: "0",
    name: "ODIN Tech Lab",
    position: "Software Engineer",
    startDate: "2026-05-17T16:00:00.000Z",
    endDate: null,
    isWorkingHere: true,
    bullets: [
      {
        text: "Building frontend products across data visualization and LLM integrations.",
      },
    ],
  },
  {
    id: "1",
    name: "Yamaha Corporation",
    position: "Software Engineer",
    url: "https://www.yamaha.com/en/",
    startDate: "2021-02-01T15:00:00.000Z",
    endDate: "2026-01-31T05:00:00.000Z",
    isWorkingHere: false,
    years: "5 years",
    bullets: [
      {
        text: "Contributed to the development of the SEQTRAK application in Unity (supporting iOS/macOS/Android/Windows), integrating with musical hardware. Responsibilities included implementing the GUI, effect graphs, plugin development, and server/API connections over a two-year period.",
        links: [
          {
            label: "SEQTRAK",
            href: "https://apps.apple.com/us/app/seqtrak/id1544687021",
          },
        ],
      },
      {
        text: "Maintained and improved the Rec'n'Share iOS/Android app, boosting performance by 47% through a redesigned song loading algorithm and resolving critical crashes. Enhanced user experience and ratings via feedback-driven fixes and new features. Integrated a sound division library to extend app functionality.",
        links: [
          {
            label: "Rec'n'Share",
            href: "https://apps.apple.com/us/app/recnshare/id1162569825",
          },
        ],
      },
      {
        text: "Implemented the GUI components for the Expanded SoftSynth VST plugin in C++ for the MONTAGE M synthesizer (v1.0, v2.0).",
        links: [
          {
            label: "Expanded SoftSynth",
            href: "https://usa.yamaha.com/products/music_production/apps/esp_montagem/index.html",
          },
        ],
      },
      {
        text: "Built and maintained Next.js full-stack applications for Yamaha’s product portfolio management and internal employee metrics tracking.",
      },
    ],
  },
  {
    id: "2",
    name: "MCS Group",
    position: "Software Engineer",
    url: "https://mcs.mn/en/",
    startDate: "2019-10-30T15:00:00.000Z",
    endDate: "2021-01-30T15:00:00.000Z",
    isWorkingHere: false,
    years: "2 years",
    bullets: [
      {
        text: "Contributed to Android development and successful launch of fintech application Simple.",
        links: [{ label: "Simple", href: "https://simple.mn/" }],
      },
      {
        text: "Refactored and debugged code for readability and efficiency.",
      },
      {
        text: "Developed backend APIs using Spring Boot.",
      },
    ],
  },
  {
    id: "3",
    name: "Yamaha Corporation",
    position: "Software Engineer Intern",
    url: "https://www.yamaha.com/en/",
    startDate: "2018-06-10T15:00:00.000Z",
    endDate: "2018-08-30T15:00:00.000Z",
    isWorkingHere: false,
    years: "3 months",
    bullets: [
      {
        text: "Added a Transpose function for Soundmondo app using C# and Xamarin.",
        links: [
          {
            label: "Soundmondo",
            href: "https://soundmondo.yamahasynth.com/",
          },
        ],
      },
      {
        text: "Developed automated testing tool leveraging iOS, SwitchBot, and IFTTT for MONTAGE M.",
        links: [
          {
            label: "MONTAGE M",
            href: "https://usa.yamaha.com/products/music_production/synthesizers/montagem/index.html",
          },
        ],
      },
    ],
  },
];

export const education: EducationItem[] = [
  {
    id: "1",
    institution: "Queen Mary University of London",
    url: "https://www.qmul.ac.uk/",
    studyType: "BSc with Hons",
    area: "Computer Science with Business Management",
    startDate: "2016-09-01T00:00:00.000Z",
    endDate: "2020-05-01T00:00:00.000Z",
  },
];

export const volunteer: VolunteerItem[] = [
  {
    id: "1",
    organization: "Tokyo Pride 2025",
    position: "Volunteer",
    startDate: "2025-06-06T15:00:00.000Z",
    endDate: "2025-06-07T15:00:00.000Z",
    summary:
      "Volunteered at Tokyo Pride 2025, assisting at the Yamaha Corporation booth.",
  },
];

export function formatExperienceDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function formatDateRange(
  startDate: string,
  endDate: string | null,
  isCurrent: boolean
): string {
  const start = formatExperienceDate(startDate);
  if (isCurrent || !endDate) {
    return `${start} – Present`;
  }
  return `${start} – ${formatExperienceDate(endDate)}`;
}
