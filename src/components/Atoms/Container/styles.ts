import styled from "styled-components";

export const Container = styled.main`
  max-width: 960px;
  margin: 0 auto;
  display: block;

  @media (max-width: 1020px) {
    margin: 0 5%;
  }

  @media (max-width: 780px) {
    display: flex;
    justify-content: center;
    padding-bottom: 5%;
  }
`;
