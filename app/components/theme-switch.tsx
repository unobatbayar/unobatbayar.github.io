"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

const storageKey = "theme-preference";

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5 sm:h-4 sm:w-4"
      aria-hidden="true"
    >
      <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5Z" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5 sm:h-4 sm:w-4"
      aria-hidden="true"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5 sm:h-4 sm:w-4"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

const themeOptions = [
  { value: "dark", label: "Dark", icon: MoonIcon },
  { value: "system", label: "System", icon: MonitorIcon },
  { value: "light", label: "Light", icon: SunIcon },
] as const;
type ThemeValue = (typeof themeOptions)[number]["value"];

function isThemeValue(value: string | null | undefined): value is ThemeValue {
  return value === "dark" || value === "system" || value === "light";
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey={storageKey}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

export const ThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);

    const storedTheme = window.localStorage.getItem(storageKey);

    if (!isThemeValue(storedTheme)) {
      window.localStorage.setItem(storageKey, "system");
      setTheme("system");
      return;
    }

    if (theme && !isThemeValue(theme)) {
      window.localStorage.setItem(storageKey, "system");
      setTheme("system");
    }
  }, [setTheme, theme]);

  if (!mounted) {
    return (
      <div className="h-8 w-[104px] rounded-full border border-neutral-200/80 bg-white/70 dark:border-neutral-800 dark:bg-neutral-900/70" />
    );
  }

  const activeTheme = isThemeValue(theme) ? theme : "system";

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-900"
      role="group"
      aria-label="Theme switcher"
    >
      {themeOptions.map((option) => {
        const { value, label, icon: Icon } = option;
        const isActive = activeTheme === value;

        return (
          <button
            key={value}
            type="button"
            aria-pressed={isActive}
            aria-label={`Use ${label.toLowerCase()} theme`}
            title={label}
            onClick={() => setTheme(value)}
            className={`inline-flex h-6 w-6 items-center justify-center rounded-full transition-colors sm:h-7 sm:w-7 ${
              isActive
                ? "bg-neutral-950 text-white dark:bg-white dark:text-black"
                : "text-neutral-600 hover:bg-white/80 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white"
            }`}
          >
            <Icon />
          </button>
        );
      })}
    </div>
  );
};