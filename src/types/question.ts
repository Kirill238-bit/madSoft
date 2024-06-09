export interface Question {
    id: string;
    type: QuestionType;
    text: string;
    options?: string[];
    correctAnswer: string | string[] | null;
    answer: string | string[] | null;
  }
  
  export enum QuestionType {
    SINGLE_CHOICE = 'single_choice',
    MULTIPLE_CHOICE = 'multiple_choice',
    SHORT_ANSWER = 'short_answer',
    LONG_ANSWER = 'long_answer',
  }