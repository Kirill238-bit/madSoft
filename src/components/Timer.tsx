import { FC, useEffect, useRef, useState } from "react";
import { formatTime } from "../utils/formateTime";
import styled from "styled-components";
import { setTimeUp } from "../utils/time";

const Wrapper = styled.div`
  width: 80px;
  border: 1.5px solid black;
  border-radius: 10px;
  display: flex ;
  height:30px;
  justify-content: center;
  align-items: center;
`

const Timer:FC<{ timeLimit: number }> = ({ timeLimit }) => {
  const storedRemainingTime = localStorage.getItem("remainingTime");
  const [remainingTime, setRemainingTime] = useState(storedRemainingTime ? Number(storedRemainingTime) : timeLimit);
  const intervalRef = useRef<NodeJS.Timer | null>(null);
  const formattedTime = remainingTime > 0 ? formatTime(remainingTime) : '00:00'; 

  useEffect(()=>{
    if(formattedTime ==='00:00'){
      setTimeUp(true)
    }
  },[formattedTime])

  useEffect(() => {
    if (timeLimit > 0) {
      intervalRef.current = setInterval(() => {
        setRemainingTime(prevTime => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(intervalRef.current!);
            return 0; 
          }
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalRef.current!)
    }
  }, [timeLimit]);


  useEffect(() => {
   localStorage.setItem("remainingTime", remainingTime.toString());
  }, [remainingTime]);

  return (
    <Wrapper>
      <p>{formattedTime}</p>
    </Wrapper>
  );
};
  
  export default Timer;