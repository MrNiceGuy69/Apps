import { useState, useEffect } from 'react';

const getNextSunday = (): Date => {
    const now = new Date();
    const nextSunday = new Date(now.getTime());

    // Calculate days until next Sunday. If today is Sunday (day 0), it targets today.
    const daysUntilSunday = (7 - now.getDay()) % 7;
    nextSunday.setDate(now.getDate() + daysUntilSunday);
    nextSunday.setHours(23, 59, 59, 999); // Set to end of day

    // If it's Sunday but the time has already passed, target next Sunday
    if (now.getDay() === 0 && now.getTime() > nextSunday.getTime()) {
        nextSunday.setDate(nextSunday.getDate() + 7);
    }

    return nextSunday;
};

export const useCountdown = (): [string] => {
  const [targetDate, setTargetDate] = useState(getNextSunday());

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    
    if (difference <= 0) {
        // This check is important. If the target date has passed, we reset it
        // and return an empty object to be formatted as 'closing soon' or similar.
        return {};
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      // If time runs out, reset the target date for the next cycle
      if (+targetDate - +new Date() < 0) {
        setTargetDate(getNextSunday());
      }
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (time: { days?: number, hours?: number; minutes?: number; seconds?: number }): string => {
    const { days = 0, hours = 0, minutes = 0, seconds = 0 } = time;
    
    // Check if all values are undefined or 0 from the initial empty object state
    if (!Object.values(time).some(v => v > 0)) {
      return "Closing soon...";
    }

    const d = String(days);
    const h = String(hours).padStart(2, '0');
    const m = String(minutes).padStart(2, '0');
    const s = String(seconds).padStart(2, '0');
    
    return `${d}d : ${h}h : ${m}m : ${s}s`;
  };

  return [formatTime(timeLeft)];
};
