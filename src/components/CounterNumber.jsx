import { useState, useEffect } from "react";

export default function CounterNumber({ targetText }) {
  const [count, setCount] = useState(0);

  const targetNumber = parseInt(targetText.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = targetText.replace(/[0-9.]/g, ""); 

  useEffect(() => {
    if (!targetNumber) return;

    let start = 0;
    const duration = 3000; 
    const steps = 30;
    const increment = Math.ceil(targetNumber / steps);
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [targetNumber]);

  return (
    <span>
      {targetNumber > 0 ? count.toLocaleString("id-ID") + suffix : targetText}
    </span>
  );
}
