import React, { useState, useCallback } from 'react';
import QUESTIONS from './../questions';
import classes from './Questions.module.css';
import SummaryPage from './SummaryPage';
import Question from './Quiz.js';

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

  return (
    <div className={classes.Quiz}>
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectClick={onHandleAnswerClick}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Questions;
