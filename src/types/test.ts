import { Question } from "./question";

export interface Test {
    id: string;
    questions: Question[];
    title: string;
    timeLimit: number;
  }