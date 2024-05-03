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

  // for the CSS styling,
  // the correct answer should be in green
  // the wrong answer in red

  let css;
  if (correctAnswers) {
    css = 'green';
  } else if (skippedAnswer) {
    css = 'pink';
  } else {
    css = 'red';
  }

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
        {/* If no answer was given, it should display skip */}
        {QUESTIONS.map((answerGroup, index) => (
          <div key={index} className={classes.wholeQuestion}>
            <div className={classes.indexNumber}>{index + 1}</div>
            <div className={classes.text}>{answerGroup.text}</div>

            <div className={classes.css}>
              {AnswersArray[index] ?? 'Skipped'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryPage;
