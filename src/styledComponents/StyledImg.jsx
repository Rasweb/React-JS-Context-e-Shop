import styled from "styled-components";

export const StyledProductsImg = styled.img`
  width: 320px;
  height: 320px;
  // Ipad
  /* @media screen and (min-width: 768px) {
  } */
  // Desktop
  @media screen and (min-width: 1024px) {
    width: 86%;
  }
`;

export const StyledProductImg = styled(StyledProductsImg)`
  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`;

export const StyledCartImg = styled.img`
  width: 25%;
  @media screen and (min-width: 1024px) {
    width: 6vw;
  }

  //  height: 100px;
`;

export const StyledCheckoutImg = styled.img`
  width: 120px;
  height: 120px;
  @media screen and (min-width: 1024px) {
    width: 300px;
    height: 250px;
  }
`;

export const StyledThankYouImg = styled(StyledCheckoutImg)`
  width: 200px;
  height: 200px;
`;
