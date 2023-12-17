import Success from "~common/assets/svgs/success.svg";
import { usePaymentConfirmationContext } from "~hooks/usePaymentConfirmationContext";
import { theme } from "~common/styles/theme";
import { Flex } from "antd";
import * as Molecules from "~components/Molecules";
import * as Atoms from "~components/Atoms";

export const Summary = () => {
  const { paymentConfirmation } = usePaymentConfirmationContext();
  console.log("aqui12", paymentConfirmation);

  return (
    <>
      <Molecules.Header />
      <Atoms.Container>
        <Flex vertical={true} gap={60}>
          <Flex align="center" vertical={true} gap={12}>
            <img src={Success} alt="Icone de sucesso" />
            <Atoms.Title size={"20px"} weight="normal">
              Parabéns
            </Atoms.Title>
            <Atoms.Text size={"16px"} color={theme.color.gray3}>
              Sua assinatura foi realizada com sucesso.
            </Atoms.Text>
          </Flex>
          <Molecules.Confirmation
            title={paymentConfirmation.title}
            cpf={paymentConfirmation.cpf}
            email={paymentConfirmation.email}
            price={paymentConfirmation.price}
          />
          <Flex align="center" vertical={true} gap={24}>
            <Atoms.Title level={4} weight="bold" size={"12px"}>
              Gerenciar assinatura
            </Atoms.Title>
            <Atoms.Button>IR PARA HOME</Atoms.Button>
          </Flex>
        </Flex>
      </Atoms.Container>
    </>
  );
};
