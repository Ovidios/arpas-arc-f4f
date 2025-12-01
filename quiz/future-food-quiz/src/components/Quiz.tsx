import React, { useState, useEffect } from "react";
import "../quiz.css";
import confetti from "canvas-confetti";

interface Question {
  question: string;
  options: string[];
  correct: number;
  icons?: string[]; // Optional
}

const QUESTION_TIME = 15; // Sekunden pro Frage

function Quiz({ questions }: { questions: Question[] }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);

  const q = questions[current];

  // Timer pro Frage
  useEffect(() => {
    if (!answered) {
      const interval = setInterval(() => {
        setTimeLeft((t) => (t > 0 ? t - 1 : 0));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [answered]);

  // Konfetti bei allen richtigen Antworten
  useEffect(() => {
    if (showResult && correctCount === questions.length) {
      confetti({
        particleCount: 200,
        spread: 80,
        origin: { y: 0.6 },
      });
    }
  }, [showResult, correctCount]);

  const handleSelect = (index: number) => {
    if (answered) return;
    setSelected(index);
    setAnswered(true);

    if (index === q.correct) {
      // Punkte + 1 für richtig
      setScore((prev) => prev + 1);
      setCorrectCount((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setAnswered(false);
    setTimeLeft(QUESTION_TIME);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setCorrectCount(0);
    setSelected(null);
    setAnswered(false);
    setShowResult(false);
    setTimeLeft(QUESTION_TIME);
  };

  const progress = ((current + 1) / questions.length) * 100;

  if (!questions || questions.length === 0) {
    return <p>Keine Quizfragen verfügbar.</p>;
  }

  return (
    <div className="quiz-container">
      {!showResult ? (
        <>
          <h2>{q.question}</h2>

          {/* Fortschrittsanzeige */}
          <div className="progress-text">
            Frage {current + 1} von {questions.length}
          </div>
          <div className="progress-wrapper">
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Timer */}
          <p className="timer">⏱️ {timeLeft} Sekunden</p>

          {/* Optionen mit Icons */}
          <div>
            {q.options.map((opt, i) => {
              let className = "option-btn";
              if (answered) {
                if (i === q.correct) className += " correct";
                else if (selected === i) className += " wrong";
              }
              return (
                <button
                  key={i}
                  className={className}
                  onClick={() => handleSelect(i)}
                  disabled={answered}
                >
                  {q.icons ? q.icons[i] + " " : ""}
                  {opt}
                </button>
              );
            })}
          </div>

          {answered && (
            <button onClick={handleNext} style={{ marginTop: "10px" }}>
              Weiter
            </button>
          )}
        </>
      ) : (
        <>
          {/* Ergebnis */}
          <h2>Ergebnis</h2>
          <p>
            Du hast insgesamt <b>{score}</b> Punkte erreicht!
          </p>

          {correctCount === questions.length ? (
            <p id="badge">🏅 Future-Food-Quiz-Experte!</p>
          ) : (
            <p id="badge" style={{ color: "#f39c12" }}>
              Fast geschafft! Versuch es nochmal!
            </p>
          )}

          <button onClick={handleRestart}>Nochmal spielen</button>
        </>
      )}
    </div>
  );
}

export default Quiz;