import React, { useState, useEffect } from 'react';

const QuestionTimer = ({ onTimeout, timeout }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('setTimeout');
    const timingout = setTimeout(onTimeout, timeout);
    // clearTimeout(() => timingout);
  }, [onTimeout, timeout]);

  useEffect(() => {
    console.log('setInterval');
    const timeInterval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    // clearInterval(() => timeInterval);
  }, []);

  return (
    <div>
      <progress max={timeout} value={remainingTime} />
    </div>
  );
};

export default QuestionTimer;
