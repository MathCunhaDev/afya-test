import { ReactElement } from "react";
import * as S from "./styles";

interface ITipography {
  level?: 1 | 2 | 5 | 3 | 4 | undefined;
  weight?: string;
  color?: string;
  size: string;
  children: ReactElement | string;
}

export const Title = ({ level, weight, size, children }: ITipography) => {
  return (
    <S.StyledTitle level={level} weight={weight} size={size}>
      {children}
    </S.StyledTitle>
  );
};

export const Text = ({ size, children, color }: ITipography) => {
  return (
    <S.StyledText size={size} color={color}>
      {children}
    </S.StyledText>
  );
};

export const Pill = ({ size, children }: ITipography) => {
  return <S.StyledPill size={size}>{children}</S.StyledPill>;
};
