import styled from "styled-components";

export const RadioInput = styled.input.attrs({ type: "radio" })`
  display: none;
  
  &:checked + span{
    background-color: rgb(185, 41, 53);
    border:1.5px solid rgb(185, 41, 53);
  }
`
export const RadioButton = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: white;
  border: 1.5px solid #000;
  margin-right: 5px;
  display: inline-block;
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  appearance: none;
  background-color: transparent;
  border: 1.5px solid #000;

  &:checked {
    border: 1.5px solid rgb(185, 41, 53);
    background-color: rgb(185, 41, 53);
    &::after {
      display: none;
    }
  }
`

export const StyledInput = styled.input`
    border-radius: 6px;
    border:1.5px solid #000;
`

