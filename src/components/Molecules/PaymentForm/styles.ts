import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 330px;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  grid-row-gap: 30px;
  grid-column-gap: 40px;

  > div {
    grid-column: span 2;
  }

  > div:nth-child(2),
  > div:nth-child(3) {
    width: 140px;
    grid-column: span 1;
  }

  @media (max-width: 780px) {
    margin-top: 30px;
  }
`;
