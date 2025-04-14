import React, { useState } from "react";

const Quiz = () => {
  const [answers, setAnswers] = useState({ q1: "", q2: "", q3: "" });
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      id: "q1",
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "London"],
      correctAnswer: "Paris",
    },
    {
      id: "q2",
      question: "Which is the largest planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correctAnswer: "Jupiter",
    },
    {
      id: "q3",
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      correctAnswer: "JavaScript",
    },
  ];

  const handleOptionChange = (qId, selectedOption) => {
    setAnswers({ ...answers, [qId]: selectedOption });
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setSubmitted(true);
  };

  const handleRestart = () => {
    setAnswers({ q1: "", q2: "", q3: "" });
    setScore(0);
    setSubmitted(false);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", fontFamily: "Arial" }}>
      <h1>React Quiz App</h1>

      {!submitted ? (
        <div>
          {questions.map((q) => (
            <div key={q.id} style={{ marginBottom: "20px" }}>
              <h3>{q.question}</h3>
              {q.options.map((option, idx) => (
                <label key={idx} style={{ display: "block" }}>
                  <input
                    type="radio"
                    name={q.id}
                    value={option}
                    checked={answers[q.id] === option}
                    onChange={() => handleOptionChange(q.id, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}

          <button onClick={handleSubmit} style={{ padding: "10px 20px" }}>
            Submit Quiz
          </button>
        </div>
      ) : (
        <div>
          <h2>Your Score: {score} / {questions.length}</h2>
          <button onClick={handleRestart} style={{ padding: "10px 20px", marginTop: "20px" }}>
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
