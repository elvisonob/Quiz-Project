import React, { useState } from 'react';
import classes from './Questions.module.css';
import QUESTIONS from './../questions';
import QuestionTimer from './QuestionTimer.js';
import Answer from './Answers.js';

export default function Question({ index, onSkipAnswer, onSelectClick }) {
  const [answer, setAnswer] = useState({ selectedAnswer: '', isCorrect: null });

  let timer = 20000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

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
    <div className="Question">
      <div className={classes.Questions}>
        <QuestionTimer
          key={timer}
          timeout={timer}
          onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null}
          mode={pickedAnswer}
        />
        <div className={classes.QuestionMarker}>
          <h3>{QUESTIONS[index].text}</h3>
        </div>
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
