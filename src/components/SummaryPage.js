import Trophy from './../Trophy completion.jpg';
import classes from './SummaryPage.module.css';
import QUESTIONS from './../questions';
import React from 'react';

const SummaryPage = ({ answersArray, activeIndex }) => {
  const correctAnswers = answersArray.filter(
    (answers, index) => answers === QUESTIONS[index].answers[0]
  );

  const correctAnswerPercentage = Math.round(
    (correctAnswers.length / answersArray.length) * 100
  );

  const skippedAnswers = answersArray.filter((answers) => answers === null);

  const skippedAnswerPercentage = Math.round(
    (skippedAnswers.length / answersArray.length) * 100
  );

  const wrongAnswers =
    100 - (correctAnswerPercentage + skippedAnswerPercentage);

  return (
    <div>
      <div className="QuizCompletedLogo">
        <img src={Trophy} alt="" width="20%" height="20%" />
        <h2>Quiz Completed and Summary</h2>
        <div className={classes.AnswerPercent}>
          <div className={classes.CorrectAnswer}>
            <div className={classes.Percentage}>{correctAnswerPercentage}%</div>
            <span>Answered Correctly</span>
          </div>

          <div className={classes.WrongAnswer}>
            <div className={classes.Percentage}>{wrongAnswers}%</div>
            <span>Answered Incorrectly</span>
          </div>
          <div className={classes.SkippedAnswer}>
            <div className={classes.Percentage}>{skippedAnswerPercentage}%</div>
            <span>Skipped Answer</span>
          </div>
        </div>
        {QUESTIONS.map((answerGroup, index) => {
          let cssColor;
          if (answersArray[index] === QUESTIONS[index].answers[0]) {
            cssColor = 'cssGreen';
          } else if (
            answersArray[index] !== QUESTIONS[index].answers[0] &&
            answersArray[index] !== null
          ) {
            cssColor = 'cssRed';
          } else {
            cssColor = 'cssBlue';
          }

          return (
            <div key={index} className={classes.wholeQuestion}>
              <div className={classes.specificQuestion}>
                <div className={classes.indexNumber}>{index + 1}</div>
                <div className={classes.text}>{answerGroup.text}</div>

                <div className={classes[cssColor]}>
                  <span>{answersArray[index] ?? 'Skipped'}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SummaryPage;
