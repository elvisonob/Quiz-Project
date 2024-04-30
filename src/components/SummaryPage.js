import Trophy from './../Trophy completion.jpg';
import classes from './SummaryPage.module.css';
import QUESTIONS from './../questions';
import React from 'react';

const SummaryPage = ({ AnswersArray }) => {
  //Now, check if the answers in the userAnswer array are correct answers
  // To check if the answers are the correct answers, I must compare it to
  // the first option in the main questions array and if it is,
  //then it is the correct answer

  // Now from all the correct answers, convert it into percentage

  const correctAnswers = AnswersArray.map(
    (answers, index) => answers === QUESTIONS[index].answers[0]
  );

  console.log(correctAnswers.length);

  const correctAnswerPercentage = (correctAnswers / AnswersArray.length) * 100;

  return (
    <div>
      <div className="QuizCompletedLogo">
        <img src={Trophy} alt="" width="20%" height="20%" />
        <h2>Quiz Completed and Summary</h2>
        <div className={classes.AnswerPercent}>
          <div className={classes.CorrectAnswer}>
            <div>{correctAnswerPercentage}%</div>
            <span>Correct Answer</span>
          </div>

          <div className={classes.WrongAnswer}>
            <div>%</div>
            <span>Wrong Answer</span>
          </div>
          <div className={classes.SkippedAnswer}>
            <div>%</div>
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
