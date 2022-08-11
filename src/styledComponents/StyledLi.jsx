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
  //border: 1px solid #e7f6f2;
  border-bottom: 1px solid #e7f6f2;
  list-style: none;
  margin-left: -8%;
  margin-right: 2%;
  margin-bottom: 4%;
`;

export const StyledLayoutLi = styled.li`
  display: none;
`;
