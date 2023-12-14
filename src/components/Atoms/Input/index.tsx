import * as S from "./styles.ts";

interface IInput {
  id: string;
  label: string;
  placeholder: string;
}

export const Input = ({ label, placeholder, id }: IInput) => {
  return (
    <S.Column>
      <S.StyledInput id={id} placeholder={placeholder} />
      <S.Label data-testid="label" htmlFor={id}>
        {label}
      </S.Label>
    </S.Column>
  );
};
