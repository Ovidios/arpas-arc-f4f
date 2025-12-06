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

interface QuizProps {
  questions: Question[];
  onClose?: () => void; // optional für Quiz schließen
}

const Quiz: React.FC<QuizProps> = ({ questions, onClose }) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);

  const q = questions[current];
  const progress = ((current + 1) / questions.length) * 100;

  // Timer
  useEffect(() => {
    if (answered || showResult) return;
    const interval = setInterval(() => setTimeLeft(t => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(interval);
  }, [answered, showResult]);

  // Zeit abgelaufen → keine Punkte
  useEffect(() => {
    if (timeLeft === 0 && !answered) {
      setAnswered(true);
      setSelected(null);
    }
  }, [timeLeft, answered]);

  // Konfetti bei allen richtigen Antworten
  useEffect(() => {
    if (showResult && correctCount === questions.length) {
      const confettiContainer = document.createElement("div");
      confettiContainer.style.position = "fixed";
      confettiContainer.style.inset = "0";
      confettiContainer.style.zIndex = "99999";
      confettiContainer.style.pointerEvents = "none";
      document.body.appendChild(confettiContainer);

      confetti({
        particleCount: 200,
        spread: 80,
        origin: { y: 0.6 },
        disableForReducedMotion: true,
        resize: true,
        element: confettiContainer,
      });

      setTimeout(() => {
        document.body.removeChild(confettiContainer);
      }, 5000);
    }
  }, [showResult, correctCount, questions.length]);

  const handleSelect = (index: number) => {
    if (answered) return;
    setSelected(index);
    setAnswered(true);

    if (index === q.correct) {
      setScore(prev => prev + 1);
      setCorrectCount(prev => prev + 1);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setAnswered(false);
    setTimeLeft(QUESTION_TIME);

    if (current + 1 < questions.length) setCurrent(prev => prev + 1);
    else setShowResult(true);
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setShowResult(false);
    setScore(0);
    setCorrectCount(0);
    setTimeLeft(QUESTION_TIME);
  };

  return (
   // ... import statements etc. bleiben gleich

<div className="quiz-container centered-quiz">
  {!showResult ? (
    <>
      {/* Fortschritt, Frage, Optionen */}
      <div className="progress-text">Frage {current + 1} von {questions.length}</div>
      <div className="progress-wrapper">
  <div
    className="progress-bar"
    style={{ width: `${progress}%` }} // immer berechnet
  />
</div>

      <p className="timer centered">⏱️ {timeLeft} Sekunden</p>
      <h2 className="centered">{q.question}</h2>

      <div className="options-container">
        {q.options.map((opt, idx) => {
          let className = "option-btn";
          if (answered) {
            if (idx === q.correct) className += " correct";
            else if (selected === idx) className += " wrong";
          }
          return (
            <button
              key={idx}
              className={className}
              onClick={() => handleSelect(idx)}
              disabled={answered}
            >
              {q.icons ? q.icons[idx] + " " : ""}
              {opt}
            </button>
          );
        })}
      </div>

      {answered && (
        <button onClick={handleNext} className="next-btn">
          Weiter
        </button>
      )}
    </>
  ) : (
    <>
      <h2 className="centered">Ergebnis</h2>
      <p className="centered">Du hast <b>{score}</b> Punkte erreicht!</p>
      {correctCount === questions.length ? (
        <p id="badge" className="centered">🏅 Future-Food-Quiz-Experte!</p>
      ) : (
        <p id="badge" className="centered" style={{ color: "#f39c12" }}>
          Fast geschafft! Versuch es nochmal!
        </p>
      )}

      {/* Nur zentrierter "Nochmal spielen" Button */}
      <div className="result-buttons">
        <button className="restart-btn" onClick={handleRestart}>
          Nochmal spielen
        </button>
      </div>
    </>
  )}
</div>
  );
};

export default Quiz;