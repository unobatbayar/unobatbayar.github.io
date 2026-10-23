"use client";

import { useMemo, useRef, useState } from "react";
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

type SoundKind = "correct" | "wrong" | "next" | "finish" | "tap";

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}

const initialGameState: GameState = {
  level: "N5",
  category: "grammar",
  cardIndex: 0,
  selectedAnswer: null,
  correct: 0,
  reviewed: 0,
};

const categoryKeys = Object.keys(categories) as StudyCategory[];

const japaneseTextPattern = /[\u3040-\u30ff\u3400-\u9fff]/;
const scrapedTextMarkers = [
  " JLPT N",
  " / Currently viewing",
  " Member Benefits",
  " #mailpoet",
  " {\"prefetch\"",
];

function cleanStudyText(value: string, field: "prompt" | "answer") {
  let cleaned = value.replace(/\s+/g, " ").trim();
  for (const marker of scrapedTextMarkers) {
    const markerIndex = cleaned.indexOf(marker);
    if (markerIndex > -1) {
      cleaned = cleaned.slice(0, markerIndex).trim();
    }
  }

  if (field === "prompt" && /^Which .* means:/.test(cleaned) && !/[?？]$/.test(cleaned)) {
    return `${cleaned}?`;
  }

  return cleaned;
}

function normalizeCard(card: Flashcard): Flashcard {
  return {
    ...card,
    prompt: cleanStudyText(card.prompt, "prompt"),
    answer: cleanStudyText(card.answer, "answer"),
    reading: card.reading?.replace(/\s+/g, " ").trim(),
    example: card.example?.replace(/\s+/g, " ").trim(),
  };
}

function hasJapaneseText(value: string) {
  return japaneseTextPattern.test(value);
}

function getChoiceRank(choice: string, cardIndex: number) {
  const seed = cardIndex + 1;
  return [...choice].reduce((total, char) => total + char.charCodeAt(0) * seed, 0);
}

function buildChoices(cards: Flashcard[], cardIndex: number) {
  const currentCard = cards[cardIndex];
  if (!currentCard) {
    return [];
  }

  const currentAnswerHasJapanese = hasJapaneseText(currentCard.answer);
  const choices = new Set<string>([currentCard.answer]);
  const normalizedPrompt = currentCard.prompt.toLowerCase();
  const candidates = cards
    .map((card) => card.answer)
    .filter((answer) => {
      const normalizedAnswer = answer.toLowerCase();
      return (
        answer &&
        answer.length <= 160 &&
        answer !== currentCard.answer &&
        answer !== currentCard.prompt &&
        hasJapaneseText(answer) === currentAnswerHasJapanese &&
        !normalizedPrompt.includes(normalizedAnswer)
      );
    })
    .sort((a, b) => getChoiceRank(a, cardIndex) - getChoiceRank(b, cardIndex));

  for (const answer of candidates) {
    choices.add(answer);
    if (choices.size >= 4) {
      break;
    }
  }

  return Array.from(choices).sort((a, b) => getChoiceRank(a, cardIndex) - getChoiceRank(b, cardIndex));
}

export function FlashcardGame() {
  const [game, setGame] = useState<GameState>(initialGameState);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioContextRef = useRef<AudioContext | null>(null);

  const cards = useMemo(
    () => studyData[game.level][game.category].map(normalizeCard),
    [game.category, game.level],
  );

  const currentCard = cards[game.cardIndex];
  const isFinished = game.cardIndex >= cards.length;
  const progress = cards.length === 0 ? 0 : Math.round((game.reviewed / cards.length) * 100);
  const choices = useMemo(() => buildChoices(cards, game.cardIndex), [cards, game.cardIndex]);
  const answered = game.selectedAnswer !== null;
  const wasCorrect = answered && game.selectedAnswer === currentCard?.answer;

  function getAudioContext() {
    const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
    audioContextRef.current ??= new AudioContextConstructor();
    return audioContextRef.current;
  }

  function playSound(kind: SoundKind, force = false) {
    if (!force && !soundEnabled) {
      return;
    }

    const context = getAudioContext();
    if (context.state === "suspended") {
      void context.resume();
    }

    const soundMap: Record<SoundKind, Array<[number, number, number]>> = {
      correct: [
        [523.25, 0, 0.08],
        [659.25, 0.07, 0.08],
        [783.99, 0.14, 0.12],
        [1046.5, 0.22, 0.14],
      ],
      wrong: [
        [220, 0, 0.11],
        [164.81, 0.09, 0.15],
      ],
      next: [
        [440, 0, 0.04],
        [880, 0.04, 0.06],
      ],
      finish: [
        [523.25, 0, 0.1],
        [659.25, 0.08, 0.1],
        [783.99, 0.16, 0.1],
        [1046.5, 0.24, 0.18],
        [1318.51, 0.34, 0.22],
      ],
      tap: [[660, 0, 0.05]],
    };

    const master = context.createGain();
    master.gain.setValueAtTime(0.16, context.currentTime);
    master.connect(context.destination);

    for (const [frequency, delay, duration] of soundMap[kind]) {
      const start = context.currentTime + delay;
      const oscillator = context.createOscillator();
      const gain = context.createGain();

      oscillator.type = kind === "wrong" ? "sawtooth" : "triangle";
      oscillator.frequency.setValueAtTime(frequency, start);
      oscillator.frequency.exponentialRampToValueAtTime(frequency * 1.02, start + duration);

      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(kind === "wrong" ? 0.16 : 0.34, start + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

      oscillator.connect(gain);
      gain.connect(master);
      oscillator.start(start);
      oscillator.stop(start + duration + 0.03);
    }
  }

  function resetSession(nextState: Partial<Pick<GameState, "level" | "category">> = {}) {
    playSound("tap");
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

    playSound(answer === currentCard.answer ? "correct" : "wrong");
    setGame((current) => ({
      ...current,
      selectedAnswer: answer,
      correct: current.correct + (answer === currentCard.answer ? 1 : 0),
      reviewed: current.reviewed + 1,
    }));
  }

  function nextQuestion() {
    playSound(game.cardIndex + 1 >= cards.length ? "finish" : "next");
    setGame((current) => ({
      ...current,
      cardIndex: current.cardIndex + 1,
      selectedAnswer: null,
    }));
  }

  return (
    <section className={styles.studyShell}>
      <div className={styles.topBar} aria-label="Study setup">
        <div className={styles.titleBlock}>
          <p className={styles.eyebrow}>JLPT quiz game</p>
          <h1>Flashcard Quest</h1>
          <p className={styles.headerCharm}>
            <span>あ → ア</span>
            <span>daily JLPT practice</span>
            <button
              className={`${styles.soundToggle} ${soundEnabled ? styles.soundOn : ""}`}
              type="button"
              aria-pressed={soundEnabled}
              onClick={() => {
                const nextSoundEnabled = !soundEnabled;
                setSoundEnabled(nextSoundEnabled);
                if (nextSoundEnabled) {
                  playSound("tap", true);
                }
              }}
            >
              sound {soundEnabled ? "on" : "off"}
            </button>
          </p>
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
