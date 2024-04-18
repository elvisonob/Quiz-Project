import { useRef } from 'react';
import classes from './Questions.module.css';

export default function Answer({
  answers,
  selectedAnswer,
  pickedAnswer,
  onHandleAnswerClick,
}) {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul className={classes.Answers}>
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
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
              disabled={pickedAnswer !== ''}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
