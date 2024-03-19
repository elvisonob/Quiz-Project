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
      <ul className={classes.Answers}>
        {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
          <li key={answer} className={classes.AnswersList}>
            <button>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
