import styled from "styled-components";
import { theme } from "~common/styles/theme";

export const Column = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

export const Main = styled.section`
  width: 310px;
  height: 80px;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${theme.color.gray1};
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 15px;
  background: #fff;
  width: 343px;
  height: 200px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
`;
