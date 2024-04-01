import { useRef } from 'react';
import classes from './Questions.module.css';

export default function Answer({
  shuffledAnswers,
  userAnswers,
  pickedAnswer,
  onHandleAnswerClick,
}) {
  return (
    <ul className={classes.Answers}>
      {shuffledAnswers.current.map((answer) => {
        const isSelected = userAnswers[userAnswers.length - 1] === answer;
        let cssClass = '';

        if (pickedAnswer === 'answer' && isSelected) {
          cssClass = 'selected';
        }

        if (
          (pickedAnswer === 'correct' || pickedAnswer === 'wrong') &&
          isSelected
        ) {
          cssClass = pickedAnswer;
        }

        return (
          <li key={answer} className={classes.AnswersList}>
            <button
              onClick={() => onHandleAnswerClick(answer)}
              className={classes[cssClass]}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
