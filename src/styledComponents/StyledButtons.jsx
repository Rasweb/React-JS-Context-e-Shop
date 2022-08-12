import styled from "styled-components";

export const StyledCartButton = styled.button`
  align-self: end;
`;

export const StyledCartControllBtn = styled.button`
  margin-left: 10%;
  margin: 4%;
  width: 30px;
  font-size: 16px;
  cursor: pointer;
  @media screen and (min-width: 1024px) {
    width: 35px;
    font-size: 26px;
  }
`;

export const StyledCartControllBtnDisabled = styled(StyledCartControllBtn)`
  background-color: #395b64;
  color: #e7f6f2;
`;

export const StyledShowProductsBtn = styled.button`
  border: 1px solid #e7f6f2;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
  @media screen and (min-width: 1024px) {
    font-size: 18px;
    margin-left: 3%;
  }
`;

export const StyledCartCheckoutBtn = styled(StyledShowProductsBtn)`
  @media screen and (min-width: 1024px) {
    width: 150px;
  }
`;

export const StyledThankYouBtn = styled.button`
  cursor: pointer;
  width: 25%;
  font-size: 18px;
  @media screen and (min-width: 1024px) {
    margin-left: 37%;
  }
`;

export const StyledProductBtn = styled(StyledShowProductsBtn)`
  font-size: 16px;
  @media screen and (min-width: 1024px) {
    font-size: 20px;
    width: 120px;
  }
`;

export const StyledProductBackBtn = styled(StyledProductBtn)`
  margin-left: -18%;
  @media screen and (min-width: 1024px) {
    font-size: 20px;
    margin-left: -28%;
  }
`;

export const StyledHomeBtn = styled(StyledProductBtn)`
  width: 40vw;
  @media screen and (min-width: 1024px) {
    width: 27vw;
  }
`;

export const StyledCartBtn = styled.button`
  font-size: 18px;
  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;
