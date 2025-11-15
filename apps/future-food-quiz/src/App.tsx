import { useState } from "react";
import "./App.css";

interface Question {
  question: string;
  options: string[];
  correct: number;
  icons: string[];
}

const questions: Question[] = [
  {
    question: "Warum werden Quallen als mögliche Nahrungsquelle erforscht?",
    options: [
      "Sie enthalten viel Zucker",
      "Sie wachsen schnell und sind proteinreich",
      "Sie sind leicht zu züchten an Land",
      "Sie verbessern den Geschmack von Speisen"
    ],
    correct: 1,
    icons: ["🪼","🪼","🪼","🪼"]
  },
  {
    question: "Was ist der Vorteil von Algen als Lebensmittel?",
    options: [
      "Sie benötigen kein Licht zum Wachsen",
      "Sie binden CO₂ und liefern viele Nährstoffe",
      "Sie schmecken süß",
      "Sie wachsen nur in tropischen Regionen"
    ],
    correct: 1,
    icons: ["🌱","🌱","🌱","🌱"]
  },
  {
    question: "Warum gelten Grillen als nachhaltige Eiweißquelle?",
    options: [
      "Sie produzieren viel Methan",
      "Sie benötigen wenig Wasser und Futter",
      "Sie leben nur kurz",
      "Sie sind schwer zu züchten"
    ],
    correct: 1,
    icons: ["🦗","🦗","🦗","🦗"]
  },
  {
    question: "Was sind Salzpflanzen (Halophyten)?",
    options: [
      "Pflanzen, die in Süßwasser wachsen",
      "Pflanzen, die salzhaltige Böden tolerieren",
      "Pflanzen, die aus Zucker gemacht werden",
      "Pflanzen, die nur in der Arktis leben"
    ],
    correct: 1,
    icons: ["🧂","🧂","🧂","🧂"]
  },
  {
    question: "Was ist ein Ziel der Future-Food-Forschung?",
    options: [
      "Lebensmittel aus Laboren zu verbieten",
      "Produktion näher zu Verbraucher*innen zu bringen",
      "Importe aus Übersee zu fördern",
      "Mehr Verpackungsmaterial zu entwickeln"
    ],
    correct: 1,
    icons: ["🍽️","🍽️","🍽️","🍽️"]
  }
];

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const q = questions[current];

  const handleSelect = (index: number) => {
    setSelected(index);
  };

  const handleNext = () => {
    if (selected === q.correct) setScore(score + 1);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
  };

  return (
    <div className="quiz-container">
      <h1>Future-Food-Quiz</h1>
      {!showResult ? (
        <>
          <p>{q.question}</p>
          <div>
            {q.options.map((opt, idx) => (
              <button
                key={idx}
                className={`option-btn ${selected === idx ? "selected" : ""}`}
                onClick={() => handleSelect(idx)}
              >
                {q.icons[idx]} {opt}
              </button>
            ))}
          </div>
          <button onClick={handleNext} disabled={selected === null}>
            Weiter
          </button>
        </>
      ) : (
        <>
          <h2>Ergebnis</h2>
          <p>Du hast {score} von {questions.length} Fragen richtig!</p>
          {score === questions.length && <p id="badge">🏅 Future-Food-Expert!</p>}
          <button onClick={handleRestart}>Nochmal spielen</button>
        </>
      )}
    </div>
  );
}

export default App;

