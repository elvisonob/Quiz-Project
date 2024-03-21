import React, { useState } from 'react';
import QUESTIONS from './../questions';
import classes from './Questions.module.css';
import SummaryPage from './SummaryPage';
import QuestionTimer from './QuestionTimer.js';

const Questions = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  if (quizIsComplete) {
    return <SummaryPage />;
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  const onHandleAnswerClick = (answer) => {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, answer];
    });
  };

  return (
    <div className={classes.Quiz}>
      <div className={classes.Questions}>
        <QuestionTimer
          timeout={10000}
          onTimeout={() => {
            onHandleAnswerClick(null);
          }}
        />
        <h3>{QUESTIONS[activeQuestionIndex].text}</h3>
      </div>
      <ul className={classes.Answers}>
        {shuffledAnswers.map((answer) => (
          <li key={answer} className={classes.AnswersList}>
            <button onClick={() => onHandleAnswerClick(answer)}>
              {answer}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
