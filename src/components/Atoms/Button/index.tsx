import { ReactElement } from "react";
import * as S from "./styles";

interface IButton {
  htmlType?: "button" | "submit" | "reset" | undefined;
  children: ReactElement | string;
}

export const Button = ({ htmlType, children }: IButton) => {
  return <S.StyledButton htmlType={htmlType}>{children}</S.StyledButton>;
};
