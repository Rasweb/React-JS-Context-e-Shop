import styled from "styled-components";

export const StyledProductsLi = styled.li`
  width: 100%;
  height: 30%;
  list-style: none;

  // Ipad
  /* @media screen and (min-width: 768px) {
  } */
  // Desktop
  @media screen and (min-width: 1024px) {
    width: 26%;
    height: 30%;
  }
`;

export const StyledCheckoutLi = styled.li`
  list-style: none;
  border-bottom: 1px solid black;
  width: 50%;
`;
