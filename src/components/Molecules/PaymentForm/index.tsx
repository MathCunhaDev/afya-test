import { ChangeEvent } from "react";
import { useForm, Controller } from "react-hook-form";
import { paymentFormItems } from "~constants/paymentFormItems";
import { zodResolver } from "@hookform/resolvers/zod";
import { validations } from "./validations";
import * as Atoms from "~components/Atoms";
import * as Props from "~models/IPayment";
import * as Utils from "~common/utils/";
import * as S from "./styles";

export function PaymentForm({
  options,
  handleSubscription,
}: Props.IPaymentForm) {
  const { control, handleSubmit, setValue } = useForm({
    resolver: zodResolver(validations),
  });

  const handleChange = (value: string, name: string) => {
    switch (name) {
      case "cardNumber":
        setValue(name, Utils.formatCreditCard(value));
        break;
      case "validity":
        setValue(name, Utils.formatValidate(value));
        break;
      case "cvv":
        setValue(name, Utils.formatCreditCard(value));
        break;
      case "cpf":
        setValue(name, Utils.formatCpf(value));
        break;
      default:
        setValue(name, value);
        break;
    }
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(handleSubscription)}>
        {paymentFormItems.map((item: Props.IPaymentFormItem) => (
          <Controller
            key={item.id}
            name={item.id}
            control={control}
            render={({ field, fieldState }) => (
              <Atoms.Input
                {...field}
                label={item.label}
                id={item.id}
                placeholder={item.placeholder}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  field.onChange(event.target.value);
                  handleChange(event.target.value, item.id);
                }}
                error={fieldState.error?.message}
              />
            )}
          />
        ))}

        <Controller
          key={"installments"}
          name={"installments"}
          control={control}
          render={({ field, fieldState }) => (
            <Atoms.Select
              {...field}
              id="installments"
              label="Número de parcelas"
              placeholder="Selecionar"
              options={options}
              onChange={(value: any) => {
                field.onChange(value);
                handleChange(value, "installments");
              }}
              error={fieldState.error?.message}
            />
          )}
        />

        <Atoms.Button htmlType="submit">Finalizar pagamento</Atoms.Button>
      </S.Form>
    </S.Wrapper>
  );
}
