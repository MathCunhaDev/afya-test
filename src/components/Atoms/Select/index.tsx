import { IOption } from "~models/IPayment";
import { ChangeEvent, forwardRef } from "react";
import * as S from "./styles";

interface ISelect {
  id: string;
  options: IOption[];
  placeholder: string;
  label: string;
  error: string | undefined;
  onChange: (value: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = forwardRef<any, ISelect>(
  ({ id, options, placeholder, label, error, onChange }: ISelect, ref) => {
    return (
      <S.Column>
        <S.Label htmlFor={id}>{label}</S.Label>
        <S.StyledSelect
          id={id}
          placeholder={placeholder}
          options={options}
          onChange={onChange}
          data-testid="select"
          ref={ref}
        />
        <S.Error>{error}</S.Error>
      </S.Column>
    );
  }
);
