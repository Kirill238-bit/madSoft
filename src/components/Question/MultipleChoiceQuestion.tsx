import { FC, useState } from "react";
import { Question } from "../../types/question";
import { setPickedAnswer } from "../../utils/answer";
import { Wrapper } from "../../styles/QuestionWrap";
import { Checkbox } from "../../styles/Inputs";

const MultipleChoiceQuestion:FC<{ question: Question }> = ({ question }) => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  
    const handleOptionChange = (option: string) => {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter(o => o !== option));
        setPickedAnswer(selectedOptions.filter(o => o !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
        setPickedAnswer([...selectedOptions, option].toString());
      }
    };
  
    return (
      <Wrapper>
        <h3>{question.text}</h3>
        {question.options?.map((option) => (
          <label key={option}>
            <Checkbox
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() => handleOptionChange(option)}
            />
            {option}
          </label>
        ))}
      </Wrapper>
    );
  };

  export default MultipleChoiceQuestion
  