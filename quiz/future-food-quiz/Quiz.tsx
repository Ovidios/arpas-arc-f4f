import React, { useState } from 'react';

const questions = [
  {
    question: "Warum werden Quallen als mögliche Nahrungsquelle erforscht?",
    options: ["Sie sind süß", "Hoher Proteinwert", "Leicht zu fangen", "Sie leuchten im Dunkeln"],
    correct: "Hoher Proteinwert"
  },
  {
    question: "Warum werden Grillen als Nahrungsquelle erforscht?",
    options: ["Sie sind sehr groß", "Proteinreich", "Sie riechen gut", "Sie sind giftig"],
    correct: "Proteinreich"
  },
  {
    question: "Warum werden Algen als Nahrungsmittel untersucht?",
    options: ["Sie sind leicht zu kochen", "Protein- & Nährstoffreich", "Sie wachsen langsam", "Sie sind teuer"],
    correct: "Protein- & Nährstoffreich"
  },
  {
    question: "Warum Salzpflanzen?",
    options: ["Sie wachsen nur im Sand", "Sie sind salzig", "Anpassungsfähig an Klima", "Sie schmecken süß"],
    correct: "Anpassungsfähig an Klima"
  },
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const handleAnswer = (option: string) => {
    setSelectedAnswer(option);
    if(option === questions[currentQuestion].correct) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    if(currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      alert(`Quiz beendet! Du hast ${score} Punkte.`);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>{questions[currentQuestion].question}</h2>
      <div>
        {questions[currentQuestion].options.map((option, index) => {
          let bgColor = '';
          if(selectedAnswer) {
            if(option === questions[currentQuestion].correct) {
              bgColor = 'green';
            } else if(option === selectedAnswer) {
              bgColor = 'red';
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              style={{
                backgroundColor: bgColor,
                color: 'white',
                margin: '5px',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: selectedAnswer ? 'not-allowed' : 'pointer'
              }}
              disabled={!!selectedAnswer}
            >
              {option}
            </button>
          );
        })}
      </div>

      {selectedAnswer && (
        <button
          onClick={nextQuestion}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#007bff',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          Nächste Frage
        </button>
      )}
    </div>
  );
};

export default Quiz;

