"use client";

import { useMemo, useState } from "react";
import {
  categories,
  levels,
  studyData,
  type Flashcard,
  type JlptLevel,
  type StudyCategory,
} from "./data";
import styles from "./learn-japanese.module.css";

type GameState = {
  level: JlptLevel;
  category: StudyCategory;
  cardIndex: number;
  selectedAnswer: string | null;
  correct: number;
  reviewed: number;
};

const initialGameState: GameState = {
  level: "N5",
  category: "grammar",
  cardIndex: 0,
  selectedAnswer: null,
  correct: 0,
  reviewed: 0,
};

const categoryKeys = Object.keys(categories) as StudyCategory[];

function buildChoices(cards: Flashcard[], cardIndex: number) {
  const currentCard = cards[cardIndex];
  if (!currentCard) {
    return [];
  }

  const choices = new Set<string>([currentCard.answer]);
  let offset = 1;

  while (choices.size < 4 && offset < cards.length) {
    choices.add(cards[(cardIndex + offset) % cards.length].answer);
    offset += 1;
  }

  return Array.from(choices).sort((a, b) => {
    const seed = cardIndex + 1;
    const scoreA = [...a].reduce((total, char) => total + char.charCodeAt(0) * seed, 0);
    const scoreB = [...b].reduce((total, char) => total + char.charCodeAt(0) * seed, 0);
    return scoreA - scoreB;
  });
}

export function FlashcardGame() {
  const [game, setGame] = useState<GameState>(initialGameState);

  const cards = useMemo(
    () => studyData[game.level][game.category],
    [game.category, game.level],
  );

  const currentCard = cards[game.cardIndex];
  const isFinished = game.cardIndex >= cards.length;
  const progress = cards.length === 0 ? 0 : Math.round((game.reviewed / cards.length) * 100);
  const choices = useMemo(() => buildChoices(cards, game.cardIndex), [cards, game.cardIndex]);
  const answered = game.selectedAnswer !== null;
  const wasCorrect = answered && game.selectedAnswer === currentCard?.answer;

  function resetSession(nextState: Partial<Pick<GameState, "level" | "category">> = {}) {
    setGame((current) => ({
      ...initialGameState,
      level: nextState.level ?? current.level,
      category: nextState.category ?? current.category,
    }));
  }

  function chooseAnswer(answer: string) {
    if (answered || !currentCard) {
      return;
    }

    setGame((current) => ({
      ...current,
      selectedAnswer: answer,
      correct: current.correct + (answer === currentCard.answer ? 1 : 0),
      reviewed: current.reviewed + 1,
    }));
  }

  function nextQuestion() {
    setGame((current) => ({
      ...current,
      cardIndex: current.cardIndex + 1,
      selectedAnswer: null,
    }));
  }

  return (
    <section className={styles.studyShell}>
      <div className={styles.topBar} aria-label="Study setup">
        <div>
          <p className={styles.eyebrow}>JLPT quiz game</p>
          <h1>Flashcard Quest</h1>
        </div>

        <div className={styles.chooserGroup} aria-label="Choose JLPT level">
          {levels.map((level) => (
            <button
              className={`${styles.pill} ${game.level === level ? styles.active : ""}`}
              key={level}
              onClick={() => resetSession({ level })}
              type="button"
            >
              {level}
            </button>
          ))}
        </div>

        <div className={styles.chooserGroup} aria-label="Choose study category">
          {categoryKeys.map((category) => (
            <button
              className={`${styles.pill} ${game.category === category ? styles.active : ""}`}
              key={category}
              onClick={() => resetSession({ category })}
              type="button"
            >
              {categories[category].label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.statsStrip} aria-label="Deck information">
        <strong>{game.level} {categories[game.category].label}</strong>
        <span>{cards.length.toLocaleString()} questions</span>
        <span>{progress}% done</span>
      </div>

      <div className={styles.studyStage}>
        <div className={styles.statusBar}>
          <span>Question {Math.min(game.cardIndex + 1, cards.length)} / {cards.length}</span>
          <span>Score {game.correct} / {game.reviewed}</span>
        </div>

        <div className={styles.progressTrack} aria-label={`Progress ${progress}%`}>
          <div className={styles.progressFill} style={{ width: `${progress}%` }} />
        </div>

        {currentCard && !isFinished ? (
          <div className={styles.quizCard}>
            <div className={styles.questionPanel}>
              <span className={styles.cardLabel}>Question</span>
              <strong>{currentCard.prompt}</strong>
              <em>{currentCard.hint}</em>
              {answered && currentCard.reading && <small>Reading: {currentCard.reading}</small>}
            </div>

            <div className={styles.choiceGrid} aria-label="Answer choices">
              {choices.map((choice) => {
                const isCorrectChoice = choice === currentCard.answer;
                const isSelected = choice === game.selectedAnswer;
                const className = [
                  styles.choiceButton,
                  answered && isCorrectChoice ? styles.correct : "",
                  answered && isSelected && !isCorrectChoice ? styles.wrong : "",
                ]
                  .filter(Boolean)
                  .join(" ");

                return (
                  <button
                    className={className}
                    disabled={answered}
                    key={choice}
                    onClick={() => chooseAnswer(choice)}
                    type="button"
                  >
                    {choice}
                  </button>
                );
              })}
            </div>

            {answered && (
              <div className={`${styles.feedback} ${wasCorrect ? styles.good : styles.bad}`}>
                <strong>{wasCorrect ? "Correct!" : "Not quite"}</strong>
                <span>The answer is {currentCard.answer}</span>
                {currentCard.example && <small>{currentCard.example}</small>}
              </div>
            )}
          </div>
        ) : (
          <div className={styles.finishedCard}>
            <p className={styles.eyebrow}>Quiz complete</p>
            <h2>{game.correct} correct out of {cards.length}</h2>
            <p>Restart this deck or pick another level and category to keep practicing.</p>
          </div>
        )}

        <div className={styles.actions} aria-label="Quiz actions">
          <button className={styles.secondary} onClick={() => resetSession()} type="button">
            Restart
          </button>
          {!isFinished && (
            <button className={styles.know} disabled={!answered} onClick={nextQuestion} type="button">
              {game.cardIndex + 1 >= cards.length ? "Finish" : "Next"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
