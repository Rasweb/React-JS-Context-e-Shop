import styled from "styled-components";

export const StyledLayoutUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;

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

export const StyledCheckoutUl = styled.ul`
  display: flex;
  flex-direction: column;
`;
