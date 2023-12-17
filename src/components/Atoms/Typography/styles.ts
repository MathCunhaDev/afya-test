import styled from "styled-components";
import { theme } from "~common/styles/theme";
import { Typography } from "antd";

const { Title, Text } = Typography;

export const StyledTitle = styled(Title)<{ size?: string; weight?: string }>`
  color: ${theme.color.gray5};
  font-family: ${theme.font.primary};
  font-size: ${(props) => (props.size ? props.size : "1rem")};
  font-style: normal;
  font-weight: ${(props) => (props.weight ? props.weight : "600")} !important;
  line-height: normal;
  letter-spacing: -0.4px;
  margin: 0 !important;
`;

export const StyledText = styled(Text)<{ size?: string; color?: string }>`
  color: ${(props) => (props.color ? props.color : theme.color.gray5)};
  font-family: ${theme.font.primary};
  font-size: ${(props) => (props.size ? props.size : "1rem")} !important;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;
`;

export const StyledPill = styled(StyledText)<{ size?: string }>`
  width: fit-content;
  padding: 4px 12px;
  border-radius: 12px;
  border: 1px solid ${theme.color.gray1};
  font-size: ${(props) => (props.size ? props.size : "1rem")};
`;
