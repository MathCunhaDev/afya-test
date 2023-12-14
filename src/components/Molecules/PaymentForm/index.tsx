import { Flex, Form } from "antd";
import { IOption } from "~models/IPayment";
import * as Atoms from "~components/Atoms";
import * as S from "./styles";

interface IPaymentForm {
  options: IOption[];
}

export const PaymentForm = ({ options }: IPaymentForm) => {
  return (
    <S.Wrapper>
      <Form>
        <Form.Item>
          <Atoms.Input
            id="cardNumber"
            key="cardNumber"
            label="Número do cartão"
            placeholder="0000 0000 0000 0000"
          />
        </Form.Item>
        <Flex justify="space-between">
          <Form.Item>
            <Atoms.Input
              id="cardValidity"
              key="cardValidity"
              label="Validade"
              placeholder="MM/AA"
            />
          </Form.Item>
          <Form.Item>
            <Atoms.Input
              id="securityNumber"
              key="securityNumber"
              label="CVV"
              placeholder="000"
            />
          </Form.Item>
        </Flex>
        <Form.Item>
          <Atoms.Input
            id="name"
            key="name"
            label="Seu nome impresso no cartao"
            placeholder="Seu nome"
          />
        </Form.Item>
        <Form.Item>
          <Atoms.Input
            id="cpf"
            key="cpf"
            label="CPF"
            placeholder="000.000.000-00"
          />
        </Form.Item>
        <Form.Item>
          <Atoms.Input
            id="cupon"
            key="cupon"
            label="Cupom"
            placeholder="Insira aqui"
          />
        </Form.Item>
        <Form.Item>
          <Atoms.Select
            id="installments"
            key="installments"
            label="Número de parcelas"
            placeholder="Selecionar"
            options={options}
          />
        </Form.Item>
        <Form.Item>
          <Atoms.Button>Finalizar pagamento</Atoms.Button>
        </Form.Item>
      </Form>
    </S.Wrapper>
  );
};
