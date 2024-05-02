import Trophy from './../Trophy completion.jpg';
import classes from './SummaryPage.module.css';
import QUESTIONS from './../questions';
import React from 'react';

const SummaryPage = ({ AnswersArray, activeIndex }) => {
  //Now, check if the answers in the userAnswer array are correct answers
  console.log(AnswersArray);

  const correctAnswers = AnswersArray.map(
    (answers, index) => answers === QUESTIONS[index].answers[0]
  );

  console.log(correctAnswers);

  //take out the correct Answers

  const arrayOfBoolean = correctAnswers.reduce((acc, curr, i, arr) => {
    return acc + curr;
  }, 0);

  const finalPercentageCorrect = (arrayOfBoolean / AnswersArray.length) * 100;

  // When it is a right answer, it is true

  // When the answer is wrong it is false

  // When the answer is null, it should be null

  // False and Null should not mean same thing

  // const skippedAnswers = AnswersArray.map((answers, index) => answers === null);

  // const arrayofSkippedAnswers = skippedAnswers.reduce((acc, curr, i, arr) => {
  //   return acc + curr;
  // }, 0);

  // const finalPercentageSkipped =
  //   (arrayofSkippedAnswers / AnswersArray.length) * 100;

  // const arrayofFalseAnswers = falseAnswers.reduce((acc, curr, i, arr) => {
  //   return acc + curr;
  // }, 0);

  // const finalPercentageWrong =
  //   (arrayofFalseAnswers / AnswersArray.length) * 100;

  return (
    <div>
      <div className="QuizCompletedLogo">
        <img src={Trophy} alt="" width="20%" height="20%" />
        <h2>Quiz Completed and Summary</h2>
        <div className={classes.AnswerPercent}>
          <div className={classes.CorrectAnswer}>
            <div>{finalPercentageCorrect}%</div>
            <span>Correct Answer</span>
          </div>

          <div className={classes.WrongAnswer}>
            <div>{}%</div>
            <span>Wrong Answer</span>
          </div>
          <div className={classes.SkippedAnswer}>
            <div>{}%</div>
            <span>Skipped Answer</span>
          </div>
        </div>

        <div>
          <div>Number</div>
          <div>Question</div>
          <div>Answer</div>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
