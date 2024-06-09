import { useEffect, useState } from "react";

export const useTimer = (timeLimit: number) => {
    const [remainingTime, setRemainingTime] = useState(timeLimit);
  
    useEffect(() => {
      let intervalId: NodeJS.Timer | null = null;
  
      if (remainingTime > 0) {
        intervalId = setInterval(() => {
          setRemainingTime(prevTime => prevTime - 1);
        }, 1000);
      }
  
      return () => clearInterval(intervalId!);
    }, [remainingTime]);
  
    return remainingTime;
  };