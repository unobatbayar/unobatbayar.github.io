"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

const storageKey = "theme-preference";

const themeOptions = [
  { value: "dark", label: "dark" },
  { value: "system", label: "sys" },
  { value: "light", label: "light" },
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
      <span className="inline-block h-5 w-16 text-term-faint" aria-hidden="true">
        [--]
      </span>
    );
  }

  const activeTheme = isThemeValue(theme) ? theme : "system";
  const activeLabel =
    themeOptions.find((option) => option.value === activeTheme)?.label ?? "sys";

  const cycleTheme = () => {
    const index = themeOptions.findIndex((option) => option.value === activeTheme);
    const next = themeOptions[(index + 1) % themeOptions.length];
    setTheme(next.value);
  };

  return (
    <button
      type="button"
      onClick={cycleTheme}
      aria-label={`Theme: ${activeLabel}. Click to cycle.`}
      title="Cycle theme"
      className="text-term-muted transition hover:text-term-accent"
    >
      [{activeLabel}]
    </button>
  );
};
