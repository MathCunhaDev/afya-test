import Star from "~common/assets/svgs/star.svg";
import { theme } from "~common/styles/theme";
import { Text } from "~components/Atoms";
import * as S from "./styles";

interface IConfirmation {
  title: string;
  price: string;
  email: string;
  cpf: string;
}

export const Confirmation = ({ title, price, email, cpf }: IConfirmation) => {
  return (
    <S.Container>
      <S.Main>
        <img src={Star} alt="Icone de estrela" />
        <S.Column>
          <Text size="16px">{title}</Text>
          <Text size="14px">{price}</Text>
        </S.Column>
      </S.Main>
      <S.Wrapper>
        <Text size="14px" color={theme.color.gray3}>
          E-mail
        </Text>
        <Text size="14px" color={theme.color.gray5}>
          {email}
        </Text>
      </S.Wrapper>
      <S.Wrapper>
        <Text size="14px" color={theme.color.gray3}>
          CPF
        </Text>
        <Text size="14px" color={theme.color.gray5}>
          {cpf}
        </Text>
      </S.Wrapper>
    </S.Container>
  );
};
