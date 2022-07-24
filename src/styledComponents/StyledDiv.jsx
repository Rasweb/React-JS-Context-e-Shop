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
  margin: 4%;
`;

export const StyledModalDiv = styled.div`
  justify-content: center;
  width: 22vw;
  height: 18vh;
  margin: auto;
  background-color: #fefefe;
  padding-bottom: 11%;
  border: 1px solid #888;
`;
