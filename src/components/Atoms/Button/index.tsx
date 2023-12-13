import { ReactElement } from "react";
import * as S from "./styles";

interface IButton {
  children: ReactElement | string;
}

export const Button = ({ children }: IButton) => {
  return <S.StyledButton>{children}</S.StyledButton>;
};
