import * as S from "./styles";

export type paymentStateType = {
  id: number;
  installments: number;
};

interface ICard {
  id: number;
  title: string;
  fullPrice: string;
  bestPrice: string;
  discount: string;
  installments: number;
  installmentPrice: string;
  installmentType: string;
  paymentType: number;
  handleClick: (object: paymentStateType) => void;
}

export const Card = ({
  id,
  title,
  fullPrice,
  bestPrice,
  discount,
  installments,
  installmentPrice,
  installmentType,
  paymentType,
  handleClick,
}: ICard) => {
  return (
    <S.Card>
      <S.Wrapper vertical={true}>
        <S.Title>
          {title} | {installmentType}
        </S.Title>
        <S.Wrapper align="center">
          <S.Price>
            De R$ {fullPrice} | Por R$ {bestPrice}
          </S.Price>
          <S.Discount>{discount}</S.Discount>
        </S.Wrapper>
        <S.Installments>
          {installments}x de R$ {installmentPrice}/mês
        </S.Installments>
      </S.Wrapper>
      <S.Wrapper align="center">
        <S.RadioButton
          onClick={() => handleClick({ id, installments })}
          checked={paymentType === id ? true : false}
        />
      </S.Wrapper>
    </S.Card>
  );
};