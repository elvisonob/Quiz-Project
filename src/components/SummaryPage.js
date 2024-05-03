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
            <div>{finalPercentageCorrect}%</div>
            <span>Correct Answer</span>
          </div>

          <div className={classes.WrongAnswer}>
            <div>{wrongAnswer}%</div>
            <span>Wrong Answer</span>
          </div>
          <div className={classes.SkippedAnswer}>
            <div>{finalSkippedAnswer}%</div>
            <span>Skipped Answer</span>
          </div>
        </div>
        {/* display a list of the questions and their numbers, and the answers given */}
        {QUESTIONS.map((answerGroup, index) => (
          <div key={index}>
            <div>{index + 1}</div>
            <div>{answerGroup[index]}</div>
            <div>{answerGroup.text}</div>
            <div>{AnswersArray[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryPage;
