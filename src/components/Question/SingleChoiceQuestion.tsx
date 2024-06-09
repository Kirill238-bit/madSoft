import { FC, useState } from "react";
import { Question } from "../../types/question";
import { setPickedAnswer } from "../../utils/answer";
import { Wrapper } from "../../styles/QuestionWrap";
import { RadioButton, RadioInput } from "../../styles/Inputs";


const SingleChoiceQuestion:FC<{ question: Question }> = ({ question }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
    const handleOptionChange = (option: string) => {
      setSelectedOption(option);
      setPickedAnswer(option);
    };
  
    return (
      <Wrapper>
        <h3>{question.text}</h3>
        {question.options?.map((option) => (
          <label key={option}>
            <RadioInput
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
            />
            <RadioButton/>
            {option}
          </label>
        ))}
      </Wrapper>
    );
  };
  
  export default SingleChoiceQuestion;