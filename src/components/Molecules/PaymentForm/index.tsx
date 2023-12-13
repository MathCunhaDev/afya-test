import { Flex, Form } from "antd";
import * as Atoms from "~components/Atoms";
import * as S from "./styles";

export const PaymentForm = () => {
  return (
    <S.Wrapper>
      <Form>
        <Form.Item>
          <Atoms.Input
            key="cardNumber"
            label="Número do cartão"
            placeholder="0000 0000 0000 0000"
          />
        </Form.Item>
        <Flex justify="space-between">
          <Form.Item>
            <Atoms.Input
              key="cardValidity"
              label="Validade"
              placeholder="MM/AA"
            />
          </Form.Item>
          <Form.Item>
            <Atoms.Input key="securityNumber" label="CVV" placeholder="000" />
          </Form.Item>
        </Flex>
        <Form.Item>
          <Atoms.Input
            key="name"
            label="Seu nome impresso no cartao"
            placeholder="Seu nome"
          />
        </Form.Item>
        <Form.Item>
          <Atoms.Input key="cpf" label="CPF" placeholder="000.000.000-00" />
        </Form.Item>
        <Form.Item>
          <Atoms.Input key="cupon" label="Cupom" placeholder="Insira aqui" />
        </Form.Item>
        <Form.Item>
          <Atoms.Button>Finalizar pagamento</Atoms.Button>
        </Form.Item>
      </Form>
    </S.Wrapper>
  );
};
