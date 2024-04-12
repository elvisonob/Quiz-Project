import React, { useState } from 'react';
import classes from './Questions.module.css';
import QUESTIONS from '../questions';
import QuestionTimer from './QuestionTimer.js';
import Answer from './Answers.js';

export default function Question({
  key,
  questionText,
  onSkipAnswer,

  selectedAnswer,
  answers,
}) {
  const [answer, setAnswer] = useState({ selectedAnswer: '', isCorrect: null });

  const onHandleSelect = (answer) => {
    setAnswer({ selectedAnswer: answer, isCorrect: null });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[key].answers[0] === answer,
      });

      // setTimeout(() => {
      //   setAnswer({ selectedAnswer: '' });
      // }, 2000);
    }, 1000);
  };

  let pickedAnswer = '';

  if (answer.selectedAnswer) {
    pickedAnswer = 'selected';
  } else if (answer.isCorrect) {
    pickedAnswer = 'correct';
  } else {
    pickedAnswer = 'wrong';
  }

  return (
    <div className={classes.Question}>
      <div className={classes.Questions}>
        <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
        <h3>{questionText}</h3>
      </div>
      <Answer
        selectedAnswer={selectedAnswer}
        answers={answers}
        pickedAnswer={pickedAnswer}
        onHandleAnswerClick={onHandleSelect}
      />
    </div>
  );
}
