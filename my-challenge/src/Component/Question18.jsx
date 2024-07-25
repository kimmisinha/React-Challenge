import React, { useEffect, useState } from 'react';

function Question18() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      const nextYear = now.getFullYear() + 1;
      const newYear = new Date(`January 1, ${nextYear} 00:00:00`);
      const timeDifference = newYear - now;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    const intervalId = setInterval(calculateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Countdown to New Year's</h1>
      <h2>
        {countdown.days} days {countdown.hours} hours {countdown.minutes} minutes {countdown.seconds} seconds
      </h2>
    </div>
  );
}

export default Question18;

/*
Puzzle #18: New Year's Countdown 🍾
Create a React App that displays a countdown to New Year's. The countdown 
should be updated every second and displayed in the format 'X days X hours X minutes 
X seconds'. (Optional) Add additional features, 
such as styling or the ability to select a different date for the countdown.
*/
