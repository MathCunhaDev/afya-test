import { Flex } from "antd";
import { usePayment } from "~hooks/usePayment";
import { IPaymentData } from "~models/IPayment";
import * as Molecules from "~/components/Molecules";
import * as Atoms from "~/components/Atoms";

export const Payment = () => {
  const { paymentData, paymentState, paymentDispatch, options } = usePayment();

  return (
    <>
      <Molecules.Header />
      <Atoms.Container>
        <Flex justify="space-between">
          <Molecules.PaymentForm key="paymentForm" options={options} />
          <Flex vertical={true} gap={"12px"}>
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
              />
            ))}
          </Flex>
        </Flex>
      </Atoms.Container>
    </>
  );
};
