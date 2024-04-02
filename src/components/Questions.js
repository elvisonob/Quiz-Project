import React, { useState, useCallback } from 'react';
import QUESTIONS from './../questions';
import classes from './Questions.module.css';
import SummaryPage from './SummaryPage';
import Answer from './Answers';
import Question from './Quiz.js';
import QuestionTimer from './QuestionTimer.js';

const Questions = () => {
  const [pickedAnswer, setPickedAnswer] = useState('');
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex =
    pickedAnswer === '' ? userAnswers.length : userAnswers.length - 1;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const onHandleAnswerClick = useCallback(
    function onHandleAnswerClick(answer) {
      setPickedAnswer('answer');
      setUserAnswers((prevAnswers) => {
        return [...prevAnswers, answer];
      });

      setTimeout(() => {
        if (answer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setPickedAnswer('correct');
        } else {
          setPickedAnswer('wrong');
        }

        setTimeout(() => {
          setPickedAnswer('');
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(() => {
    onHandleAnswerClick(null);
  }, [onHandleAnswerClick]);

  if (quizIsComplete) {
    return <SummaryPage />;
  }

  return (
    <div className={classes.Quiz}>
      <Question handleSkipAnswer={handleSkipAnswer} />
    </div>
  );
};

export default Questions;
