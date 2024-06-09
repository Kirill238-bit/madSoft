import { QuestionType } from "../types/question";
import { Test } from "../types/test";

const mockTest: Test = {
    id: 'test-1',
    title: 'Тест по математике',
    timeLimit: 1000,
    questions: [
      {
        id: 'q-1',
        type: QuestionType.SINGLE_CHOICE,
        text: 'Сколько будет 2 + 2?',
        options: ['3', '4', '5'],
        correctAnswer: '4',
        answer:null
      },
      {
        id: 'q-2',
        type: QuestionType.MULTIPLE_CHOICE,
        text: 'Какие числа делятся нацело на 2?',
        options: ['1', '2', '3', '4', '5', '6'],
        correctAnswer: "2,4,6",
        answer:null
      },
      {
        id: 'q-3',
        type: QuestionType.LONG_ANSWER,
        text: 'Напишите ответ на данное уравнение: 2x^2 + 2x - 3= -10. Если решений нет то напишите "Не имеет действительных решений"', 
        correctAnswer: 'Не имеет действительных решений',
        answer: null, 
      },
      {
        id: 'q-4',
        type: QuestionType.SHORT_ANSWER,
        text: 'Напишите ответ на данное уравнение: x^2 + 6x + 9 = 0. Если решений нет то напишите "Не имеет действительных решений"',
        correctAnswer: '-3', 
        answer: null, 
      },  
    ],
  };
  
  export const getTest = async (): Promise<Test> => {
    return mockTest;
  };
  