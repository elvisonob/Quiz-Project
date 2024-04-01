import React, { useState, useCallback, useRef } from 'react';
import QUESTIONS from './../questions';
import classes from './Questions.module.css';
import SummaryPage from './SummaryPage';
import Answer from './Answers';
import QuestionTimer from './QuestionTimer.js';

const Questions = () => {
  const [pickedAnswer, setPickedAnswer] = useState('');
  const [userAnswers, setUserAnswers] = useState([]);

  const shuffledAnswers = useRef();

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

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

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
      <Answer
        shuffledAnswers={shuffledAnswers}
        userAnswers={userAnswers}
        pickedAnswer={pickedAnswer}
        onHandleAnswerClick={onHandleAnswerClick}
      />
    </div>
  );
};

export default Questions;
