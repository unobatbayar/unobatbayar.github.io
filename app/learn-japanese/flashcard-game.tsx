"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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

const hiraganaList = "あ い う え お か き く け こ さ し す せ そ た ち つ て と な に ぬ ね の は ひ ふ へ ほ ま み む め も や ゆ よ ら り る れ ろ わ を ん が ぎ ぐ げ ご ざ じ ず ぜ ぞ だ ぢ づ で ど ば び ぶ べ ぼ ぱ ぴ ぷ ぺ ぽ きゃ きゅ きょ しゃ しゅ しょ ちゃ ちゅ ちょ にゃ にゅ にょ ひゃ ひゅ ひょ みゃ みゅ みょ りゃ りゅ りょ ぎゃ ぎゅ ぎょ じゃ じゅ じょ びゃ びゅ びょ ぴゃ ぴゅ ぴょ".split(" ");
const katakanaList = "ア イ ウ エ オ カ キ ク ケ コ サ シ ス セ ソ タ チ ツ テ ト ナ ニ ヌ ネ ノ ハ ヒ フ ヘ ホ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヲ ン ガ ギ グ ゲ ゴ ザ ジ ズ ゼ ゾ ダ ヂ ヅ デ ド バ ビ ブ ベ ボ パ ピ プ ペ ポ キャ キュ キョ シャ シュ ショ チャ チュ チョ ニャ ニュ ニョ ヒャ ヒュ ヒョ ミャ ミュ ミョ リャ リュ リョ ギャ ギュ ギョ ジャ ジュ ジョ ビャ ビュ ビョ ピャ ピュ ピョ".split(" ");

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

  if (field === "prompt") {
    const reversePrompt = cleaned.match(/^Which\s+N[1-5]\s+.+?\s+means:\s+(.+?)[?？]*$/);
    if (reversePrompt?.[1]) {
      const meaning = reversePrompt[1]
        .replace(/\(spoken Japanese\)/gi, "(spoken)")
        .replace(/\bam, is, are, were, used to\b/gi, "to be")
        .replace(/\?+$/g, "?")
        .trim();

      return `Pick Japanese: ${meaning}`;
    }

    if (/^Which .* means:/.test(cleaned) && !/[?？]$/.test(cleaned)) {
      return `${cleaned}?`;
    }
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

function partOfSpeechFamily(example?: string) {
  const value = example?.trim() ?? "";
  if (!value) {
    return "";
  }
  if (/\bVerb\b/.test(value)) {
    return "verb";
  }
  if (/Pronoun/.test(value)) {
    return "pronoun";
  }
  if (/\bAdverb\b/.test(value)) {
    return "adverb";
  }
  if (/Adjective|adjectival/.test(value)) {
    return "adjective";
  }
  if (/Expression/.test(value)) {
    return "expression";
  }
  if (/\bNoun\b/.test(value)) {
    return "noun";
  }
  return "other";
}

const relatedFamilies: Record<string, string[]> = {
  verb: ["expression"],
  adjective: ["adverb"],
  adverb: ["pronoun", "adjective"],
  pronoun: ["adverb"],
  expression: ["adverb", "verb"],
  noun: [],
  other: [],
};

function answerShape(answer: string) {
  if (hasJapaneseText(answer)) {
    const compactLength = answer.replace(/\s/g, "").length;
    if (compactLength <= 2) {
      return "jp-short";
    }
    if (compactLength <= 5) {
      return "jp-medium";
    }
    return "jp-long";
  }

  const text = answer.toLowerCase();
  if (text.includes("~")) {
    return "pattern";
  }
  if (/(^|[;,]\s*)to\s+\S/.test(text)) {
    return "verb-gloss";
  }

  const senses = text.split(/[;,]/).map((part) => part.trim()).filter(Boolean);
  if (senses.length >= 3) {
    return "multi-gloss";
  }
  if (senses.length === 2) {
    return "double-gloss";
  }

  const words = text.replace(/[()]/g, " ").trim().split(/\s+/).filter(Boolean);
  if (words.length >= 3) {
    return "long-phrase";
  }
  if (words.length === 2) {
    return "two-words";
  }
  return "one-word";
}

function choiceScore(current: Flashcard, candidate: Flashcard) {
  const currentFamily = partOfSpeechFamily(current.example);
  const candidateFamily = partOfSpeechFamily(candidate.example);
  let score = 0;

  if (currentFamily && candidateFamily) {
    if (currentFamily === candidateFamily) {
      score += 120;
    } else if (relatedFamilies[currentFamily]?.includes(candidateFamily)) {
      score += 35;
    } else {
      score -= 80;
    }
  }

  if (answerShape(current.answer) === answerShape(candidate.answer)) {
    score += 45;
  }

  score += Math.max(0, 24 - Math.abs(current.answer.length - candidate.answer.length));
  score += Math.max(
    0,
    16 - Math.abs(current.answer.split(/[;,]/).length - candidate.answer.split(/[;,]/).length) * 8,
  );

  return score;
}

function buildChoices(cards: Flashcard[], cardIndex: number) {
  const currentCard = cards[cardIndex];
  if (!currentCard) {
    return [];
  }

  const normalizedPrompt = currentCard.prompt.toLowerCase();
  const currentAnswerHasJapanese = hasJapaneseText(currentCard.answer);
  const uniqueCandidates = new Map<string, { answer: string; score: number }>();

  for (const card of cards) {
    const answer = card.answer;
    const normalizedAnswer = answer.toLowerCase();
    if (
      !answer ||
      answer.length > 160 ||
      answer === currentCard.answer ||
      answer === currentCard.prompt ||
      hasJapaneseText(answer) !== currentAnswerHasJapanese ||
      normalizedPrompt.includes(normalizedAnswer)
    ) {
      continue;
    }

    const score = choiceScore(currentCard, card);
    const existing = uniqueCandidates.get(answer);
    if (!existing || score > existing.score) {
      uniqueCandidates.set(answer, { answer, score });
    }
  }

  const ranked = Array.from(uniqueCandidates.values()).sort(
    (a, b) => b.score - a.score || getChoiceRank(a.answer, cardIndex) - getChoiceRank(b.answer, cardIndex),
  );
  const distractors = ranked.slice(0, 3).map((item) => item.answer);

  return [currentCard.answer, ...distractors].sort(
    (a, b) => getChoiceRank(a, cardIndex) - getChoiceRank(b, cardIndex),
  );
}

export function FlashcardGame() {
  const [game, setGame] = useState<GameState>(initialGameState);

  useEffect(() => {
    const root = document.documentElement;
    const previousMinWidth = root.style.minWidth;
    const previousOverflowX = root.style.overflowX;
    root.style.minWidth = "0";
    root.style.overflowX = "hidden";

    return () => {
      root.style.minWidth = previousMinWidth;
      root.style.overflowX = previousOverflowX;
    };
  }, []);

  const [soundEnabled, setSoundEnabled] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [revisionOpen, setRevisionOpen] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    if (!settingsOpen) {
      return;
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSettingsOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [settingsOpen]);

  const cards = useMemo(
    () => studyData[game.level][game.category].map(normalizeCard),
    [game.category, game.level],
  );

  const currentCard = cards[game.cardIndex];
  const revisionKanji = useMemo(() => {
    const seen = new Set<string>();
    return levels.flatMap((level) =>
      studyData[level].kanji
        .map(normalizeCard)
        .map((card) => card.prompt)
        .filter((prompt) => {
          if (seen.has(prompt) || !hasJapaneseText(prompt)) {
            return false;
          }
          seen.add(prompt);
          return true;
        }),
    );
  }, []);
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
    master.gain.setValueAtTime(0.72, context.currentTime);
    master.connect(context.destination);

    for (const [frequency, delay, duration] of soundMap[kind]) {
      const start = context.currentTime + delay;
      const oscillator = context.createOscillator();
      const gain = context.createGain();

      oscillator.type = kind === "wrong" ? "sawtooth" : "triangle";
      oscillator.frequency.setValueAtTime(frequency, start);
      oscillator.frequency.exponentialRampToValueAtTime(frequency * 1.02, start + duration);

      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(kind === "wrong" ? 0.46 : 0.8, start + 0.012);
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

  function toggleSound() {
    const nextSoundEnabled = !soundEnabled;
    setSoundEnabled(nextSoundEnabled);
    if (nextSoundEnabled) {
      playSound("tap", true);
    }
  }

  function renderLevelChooser() {
    return (
      <div className={`${styles.chooserGroup} ${styles.levelChooser}`} aria-label="Choose JLPT level">
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
    );
  }

  function renderCategoryChooser() {
    return (
      <div className={`${styles.chooserGroup} ${styles.categoryChooser}`} aria-label="Choose study category">
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
    );
  }

  function renderSoundButton() {
    return (
      <button
        className={`${styles.soundToggle} ${soundEnabled ? styles.soundOn : ""}`}
        type="button"
        aria-pressed={soundEnabled}
        onClick={toggleSound}
      >
        sound {soundEnabled ? "on" : "off"}
      </button>
    );
  }

  return (
    <section className={styles.studyShell}>
      <div className={styles.topBar} aria-label="Study setup">
        <div className={styles.titleBlock}>
          <p className={styles.eyebrow}>JLPT quiz game</p>
          <h1>Flashcard Quest</h1>
          <p className={styles.creditRow}>
            <a className={styles.credit} href="/">
              game by unobatbayar
            </a>
            <a
              className={styles.credit}
              href="https://jlptsensei.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              data from JLPT Sensei
            </a>
          </p>
          <p className={styles.headerCharm}>{renderSoundButton()}</p>
        </div>

        <button
          className={styles.settingsButton}
          type="button"
          aria-expanded={settingsOpen}
          aria-label={`Change deck, currently ${game.level} ${categories[game.category].label}`}
          onClick={() => setSettingsOpen(true)}
        >
          <span>
            {game.level} {categories[game.category].label}
          </span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M19.4 13.5a7.7 7.7 0 0 0 .1-1.5 7.7 7.7 0 0 0-.1-1.5l2-1.6a.6.6 0 0 0 .1-.7l-1.9-3.3a.6.6 0 0 0-.7-.3l-2.4 1a7.4 7.4 0 0 0-2.6-1.5l-.4-2.5a.6.6 0 0 0-.6-.5h-3.8a.6.6 0 0 0-.6.5l-.4 2.5a7.4 7.4 0 0 0-2.6 1.5l-2.4-1a.6.6 0 0 0-.7.3L1.6 8.2a.6.6 0 0 0 .1.7l2 1.6a7.7 7.7 0 0 0-.1 1.5 7.7 7.7 0 0 0 .1 1.5l-2 1.6a.6.6 0 0 0-.1.7l1.9 3.3a.6.6 0 0 0 .7.3l2.4-1a7.4 7.4 0 0 0 2.6 1.5l.4 2.5a.6.6 0 0 0 .6.5h3.8a.6.6 0 0 0 .6-.5l.4-2.5a7.4 7.4 0 0 0 2.6-1.5l2.4 1a.6.6 0 0 0 .7-.3l1.9-3.3a.6.6 0 0 0-.1-.7l-2-1.6ZM12 15.5A3.5 3.5 0 1 1 15.5 12 3.5 3.5 0 0 1 12 15.5Z"
            />
          </svg>
        </button>

        <div className={styles.desktopSetup}>
          {renderLevelChooser()}
          {renderCategoryChooser()}
        </div>
      </div>

      <div className={styles.statsStrip} aria-label="Deck information">
        <strong>{game.level} {categories[game.category].label}</strong>
        <span>{cards.length.toLocaleString()} questions</span>
        <span>{progress}% done</span>
        <button className={styles.revisionButton} type="button" onClick={() => setRevisionOpen(true)}>
          Revision list
        </button>
      </div>

      <div className={styles.studyStage}>
        <div className={styles.statusBar}>
          <span className={styles.mobileDeck}>{game.level} {categories[game.category].label}</span>
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
              <strong className={currentCard.prompt.length > 30 ? styles.compactPrompt : ""}>
                {currentCard.prompt}
              </strong>
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

      {settingsOpen && (
        <div
          className={styles.settingsBackdrop}
          role="presentation"
          onClick={() => setSettingsOpen(false)}
        >
          <div
            className={styles.settingsPanel}
            role="dialog"
            aria-modal="true"
            aria-label="Game settings"
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.revisionHeader}>
              <div>
                <p className={styles.eyebrow}>study setup</p>
                <h2>Settings</h2>
              </div>
              <button className={styles.secondary} type="button" onClick={() => setSettingsOpen(false)}>
                close
              </button>
            </div>

            <div className={styles.settingsMeta}>{renderSoundButton()}</div>

            <section className={styles.settingsSection}>
              <h3>Level</h3>
              {renderLevelChooser()}
            </section>

            <section className={styles.settingsSection}>
              <h3>Category</h3>
              {renderCategoryChooser()}
            </section>

            <button
              className={styles.revisionButton}
              type="button"
              onClick={() => {
                setSettingsOpen(false);
                setRevisionOpen(true);
              }}
            >
              Revision list
            </button>
            <p className={styles.settingsCount}>{cards.length.toLocaleString()} questions in this deck</p>
          </div>
        </div>
      )}

      {revisionOpen && (
        <div className={styles.revisionBackdrop} role="dialog" aria-modal="true" aria-label="Japanese revision list">
          <div className={styles.revisionSheet}>
            <div className={styles.revisionHeader}>
              <div>
                <p className={styles.eyebrow}>revision deck</p>
                <h2>Kana + Kanji list</h2>
              </div>
              <button className={styles.secondary} type="button" onClick={() => setRevisionOpen(false)}>
                close
              </button>
            </div>

            <section className={styles.revisionSection}>
              <h3>Hiragana</h3>
              <div className={styles.symbolGrid}>
                {hiraganaList.map((symbol) => (
                  <span className={styles.symbolTile} key={`hiragana-${symbol}`}>
                    {symbol}
                  </span>
                ))}
              </div>
            </section>

            <section className={styles.revisionSection}>
              <h3>Katakana</h3>
              <div className={styles.symbolGrid}>
                {katakanaList.map((symbol) => (
                  <span className={styles.symbolTile} key={`katakana-${symbol}`}>
                    {symbol}
                  </span>
                ))}
              </div>
            </section>

            <section className={styles.revisionSection}>
              <h3>Kanji</h3>
              <div className={`${styles.symbolGrid} ${styles.kanjiGrid}`}>
                {revisionKanji.map((symbol) => (
                  <span className={styles.symbolTile} key={`kanji-${symbol}`}>
                    {symbol}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      )}
    </section>
  );
}
