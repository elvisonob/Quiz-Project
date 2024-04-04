import classes from './Questions.module.css';
import QUESTIONS from '../questions';
import QuestionTimer from './QuestionTimer.js';
import Answer from './Answers.js';

export default function Question({
  questionText,
  onSkipAnswer,
  onHandleAnswerClick,
  pickedAnswer,
}) {
  return (
    <div className={classes.Question}>
      <div className={classes.Questions}>
        <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
        <h3>{questionText}</h3>
      </div>
      <Answer
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        answers={QUESTIONS[activeQuestionIndex].answers}
        pickedAnswer={pickedAnswer}
        onHandleAnswerClick={onHandleAnswerClick}
      />
    </div>
  );
}
