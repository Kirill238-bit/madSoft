import styled from "styled-components";
import TestForm from "./components/TestForm";

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width:768px) {
    margin: 0 16px;
  }
`
function App() {
  return (
    <AppWrapper>
      <TestForm />
    </AppWrapper>
  );
}

export default App;
