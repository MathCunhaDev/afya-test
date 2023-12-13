import styled from "styled-components";
import { theme } from "~common/styles/theme";
import { Flex, Radio } from "antd";

export const Card = styled.section`
  display: flex;
  width: 20.625rem;
  height: 6.25rem;
  padding: 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 3.5625rem;
  border-radius: 0.9375rem;
  border: 1px solid ${theme.color.primaryBlue};
  background: ${theme.color.white};
`;

export const Title = styled.h3`
  color: ${theme.color.primaryBlue};
  font-family: ${theme.font.primary};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Price = styled.p`
  color: ${theme.color.primaryBlue};
  font-family: ${theme.font.primary};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Installments = styled.p`
  color: ${theme.color.secondaryOrange};
  font-family: ${theme.font.primary};
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.0125rem;
`;

export const Discount = styled.span`
  border-radius: 0.5625rem;
  background: ${theme.color.secondaryOrange};
`;

export const RadioButton = styled(Radio)``;

export const Wrapper = styled(Flex)``;
