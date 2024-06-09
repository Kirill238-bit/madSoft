import React from 'react';
import { QuestionType } from '../../types/question';


export const getQuestionComponent = (type: QuestionType) => {
  switch (type) {
    case QuestionType.SINGLE_CHOICE:
      return  React.lazy(()=> import('./SingleChoiceQuestion'))
    case QuestionType.MULTIPLE_CHOICE:
      return React.lazy(()=> import('./MultipleChoiceQuestion'))
    case QuestionType.SHORT_ANSWER:
      return React.lazy(()=> import('./ShortAnswerQuestion'))
    case QuestionType.LONG_ANSWER:
      return React.lazy(()=> import('./LongAnswerQuestion'))
    default:
      throw new Error(`Unsupported question type: ${type}`);
  }
};