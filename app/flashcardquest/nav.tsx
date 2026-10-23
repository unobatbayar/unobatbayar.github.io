"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../components/language";
import styles from "./flashcardquest.module.css";

function stripSlash(path: string) {
  return path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
}

export function FlashcardQuestNav() {
  const { t } = useLanguage();
  const pathname = stripSlash(usePathname() ?? "");
  const base = "/flashcardquest";
  const items = [
    { href: base, label: t.landing.overview },
    { href: `${base}/privacy`, label: t.landing.privacy },
    { href: `${base}/terms`, label: t.landing.terms },
    { href: `${base}/support`, label: t.landing.support },
  ];

  return (
    <nav className={styles.nav} aria-label="JLPT Flashcard Quest">
      {items.map((item) => {
        const href = stripSlash(item.href);
        const active =
          href === base
            ? pathname === base
            : pathname === href || pathname.startsWith(`${href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
