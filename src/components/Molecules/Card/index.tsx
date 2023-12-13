import * as S from "./styles";

interface ICard {
  title: string;
  fullPrice: string;
  bestPrice: string;
  discount: string;
  installments: string;
  installmentPrice: string;
}

export const Card = ({
  title,
  fullPrice,
  bestPrice,
  discount,
  installments,
  installmentPrice,
}: ICard) => {
  return (
    <S.Card>
      <S.Wrapper vertical={true}>
        <S.Title>{title}</S.Title>
        <S.Wrapper>
          <S.Price>
            De R$ {fullPrice} | Por R$ {bestPrice}
          </S.Price>
          <S.Discount>{discount}</S.Discount>
        </S.Wrapper>
        <S.Installments>
          {installments}x de R$ {installmentPrice}/mês
        </S.Installments>
      </S.Wrapper>
      <S.Wrapper>
        <S.RadioButton />
      </S.Wrapper>
    </S.Card>
  );
};
