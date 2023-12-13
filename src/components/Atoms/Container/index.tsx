import { ReactElement } from "react";
import * as S from "./styles";

interface IContainer {
  children: ReactElement;
}

export const Container = ({ children }: IContainer) => {
  return <S.Container data-testid="container">{children}</S.Container>;
};
