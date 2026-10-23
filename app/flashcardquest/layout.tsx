import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { FlashcardQuestNav } from "./nav";
import styles from "./flashcardquest.module.css";

export const metadata: Metadata = {
  title: "JLPT Flashcard Quest",
  description:
    "Kanji and vocab quiz for JLPT N5 to N1. Exam style questions, timed mock tests, and spaced repetition. No ads and no account.",
};

export default function FlashcardQuestLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <Link href="/flashcardquest" className={styles.brand}>
          <img
            src="/flashcardquest/icon.svg"
            alt=""
            width={40}
            height={40}
          />
          JLPT Flashcard Quest
        </Link>
        <FlashcardQuestNav />
      </header>
      {children}
    </div>
  );
}
