import type { Metadata } from "next";
import { landingSocialMetadata } from "../lib/social-metadata";
import { FlashcardQuestContent } from "./content";

export const metadata: Metadata = landingSocialMetadata({
  title: "JLPT Flashcard Quest",
  description:
    "Kanji & Vocab Quiz, N5 to N1. Exam style questions, timed mock tests, and spaced repetition. No ads and no account.",
  path: "/flashcardquest",
  image: {
    url: "/flashcardquest/01-home.png",
    width: 786,
    height: 1704,
    alt: "JLPT Flashcard Quest home screen",
  },
});

export default function FlashcardQuestPage() {
  return <FlashcardQuestContent />;
}
