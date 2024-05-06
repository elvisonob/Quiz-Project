import React, { useState, useEffect } from 'react';
import classes from './Questions.module.css';

const QuestionTimer = ({ onTimeout, timeout }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timingout = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timingout);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div>
      <progress max={timeout} value={remainingTime} className={classes.mode} />
    </div>
  );
};

export default QuestionTimer;
