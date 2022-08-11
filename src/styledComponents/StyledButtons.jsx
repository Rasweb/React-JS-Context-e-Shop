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
`;

export const StyledThankYouBtn = styled.button`
  cursor: pointer;
  width: 25%;
  font-size: 18px;
`;

export const StyledProductBtn = styled(StyledShowProductsBtn)`
  font-size: 16px;
`;

export const StyledProductBackBtn = styled(StyledProductBtn)`
  margin-left: -18%;
`;

export const StyledHomeBtn = styled(StyledProductBtn)`
  width: 40vw;
`;
