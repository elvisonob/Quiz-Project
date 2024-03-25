import React, { useState, useCallback, useRef } from 'react';
import QUESTIONS from './../questions';
import classes from './Questions.module.css';
import SummaryPage from './SummaryPage';
import QuestionTimer from './QuestionTimer.js';

const Questions = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const onHandleAnswerClick = useCallback(function onHandleAnswerClick(answer) {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, answer];
    });
  }, []);

  const handleSkipAnswer = useCallback(() => {
    onHandleAnswerClick(null);
  }, [onHandleAnswerClick]);

  if (quizIsComplete) {
    return <SummaryPage />;
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div className={classes.Quiz}>
      <div className={classes.Questions}>
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
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
