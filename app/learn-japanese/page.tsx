import type { Metadata } from "next";
import { pageSocialMetadata } from "../lib/social-metadata";
import { FlashcardGame } from "./flashcard-game";

export const metadata: Metadata = {
  ...pageSocialMetadata({
    title: "JLPT Flashcard Quest",
    description: "Practice Japanese grammar, kanji, and vocabulary for JLPT N5-N1.",
    path: "/learn-japanese",
  }),
  title: "JLPT Flashcard Quest",
};

export default function LearnJapanesePage() {
  return <FlashcardGame />;
}
