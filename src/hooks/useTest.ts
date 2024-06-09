import { useEffect, useState } from "react";
import { getTest } from "../utils/testService";
import { getStoredTest, storeTest } from "../utils/storage";
import { Test } from "../types/test";
import { setPickedAnswer } from "../utils/answer";

export const useTest = () => {
    const [test, setTest] = useState<Test | null>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const currentQuestion = test?.questions[currentQuestionIndex];
    const isTestCompleted = currentQuestionIndex === test?.questions.length;
  
    useEffect(() => {
      const storedTest = getStoredTest();
      if (storedTest) {
        setTest(storedTest);
        const index = storedTest.questions.findIndex(q => !q.answer)
        setCurrentQuestionIndex(index === -1 ? storedTest.questions.length : index);
      } else {
        getTest().then(test => {
          setTest(test);
          storeTest(test);
        });
      }
    }, []);
  
    const nextQuestion = () => {
      if (test && currentQuestionIndex < test.questions.length) {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      }
    };
  
    const saveAnswer = (questionId: string, answer: string | string[] | null) => {
      if (test && test.questions) {
        const updatedQuestions = test.questions.map(q =>{
          if (q.id === questionId) {
            return { ...q, answer };
          }else {
            return q;
          }
        });
        setTest({ ...test, questions: updatedQuestions });
        storeTest({ ...test, questions: updatedQuestions });
        setPickedAnswer(null)
      }
    };
  
    return {
      test,
      currentQuestion,
      nextQuestion,
      saveAnswer,
      isTestCompleted,
    };
  };