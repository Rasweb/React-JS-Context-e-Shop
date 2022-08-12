import styled from "styled-components";

export const StyledProductsParagraph = styled.p`
  margin: 10px;
  width: 90%;
  // Ipad
  /* @media screen and (min-width: 768px) {
  } */
  // Desktop
  @media screen and (min-width: 1024px) {
    margin: 10px;
    width: 90%;
  }
`;

export const StyledCartParagraph = styled.p`
  width: 100%;
  @media screen and (min-width: 1024px) {
    font-size: 20px;
    width: auto;
  }
`;

export const StyledCheckoutProductP = styled(StyledCartParagraph)``;

export const StyledCartProductP = styled.p`
  margin: 4%;
  width: 46vw;
  @media screen and (min-width: 1024px) {
    width: 50vw;
    font-size: 18px;
  }
`;

export const StyledCheckoutP = styled.p`
  margin-top: -1%;
  margin-bottom: 6%;
`;

export const StyledCartPriceP = styled.p`
  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const StyledProductP = styled.p`
  @media screen and (min-width: 1024px) {
    font-size: 16px;
    width: 50%;
  }
`;
