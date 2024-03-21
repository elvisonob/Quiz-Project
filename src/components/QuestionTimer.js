import React, { useState, useEffect } from 'react';

const QuestionTimer = ({ onTimeout, timeout }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    setTimeout(onTimeout, timeout);
  }, [onTimeout, timeout]);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return (
    <div>
      <progress max={timeout} value={remainingTime} />
    </div>
  );
};

export default QuestionTimer;
