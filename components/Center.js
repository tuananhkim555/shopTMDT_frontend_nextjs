import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  
  @media (min-width: 768px) {
    padding: 0 40px;
  }

  @media (min-width: 1024px) {
    padding: 0 60px;
  }

  &::after {
    content: '';
    display: table;
    clear: both;
  }
`;

export default function Center({children}) {
  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  );
}