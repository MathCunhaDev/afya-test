import { IOption } from "~models/IPayment";
import { ChangeEvent } from "react";
import * as S from "./styles";

interface ISelect {
  id: string;
  options: IOption[];
  placeholder: string;
  label: string;
  error: string | undefined;
  onChange: (value: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({
  id,
  options,
  placeholder,
  label,
  error,
  onChange,
}: ISelect) => {
  return (
    <S.Column>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.StyledSelect
        id={id}
        placeholder={placeholder}
        options={options}
        onChange={onChange}
        data-testid="select"
      />
      <S.Error>{error}</S.Error>
    </S.Column>
  );
};
