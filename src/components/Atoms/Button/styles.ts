import styled from "styled-components";
import { theme } from "~common/styles/theme";
import { Button } from "antd";

export const StyledButton = styled(Button)`
  width: 20.625rem;
  height: 3.125rem;
  border: none;
  border-radius: 1.5625rem;
  background: ${theme.color.primaryBlue};
  transition: opacity 0.2s ease-in-out;

  span {
    color: ${theme.color.white};
  }

  &:hover {
    opacity: 0.9;
  }
`;
