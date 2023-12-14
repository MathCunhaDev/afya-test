import styled from "styled-components";
import { theme } from "~common/styles/theme";
import { Flex, Radio } from "antd";

export const Card = styled.section`
  display: flex;
  width: 20.625rem;
  height: 6.25rem;
  padding: 1.25rem;
  align-items: center;
  justify-content: space-between;
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
  white-space: nowrap;
  margin: 4px 0;
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
  width: 2.5rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5625rem;
  background: ${theme.color.secondaryOrange};
  font-family: ${theme.font.primary};
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.0125rem;
  color: ${theme.color.white};
  margin-left: 12px;
`;

export const RadioButton = styled(Radio)`
  margin-inline-end: 0;

  &:hover {
    border-width: 2px;
    border-color: ${theme.color.primaryBlue};

    .ant-radio {
      &:after {
        border-color: ${theme.color.primaryBlue};
      }
    }

    .ant-radio-inner {
      border-color: ${theme.color.primaryBlue};
    }
  }

  .ant-radio-inner {
    width: 20px;
    height: 20px;
    border-width: 2px;
    border-color: ${theme.color.gray1};
  }

  .ant-radio-checked {
    .ant-radio-inner {
      border-color: ${theme.color.gray3};
      background-color: ${theme.color.white};

      &:after {
        background-color: ${theme.color.primaryBlue};
      }
    }
  }
`;

export const Wrapper = styled(Flex)``;
