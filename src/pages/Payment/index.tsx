import { useRef } from "react";
import help from "~common/assets/svgs/help.svg";
import { IPaymentData } from "~models/IPayment";
import { usePayment } from "./hooks";
import { Flex } from "antd";
import * as Molecules from "~/components/Molecules";
import * as Atoms from "~/components/Atoms";

export const Payment = () => {
  const {
    paymentData,
    paymentState,
    paymentDispatch,
    options,
    handleSubscription,
  } = usePayment();

  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Molecules.Header />
      <Atoms.Container>
        <Flex
          justify={`${window.innerWidth < 768 ? "center" : "space-between"}`}
          wrap="wrap-reverse"
        >
          <Molecules.PaymentForm
            key="paymentForm"
            options={options}
            handleSubscription={handleSubscription}
          />
          <Flex vertical={true} gap={30}>
            <Flex vertical={true}>
              <Atoms.Title level={4} weight="normal" size={"20px"}>
                Confira o seu plano:
              </Atoms.Title>
              <Atoms.Pill size="12px">fulano@cicrano.com.br</Atoms.Pill>
            </Flex>
            <Flex vertical={true} gap={12} justify="center">
              {paymentData.map((payment: IPaymentData) => (
                <Molecules.Card
                  key={payment.id}
                  id={payment.id}
                  title={payment.title}
                  fullPrice={payment.fullPrice}
                  bestPrice={payment.bestPrice}
                  discount={payment.discount}
                  installments={payment.installments}
                  installmentPrice={payment.installmentPrice}
                  installmentType={payment.installmentType}
                  handleClick={paymentDispatch}
                  paymentType={paymentState.id}
                  ref={cardRef}
                />
              ))}
            </Flex>
            <Flex justify="center" gap={10}>
              <Atoms.Text size="12px">Sobre a cobrança</Atoms.Text>
              <img src={help} alt="Icone de ajuda" />
            </Flex>
          </Flex>
        </Flex>
      </Atoms.Container>
    </>
  );
};
