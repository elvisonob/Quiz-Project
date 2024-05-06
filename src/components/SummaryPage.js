import Trophy from './../Trophy completion.jpg';
import classes from './SummaryPage.module.css';
import QUESTIONS from './../questions';
import React from 'react';

const SummaryPage = ({ AnswersArray, activeIndex }) => {
  console.log(AnswersArray);

  const correctAnswers = AnswersArray.map(
    (answers, index) => answers === QUESTIONS[index].answers[0]
  );

  console.log(correctAnswers);

  const arrayOfBoolean = correctAnswers.reduce((acc, curr, i, arr) => {
    return acc + curr;
  }, 0);

  const finalPercentageCorrect = (arrayOfBoolean / AnswersArray.length) * 100;

  const skippedAnswer = AnswersArray.map((answers, index) => answers === null);

  const arrayOfSkippedAnswers = skippedAnswer.reduce((acc, curr, i, arr) => {
    return acc + curr;
  }, 0);

  const finalSkippedAnswer =
    (arrayOfSkippedAnswers / AnswersArray.length) * 100;

  const wrongAnswer = 100 - (finalPercentageCorrect + finalSkippedAnswer);

  return (
    <div>
      <div className="QuizCompletedLogo">
        <img src={Trophy} alt="" width="20%" height="20%" />
        <h2>Quiz Completed and Summary</h2>
        <div className={classes.AnswerPercent}>
          <div className={classes.CorrectAnswer}>
            <div className={classes.Percentage}>{finalPercentageCorrect}%</div>
            <span>Answered Correctly</span>
          </div>

          <div className={classes.WrongAnswer}>
            <div className={classes.Percentage}>{wrongAnswer}%</div>
            <span>Answered Incorrectly</span>
          </div>
          <div className={classes.SkippedAnswer}>
            <div className={classes.Percentage}>{finalSkippedAnswer}%</div>
            <span>Skipped Answer</span>
          </div>
        </div>
        {QUESTIONS.map((answerGroup, index) => {
          let cssColor;
          if (AnswersArray[index] === QUESTIONS[index].answers[0]) {
            cssColor = 'cssGreen';
          } else if (
            AnswersArray[index] !== QUESTIONS[index].answers[0] &&
            AnswersArray[index] !== null
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
                  <span>{AnswersArray[index] ?? 'Skipped'}</span>
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
