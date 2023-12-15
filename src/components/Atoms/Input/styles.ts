import styled from "styled-components";
import { theme } from "~common/styles/theme";
import { Input } from "antd";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled(Input)`
  font-family: ${theme.font.primary};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${theme.color.gray1};
  padding-left: 0;

  &:focus {
    box-shadow: none;
    border-color: transparent;
    border-bottom: 1px solid ${theme.color.primaryBlue};

    + label {
      color: ${theme.color.primaryBlue};
    }
  }

  &:hover {
    border-bottom: 1px solid ${theme.color.primaryBlue};
  }
`;

export const Label = styled.label`
  color: ${theme.color.gray4};
  font-family: ${theme.font.primary};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Error = styled.span`
  color: red;
  font-family: ${theme.font.primary};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: block;
  margin-top: px;
`;
