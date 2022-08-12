import styled from "styled-components";

export const StyledProductDiv = styled.div`
  text-align: center;
  margin-right: 10%;
  // Ipad
  /* @media screen and (min-width: 768px) {
  } */
  // Desktop
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledCartDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4%;
`;

export const StyledModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80vw;
  margin: auto;

  border: 1px solid #888;
  @media screen and (min-width: 1024px) {
    width: 25vw;
    border: 1px solid #888;
  }
`;

export const StyledCartProduct = styled.div`
  display: flex;
  flex-direction: row;
  width: 42vh;
  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`;

export const StyledCartContainer = styled.div`
  margin-top: 10%;
`;

export const StyledCartButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const StyledCheckoutDiv = styled(StyledCartProduct)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledThankYouDiv = styled(StyledCheckoutDiv)`
  margin-top: 3%;
  border-bottom: 1px solid #e7f6f2;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    margin-top: 3%;
    border-bottom: 1px solid #e7f6f2;
    flex-direction: row;
  }
`;

export const StyledProductBtnDiv = styled.div`
  display: flex;
  justify-content: center;
`;
