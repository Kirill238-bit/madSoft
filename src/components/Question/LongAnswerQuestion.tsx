import { FC, useState } from "react";
import { Question } from "../../types/question";
import { setPickedAnswer } from "../../utils/answer";
import { Wrapper } from "../../styles/QuestionWrap";
import { StyledInput } from "../../styles/Inputs";

const ShortAnswerQuestion:FC<{ question: Question }> = ({ question }) => {
    const [answer, setAnswer] = useState<string | null>(null);
  
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setAnswer(e.target.value);
      setPickedAnswer(e.target.value);
    };
  
    return (
      <Wrapper>
        <h3>{question.text}</h3>
        <StyledInput type="text" value={answer || ''} onChange={handleInputChange} />
      </Wrapper>
    );
  };
  
  export default ShortAnswerQuestion;