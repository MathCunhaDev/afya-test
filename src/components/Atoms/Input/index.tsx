import * as S from "./styles.ts";

interface IInput {
  value?: any;
  onChange?: any;
  id: string;
  label: string;
  placeholder: string;
  error: any;
}

export const Input = ({
  label,
  placeholder,
  id,
  onChange,
  value,
  error,
}: IInput) => {
  return (
    <S.Column>
      <S.Label data-testid="label" htmlFor={id}>
        {label}
      </S.Label>
      <S.StyledInput
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <S.Error>{error}</S.Error>
    </S.Column>
  );
};
