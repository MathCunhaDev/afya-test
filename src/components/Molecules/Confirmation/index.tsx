import Star from "~common/assets/svgs/star.svg";
import * as Atoms from "~components/Atoms";
import * as S from "./styles";
import { theme } from "~common/styles/theme";

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
          <Atoms.Text size="16px">{title}</Atoms.Text>
          <Atoms.Text size="14px">{price}</Atoms.Text>
        </S.Column>
      </S.Main>
      <S.Wrapper>
        <Atoms.Text size="14px" color={theme.color.gray3}>
          E-mail
        </Atoms.Text>
        <Atoms.Text size="14px" color={theme.color.gray5}>
          {email}
        </Atoms.Text>
      </S.Wrapper>
      <S.Wrapper>
        <Atoms.Text size="14px" color={theme.color.gray3}>
          CPF
        </Atoms.Text>
        <Atoms.Text size="14px" color={theme.color.gray5}>
          {cpf}
        </Atoms.Text>
      </S.Wrapper>
    </S.Container>
  );
};
