import {
  siAndroid,
  siAndroidstudio,
  siApple,
  siCplusplus,
  siFlutter,
  siJuce,
  siKotlin,
  siMacos,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siSocketdotio,
  siSpringboot,
  siSwift,
  siTailwindcss,
  siTypescript,
  siUnity,
  siXcode,
  type SimpleIcon,
} from "simple-icons";

type TechIconData = {
  title: string;
  hex: string;
  path: string;
  invertInDark?: boolean;
};

function fromSimple(icon: SimpleIcon, overrides?: Partial<TechIconData>): TechIconData {
  const hex = icon.hex.toLowerCase();
  return {
    title: icon.title,
    hex: icon.hex,
    path: icon.path,
    invertInDark: hex === "000000" || hex === "010101" || hex === "ffffff",
    ...overrides,
  };
}

const extras = {
  csharp: {
    title: "C#",
    hex: "512BD4",
    path: "M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z",
  },
  visualstudio: {
    title: "Visual Studio",
    hex: "5C2D91",
    path: "M17.583.063a1.5 1.5 0 00-1.032.392 1.5 1.5 0 00-.001 0A.88.88 0 0016.5.5L8.528 9.316 3.875 5.5l-.407-.35a1 1 0 00-1.024-.154 1 1 0 00-.012.005l-1.817.75a1 1 0 00-.077.036 1 1 0 00-.047.028 1 1 0 00-.038.022 1 1 0 00-.048.034 1 1 0 00-.03.024 1 1 0 00-.044.036 1 1 0 00-.036.033 1 1 0 00-.032.035 1 1 0 00-.033.038 1 1 0 00-.035.044 1 1 0 00-.024.034 1 1 0 00-.032.05 1 1 0 00-.02.035 1 1 0 00-.024.05 1 1 0 00-.02.045 1 1 0 00-.016.044 1 1 0 00-.016.047 1 1 0 00-.015.055 1 1 0 00-.01.04 1 1 0 00-.008.054 1 1 0 00-.006.05A1 1 0 000 6.668v10.666a1 1 0 00.615.917l1.817.764a1 1 0 001.035-.164l.408-.35 4.653-3.815 7.973 8.815a1.5 1.5 0 00.072.065 1.5 1.5 0 00.057.05 1.5 1.5 0 00.058.042 1.5 1.5 0 00.063.044 1.5 1.5 0 00.065.038 1.5 1.5 0 00.065.036 1.5 1.5 0 00.068.031 1.5 1.5 0 00.07.03 1.5 1.5 0 00.073.025 1.5 1.5 0 00.066.02 1.5 1.5 0 00.08.02 1.5 1.5 0 00.068.014 1.5 1.5 0 00.075.01 1.5 1.5 0 00.075.008 1.5 1.5 0 00.073.003 1.5 1.5 0 00.077 0 1.5 1.5 0 00.078-.005 1.5 1.5 0 00.067-.007 1.5 1.5 0 00.087-.015 1.5 1.5 0 00.06-.012 1.5 1.5 0 00.08-.022 1.5 1.5 0 00.068-.02 1.5 1.5 0 00.07-.028 1.5 1.5 0 00.09-.037l4.944-2.377a1.5 1.5 0 00.476-.362 1.5 1.5 0 00.09-.112 1.5 1.5 0 00.004-.007 1.5 1.5 0 00.08-.125 1.5 1.5 0 00.062-.12 1.5 1.5 0 00.009-.017 1.5 1.5 0 00.04-.108 1.5 1.5 0 00.015-.037 1.5 1.5 0 00.03-.107 1.5 1.5 0 00.009-.037 1.5 1.5 0 00.017-.1 1.5 1.5 0 00.008-.05 1.5 1.5 0 00.006-.09 1.5 1.5 0 00.004-.08V3.942a1.5 1.5 0 000-.003 1.5 1.5 0 000-.032 1.5 1.5 0 00-.01-.15 1.5 1.5 0 00-.84-1.17L18.206.21a1.5 1.5 0 00-.622-.146zM18 6.92v10.163l-6.198-5.08zM3 8.574l3.099 3.427-3.1 3.426z",
  },
  visualstudiocode: {
    title: "VS Code",
    hex: "007ACC",
    path: "M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z",
  },
  windows: {
    title: "Windows",
    hex: "0078D4",
    path: "M0,0H11.377V11.372H0ZM12.623,0H24V11.372H12.623ZM0,12.623H11.377V24H0Zm12.623,0H24V24H12.623",
  },
  objectivec: {
    title: "Objective-C",
    hex: "438EFF",
    path: "M12 1.5C6.201 1.5 1.5 6.201 1.5 12S6.201 22.5 12 22.5 22.5 17.799 22.5 12 17.799 1.5 12 1.5zm0 1.8A8.7 8.7 0 0 1 20.7 12 8.7 8.7 0 0 1 12 20.7 8.7 8.7 0 0 1 3.3 12 8.7 8.7 0 0 1 12 3.3zm-1.05 3.9v1.65h.3c1.8 0 2.85.9 2.85 2.4 0 1.35-.9 2.25-2.55 2.25h-1.95V16.5h1.35v-2.25h.9c2.55 0 4.2-1.5 4.2-3.9 0-2.4-1.65-3.15-4.05-3.15h-1.05z",
  },
} as const satisfies Record<string, TechIconData>;

export const techIconMap = {
  "C++": fromSimple(siCplusplus),
  JUCE: fromSimple(siJuce),
  "Visual Studio": extras.visualstudio,
  Xcode: fromSimple(siXcode),
  SwiftUI: fromSimple(siSwift, { title: "SwiftUI" }),
  Swift: fromSimple(siSwift),
  "Objective-C": extras.objectivec,
  Kotlin: fromSimple(siKotlin),
  "Unity 3D": fromSimple(siUnity, { title: "Unity", invertInDark: true }),
  Unity: fromSimple(siUnity, { invertInDark: true }),
  "C#": extras.csharp,
  Android: fromSimple(siAndroid),
  Windows: extras.windows,
  macOS: fromSimple(siMacos, { invertInDark: true }),
  "Visual Studio Code": extras.visualstudiocode,
  Java: fromSimple(siOpenjdk, { title: "Java", hex: "ED8B00" }),
  "Android Studio": fromSimple(siAndroidstudio),
  "Spring Boot": fromSimple(siSpringboot),
  "Next.js": fromSimple(siNextdotjs, { invertInDark: true }),
  TypeScript: fromSimple(siTypescript),
  "Tailwind CSS": fromSimple(siTailwindcss),
  "Node.js": fromSimple(siNodedotjs),
  "Socket.io": fromSimple(siSocketdotio, { invertInDark: true }),
  iOS: fromSimple(siApple, { title: "iOS", invertInDark: true }),
  Flutter: fromSimple(siFlutter),
} as const;

export type TechName = keyof typeof techIconMap;

export function TechIcons({ tools }: { tools: readonly TechName[] }) {
  const unique = [...new Set(tools)];

  return (
    <ul className="mt-3 flex list-none flex-wrap items-center gap-1.5 p-0">
      {unique.map((name) => {
        const icon = techIconMap[name] as TechIconData;
        const color = `#${icon.hex}`;
        const label = name;

        return (
          <li key={name}>
            <span
              title={icon.title}
              className="inline-flex items-center gap-1.5 border border-term-border px-1.5 py-0.5 text-xs text-term-muted"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className={`h-3.5 w-3.5 shrink-0 ${
                  icon.invertInDark
                    ? "fill-neutral-900 dark:fill-neutral-100"
                    : ""
                }`}
                style={icon.invertInDark ? undefined : { fill: color }}
              >
                <path d={icon.path} />
              </svg>
              <span>{label}</span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}
