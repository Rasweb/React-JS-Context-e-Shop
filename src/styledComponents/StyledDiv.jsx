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
  width: 66vw;
  margin: auto;
  background-color: #fefefe;
  border: 1px solid #888;
  @media screen and (min-width: 1024px) {
    justify-content: center;
    width: 22vw;
    margin: auto;
    background-color: #fefefe;
    border: 1px solid #888;
  }
`;

export const StyledCartProduct = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledCartContainer = styled.div`
  margin-top: 10%;
`;

export const StyledCartButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
