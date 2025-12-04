import React, { useEffect, useState } from "react";
import Quiz from "../../components/Quiz";
import "../../quiz.css";

interface Props {
  questions: any[];
  isVisible?: boolean;
  onClose?: () => void;
}

const QuizOverlay: React.FC<Props> = ({ questions, isVisible = true, onClose }) => {
  const [started, setStarted] = useState(false);

  // Reset, wenn Overlay wieder sichtbar wird
  useEffect(() => {
    if (isVisible) setStarted(false);
  }, [isVisible, questions]);

  if (!isVisible || !questions?.length) return null;

  return (
    <>
      {/* Quiz Overlay */}
      {started && (
        <div className="quiz-overlay">
          <Quiz questions={questions} />

          {/* Immer sichtbarer Quiz schließen Button oben links */}
          {onClose && (
            <button className="close-btn" onClick={() => setStarted(false)}>
              Quiz schließen
            </button>
          )}
        </div>
      )}

      {/* Floating Button, wenn Quiz nicht läuft */}
      {!started && (
        <button
          className="quiz-floating-btn"
          onClick={() => setStarted(true)}
        >
          Quiz starten
        </button>
      )}
    </>
  );
};

export default QuizOverlay;