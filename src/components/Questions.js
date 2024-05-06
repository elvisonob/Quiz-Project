import React, { useState, useCallback } from 'react';
import QUESTIONS from './../questions';
import classes from './Questions.module.css';
import SummaryPage from './SummaryPage';
import Question from './Quiz.js';
import Header from './Header.js';

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
    return (
      <SummaryPage
        activeIndex={activeQuestionIndex}
        answersArray={userAnswers}
      />
    );
  }

  return (
    <div className={classes.Quiz}>
      <Header />
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
