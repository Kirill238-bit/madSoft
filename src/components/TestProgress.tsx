import { FC } from "react";
import { Question } from "../types/question";
import styled from "styled-components";

const ProgressBar =styled.div`
  display: flex;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  gap:6px;
`
const ProgressItem = styled.div<{status:string}>`
  flex: 1; 
  height:12px;
  background-color:${props => props.status === 'done'? '#000' :props.status === 'current'? 'rgb(185 41 53)' : 'rgb(224 224 224)' }; 
  border-radius: 3px;
`

const TestProgress:FC<{ questions: Question[] }> = ({ questions }) => {
  const currentQuestionIndex = questions.findIndex(q => !q.answer); 

    return (
      <ProgressBar>
      {questions.map((item, index) => (
        <ProgressItem
          key={index}
          status ={item.answer !== null
            ? 'done'
            : index === currentQuestionIndex
            ? 'current'
            : ''}
        ></ProgressItem>
      ))}
    </ProgressBar>
    );
  };
  
  export default TestProgress;