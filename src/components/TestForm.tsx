import { FC, Suspense } from "react";
import { getQuestionComponent } from "./Question/QuestionTypes";
import React from "react";
import TestProgress from "./TestProgress";
import Timer from "./Timer";
import { useTest } from "../hooks/useTest";
import styled from "styled-components";
import { $pickedAnswer } from "../utils/answer";
import { useUnit } from "effector-react";
import { $timeUp } from "../utils/time";

const Wrapper = styled.div`
  width: 768px;
`

const TitleContainer = styled.div`
  display: flex;
  gap:20px;
  align-items: center;
`

const SumbitButton = styled.button`
  background-color: rgb(185 41 53);
  border:none;
  cursor:pointer;
  height:30px;
  padding:8px 20px;
  border-radius: 8px;
  color:#fff;

  &:hover{
    background-color: rgb(185 41 80);
  }
`

const Results = styled.div`
  border-bottom: 1.5px solid #000;
`

const Res = styled.span`
  color:${props=> props.children === ' Правильно' ? 'green' :'red'};
`
const TestForm:FC = () => {
    const {
      currentQuestion,
      nextQuestion,
      saveAnswer,
      test,
      isTestCompleted,
    } = useTest();
    const pickedAnswer = useUnit($pickedAnswer)
    const isTimeUp = useUnit($timeUp)
  
    const handleAnswerSave = () => {
      if (currentQuestion && pickedAnswer) {
        saveAnswer(currentQuestion.id, pickedAnswer);
        nextQuestion();
      }else {
        alert('Выберите вариант(ы) ответа')
      }
    };

  
    return (
      <Wrapper>
        {!isTestCompleted ?
        <div>
          <TitleContainer>
            <h2>{test?.title}</h2>
            {test && <Timer timeLimit={test.timeLimit} /> }
          </TitleContainer>
          {test && !isTimeUp && <TestProgress questions={test.questions} /> } 
  
          {currentQuestion && !isTimeUp &&  (
            <Suspense fallback={<div>Загрузка вопроса...</div>}>
              {React.createElement(
                getQuestionComponent(currentQuestion.type),
                { question: currentQuestion }
              )}
            </Suspense>
          )}

          {isTimeUp && ( <p>Время на прохождение теста закончилось</p> )}
          {!isTimeUp &&
            <SumbitButton disabled={!currentQuestion} onClick={handleAnswerSave}>
              Ответить
            </SumbitButton>}
        </div>
        :
          <div>
            <h2>Тест завершен!</h2>
            <p>Спасибо за участие!❤️</p>
            {test && (
              <div>
                <h3>Результаты:</h3>
                {test.questions.map((question) => (
                  <Results key={question.id}>
                    <h4>{question.text}</h4>
                    <p>Ваш ответ:<Res>{question.answer === question.correctAnswer ? " Правильно" : " Неправильно"}</Res></p>
                    {question.answer && ( <p>Правильный ответ: {question.correctAnswer}</p> )}
                  </Results>
                ))}
              </div>
            )}
          </div>}
      </Wrapper>
    );
  };
  
  export default TestForm;

