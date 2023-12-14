import { IOption } from "~models/IPayment";
import * as S from "./styles";

interface ISelect {
  id: string;
  options: IOption[];
  placeholder: string;
  label: string;
}

export const Select = ({ id, options, placeholder, label }: ISelect) => {
  return (
    <S.Column>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.StyledSelect
        id={id}
        placeholder={placeholder}
        options={options}
        data-testid="select"
      />
    </S.Column>
  );
};
