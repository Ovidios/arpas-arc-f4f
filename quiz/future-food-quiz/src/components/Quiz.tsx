import React, { useState, useEffect } from "react";
import "../quiz.css";
import confetti from "canvas-confetti";

interface Question {
  question: string;
  options: string[];
  correct: number;
  icons?: string[];
}

const QUESTION_TIME = 15;

function Quiz({ questions }: { questions: Question[] }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);

  const q = questions[current];

  // TIMER
  useEffect(() => {
    if (answered || showResult) return;

    const interval = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setAnswered(true);
          setSelected(null);
          clearInterval(interval);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [answered, showResult]);

  // KONFETTI NUR BEI 100% RICHTIG
  useEffect(() => {
    if (showResult && correctCount === questions.length) {
      confetti({
        particleCount: 200,
        spread: 80,
        origin: { y: 0.6 },
      });
    }
  }, [showResult, correctCount, questions.length]);

  const handleSelect = (index: number) => {
    if (answered) return;

    setSelected(index);
    setAnswered(true);

    if (index === q.correct) {
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

  return (
    <div className="quiz-container">

      {!showResult ? (
        <>

          {/* ✅ FORTSCHRITT */}
          <div className="progress-text">
            Frage {current + 1} von {questions.length}
          </div>

          <div className="progress-wrapper">
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* ✅ TIMER */}
          <p className="timer">⏱ Noch {timeLeft} Sekunden</p>

          {/* ✅ FRAGE */}
          <h2>{q.question}</h2>

          {/* ✅ OPTIONEN */}
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
          <h2>Ergebnis</h2>
          <p><b>{score}</b> Punkte erreicht</p>

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