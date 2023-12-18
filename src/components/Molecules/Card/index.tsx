import { LegacyRef, forwardRef } from "react";
import { IPlanSelected } from "~models/IPayment";
import * as S from "./styles";

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
  handleClick: (object: IPlanSelected) => void;
}

export const Card = forwardRef<HTMLDivElement, ICard>(
  (
    {
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
    }: ICard,
    ref: LegacyRef<HTMLElement> | undefined
  ) => {
    return (
      <S.Card ref={ref}>
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
            onClick={() =>
              handleClick({
                id,
                installments,
                title,
                installmentType,
                bestPrice,
                installmentPrice,
              })
            }
            data-testid="radioButton"
            checked={paymentType === id ? true : false}
          />
        </S.Wrapper>
      </S.Card>
    );
  }
);
