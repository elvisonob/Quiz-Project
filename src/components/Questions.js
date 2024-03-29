import React, { useState, useCallback, useRef } from 'react';
import QUESTIONS from './../questions';
import './Questions.css';
import SummaryPage from './SummaryPage';
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

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div className="Quiz">
      <div className="Questions">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h3>{QUESTIONS[activeQuestionIndex].text}</h3>
      </div>
      <ul className="Answers">
        {shuffledAnswers.map((answer) => {
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
            <li key={answer} className="AnswersList">
              <button
                onClick={() => onHandleAnswerClick(answer)}
                className={cssClass}
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Questions;
