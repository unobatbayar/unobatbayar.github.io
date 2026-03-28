"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import { FaDesktop, FaMobileScreenButton, FaMoon, FaSun } from "react-icons/fa6";

const storageKey = "theme-preference";
const themeOptions = [
  { value: "dark", label: "Dark", icon: FaMoon },
  { value: "system", label: "System" },
  { value: "light", label: "Light", icon: FaSun },
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
      className="glass-pill inline-flex items-center gap-1 rounded-full p-1"
      role="group"
      aria-label="Theme switcher"
    >
      {themeOptions.map((option) => {
        const { value, label } = option;
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
            {value === "system" ? (
              <>
                <FaMobileScreenButton className="h-3.5 w-3.5 sm:hidden" aria-hidden="true" />
                <FaDesktop className="hidden h-4 w-4 sm:block" aria-hidden="true" />
              </>
            ) : (
              <option.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
            )}
          </button>
        );
      })}
    </div>
  );
};