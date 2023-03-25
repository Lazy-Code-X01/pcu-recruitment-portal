import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const targetDate = new Date("April 14, 2023 00:00:00").getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;
  
  const [timeLeft, setTimeLeft] = useState({
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000)
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className='counter'>
        <div className="timer">
            <div className="days">
                <div className="numbers">{timeLeft.days}</div>
                <span className="text"> Days</span>
            </div>
            <div className="hours">
                <div className="numbers">{timeLeft.hours}</div>
                <span className="text"> Hours</span>
            </div>
            <div className="minutes">
                <div className="numbers">{timeLeft.minutes}</div>
                <span className="text"> Minutes</span>
            </div>
            <div className="seconds">
                <div className="numbers">{timeLeft.seconds}</div>
                <span className="text"> Seconds</span>
            </div>
        </div>
    </div>
  );
}

export default CountdownTimer;
