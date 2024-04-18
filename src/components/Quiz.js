import React, { useState } from 'react';
import classes from './Questions.module.css';
import QUESTIONS from './../questions';
import QuestionTimer from './QuestionTimer.js';
import Answer from './Answers.js';

export default function Question({ index, onSkipAnswer, onSelectClick }) {
  const [answer, setAnswer] = useState({ selectedAnswer: '', isCorrect: null });

  const onHandleSelect = (answer) => {
    setAnswer({ selectedAnswer: answer, isCorrect: null });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectClick(answer);
      }, 2000);
    }, 1000);
  };

  let pickedAnswer = '';

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    pickedAnswer = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.selectedAnswer) {
    pickedAnswer = 'answer';
  }

  return (
    <div className={classes.Question}>
      <div className={classes.Questions}>
        <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
        <h3>{QUESTIONS[index].text}</h3>
      </div>
      <Answer
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        pickedAnswer={pickedAnswer}
        onHandleAnswerClick={onHandleSelect}
      />
    </div>
  );
}
