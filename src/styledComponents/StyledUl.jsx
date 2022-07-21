import styled from "styled-components";

export const StyledLayoutUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  // Ipad
  /* @media screen and (min-width: 768px) {
  } */
  // Desktop
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
