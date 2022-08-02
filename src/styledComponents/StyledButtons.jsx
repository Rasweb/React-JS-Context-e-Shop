import styled from "styled-components";

export const StyledCartButton = styled.button`
  align-self: end;
`;

export const StyledCartControllBtn = styled.button`
  margin-left: 10%;
  width: 7%;
  margin: 4%;
  cursor: pointer;
`;

export const StyledCartControllBtnDisabled = styled(StyledCartControllBtn)`
  background-color: #cccccc;
  color: #666666;
`;

export const StyledShowProductsBtn = styled.button`
  border: 1px solid black;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
`;
