import classes from './Questions.module.css';
import QUESTIONS from './../questions';

export default function Question({ handleSkipAnswer }) {
  return (
    <div className={classes.Question}>
      <div className={classes.Questions}>
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h3>{QUESTIONS[activeQuestionIndex].text}</h3>
      </div>
      <Answer
        key={activeQuestionIndex}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        answers={QUESTIONS[activeQuestionIndex].answers}
        pickedAnswer={pickedAnswer}
        onHandleAnswerClick={onHandleAnswerClick}
      />
    </div>
  );
}
