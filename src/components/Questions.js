import QUESTIONS from './../questions';
import classes from './Questions.module.css';
import React, { useState } from 'react';

const Questions = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  return (
    <div className={classes.Quiz}>
      <div className={classes.Questions}>
        <h3>{QUESTIONS[activeQuestionIndex].text}</h3>
      </div>
      <div className={classes.Answers}>
        <li className={classes.AnswersList}>
          {QUESTIONS[activeQuestionIndex].answers}
        </li>
      </div>
    </div>
  );
};

export default Questions;
